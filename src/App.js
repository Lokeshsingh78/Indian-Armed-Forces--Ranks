import React, { useState, useEffect, useMemo, useRef } from 'react';
import './App.css';
import { ranksData } from './data/forcesData';

// Common military, police, and paramilitary rank abbreviations
const rankAliases = {
  // Police
  "dgp": ["Director General of Police", "DGP"],
  "cp": ["Commissioner of Police", "CP"],
  "adgp": ["Additional Director General of Police", "ADGP"],
  "spl cp": ["Special Commissioner of Police"],
  "igp": ["Inspector General of Police", "IGP", "Inspector General"],
  "ig": ["Inspector General of Police", "Inspector General", "IGP"],
  "digp": ["Deputy Inspector General of Police", "DIGP", "DIG"],
  "dig": ["Deputy Inspector General of Police", "Deputy Inspector General"],
  "ssp": ["Senior Superintendent of Police", "SSP"],
  "sp": ["Superintendent of Police", "SP"],
  "addl sp": ["Additional Superintendent of Police"],
  "asp": ["Assistant Superintendent of Police", "ASP"],
  "dsp": ["Deputy Superintendent of Police", "DSP", "DySP"],
  "dysp": ["Deputy Superintendent of Police", "DySP", "DSP"],
  "pi": ["Police Inspector", "Inspector"],
  "api": ["Assistant Police Inspector"],
  "si": ["Sub-Inspector", "Police Sub-Inspector"],
  "psi": ["Police Sub-Inspector", "Sub-Inspector"],
  "asi": ["Assistant Sub-Inspector"],
  "hc": ["Head Constable"],
  "pc": ["Police Constable", "Constable"],
  "ct": ["Constable"],

  // Army
  "fm": ["Field Marshal"],
  "gen": ["General"],
  "lt gen": ["Lieutenant General"],
  "maj gen": ["Major General"],
  "brig": ["Brigadier"],
  "col": ["Colonel"],
  "lt col": ["Lieutenant Colonel"],
  "maj": ["Major"],
  "capt": ["Captain"],
  "lt": ["Lieutenant"],
  "sub maj": ["Subedar Major"],
  "sub": ["Subedar"],
  "nb sub": ["Naib Subedar"],
  "hav": ["Havildar"],
  "nk": ["Naik"],
  "l nk": ["Lance Naik"],
  "sep": ["Sepoy"],
  "jco": ["Junior Commissioned Officer", "Subedar Major", "Subedar", "Naib Subedar"],

  // Air Force
  "mshl": ["Marshal of the Air Force"],
  "acm": ["Air Chief Marshal"],
  "am": ["Air Marshal"],
  "avm": ["Air Vice Marshal"],
  "air cmde": ["Air Commodore"],
  "gp capt": ["Group Captain"],
  "wg cdr": ["Wing Commander"],
  "sqn ldr": ["Squadron Leader"],
  "flt lt": ["Flight Lieutenant"],
  "fg off": ["Flying Officer"],
  "mwo": ["Master Warrant Officer"],
  "wo": ["Warrant Officer"],
  "jwo": ["Junior Warrant Officer"],
  "sgt": ["Sergeant"],
  "cpl": ["Corporal"],
  "lac": ["Leading Aircraftman"],

  // Navy
  "adm": ["Admiral"],
  "vadm": ["Vice Admiral"],
  "radm": ["Rear Admiral"],
  "cmde": ["Commodore"],
  "cdr": ["Commander"],
  "lt cdr": ["Lieutenant Commander"],
  "sub lt": ["Sub Lieutenant"],
  "cpo": ["Chief Petty Officer"],
  "mcpo": ["Master Chief Petty Officer"],
  "mcpo i": ["Master Chief Petty Officer 1st Class"],
  "mcpo ii": ["Master Chief Petty Officer 2nd Class"],
  "po": ["Petty Officer"],
  "ls": ["Leading Seaman"],

  // Coast Guard & CAPF
  "dgcg": ["Director General Coast Guard"],
  "comdt": ["Commandant"],
  "2ic": ["Second-in-Command"],
  "dc": ["Deputy Commandant"],
  "ac": ["Assistant Commandant"],
  "dg": ["Director General"],
  "sdg": ["Special Director General"],
  "adg": ["Additional Director General"]
};

function App() {
  const [currentForce, setCurrentForce] = useState('army');
  const [currentRankIndex, setCurrentRankIndex] = useState(0);
  const [modalActive, setModalActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchFilterForce, setSearchFilterForce] = useState('all');
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const searchInputRef = useRef(null);

  const forceNames = {
    army: "Indian Army",
    airforce: "Indian Air Force",
    navy: "Indian Navy",
    police: "Indian Police",
    coastguard: "Coast Guard",
    capf: "CAPF (CRPF/BSF)"
  };

  const forceKeys = ['army', 'airforce', 'navy', 'police', 'coastguard', 'capf'];

  // Universal Search across all forces with relevance scoring
  const allSearchResults = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return [];

    const tokens = q.split(/\s+/).filter(Boolean);
    const results = [];

    forceKeys.forEach((forceKey) => {
      const list = ranksData[forceKey] || [];
      const forceName = (forceNames[forceKey] || '').toLowerCase();

      list.forEach((rank, index) => {
        let score = 0;
        const nameLower = (rank.name || '').toLowerCase();
        const equivLower = (rank.equivalents || '').toLowerCase();
        const payLower = (rank.payLevel || '').toLowerCase();
        const tierLower = (rank.tier || '').toLowerCase();
        const descLower = (rank.description || '').toLowerCase();
        const histLower = (rank.history || '').toLowerCase();
        const uniformLower = (rank.uniformDetails || '').toLowerCase();

        // 1. Direct name matches (highest priority)
        if (nameLower === q) {
          score += 1500;
        } else if (nameLower.startsWith(q + ' ') || nameLower.startsWith(q + ' (')) {
          score += 1000;
        } else if (nameLower.startsWith(q)) {
          score += 800;
        } else if (nameLower.split(/[\s(/)]+/).some(w => w === q)) {
          score += 650;
        } else if (nameLower.includes(q)) {
          score += 450;
        }

        // 2. Acronym and alias match
        if (rankAliases[q]) {
          const matches = rankAliases[q].some(alias => nameLower.includes(alias.toLowerCase()));
          if (matches) {
            score += 700;
          }
        }

        // 3. Multi-token queries (e.g. "navy captain", "police dgp", "air force commander")
        if (tokens.length > 1) {
          const allTokensMatch = tokens.every(tok => 
            nameLower.includes(tok) || 
            forceName.includes(tok) || 
            forceKey.includes(tok) || 
            equivLower.includes(tok) || 
            payLower.includes(tok) || 
            tierLower.includes(tok) || 
            descLower.includes(tok)
          );
          if (allTokensMatch) {
            score += 400;
            const branchToken = tokens.some(t => forceName.includes(t) || forceKey.includes(t));
            const nameToken = tokens.some(t => nameLower.includes(t));
            if (branchToken && nameToken) {
              score += 600;
            }
          }
        }

        // 4. Pay Level & Tier Match
        if (payLower.includes(q)) {
          score += 250;
        }
        if (tierLower.includes(q)) {
          score += 200;
        }

        // 6. Equivalent ranks match
        if (equivLower.includes(q)) {
          score += 180;
        }

        // 7. Force Name Match
        if (forceName.includes(q)) {
          score += 80;
        }

        // 8. Description, history & uniform details
        if (descLower.includes(q)) {
          score += 40;
        }
        if (uniformLower.includes(q)) {
          score += 30;
        }
        if (histLower.includes(q)) {
          score += 20;
        }

        if (score > 0) {
          results.push({
            ...rank,
            forceKey,
            originalIndex: index,
            score
          });
        }
      });
    });

    // Sort by relevance score descending, then by original hierarchical index
    return results.sort((a, b) => b.score - a.score || a.originalIndex - b.originalIndex);
  }, [searchQuery]);

  // Filtered by branch tab within search results
  const filteredSearchResults = useMemo(() => {
    if (searchFilterForce === 'all') return allSearchResults;
    return allSearchResults.filter(r => r.forceKey === searchFilterForce);
  }, [allSearchResults, searchFilterForce]);

  // Match counts per branch
  const searchCountsByForce = useMemo(() => {
    const counts = { all: allSearchResults.length };
    allSearchResults.forEach(r => {
      counts[r.forceKey] = (counts[r.forceKey] || 0) + 1;
    });
    return counts;
  }, [allSearchResults]);

  const truncateText = (text, maxLength) => {
    if (!text) return '';
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + '...';
  };

  const openRankModal = (force, index) => {
    setCurrentForce(force);
    setCurrentRankIndex(index);
    setModalActive(true);
  };

  const closeModal = () => {
    setModalActive(false);
  };

  const showPreviousRank = () => {
    if (currentRankIndex > 0) {
      setCurrentRankIndex(currentRankIndex - 1);
    }
  };

  const showNextRank = () => {
    const list = ranksData[currentForce] || [];
    if (currentRankIndex < list.length - 1) {
      setCurrentRankIndex(currentRankIndex + 1);
    }
  };

  const handleKeyDown = (e) => {
    if (modalActive) {
      if (e.key === 'Escape') {
        closeModal();
      } else if (e.key === 'ArrowLeft') {
        showPreviousRank();
      } else if (e.key === 'ArrowRight') {
        showNextRank();
      }
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [modalActive, currentRankIndex]);

  const scrollToRanks = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    const mainContent = document.querySelector(".main-content");
    const navEl = document.querySelector(".forces-nav");
    const navHeight = navEl ? navEl.offsetHeight : 80;
    
    if (mainContent) {
      const targetScroll = mainContent.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({ top: targetScroll, behavior: "smooth" });
    }
  };

  const currentList = ranksData[currentForce] || [];
  const currentRank = currentList[currentRankIndex] || currentList[0];

  const displayRanks = (force) => {
    const ranks = ranksData[force] || [];
    return ranks.map((rank, index) => (
      <div 
        key={rank.id} 
        className={`rank-card ${force}-rank`}
        onClick={() => openRankModal(force, index)}
      >
        <div className="rank-header">
          <img 
            src={rank.insigniaUrl} 
            alt={rank.name} 
            className="insignia-img" 
            onError={(e) => {
              if (rank.fallbackInsignia && e.target.src !== rank.fallbackInsignia) {
                e.target.src = rank.fallbackInsignia;
              }
            }}
          />
          <h3 className="rank-name">{rank.name}</h3>
        </div>
        <div className="rank-body">
          <p className="rank-details">{truncateText(rank.description, 100)}</p>
          <button className="view-more-btn">View Details</button>
        </div>
      </div>
    ));
  };

  return (
    <div className="page-container">
      <header className="main-header">
        <div className="header-logo">
          <img src="assets/Emblem.png" alt="Indian Emblem" id="mainLogo" />
        </div>
        <div className="header-text">
          <h1>Indian Armed Forces Ranks & Insignia</h1>
          <p>Decoding the Honor and Hierarchy of the Indian Army, Indian Air Force, Indian Navy, Police & Paramilitary Forces</p>
        </div>

        {/* Search Bar in Ekdum Top-Right of Header */}
        <div className={`header-top-search ${mobileSearchOpen ? 'mobile-search-open' : ''}`}>
          <button type="button" className="top-search-toggle" aria-label={mobileSearchOpen ? 'Close search' : 'Open search'} aria-expanded={mobileSearchOpen} onClick={() => { setMobileSearchOpen((isOpen) => !isOpen); if (!mobileSearchOpen) setTimeout(() => searchInputRef.current?.focus(), 0); }}><svg className="top-search-icon" viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.8" cy="10.8" r="6.8" /><path d="m16 16 5 5" /></svg></button>
          <input ref={searchInputRef} 
            type="text" 
            className="top-search-input" 
            placeholder="Search all ranks..." 
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setSearchFilterForce('all');
            }}
            onKeyDown={(e) => {
              if (e.key === 'Escape') {
                setSearchQuery('');
                setMobileSearchOpen(false);
              }
            }}
          />
          {searchQuery && (
            <button 
              className="clear-search-btn" 
              onClick={() => {
                setSearchQuery('');
                setSearchFilterForce('all');
              }}
              title="Clear search"
            >
              ×
            </button>
          )}
        </div>
      </header>
      
      <div className="forces-nav">
        <button 
          className={`force-btn army-btn ${currentForce === 'army' && !searchQuery.trim() ? 'active' : ''}`} 
          data-force="army"
          onClick={(e) => {
            setSearchQuery('');
            setCurrentForce('army');
            setCurrentRankIndex(0);
            scrollToRanks(e);
          }}
        >
          <div className="force-logo">
            <img src="assets/IndianArmy.png" alt="Army Logo" className="branch-logo" />
          </div>
          <span>Indian Army</span>
        </button>
        
        <button 
          className={`force-btn airforce-btn ${currentForce === 'airforce' && !searchQuery.trim() ? 'active' : ''}`} 
          data-force="airforce"
          onClick={(e) => {
            setSearchQuery('');
            setCurrentForce('airforce');
            setCurrentRankIndex(0);
            scrollToRanks(e);
          }}
        >
          <div className="force-logo">
            <img src="assets/Indian_Air_Force.png" alt="Air Force Logo" className="branch-logo" />
          </div>
          <span>Indian Air Force</span>
        </button>
        
        <button 
          className={`force-btn navy-btn ${currentForce === 'navy' && !searchQuery.trim() ? 'active' : ''}`} 
          data-force="navy"
          onClick={(e) => {
            setSearchQuery('');
            setCurrentForce('navy');
            setCurrentRankIndex(0);
            scrollToRanks(e);
          }}
        >
          <div className="force-logo">
            <img src="assets/Indian_Navy.png" alt="Navy Logo" className="branch-logo" />
          </div>
          <span>Indian Navy</span>
        </button>

        <button 
          className={`force-btn police-btn ${currentForce === 'police' && !searchQuery.trim() ? 'active' : ''}`} 
          data-force="police"
          onClick={(e) => {
            setSearchQuery('');
            setCurrentForce('police');
            setCurrentRankIndex(0);
            scrollToRanks(e);
          }}
        >
          <div className="force-logo">
            <img src="police/ips_logo.png" alt="Police Logo" className="branch-logo" />
          </div>
          <span>Indian Police</span>
        </button>

        <button 
          className={`force-btn coastguard-btn ${currentForce === 'coastguard' && !searchQuery.trim() ? 'active' : ''}`} 
          data-force="coastguard"
          onClick={(e) => {
            setSearchQuery('');
            setCurrentForce('coastguard');
            setCurrentRankIndex(0);
            scrollToRanks(e);
          }}
        >
          <div className="force-logo">
            <img src="coastguard/icg_logo.svg" alt="Coast Guard Logo" className="branch-logo" />
          </div>
          <span>Coast Guard</span>
        </button>

        <button 
          className={`force-btn capf-btn ${currentForce === 'capf' && !searchQuery.trim() ? 'active' : ''}`} 
          data-force="capf"
          onClick={(e) => {
            setSearchQuery('');
            setCurrentForce('capf');
            setCurrentRankIndex(0);
            scrollToRanks(e);
          }}
        >
          <div className="force-logo">
            <img src="capf/capf_logo.png" alt="CAPF Logo" className="branch-logo" />
          </div>
          <span>CAPF (CRPF/BSF)</span>
        </button>
      </div>
      
      <main className="main-content">
        <div className="ranks-container" id="ranksContainer">
          {searchQuery.trim() ? (
            allSearchResults.length > 0 ? (
              <>
                <div className="search-status-bar">
                  <div className="search-status-info">
                    <span>Found <strong>{allSearchResults.length}</strong> {allSearchResults.length === 1 ? 'rank' : 'ranks'} across all forces for "<em>{searchQuery}</em>":</span>
                  </div>
                  <button className="reset-search-link" onClick={() => {
                    setSearchQuery('');
                    setSearchFilterForce('all');
                  }}>
                    View by branch
                  </button>
                </div>

                {/* Filter pills to narrow search results by force */}
                <div className="search-filter-pills">
                  <button 
                    className={`search-filter-pill ${searchFilterForce === 'all' ? 'active' : ''}`}
                    onClick={() => setSearchFilterForce('all')}
                  >
                    All Forces ({searchCountsByForce.all || 0})
                  </button>
                  {forceKeys.map(fk => {
                    const count = searchCountsByForce[fk] || 0;
                    if (count === 0) return null;
                    return (
                      <button 
                        key={fk}
                        className={`search-filter-pill ${fk}-pill ${searchFilterForce === fk ? 'active' : ''}`}
                        onClick={() => setSearchFilterForce(fk)}
                      >
                        {forceNames[fk]} ({count})
                      </button>
                    );
                  })}
                </div>

                {filteredSearchResults.map((rank) => (
                  <div 
                    key={`${rank.forceKey}-${rank.id}`} 
                    className={`rank-card ${rank.forceKey}-rank`}
                    onClick={() => openRankModal(rank.forceKey, rank.originalIndex)}
                  >
                    <div className="rank-header">
                      <div className="rank-force-tag">{forceNames[rank.forceKey]}</div>
                      <img 
                        src={rank.insigniaUrl} 
                        alt={rank.name} 
                        className="insignia-img" 
                        onError={(e) => {
                          if (rank.fallbackInsignia && e.target.src !== rank.fallbackInsignia) {
                            e.target.src = rank.fallbackInsignia;
                          }
                        }}
                      />
                      <h3 className="rank-name">{rank.name}</h3>
                    </div>
                    <div className="rank-body">
                      <p className="rank-details">{truncateText(rank.description, 100)}</p>
                      <button className="view-more-btn">View Details</button>
                    </div>
                  </div>
                ))}
              </>
            ) : (
              <div className="no-results-box">
                <h3>No ranks found matching "{searchQuery}"</h3>
                <p>Try searching for a rank title (e.g. Captain, General, DGP, Subedar, Inspector) or force name.</p>
                <button className="view-more-btn" onClick={() => {
                  setSearchQuery('');
                  setSearchFilterForce('all');
                }}>
                  Clear Search
                </button>
              </div>
            )
          ) : (
            displayRanks(currentForce)
          )}
        </div>
      </main>
      
      {/* Rank Details Modal */}
      <div 
        className={`modal-overlay ${modalActive ? 'active' : ''}`} 
        onClick={(e) => {
          if (e.target.className && e.target.className.includes && e.target.className.includes('modal-overlay')) {
            closeModal();
          }
        }}
      >
        <div className={`modal ${currentForce}-modal`}>
          <div className="modal-header">
            <h2 className="modal-title">
              <img 
                src={currentRank?.insigniaUrl} 
                alt="Insignia" 
                className="modal-insignia" 
                onError={(e) => {
                  if (currentRank?.fallbackInsignia && e.target.src !== currentRank.fallbackInsignia) {
                    e.target.src = currentRank.fallbackInsignia;
                  }
                }}
              />
              <div className="modal-title-text">
                <span className="modal-force-badge">{forceNames[currentForce]}</span>
                <span className="modal-rank-name">{currentRank?.name}</span>
              </div>
            </h2>
            <button className="modal-close" onClick={closeModal}>×</button>
          </div>
          <div className="modal-body">
            <div className="modal-section">
              <h3 className="modal-section-title">Description</h3>
              <p>{currentRank?.description}</p>
            </div>
            {currentRank?.uniformDetails && (
              <div className="modal-section">
                <h3 className="modal-section-title">Uniform & Insignia Badging</h3>
                <p>{currentRank?.uniformDetails}</p>
              </div>
            )}
            <div className="modal-section">
              <h3 className="modal-section-title">Responsibilities</h3>
              <ul className="responsibilities">
                {currentRank?.responsibilities && currentRank.responsibilities.map((resp, index) => (
                  <li key={index}>{resp}</li>
                ))}
              </ul>
            </div>
            <div className="modal-section">
              <h3 className="modal-section-title">History & Evolution</h3>
              <p>{currentRank?.history}</p>
            </div>
            <div className="modal-section">
              <h3 className="modal-section-title">Eligibility & Promotion</h3>
              <p>{currentRank?.eligibility}</p>
            </div>
            <div className="modal-section">
              <h3 className="modal-section-title">Equivalent Ranks Across Services</h3>
              <p>{currentRank?.equivalents}</p>
            </div>
          </div>
          <div className="modal-footer">
            <button 
              className="rank-navigation-btn" 
              onClick={showPreviousRank}
              disabled={currentRankIndex === 0}
            >
              <span>Previous Rank</span>
            </button>
            <button 
              className="rank-navigation-btn" 
              onClick={showNextRank}
              disabled={currentRankIndex === (currentList.length - 1)}
            >
              <span>Next Rank</span>
            </button>
          </div>
        </div>
      </div>
      
      <footer className="main-footer">
        <div className="footer-container">
          <img src="assets/AllDefence.png" className="footer-logo" alt="Indian Armed Forces Logo" />
          <div className="footer-content">
            <p>Dedicated to the valor of the Indian Armed Forces & Police 🇮🇳 | Designed by <strong>Lokesh Singh Tanwar❤️</strong></p>
            <p>© 2025 Indian Armed Forces Information Portal | All Rights Reserved</p>
            <div className="official-links">
              <a href="https://indianarmy.nic.in/" target="_blank" rel="noopener noreferrer">Indian Army</a> | 
              <a href="https://indianairforce.nic.in/" target="_blank" rel="noopener noreferrer">Indian Air Force</a> | 
              <a href="https://www.joinindiannavy.gov.in/" target="_blank" rel="noopener noreferrer">Indian Navy</a> | 
              <a href="https://indiancoastguard.gov.in/" target="_blank" rel="noopener noreferrer">Indian Coast Guard</a> | 
              <a href="https://www.mha.gov.in/" target="_blank" rel="noopener noreferrer">Ministry of Home Affairs</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

