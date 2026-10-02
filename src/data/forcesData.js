// Comprehensive Database of Indian Armed Forces, Paramilitary (CAPF), Coast Guard & Police Ranks

export const forcesInfo = {
  army: {
    id: "army",
    name: "Indian Army",
    hindiName: "भारतीय थलसेना",
    motto: "सेवा परमो धर्म:",
    mottoTranslation: "Service Before Self",
    established: "15 January 1949 (Army Day)",
    headquarters: "Integrated Defence Headquarters, New Delhi",
    commanderInChief: "President of India",
    activeStrength: "Approx. 1,237,000 active troops",
    logo: "assets/IndianArmy.png",
    flag: "army_new/field_marshal.svg",
    themeColor: "#2d4a22",
    accentColor: "#d4af37",
    category: "tri-services",
    description: "The land warfare branch of the Indian Armed Forces and the world's second-largest active standing army. Dedicated to guarding national frontiers and executing counter-terrorism and humanitarian missions."
  },
  navy: {
    id: "navy",
    name: "Indian Navy",
    hindiName: "भारतीय नौसेना",
    motto: "शं नो वरुणः",
    mottoTranslation: "May the Lord of Oceans be auspicious unto us",
    established: "26 January 1950 (Navy Day: 4 December)",
    headquarters: "Integrated Defence Headquarters, New Delhi",
    commanderInChief: "President of India",
    activeStrength: "Approx. 67,000+ active personnel & 150+ warships",
    logo: "assets/Indian_Navy.png",
    flag: "navy_new/naval_ensign.svg",
    themeColor: "#0a2540",
    accentColor: "#4cc9f0",
    category: "tri-services",
    description: "The maritime branch of the Indian Armed Forces, safeguarding India's 7,516 km coastline and vital sea lanes of communication across the Indo-Pacific. Featuring the historic 2024 Shivaji Maharaj Rajmudra Octagonal rank insignia."
  },
  airforce: {
    id: "airforce",
    name: "Indian Air Force",
    hindiName: "भारतीय वायु सेना",
    motto: "नभः स्पृशं दीप्तम्",
    mottoTranslation: "Touch the Sky with Glory",
    established: "8 October 1932 (Air Force Day)",
    headquarters: "Vayu Bhawan, New Delhi",
    commanderInChief: "President of India",
    activeStrength: "Approx. 140,000+ active air warriors & 1,700+ aircraft",
    logo: "assets/Indian_Air_Force.png",
    flag: "airforce_new/iaf_ensign.svg",
    themeColor: "#174668",
    accentColor: "#80d8ff",
    category: "tri-services",
    description: "The air arm of the Indian Armed Forces, securing Indian airspace and conducting aerial warfare during armed conflicts. Displaying the 91st Anniversary IAF crest and modern precision insignia."
  },
  cds: {
    id: "cds",
    name: "Chief of Defence Staff (CDS)",
    hindiName: "चीफ ऑफ डिफेंस स्टाफ (सीडीएस)",
    motto: "संयुक्तता और एकात्मता",
    mottoTranslation: "Jointness & Integration",
    established: "24 December 2019 (Formed 1 January 2020)",
    headquarters: "South Block, Ministry of Defence, New Delhi",
    commanderInChief: "Principal Military Advisor to Raksha Mantri",
    activeStrength: "Highest Four-Star Tri-Services Command",
    logo: "assets/cds_seal.svg",
    flag: "assets/cds_seal.svg",
    themeColor: "#8b263e",
    accentColor: "#ffd700",
    category: "tri-services",
    description: "The professional head and permanent Chairman of the Chiefs of Staff Committee (COSC) of the Indian Armed Forces, heading the Department of Military Affairs (DMA) to forge integrated theatre commands."
  },
  police: {
    id: "police",
    name: "Indian Police (IPS & State)",
    hindiName: "भारतीय पुलिस सेवा एवं राज्य पुलिस",
    motto: "सत्यमेव जयते",
    mottoTranslation: "Truth Alone Triumphs",
    established: "1948 (Formed under Article 312 of Constitution)",
    headquarters: "Ministry of Home Affairs (MHA) & State Police HQs",
    commanderInChief: "Director General of Police (State Head)",
    activeStrength: "Over 2,100,000 civil police & armed constabulary personnel",
    logo: "police/ips_logo.png",
    flag: "police/delhi_police.png",
    themeColor: "#1c2b48",
    accentColor: "#e63946",
    category: "law-enforcement",
    description: "The civil and armed law enforcement apparatus of India, comprising the premier All India Service (IPS) and State Police organizations responsible for public order, crime prevention, intelligence, and internal security across all 28 states and 8 union territories."
  },
  coastguard: {
    id: "coastguard",
    name: "Indian Coast Guard (ICG)",
    hindiName: "भारतीय तटरक्षक",
    motto: "वयम् रक्षामः",
    mottoTranslation: "We Protect",
    established: "1 February 1977 (Coast Guard Act 1978)",
    headquarters: "Coast Guard Headquarters, New Delhi",
    commanderInChief: "Director General Indian Coast Guard (DGICG)",
    activeStrength: "Approx. 15,000+ personnel, 175+ vessels & 78 aircraft",
    logo: "coastguard/icg_logo.svg",
    flag: "coastguard/flag.svg",
    themeColor: "#0f3b57",
    accentColor: "#00b4d8",
    category: "maritime-security",
    description: "The principal maritime law enforcement and search-and-rescue agency operating under the Ministry of Defence. Mandated to protect territorial waters, offshore assets, exclusive economic zones (EEZ), and combat maritime smuggling."
  },
  capf: {
    id: "capf",
    name: "Central Armed Police Forces (CAPF)",
    hindiName: "केंद्रीय सशस्त्र पुलिस बल (सीएपीएफ)",
    motto: "शौर्य, दृढ़ता, कर्मनिष्ठा",
    mottoTranslation: "Valor, Determination, Devotion to Duty",
    established: "1939 onwards (CRPF, BSF, CISF, ITBP, SSB, NSG, AR)",
    headquarters: "Ministry of Home Affairs (MHA), New Delhi",
    commanderInChief: "Headed by Directors General (DGs)",
    activeStrength: "Approx. 1,000,000+ personnel across 7 forces",
    logo: "capf/capf_logo.png",
    flag: "capf/crpf_flag.png",
    themeColor: "#3d3221",
    accentColor: "#e9c46a",
    category: "paramilitary",
    description: "The specialized armed police forces under the Ministry of Home Affairs safeguarding international borders (BSF, ITBP, SSB), vital installations (CISF), internal counter-insurgency (CRPF), counter-terror hostage rescue (NSG), and the North-East frontier (Assam Rifles)."
  }
};

export const ranksData = {
  army: [
    {
      id: "army-field-marshal",
      name: "Field Marshal",
      hindiName: "फील्ड मार्शल",
      insigniaUrl: "army_new/field_marshal.svg",
      fallbackInsignia: "army/FieldMarshal.png",
      tier: "flag",
      stars: 5,
      payLevel: "Honorary 5-Star Rank (Lifetime Salary/Benefits)",
      description: "Field Marshal is a five-star ceremonial rank and the highest attainable honor in the Indian Army. Awarded only for extraordinary leadership during national wartime victories.",
      responsibilities: [
        "Permanent advisor to the Supreme Commander and the Ministry of Defence",
        "Ceremonial representation at national state occasions and international military councils",
        "Retains rank, uniform, full pay, and personal secretariat for life"
      ],
      uniformDetails: "Shoulder board displays National Emblem of India over crossed baton and scimitar in a lotus blossom wreath. Red gorget patches with five golden stars.",
      history: "Conferred only twice in Indian history: Sam Manekshaw (1973) following the 1971 Liberation of Bangladesh victory, and K. M. Cariappa (1986).",
      eligibility: "Conferred by the President of India on exceptional recommendation for wartime triumph.",
      equivalents: "Marshal of the Air Force (IAF), Admiral of the Fleet (Indian Navy)"
    },
    {
      id: "army-general",
      name: "General (Chief of Army Staff)",
      hindiName: "जनरल (थल सेनाध्यक्ष)",
      insigniaUrl: "army_new/general.svg",
      fallbackInsignia: "army/General.gif",
      tier: "flag",
      stars: 4,
      payLevel: "Level 17 (Apex Scale - ₹2,50,000 fixed)",
      description: "Four-star general officer rank and the supreme operational commander of the Indian Army holding the post of Chief of the Army Staff (COAS).",
      responsibilities: [
        "Supreme operational command, readiness, and strategic doctrine of the 1.2M+ Army",
        "Principal advisor to the Prime Minister, Raksha Mantri, and the Cabinet Committee on Security (CCS)",
        "Inter-service joint military coordination and high-altitude border posture"
      ],
      uniformDetails: "National Emblem over a crossed sword and baton, with a five-pointed star. Gorget patch with four golden stars on crimson background.",
      history: "Originally designated Commander-in-Chief until 1955, when the title was standardized to Chief of the Army Staff.",
      eligibility: "Selected from senior-most Lieutenant Generals (typically Army Commanders or Vice Chief of Army Staff).",
      equivalents: "Air Chief Marshal (IAF), Admiral (Navy), Director General Coast Guard (3-star equiv.)"
    },
    {
      id: "army-lt-general",
      name: "Lieutenant General",
      hindiName: "लेफ्टिनेंट जनरल",
      insigniaUrl: "army_new/lt_general.svg",
      fallbackInsignia: "army/Lieutenant-General.gif",
      tier: "flag",
      stars: 3,
      payLevel: "Level 16 / 17 (₹2,05,400 - ₹2,25,000 / ₹2,25,000)",
      description: "Three-star flag rank held by Vice Chief of Army Staff, Heads of Seven Army Commands (Army Commanders), and Corps Commanders.",
      responsibilities: [
        "Command of operational Army Corps (50,000 - 80,000 personnel) or Regional Commands",
        "Formulation of operational battle plans and theatre-level logistics",
        "Leading prestigious military institutions such as NDA, IMA, and Defence Services Staff College"
      ],
      uniformDetails: "National Emblem over crossed sword and baton. Crimson gorget patch with three golden stars.",
      history: "Derived from the French tradition of 'lieu-tenant' (holding the place of the General).",
      eligibility: "Promoted after successful command of a Division and approximately 35-37 years of commissioned service.",
      equivalents: "Air Marshal (IAF), Vice Admiral (Navy), Director General (DGP / CAPF DG)"
    },
    {
      id: "army-maj-general",
      name: "Major General",
      hindiName: "मेजर जनरल",
      insigniaUrl: "army_new/maj_general.svg",
      fallbackInsignia: "army/Major-General.gif",
      tier: "flag",
      stars: 2,
      payLevel: "Level 14 (₹1,44,200 - ₹2,18,200)",
      description: "Two-star flag rank commanding a Division (approximately 15,000 to 20,000 troops) or acting as Chief of Staff in a Corps Headquarters.",
      responsibilities: [
        "Tactical and operational command of Mountain, Infantry, or Armoured Divisions",
        "Coordinating multi-arm combat support including Artillery, Engineers, and Signals",
        "Heading Area Commands and military training centres"
      ],
      uniformDetails: "Golden five-pointed star over crossed sword and baton. Crimson gorget patch with two golden stars.",
      history: "Originally Sergeant-Major General in 17th century European armies, shortened to Major General.",
      eligibility: "Selection board merit promotion following successful Brigade command (30-32 years service).",
      equivalents: "Air Vice Marshal (IAF), Rear Admiral (Navy), Inspector General (IGP / CAPF IG)"
    },
    {
      id: "army-brigadier",
      name: "Brigadier",
      hindiName: "ब्रिगेडियर",
      insigniaUrl: "army_new/brigadier.svg",
      fallbackInsignia: "army/Brigadier.gif",
      tier: "flag",
      stars: 1,
      payLevel: "Level 13A (₹1,39,600 - ₹2,17,600)",
      description: "One-star commander rank in charge of an active Brigade consisting of 3 to 4 combat battalions (3,000 to 5,000 soldiers).",
      responsibilities: [
        "Execution of brigade-level combined arms tactical operations",
        "Direct supervision of front-line frontline infantry, armoured, and mechanized forces",
        "Key staff appointments at Corps and Command Headquarters"
      ],
      uniformDetails: "National Emblem over three five-pointed stars arranged in a triangular cluster. Gorget patch with one golden star.",
      history: "Formerly Brigadier General until 1947, standardized as Brigadier in Commonwealth and Indian military.",
      eligibility: "Rigorous selection board promotion after successful Battalion command (approx. 25-28 years service).",
      equivalents: "Air Commodore (IAF), Commodore (Navy), Deputy Inspector General (DIG)"
    },
    {
      id: "army-colonel",
      name: "Colonel",
      hindiName: "कर्नल",
      insigniaUrl: "army_new/colonel.svg",
      fallbackInsignia: "army/Colonel.gif",
      tier: "commissioned",
      stars: 0,
      payLevel: "Level 13 (₹1,30,600 - ₹2,15,900)",
      description: "Senior field-grade commissioned rank commanding a regiment or serving as principal staff officer (Col GS, Col Q) at Division headquarters.",
      responsibilities: [
        "Regimental command or key administrative / operational staff leadership",
        "Overseeing operational training, weapons modernization, and troop mobilization",
        "Directing military intelligence and border outpost management"
      ],
      uniformDetails: "National Emblem over two five-pointed stars. Crimson collar tabs with golden oak leaf braid.",
      history: "Ancient title derived from the Italian 'colonnello' (commander of a column of soldiers).",
      eligibility: "Selection Grade (15-20 years service) or Time Scale (26 years service).",
      equivalents: "Group Captain (IAF), Captain (Navy), Senior Superintendent of Police (SSP / Commandant)"
    },
    {
      id: "army-lt-colonel",
      name: "Lieutenant Colonel",
      hindiName: "लेफ्टिनेंट कर्नल",
      insigniaUrl: "army_new/lt_colonel.svg",
      fallbackInsignia: "army/Lieutenant-Colonel.gif",
      tier: "commissioned",
      stars: 0,
      payLevel: "Level 12A (₹1,21,200 - ₹2,12,400)",
      description: "Commissioned field officer rank commanding an infantry battalion (approx. 800-1,000 troops) or acting as second-in-command of a regiment.",
      responsibilities: [
        "Commanding Officer (CO) of an active Infantry Battalion or Armoured Regiment",
        "Planning tactical battle drills and rapid deployment readiness",
        "Welfare, discipline, and operational execution for combat troops"
      ],
      uniformDetails: "National Emblem over one five-pointed star.",
      history: "Second-in-command rank evolved to lead battalions in modern warfare.",
      eligibility: "Time-scale promotion upon completing 13 years of commissioned service.",
      equivalents: "Wing Commander (IAF), Commander (Navy), Superintendent of Police (SP / 2IC)"
    },
    {
      id: "army-major",
      name: "Major",
      hindiName: "मेजर",
      insigniaUrl: "army_new/major.svg",
      fallbackInsignia: "army/Major.gif",
      tier: "commissioned",
      stars: 0,
      payLevel: "Level 11 (₹69,400 - ₹2,07,200)",
      description: "Field grade officer serving as Company Commander (approx. 120-150 troops) or Brigade Major / staff officer.",
      responsibilities: [
        "Leading a rifle company in frontline combat and counter-insurgency ops",
        "Direct tactical fire control, reconnaissance, and offensive maneuver",
        "Managing regimental training and arms inventories"
      ],
      uniformDetails: "National Emblem (Ashoka Lion Capital).",
      history: "One of the most pivotal command ranks in military history.",
      eligibility: "Substantive time-scale promotion upon completing 6 years of commissioned service.",
      equivalents: "Squadron Leader (IAF), Lieutenant Commander (Navy), Additional SP / Deputy Commandant"
    },
    {
      id: "army-captain",
      name: "Captain",
      hindiName: "कैप्टन",
      insigniaUrl: "army_new/captain.svg",
      fallbackInsignia: "army/Captain.gif",
      tier: "commissioned",
      stars: 0,
      payLevel: "Level 10B (₹61,300 - ₹1,93,900)",
      description: "Experienced junior officer serving as Company Second-in-Command or Battalion Adjutant / Intelligence Officer.",
      responsibilities: [
        "Company 2IC, executing combat patrol orders and tactical security",
        "Battalion staff officer roles: Adjutant, Intelligence Officer, Quartermaster",
        "Mentoring young Lieutenants and leading specialized strike platoons"
      ],
      uniformDetails: "Three five-pointed stars on the shoulder strap.",
      history: "Traced to the Latin 'caput' (head), leaders of basic combat groups.",
      eligibility: "Substantive promotion upon completing 2 years of commissioned service.",
      equivalents: "Flight Lieutenant (IAF), Lieutenant (Navy), Assistant SP / Assistant Commandant"
    },
    {
      id: "army-lieutenant",
      name: "Lieutenant",
      hindiName: "लेफ्टिनेंट",
      insigniaUrl: "army_new/lieutenant.svg",
      fallbackInsignia: "army/Lieutenant.gif",
      tier: "commissioned",
      stars: 0,
      payLevel: "Level 10 (₹56,100 - ₹1,77,500)",
      description: "Commissioning rank upon graduating from IMA, OTA, or NDA, commanding a rifle platoon of 30-36 soldiers.",
      responsibilities: [
        "Platoon Commander leading patrols, ambushes, and frontline defensive posts",
        "Direct engagement with JCOs and non-commissioned personnel",
        "Field tactical decision-making and mission execution"
      ],
      uniformDetails: "Two five-pointed stars on the shoulder strap.",
      history: "Initial officer rank since the abolition of the rank of 2nd Lieutenant in the Indian Army.",
      eligibility: "Commissioned upon passing out from Indian Military Academy (IMA) or Officers Training Academy (OTA).",
      equivalents: "Flying Officer (IAF), Sub Lieutenant (Navy), Deputy SP / Assistant Commandant (Prob.)"
    },
    {
      id: "army-subedar-major",
      name: "Subedar Major / Risaldar Major",
      hindiName: "सूबेदार मेजर / रिसालदार मेजर",
      insigniaUrl: "army_new/subedar_major.svg",
      fallbackInsignia: "army/Subedar-Major.gif",
      tier: "jco",
      stars: 0,
      payLevel: "Level 9 (₹53,100 - ₹1,67,800)",
      description: "The senior-most Junior Commissioned Officer (JCO) in a battalion, acting as the vital advisor to the Commanding Officer.",
      responsibilities: [
        "Principal advisor to the CO on troop morale, welfare, and traditions",
        "Senior representative of all JCOs and other ranks in the regiment",
        "Supervising ceremonial parades and regimental durbars"
      ],
      uniformDetails: "Ashoka Lion Capital with a gold-red-gold horizontal stripe ribbon underneath.",
      history: "Instituted under the British Indian Army and elevated in independent India with gazetted warrant officer status.",
      eligibility: "Merit promotion after outstanding record as Subedar (typically 28-30 years service).",
      equivalents: "Master Warrant Officer (IAF), Master Chief Petty Officer 1st Class (Navy), Subedar Major (CAPF)"
    },
    {
      id: "army-subedar",
      name: "Subedar / Risaldar",
      hindiName: "सूबेदार / रिसालदार",
      insigniaUrl: "army_new/subedar.svg",
      fallbackInsignia: "army/Subedar.gif",
      tier: "jco",
      stars: 0,
      payLevel: "Level 8 (₹47,600 - ₹1,51,100)",
      description: "Junior Commissioned Officer acting as Platoon Commander or Company Second-in-Command (2IC).",
      responsibilities: [
        "Commanding an infantry platoon or specialized weapons detachment",
        "Maintaining high combat fitness, drill, and discipline standards",
        "Mentoring junior soldiers and Non-Commissioned Officers"
      ],
      uniformDetails: "Two five-pointed stars with a red-and-gold stripe ribbon underneath.",
      history: "Subedar historically meant 'governor of a province (Subah)', adapted as a senior native officer rank.",
      equivalents: "Warrant Officer (IAF), Master Chief Petty Officer 2nd Class (Navy), Inspector (Police/CAPF)"
    },
    {
      id: "army-naib-subedar",
      name: "Naib Subedar / Naib Risaldar",
      hindiName: "नायब सूबेदार",
      insigniaUrl: "army_new/naib_subedar.svg",
      fallbackInsignia: "army/Naib-Subedar.gif",
      tier: "jco",
      stars: 0,
      payLevel: "Level 7 (₹44,900 - ₹1,42,400)",
      description: "Entry-level Junior Commissioned Officer rank, holding a President's Commission Warrant.",
      responsibilities: [
        "Platoon second-in-command or commanding support platoons (Mortar, MMG)",
        "Administrative duties and supervising quarter guard security",
        "Connecting soldiers with commissioned officers"
      ],
      uniformDetails: "One five-pointed star with a red-and-gold stripe ribbon underneath.",
      history: "Formerly known as Jemadar until 1965.",
      equivalents: "Junior Warrant Officer (IAF), Chief Petty Officer (Navy), Sub-Inspector (Police/CAPF)"
    },
    {
      id: "army-havildar",
      name: "Havildar / Dafadar",
      hindiName: "हवलदार",
      insigniaUrl: "army_new/havildar.svg",
      fallbackInsignia: "army/Havildar.gif",
      tier: "nco",
      stars: 0,
      payLevel: "Level 5 (₹29,200 - ₹92,300)",
      description: "Senior Non-Commissioned Officer (NCO) commanding a section of 10 soldiers or managing company stores.",
      responsibilities: [
        "Section Commander leading 10 soldiers in offensive combat patrols",
        "Quartermaster Havildar or Pay Havildar responsibilities in company HQ",
        "Instructing recruits in marksmanship and field-craft"
      ],
      uniformDetails: "Three golden chevrons pointing downward on the right sleeve.",
      equivalents: "Sergeant (IAF), Petty Officer (Navy), Head Constable (Police/CAPF)"
    },
    {
      id: "army-naik",
      name: "Naik / Lance Dafadar",
      hindiName: "नायक",
      insigniaUrl: "army_new/naik.svg",
      fallbackInsignia: "army/Naik.gif",
      tier: "nco",
      stars: 0,
      payLevel: "Level 4 (₹25,500 - ₹81,100)",
      description: "Non-Commissioned Officer serving as Section Second-in-Command.",
      responsibilities: [
        "Section 2IC, directing fire support and communications",
        "Leading small combat reconnaissance patrols and guard details"
      ],
      uniformDetails: "Two golden chevrons on the right sleeve.",
      equivalents: "Corporal (IAF), Leading Seaman (Navy), Senior Police Constable"
    },
    {
      id: "army-lance-naik",
      name: "Lance Naik",
      hindiName: "लांस नायक",
      insigniaUrl: "army_new/lance_naik.svg",
      fallbackInsignia: "army/Lance-Naik.gif",
      tier: "nco",
      stars: 0,
      payLevel: "Level 3 (₹21,700 - ₹69,100)",
      description: "First promotion from Sepoy, taking on junior leadership responsibilities.",
      responsibilities: [
        "Assisting the Section Commander and leading rifle buddy pairs",
        "Guard commander duties and point scout on combat patrols"
      ],
      uniformDetails: "One golden chevron on the right sleeve.",
      equivalents: "Leading Aircraftman (IAF), Seaman 1st Class (Navy), Police Constable (2+ yrs)"
    },
    {
      id: "army-sepoy",
      name: "Sepoy / Sowar / Rifleman",
      hindiName: "सिपाही",
      insigniaUrl: "army/Sepoy.gif",
      fallbackInsignia: "army/Sepoy.gif",
      tier: "nco",
      stars: 0,
      payLevel: "Level 3 (₹21,700 - ₹69,100)",
      description: "The brave frontline soldier and backbone of the Indian Army combat arms and services.",
      responsibilities: [
        "Frontline combat soldier executing tactical orders under fire",
        "Weapon specialist (Rifleman, Gunner, Sapper, Signalman)",
        "Vigilant border guarding and security duties"
      ],
      uniformDetails: "Plain uniform shoulder strap with regimental title badge.",
      equivalents: "Aircraftman (IAF), Seaman (Navy), Police Constable (Police/CAPF)"
    }
  ],

  navy: [
    {
      id: "navy-admiral-fleet",
      name: "Admiral of the Fleet",
      hindiName: "एडमिरल ऑफ द फ्लीट",
      insigniaUrl: "navy/Admiral-of-the-Fleet.png",
      fallbackInsignia: "navy/Admiral-of-the-Fleet.png",
      tier: "flag",
      stars: 5,
      payLevel: "Honorary 5-Star Rank (Never yet conferred)",
      description: "Honorary five-star naval rank reserved for wartime leadership of historic significance. Equivalent to Field Marshal in the Army.",
      responsibilities: [
        "Supreme ceremonial naval rank and lifetime strategic advisor",
        "High-level naval international representation"
      ],
      uniformDetails: "Heavy sleeve lace cuff band with four rows of lace topped with a naval curl. Shoulder board with crossed batons in lotus wreath with Shivaji seal.",
      history: "Established in 1950 but has not yet been awarded to any Indian naval officer.",
      equivalents: "Field Marshal (Army), Marshal of the Air Force (IAF)"
    },
    {
      id: "navy-admiral",
      name: "Admiral (Chief of Naval Staff)",
      hindiName: "एडमिरल (नौसेनाध्यक्ष)",
      insigniaUrl: "navy_new/admiral.svg",
      fallbackInsignia: "navy/Admiral.gif",
      tier: "flag",
      stars: 4,
      payLevel: "Level 17 (Apex Scale - ₹2,50,000 fixed)",
      description: "Four-star flag officer serving as Chief of the Naval Staff (CNS), heading the Indian Navy. Features the new 2024 Shivaji Maharaj Rajmudra Octagon design.",
      responsibilities: [
        "Supreme operational command of the Western, Eastern, and Southern Naval Commands",
        "Naval war planning, carrier strike group deployment, and nuclear submarine deterrence",
        "Member of Chiefs of Staff Committee advising Government on maritime security"
      ],
      uniformDetails: "NEW 2024 Epaulette: Ashoka Lion Capital, crossed sword and telescope over Chhatrapati Shivaji Maharaj's Rajmudra golden octagon seal with four stars.",
      history: "In December 2023 / 2024, Prime Minister Narendra Modi unveiled new Indian Navy epaulettes shedding colonial ropes for the Maratha naval heritage of Shivaji Maharaj.",
      equivalents: "General (Army), Air Chief Marshal (IAF), Director General Coast Guard"
    },
    {
      id: "navy-vice-admiral",
      name: "Vice Admiral",
      hindiName: "वाइस एडमिरल",
      insigniaUrl: "navy_new/vice_admiral.svg",
      fallbackInsignia: "navy/Vice-Admiral.gif",
      tier: "flag",
      stars: 3,
      payLevel: "Level 16 / 17 (₹2,05,400 - ₹2,25,000 / ₹2,25,000)",
      description: "Three-star flag rank held by Vice Chief of Naval Staff (VCNS), Flag Officers Commanding-in-Chief (FOC-in-C) of Naval Commands, and Chief of Personnel/Materiel.",
      responsibilities: [
        "Commanding Western (Mumbai), Eastern (Visakhapatnam), or Southern (Kochi) Naval Commands",
        "Directing strategic submarine operations and fleet modernisation",
        "Coordinating joint maritime defence with Coast Guard and allied navies"
      ],
      uniformDetails: "NEW 2024 Epaulette: Ashoka Lion over crossed sword and telescope, Shivaji Rajmudra octagon with three stars. Navy-blue gorget patches with three stars.",
      equivalents: "Lieutenant General (Army), Air Marshal (IAF), Director General of Police (DGP)"
    },
    {
      id: "navy-rear-admiral",
      name: "Rear Admiral",
      hindiName: "रियर एडमिरल",
      insigniaUrl: "navy_new/rear_admiral.svg",
      fallbackInsignia: "navy/Rear-Admiral.gif",
      tier: "flag",
      stars: 2,
      payLevel: "Level 14 (₹1,44,200 - ₹2,18,200)",
      description: "Two-star flag officer serving as Flag Officer Commanding Western Fleet (FOCWF), Flag Officer Commanding Eastern Fleet (FOCEF), or Naval Area Commanders.",
      responsibilities: [
        "Operational command of combat aircraft carrier strike groups and surface flotillas",
        "Commanding naval dockyards, naval air bases, and naval training establishments",
        "Directing anti-submarine warfare and blue-water naval exercises (Malabar, Milan)"
      ],
      uniformDetails: "NEW 2024 Epaulette: Ashoka Lion over crossed sword and telescope with Shivaji Rajmudra octagon and two stars.",
      equivalents: "Major General (Army), Air Vice Marshal (IAF), Inspector General of Police (IGP)"
    },
    {
      id: "navy-commodore",
      name: "Commodore",
      hindiName: "कमोडोर",
      insigniaUrl: "navy_new/commodore.svg",
      fallbackInsignia: "navy/Commodore.gif",
      tier: "flag",
      stars: 1,
      payLevel: "Level 13A (₹1,39,600 - ₹2,17,600)",
      description: "One-star flag rank commanding naval stations, squadrons, or acting as Principal Director at Naval Headquarters.",
      responsibilities: [
        "Command of vital Naval Air Stations (INS Hansa, INS Rajali), Naval Forward Operating Bases",
        "Directing submarine squadrons or naval missile boat flotillas",
        "Heading naval weapons procurement and design directorates"
      ],
      uniformDetails: "NEW 2024 Epaulette: Ashoka Lion Capital over crossed sword and telescope with Shivaji Rajmudra octagon and one star.",
      equivalents: "Brigadier (Army), Air Commodore (IAF), Deputy Inspector General (DIG)"
    },
    {
      id: "navy-captain",
      name: "Captain",
      hindiName: "कैप्टन",
      insigniaUrl: "navy_new/captain.svg",
      fallbackInsignia: "navy/Captain.gif",
      tier: "commissioned",
      stars: 0,
      payLevel: "Level 13 (₹1,30,600 - ₹2,15,900)",
      description: "Senior naval officer commanding capital warships including aircraft carriers (INS Vikramaditya, INS Vikrant), guided-missile destroyers, or naval air stations.",
      responsibilities: [
        "Commanding Officer (CO) of capital warships (Destroyers, Frigates, Aircraft Carriers)",
        "Overall accountability for naval combat readiness, crew safety, and maritime navigation",
        "Staff appointments at Fleet Headquarters"
      ],
      uniformDetails: "Shoulder boards and sleeve cuffs featuring four rows of golden naval lace with executive curl. Shivaji Rajmudra gold buttons.",
      equivalents: "Colonel (Army), Group Captain (IAF), Senior SP / Commandant"
    },
    {
      id: "navy-commander",
      name: "Commander",
      hindiName: "कमांडर",
      insigniaUrl: "navy_new/commander.svg",
      fallbackInsignia: "navy/Commander.gif",
      tier: "commissioned",
      stars: 0,
      payLevel: "Level 12A (₹1,21,200 - ₹2,12,400)",
      description: "Field-grade naval officer commanding corvettes, submarines, or naval aviation squadrons.",
      responsibilities: [
        "Commanding Officer of Corvettes, Attack Submarines (Scorpene / Kalvari class), or Patrol Vessels",
        "Executive Officer (Second-in-Command) of major destroyers and frigates",
        "Chief Engineer or Weapons Officer on capital combatants"
      ],
      uniformDetails: "Three rows of golden naval lace with the royal executive curl on sleeve cuffs/epaulettes.",
      equivalents: "Lieutenant Colonel (Army), Wing Commander (IAF), SP / 2IC"
    },
    {
      id: "navy-lt-commander",
      name: "Lieutenant Commander",
      hindiName: "लेफ्टिनेंट कमांडर",
      insigniaUrl: "navy_new/lt_commander.svg",
      fallbackInsignia: "navy/Lieutenant-Commander.gif",
      tier: "commissioned",
      stars: 0,
      payLevel: "Level 11 (₹69,400 - ₹2,07,200)",
      description: "Senior lieutenant commanding fast attack craft, offshore patrol vessels, or department heads on major warships.",
      responsibilities: [
        "Departmental head: Gunnery Officer, Navigation Officer, Anti-Submarine Warfare Officer",
        "Command of Fast Interceptor Craft, Mine Countermeasure Vessels, or Missile Boats",
        "Flight Commander in naval helicopter squadrons (Seaking, MH-60R, Chetak)"
      ],
      uniformDetails: "Two rows of golden lace with a thin half-row in between, topped by executive curl.",
      equivalents: "Major (Army), Squadron Leader (IAF), Additional SP / Deputy Commandant"
    },
    {
      id: "navy-lieutenant",
      name: "Lieutenant",
      hindiName: "लेफ्टिनेंट",
      insigniaUrl: "navy_new/lieutenant.svg",
      fallbackInsignia: "navy/Lieutenant.gif",
      tier: "commissioned",
      stars: 0,
      payLevel: "Level 10B (₹61,300 - ₹1,93,900)",
      description: "Fully qualified sea-going commissioned officer serving as Officer of the Watch (OOW) on warships.",
      responsibilities: [
        "Officer of the Watch navigating warships at sea by day and night",
        "Divisional Officer supervising technical sailors and maintenance crews",
        "Combat Information Centre (CIC) watch-keeper managing sensor grids"
      ],
      uniformDetails: "Two full rows of golden lace with executive curl on epaulette/cuff.",
      equivalents: "Captain (Army), Flight Lieutenant (IAF), Assistant SP / Assistant Commandant"
    },
    {
      id: "navy-sub-lieutenant",
      name: "Sub Lieutenant",
      hindiName: "सब लेफ्टिनेंट",
      insigniaUrl: "navy_new/sub_lieutenant.svg",
      fallbackInsignia: "navy/Sub-Lieutenant.gif",
      tier: "commissioned",
      stars: 0,
      payLevel: "Level 10 (₹56,100 - ₹1,77,500)",
      description: "First commissioned rank upon graduating from the Indian Naval Academy (INA) Ezhimala.",
      responsibilities: [
        "Under-training watch-keeping officer qualifying for sea bridge watchkeeping certificate",
        "Assisting senior officers in ship navigation, gunnery, and damage control exercises",
        "Divisional officer for sailor divisions"
      ],
      uniformDetails: "One single row of golden lace with executive curl.",
      equivalents: "Lieutenant (Army), Flying Officer (IAF), Deputy SP / Assistant Commandant (Prob.)"
    },
    {
      id: "navy-mcpo1",
      name: "Master Chief Petty Officer 1st Class (MCPO I)",
      hindiName: "मास्टर चीफ पेटी ऑफिसर प्रथम श्रेणी",
      insigniaUrl: "navy_new/mcpo1.svg",
      fallbackInsignia: "navy/MCPO-I.gif",
      tier: "jco",
      stars: 0,
      payLevel: "Level 9 (₹53,100 - ₹1,67,800)",
      description: "Senior-most Junior Commissioned Officer in the Indian Navy, acting as the vital link between ship command and the ship's company.",
      responsibilities: [
        "Chief of the Boat or Coxswain of major warships and submarines",
        "Direct supervision of overall shipboard living conditions, discipline, and sailor training",
        "Principal advisor to the Executive Officer on lower-deck matters"
      ],
      uniformDetails: "Ashoka Lion Capital enclosed in golden oak leaves above a golden bar on shoulder boards.",
      equivalents: "Subedar Major (Army), Master Warrant Officer (IAF), Subedar Major (CAPF)"
    },
    {
      id: "navy-mcpo2",
      name: "Master Chief Petty Officer 2nd Class (MCPO II)",
      hindiName: "मास्टर चीफ पेटी ऑफिसर द्वितीय श्रेणी",
      insigniaUrl: "navy_new/mcpo2.svg",
      fallbackInsignia: "navy/MCPO-II.gif",
      tier: "jco",
      stars: 0,
      payLevel: "Level 8 (₹47,600 - ₹1,51,100)",
      description: "Junior Commissioned Officer supervising technical branches (Engineering, Electrical, Aviation, Weapons).",
      responsibilities: [
        "Head of technical and engineering maintenance sections on naval vessels",
        "Supervising propulsion turbines, radar suites, and missile launch systems",
        "Mentoring senior sailors and Chief Petty Officers"
      ],
      uniformDetails: "Ashoka Lion Capital on shoulder straps with red-and-gold stripe backing.",
      equivalents: "Subedar (Army), Warrant Officer (IAF), Inspector (Police/CAPF)"
    },
    {
      id: "navy-cpo",
      name: "Chief Petty Officer (CPO)",
      hindiName: "चीफ पेटी ऑफिसर",
      insigniaUrl: "navy_new/cpo.svg",
      fallbackInsignia: "navy/CPO.gif",
      tier: "jco",
      stars: 0,
      payLevel: "Level 7 (₹44,900 - ₹1,42,400)",
      description: "Entry-level Junior Commissioned Officer in the Indian Navy, commanding critical sailor work stations.",
      responsibilities: [
        "Supervising watch stations: Sonar rooms, Engine control rooms, Galley and medical bays",
        "Conducting damage-control drills and firefighting emergency teams",
        "Directing flight deck operations on aircraft carriers and destroyers"
      ],
      uniformDetails: "National Emblem on shoulder straps with blue and gold lace.",
      equivalents: "Naib Subedar (Army), Junior Warrant Officer (IAF), Sub-Inspector (Police/CAPF)"
    },
    {
      id: "navy-po",
      name: "Petty Officer (PO)",
      hindiName: "पेटी ऑफिसर",
      insigniaUrl: "navy_new/po.svg",
      fallbackInsignia: "navy/Petty-Officer.gif",
      tier: "nco",
      stars: 0,
      payLevel: "Level 5 (₹29,200 - ₹92,300)",
      description: "Senior non-commissioned sailor leading specialized technical and operational sub-teams.",
      responsibilities: [
        "Heading small technician sections: Sonar, Radar, Electronic Warfare, Marine Engineering",
        "Supervising Quarterdeck sentries and vessel boarding teams (VBSS)",
        "Assisting Chief Petty Officers in daily ship routines"
      ],
      uniformDetails: "Foul anchor crossed with red chevrons on upper arm badge.",
      equivalents: "Havildar (Army), Sergeant (IAF), Head Constable (Police/CAPF)"
    },
    {
      id: "navy-leading-seaman",
      name: "Leading Seaman",
      hindiName: "लीडिंग सीमैन",
      insigniaUrl: "navy_new/leading_seaman.svg",
      fallbackInsignia: "navy/Leading-Seaman.gif",
      tier: "nco",
      stars: 0,
      payLevel: "Level 4 (₹25,500 - ₹81,100)",
      description: "Junior non-commissioned sailor responsible for hands-on operation of naval equipment.",
      responsibilities: [
        "Leading mooring operations, anchoring parties, and sea boat crews",
        "Operating anti-aircraft guns, torpedo tubes, and deck machinery"
      ],
      uniformDetails: "Foul anchor insignia on sleeve.",
      equivalents: "Naik (Army), Corporal (IAF), Senior Police Constable"
    },
    {
      id: "navy-seaman",
      name: "Seaman 1st / 2nd Class",
      hindiName: "सीमैन",
      insigniaUrl: "navy/No-insignia.png",
      fallbackInsignia: "navy/No-insignia.png",
      tier: "nco",
      stars: 0,
      payLevel: "Level 3 (₹21,700 - ₹69,100)",
      description: "Initial rating upon completing basic naval training at INS Chilka.",
      responsibilities: [
        "Lookout watch duties on bridge and deck wings",
        "Hull maintenance, line handling, and damage control station duties"
      ],
      uniformDetails: "Traditional white or navy sailor rig with bell-bottoms and naval cap.",
      equivalents: "Sepoy (Army), Aircraftman (IAF), Police Constable"
    }
  ],

  airforce: [
    {
      id: "iaf-marshal",
      name: "Marshal of the Air Force",
      hindiName: "मार्शल ऑफ द एयर फोर्स",
      insigniaUrl: "airforce_new/marshal.svg",
      fallbackInsignia: "airforce/Rank-Marshal-Air-Force.gif",
      tier: "flag",
      stars: 5,
      payLevel: "Honorary 5-Star Rank (Lifetime Salary/Benefits)",
      description: "The highest attainable five-star rank in the Indian Air Force, conferred for extraordinary wartime leadership.",
      responsibilities: [
        "Supreme ceremonial air advisor to the President and Prime Minister",
        "Lifetime rank holding office, full pay, and ceremonial precedence"
      ],
      uniformDetails: "National Emblem over crossed eagle and sword in lotus wreath. Sky-blue gorget patches with five golden stars.",
      history: "Awarded only once to Arjan Singh DFC in January 2002 for his visionary leadership during the 1965 Indo-Pakistani War.",
      equivalents: "Field Marshal (Army), Admiral of the Fleet (Navy)"
    },
    {
      id: "iaf-air-chief-marshal",
      name: "Air Chief Marshal (Chief of Air Staff)",
      hindiName: "एयर चीफ मार्शल (वायु सेनाध्यक्ष)",
      insigniaUrl: "airforce_new/air_chief_marshal.svg",
      fallbackInsignia: "airforce/Rank-Air-Chief-Marshal.gif",
      tier: "flag",
      stars: 4,
      payLevel: "Level 17 (Apex Scale - ₹2,50,000 fixed)",
      description: "Four-star flag officer serving as Chief of the Air Staff (CAS), commanding the Indian Air Force.",
      responsibilities: [
        "Supreme operational leadership of all five IAF Operational Commands, Maintenance Command, and Training Command",
        "Aerial defense of Indian air space, strategic deterrence, and procurement of advanced 4.5/5th gen fighters",
        "Member of Chiefs of Staff Committee advising Government on aerial warfare strategy"
      ],
      uniformDetails: "One broad sky-blue/black band with three standard bands on sleeve cuff. Shoulder boards with National Emblem over crossed eagle and sword with four stars.",
      equivalents: "General (Army), Admiral (Navy), Director General Coast Guard"
    },
    {
      id: "iaf-air-marshal",
      name: "Air Marshal",
      hindiName: "एयर मार्शल",
      insigniaUrl: "airforce_new/air_marshal.svg",
      fallbackInsignia: "airforce/Rank-Air-Marshal.gif",
      tier: "flag",
      stars: 3,
      payLevel: "Level 16 / 17 (₹2,05,400 - ₹2,25,000 / ₹2,25,000)",
      description: "Three-star flag officer serving as Vice Chief of Air Staff (VCAS), Air Officers Commanding-in-Chief (AOC-in-C) of Regional Air Commands.",
      responsibilities: [
        "Command of Western, Eastern, Central, South-Western, or Southern Air Commands",
        "Directing integrated air defence networks, radar grids, and missile interceptor batteries",
        "Overseeing air warrior training, flight safety, and aircraft overhaul"
      ],
      uniformDetails: "One broad band and two standard bands on sleeve cuff. Shoulder board with Emblem over crossed sword/eagle and three stars.",
      equivalents: "Lieutenant General (Army), Vice Admiral (Navy), Director General of Police (DGP)"
    },
    {
      id: "iaf-air-vice-marshal",
      name: "Air Vice Marshal",
      hindiName: "एयर वाइस मार्शल",
      insigniaUrl: "airforce_new/air_vice_marshal.svg",
      fallbackInsignia: "airforce/Rank-Air-Vice-Marshal.gif",
      tier: "flag",
      stars: 2,
      payLevel: "Level 14 (₹1,44,200 - ₹2,18,200)",
      description: "Two-star flag officer serving as Senior Air Staff Officer (SASO) in Air Commands or heading specialized directorates at Air Headquarters.",
      responsibilities: [
        "Directing operational strike squadrons (Rafale, Su-30MKI, Tejas, Mirage 2000)",
        "Air Defence Command sector leadership and AWACS/AEW&C surveillance coordination",
        "Leading Air Force Academy (AFA) and technical training colleges"
      ],
      uniformDetails: "One broad band and one standard band. Shoulder board with Emblem over crossed sword/eagle and two stars.",
      equivalents: "Major General (Army), Rear Admiral (Navy), Inspector General of Police (IGP)"
    },
    {
      id: "iaf-air-commodore",
      name: "Air Commodore",
      hindiName: "एयर कमोडोर",
      insigniaUrl: "airforce_new/air_commodore.svg",
      fallbackInsignia: "airforce/Rank-Air-Commodore.gif",
      tier: "flag",
      stars: 1,
      payLevel: "Level 13A (₹1,39,600 - ₹2,17,600)",
      description: "One-star flag officer commanding major forward fighter bases (Air Force Stations).",
      responsibilities: [
        "Air Officer Commanding (AOC) of frontline Air Force Stations (e.g. Ambala, Bareilly, Hasimara)",
        "Scramble readiness of quick-reaction alert (QRA) interceptor fighters",
        "Base perimeter defense and Garud Commando deployment"
      ],
      uniformDetails: "One broad band on sleeve cuff. Shoulder board with Emblem over three stars in triangle with crossed eagle.",
      equivalents: "Brigadier (Army), Commodore (Navy), Deputy Inspector General (DIG)"
    },
    {
      id: "iaf-group-captain",
      name: "Group Captain",
      hindiName: "ग्रुप कैप्टन",
      insigniaUrl: "airforce_new/group_captain.svg",
      fallbackInsignia: "airforce/Rank-Group-Captain.gif",
      tier: "commissioned",
      stars: 0,
      payLevel: "Level 13 (₹1,30,600 - ₹2,15,900)",
      description: "Senior commissioned officer commanding air force wings, heavy transport stations, or radar formations.",
      responsibilities: [
        "Station Commander or Chief Operations Officer (COO) of air wings",
        "Commanding strategic transport (C-17, IL-76) and refueler squadrons (IL-78)",
        "Heading flight testing and aerospace engineering divisions"
      ],
      uniformDetails: "Four standard sky-blue stripes with black edges on sleeve cuffs/epaulettes.",
      equivalents: "Colonel (Army), Captain (Navy), Senior SP / Commandant"
    },
    {
      id: "iaf-wing-commander",
      name: "Wing Commander",
      hindiName: "विंग कमांडर",
      insigniaUrl: "airforce_new/wing_commander.svg",
      fallbackInsignia: "airforce/Rank-Wing-Commander.gif",
      tier: "commissioned",
      stars: 0,
      payLevel: "Level 12A (₹1,21,200 - ₹2,12,400)",
      description: "Commanding officer of operational fighter, helicopter, or missile squadrons.",
      responsibilities: [
        "Commanding Officer (CO) of active frontline fighter squadrons (16-18 aircraft)",
        "Leading tactical strike missions, combat air patrols, and dogfights",
        "Supervising squadron pilots, flight navigators, and ground crew technicians"
      ],
      uniformDetails: "Three standard stripes on sleeve cuffs and shoulder boards.",
      equivalents: "Lieutenant Colonel (Army), Commander (Navy), SP / 2IC"
    },
    {
      id: "iaf-squadron-leader",
      name: "Squadron Leader",
      hindiName: "स्क्वाड्रन लीडर",
      insigniaUrl: "airforce_new/squadron_leader.svg",
      fallbackInsignia: "airforce/Rank-Squadron-Leader.gif",
      tier: "commissioned",
      stars: 0,
      payLevel: "Level 11 (₹69,400 - ₹2,07,200)",
      description: "Field officer serving as Flight Commander (Senior Pilot) or Chief Engineering Officer.",
      responsibilities: [
        "Flight Commander leading a combat flight of 4-6 aircraft in aerial missions",
        "Senior Air Traffic Control (ATC) officer or Surface-to-Air Missile (SAM) commander",
        "Tactical instruction and weapons delivery evaluations"
      ],
      uniformDetails: "Two standard stripes with one thin stripe in between.",
      equivalents: "Major (Army), Lieutenant Commander (Navy), Additional SP / Deputy Commandant"
    },
    {
      id: "iaf-flight-lieutenant",
      name: "Flight Lieutenant",
      hindiName: "फ्लाइट लेफ्टिनेंट",
      insigniaUrl: "airforce_new/flight_lieutenant.svg",
      fallbackInsignia: "airforce/Rank-Flight-Lieutenant.gif",
      tier: "commissioned",
      stars: 0,
      payLevel: "Level 10B (₹61,300 - ₹1,93,900)",
      description: "Fully operational combat pilot, navigator, or technical flight engineer.",
      responsibilities: [
        "Fully mission-capable combat pilot flying night strikes, escort, and air defense",
        "Helicopter pilot executing high-altitude rescue in Siachen and disaster relief",
        "Maintenance flight commander for aircraft servicing"
      ],
      uniformDetails: "Two standard sky-blue stripes with black borders.",
      equivalents: "Captain (Army), Lieutenant (Navy), Assistant SP / Assistant Commandant"
    },
    {
      id: "iaf-flying-officer",
      name: "Flying Officer",
      hindiName: "फ्लाइंग ऑफिसर",
      insigniaUrl: "airforce_new/flying_officer.svg",
      fallbackInsignia: "airforce/Rank-Flying-Officer.gif",
      tier: "commissioned",
      stars: 0,
      payLevel: "Level 10 (₹56,100 - ₹1,77,500)",
      description: "Commissioning rank upon graduating from the Air Force Academy (AFA) Dundigal.",
      responsibilities: [
        "Under-training fighter pilot flying advanced jet trainers (BAE Hawk / Pilatus PC-7)",
        "Junior engineering, logistics, administration, or air traffic control officer",
        "Assisting squadron leadership and taking on guard commander duties"
      ],
      uniformDetails: "One standard sky-blue stripe with black borders.",
      equivalents: "Lieutenant (Army), Sub Lieutenant (Navy), Deputy SP / Assistant Commandant (Prob.)"
    },
    {
      id: "iaf-mwo",
      name: "Master Warrant Officer (MWO)",
      hindiName: "मास्टर वारंट ऑफिसर",
      insigniaUrl: "airforce_new/mwo.svg",
      fallbackInsignia: "airforce/Rank-MWO.jpg",
      tier: "jco",
      stars: 0,
      payLevel: "Level 9 (₹53,100 - ₹1,67,800)",
      description: "Senior-most Junior Commissioned Officer in the IAF, serving as Station Warrant Officer (SWO).",
      responsibilities: [
        "Station Warrant Officer maintaining ceremonial discipline across entire Air Force base",
        "Senior technical advisor for complex avionics and airframe maintenance overhauls",
        "Advisor to Air Commodore / Group Captain on airmen morale and living conditions"
      ],
      uniformDetails: "National Emblem in golden embroidery on a blue-grey woven band with red-and-gold rank braid.",
      equivalents: "Subedar Major (Army), MCPO I (Navy), Subedar Major (CAPF)"
    },
    {
      id: "iaf-wo",
      name: "Warrant Officer (WO)",
      hindiName: "वारंट ऑफिसर",
      insigniaUrl: "airforce_new/wo.svg",
      fallbackInsignia: "airforce/Rank-WO.jpg",
      tier: "jco",
      stars: 0,
      payLevel: "Level 8 (₹47,600 - ₹1,51,100)",
      description: "Junior Commissioned Officer supervising major aircraft servicing bays and technical trades.",
      responsibilities: [
        "Section in-charge for radar, communications, aero-engines, or weapon loading",
        "Flight line supervisor ensuring aircraft are armed and fueled for sortie launches",
        "Mentoring Sergeants and junior ground technicians"
      ],
      uniformDetails: "Ashoka Lion Capital with gold-red horizontal braid.",
      equivalents: "Subedar (Army), MCPO II (Navy), Inspector (Police/CAPF)"
    },
    {
      id: "iaf-jwo",
      name: "Junior Warrant Officer (JWO)",
      hindiName: "जूनियर वारंट ऑफिसर",
      insigniaUrl: "airforce_new/jwo.svg",
      fallbackInsignia: "airforce/Rank-JWO.jpg",
      tier: "jco",
      stars: 0,
      payLevel: "Level 7 (₹44,900 - ₹1,42,400)",
      description: "Entry-level Junior Commissioned Officer holding President's Warrant.",
      responsibilities: [
        "Directing specialist aircraft systems testing and avionics diagnostics",
        "Leading air base airfield safety, firefighting, and recovery squads",
        "Garud Commando troop supervisor"
      ],
      uniformDetails: "One golden eagle over a horizontal braid band.",
      equivalents: "Naib Subedar (Army), Chief Petty Officer (Navy), Sub-Inspector (Police/CAPF)"
    },
    {
      id: "iaf-sergeant",
      name: "Sergeant",
      hindiName: "सार्जेंट",
      insigniaUrl: "airforce_new/sergeant.svg",
      fallbackInsignia: "airforce/Rank-Sergeant.gif",
      tier: "nco",
      stars: 0,
      payLevel: "Level 5 (₹29,200 - ₹92,300)",
      description: "Senior non-commissioned air warrior supervising ground crews and airbase defense sections.",
      responsibilities: [
        "Supervising aircraft maintenance ground teams and weapons technicians",
        "Leading armed airfield perimeter patrols and security posts",
        "Instructing junior airmen in tradecraft and drill"
      ],
      uniformDetails: "Three light-blue chevrons on dark background with an embroidered eagle above.",
      equivalents: "Havildar (Army), Petty Officer (Navy), Head Constable (Police/CAPF)"
    },
    {
      id: "iaf-corporal",
      name: "Corporal",
      hindiName: "कॉर्पोरल",
      insigniaUrl: "airforce_new/corporal.svg",
      fallbackInsignia: "airforce/Rank-Corporal.gif",
      tier: "nco",
      stars: 0,
      payLevel: "Level 4 (₹25,500 - ₹81,100)",
      description: "Non-commissioned air warrior operating specialized aeronautical systems.",
      responsibilities: [
        "Hands-on avionics, hydraulics, and weapons handling on fighter aircraft",
        "Assisting Sergeant in hangar operations and aircraft turnaround"
      ],
      uniformDetails: "Two light-blue chevrons with eagle emblem above.",
      equivalents: "Naik (Army), Leading Seaman (Navy), Senior Police Constable"
    },
    {
      id: "iaf-lac",
      name: "Leading Aircraftman (LAC)",
      hindiName: "लीडिंग एयरक्राफ्टमैन",
      insigniaUrl: "airforce_new/leading_aircraftman.svg",
      fallbackInsignia: "airforce/Rank-Leading-Aircraftsman.gif",
      tier: "nco",
      stars: 0,
      payLevel: "Level 3 (₹21,700 - ₹69,100)",
      description: "First promotion after completing trade training at Air Force Technical Training Institutes.",
      responsibilities: [
        "Aircraft turnaround servicing, refueling, and pre-flight inspections",
        "Airbase security watch and airfield maintenance"
      ],
      uniformDetails: "A two-bladed propeller badge on the upper arm sleeve.",
      equivalents: "Lance Naik (Army), Seaman 1st Class (Navy), Police Constable (2+ yrs)"
    },
    {
      id: "iaf-ac",
      name: "Aircraftman (AC)",
      hindiName: "एयरक्राफ्टमैन",
      insigniaUrl: "airforce/Aircraftman.png",
      fallbackInsignia: "airforce/Aircraftman.png",
      tier: "nco",
      stars: 0,
      payLevel: "Level 3 (₹21,700 - ₹69,100)",
      description: "Entry rating undergoing technical trade training at Airmen Training Institutes (Belagavi / Jalahalli).",
      responsibilities: [
        "Technical and non-technical trade training in radar, avionics, weapons, or logistics",
        "Base routine and physical fitness training"
      ],
      uniformDetails: "Plain air force blue uniform without rank insignia.",
      equivalents: "Sepoy (Army), Seaman (Navy), Police Constable"
    }
  ],

  police: [
    {
      id: "police-dgp",
      name: "Director General of Police (DGP) / CP",
      hindiName: "पुलिस महानिदेशक (डीजीपी) / पुलिस आयुक्त",
      insigniaUrl: "police/dgp.svg",
      fallbackInsignia: "police/dgp.svg",
      tier: "flag",
      stars: 3,
      payLevel: "Level 17 (Apex Scale - ₹2,25,000 fixed) / Level 16",
      description: "The highest operational rank in the Indian Police Service (IPS), serving as the Head of Police Force (HoPF) of a State or Commissioner of Police in major metropolises (Delhi, Mumbai).",
      responsibilities: [
        "Supreme administrative and operational command of the entire state police force (up to 250,000 personnel)",
        "Principal law and order advisor to the Chief Minister, Home Minister, and Chief Secretary",
        "Formulating state-wide counter-terrorism, crime control, and intelligence strategies",
        "Overseeing state police cadre promotions, transfers, and modernization"
      ],
      uniformDetails: "National Emblem (Ashoka Lion) over crossed sword and baton with 'IPS' badge at epaulette base. Dark-blue gorget patches with three golden oak-leaf stars. Triangular car flag with three stars.",
      history: "Apex rank created to head state police departments under the Indian Police Act, representing the zenith of an IPS officer's career.",
      eligibility: "Selection from senior-most Additional DGPs with minimum 30-33 years of distinguished IPS service, empanelled by UPSC / State Govt.",
      equivalents: "Lt. General (Army), Vice Admiral (Navy), Air Marshal (IAF), DG (CAPF)"
    },
    {
      id: "police-adgp",
      name: "Additional Director General of Police (ADGP)",
      hindiName: "अतिरिक्त पुलिस महानिदेशक (एडीजीपी)",
      insigniaUrl: "police/dgp.svg",
      fallbackInsignia: "police/dgp.svg",
      tier: "flag",
      stars: 3,
      payLevel: "Level 15 (HAG Scale - ₹1,82,200 - ₹2,24,100)",
      description: "Senior IPS flag officer heading major wings of the police organization such as CID, Law & Order, Intelligence, Traffic, or Police Zones.",
      responsibilities: [
        "Head of State Criminal Investigation Department (CID), Intelligence Bureau, or Special Task Force (STF)",
        "Commanding large multi-district Police Zones comprising several ranges",
        "Supervising statewide cyber-crime operations and anti-narcotics task forces"
      ],
      uniformDetails: "Identical shoulder insignia to DGP: National Emblem over crossed sword and baton with 'IPS' title. Car star plate with three stars.",
      history: "Instituted to relieve the DGP of heavy administrative and operational workloads in populous states.",
      eligibility: "Promoted after successful tenure as Inspector General with 25-28 years of IPS service.",
      equivalents: "Lt. General (Army), Vice Admiral (Navy), Air Marshal (IAF), ADG (CAPF)"
    },
    {
      id: "police-igp",
      name: "Inspector General of Police (IGP) / Joint CP",
      hindiName: "पुलिस महानिरीक्षक (आईजीपी) / संयुक्त पुलिस आयुक्त",
      insigniaUrl: "police/igp.svg",
      fallbackInsignia: "police/igp.svg",
      tier: "flag",
      stars: 2,
      payLevel: "Level 14 (Super Time Scale - ₹1,44,200 - ₹2,18,200)",
      description: "Senior IPS officer heading a Police Range comprising 3 to 6 districts, or serving as Joint Commissioner of Police in metropolitan cities.",
      responsibilities: [
        "Command and supervision of an administrative Police Range covering multiple districts",
        "Directing major crime investigations and communal riot control operations",
        "Evaluating district performance and maintaining police discipline standards"
      ],
      uniformDetails: "National Emblem over crossed sword and baton, with 'IPS' badge below. Navy gorget patches with two golden stars. Car star plate with two stars.",
      history: "Historically the head of police under the 1861 Police Act before the creation of the DGP rank.",
      eligibility: "Promoted from DIG rank upon completing 18-20 years of IPS service.",
      equivalents: "Major General (Army), Rear Admiral (Navy), Air Vice Marshal (IAF), IG (CAPF)"
    },
    {
      id: "police-dig",
      name: "Deputy Inspector General (DIG) / Additional CP",
      hindiName: "पुलिस उप-महानिरीक्षक (डीआईजी) / अतिरिक्त पुलिस आयुक्त",
      insigniaUrl: "police/dig.svg",
      fallbackInsignia: "police/dig.svg",
      tier: "flag",
      stars: 1,
      payLevel: "Level 13A (Super Time Scale - ₹1,31,100 - ₹2,16,600)",
      description: "One-star IPS officer supervising a group of districts in a range, or heading elite specialized wings like ATS, STF, or Anti-Corruption.",
      responsibilities: [
        "Range DIG directly supervising District Superintendents of Police (SPs)",
        "Inspection of district police lines, reserve forces, and crime detection rate",
        "Directing anti-terrorist operations and VIP security protocols"
      ],
      uniformDetails: "National Emblem over three five-pointed stars arranged in a triangular cluster with 'IPS' badge. Navy collar patch with one star. Car plate with one star.",
      history: "Key supervisory link between district leadership and the state police directorate.",
      eligibility: "Promoted from SSP/SP rank upon completing 14 years of IPS service.",
      equivalents: "Brigadier (Army), Commodore (Navy), Air Commodore (IAF), DIG (CAPF)"
    },
    {
      id: "police-ssp",
      name: "Senior Superintendent of Police (SSP / DCP SG)",
      hindiName: "वरिष्ठ पुलिस अधीक्षक (एसएसपी) / पुलिस उपायुक्त",
      insigniaUrl: "police/ssp.svg",
      fallbackInsignia: "police/ssp.svg",
      tier: "commissioned",
      stars: 0,
      payLevel: "Level 13 (Selection Grade - ₹1,18,500 - ₹2,14,100)",
      description: "Selection-grade IPS officer heading large, sensitive, or densely populated districts (e.g. Kanpur, Lucknow, Varanasi, Gurugram) or Deputy Commissioner of Police.",
      responsibilities: [
        "Head of district police administration commanding 5,000 to 15,000 police personnel",
        "Maintenance of public order, law enforcement, and crime investigation across entire district",
        "Direct coordination with District Magistrate (DM) and judiciary"
      ],
      uniformDetails: "National Emblem over two five-pointed stars with 'IPS' badge at the base.",
      eligibility: "Conferred on IPS officers with 13 years of approved service upon selection grade clearance.",
      equivalents: "Colonel (Army), Captain (Navy), Group Captain (IAF), Commandant (CAPF)"
    },
    {
      id: "police-sp",
      name: "Superintendent of Police (SP) / DCP",
      hindiName: "पुलिस अधीक्षक (एसपी) / पुलिस उपायुक्त",
      insigniaUrl: "police/sp.svg",
      fallbackInsignia: "police/sp.svg",
      tier: "commissioned",
      stars: 0,
      payLevel: "Level 12 (Junior Administrative Grade - ₹78,800 - ₹2,09,200)",
      description: "District Police Chief in standard districts or Deputy Commissioner of Police (DCP) heading a city zone.",
      responsibilities: [
        "Chief law enforcement authority of the district, commanding all police stations (Thanas)",
        "Direct operational control over Armed Reserve Police and Crime Branch",
        "Planning security for major elections, festivals, and VIP movements"
      ],
      uniformDetails: "National Emblem over one five-pointed star with 'IPS' (or State Police initials for promoted SPS officers) badge.",
      history: "Evolved from the British colonial District Superintendent who held sole executive police command in a district.",
      eligibility: "IPS officers with 9 years of service, or promoted State Police Service officers.",
      equivalents: "Lieutenant Colonel (Army), Commander (Navy), Wing Commander (IAF), 2IC (CAPF)"
    },
    {
      id: "police-addl-sp",
      name: "Additional Superintendent of Police (Addl. SP)",
      hindiName: "अपर पुलिस अधीक्षक (एडिशनल एसपी)",
      insigniaUrl: "police/addl_sp.svg",
      fallbackInsignia: "police/addl_sp.svg",
      tier: "commissioned",
      stars: 0,
      payLevel: "Level 11 (Senior Time Scale - ₹67,700 - ₹2,08,700)",
      description: "Senior field officer assisting the SP, often heading Urban, Rural, or Crime divisions in a district.",
      responsibilities: [
        "In-charge of Urban Police, Rural Police, or District Crime Detection branch",
        "Second-in-command during district-wide law and order emergencies",
        "Conducting departmental inquiries and supervising police station functioning"
      ],
      uniformDetails: "National Emblem (Ashoka Lion Capital) with 'IPS' or State Police badge.",
      eligibility: "IPS officers with 4+ years service, or Senior Deputy SPs of State Police.",
      equivalents: "Major (Army), Lt. Commander (Navy), Squadron Leader (IAF), Deputy Commandant"
    },
    {
      id: "police-asp",
      name: "Assistant Superintendent of Police (ASP - IPS)",
      hindiName: "सहायक पुलिस अधीक्षक (एएसपी)",
      insigniaUrl: "police/asp.svg",
      fallbackInsignia: "police/asp.svg",
      tier: "commissioned",
      stars: 0,
      payLevel: "Level 10 (Junior Time Scale - ₹56,100 - ₹1,77,500)",
      description: "Direct-recruit IPS officer upon passing out from the Sardar Vallabhbhai Patel National Police Academy (SVPNPA) Hyderabad.",
      responsibilities: [
        "Sub-Divisional Police Officer (SDPO) commanding a police circle (4-6 police stations)",
        "Supervising investigation of heinous crimes (murder, dacoity, cyber-fraud)",
        "Leading riot control units and field mobile police patrols"
      ],
      uniformDetails: "Three stars (2nd year) or Two stars (1st year probation) with 'IPS' metal insignia at the base of epaulettes.",
      history: "Direct UPSC Civil Services Examination (CSE) recruit rank for the premier Indian Police Service.",
      equivalents: "Captain / Lieutenant (Army), Lieutenant / Sub Lt (Navy), Flight Lt (IAF)"
    },
    {
      id: "police-dsp",
      name: "Deputy Superintendent of Police (DSP) / ACP",
      hindiName: "पुलिस उप-अधीक्षक (डीएसपी) / सहायक पुलिस आयुक्त (एसीपी)",
      insigniaUrl: "police/asp.svg",
      fallbackInsignia: "police/asp.svg",
      tier: "commissioned",
      stars: 0,
      payLevel: "Level 10 (State Gazetted - ₹56,100 - ₹1,77,500)",
      description: "State Police Service (SPS/PPS/TPS) gazetted officer commanding a police sub-division or serving as Assistant Commissioner in police commissionerates.",
      responsibilities: [
        "Sub-Divisional Police Officer (SDPO) supervising multiple police stations",
        "Investigating officer for sensitive offences under Special Acts (SC/ST Act, POCSO, NDPS)",
        "Maintaining public peace, handling assemblies, and law & order management"
      ],
      uniformDetails: "Three five-pointed stars on shoulder boards with State Police badge (e.g. 'UPP', 'MPP', 'KP', 'DP') without red/blue ribbons.",
      history: "Created in 1905 under the Fraser Commission to accommodate native Indian officers at the gazetted rank.",
      eligibility: "Recruited through State Public Service Commission (State PCS) or promoted Police Inspectors.",
      equivalents: "Captain (Army), Lieutenant (Navy), Flight Lieutenant (IAF), Assistant Commandant"
    },
    {
      id: "police-inspector",
      name: "Police Inspector (Circle Inspector / SHO)",
      hindiName: "पुलिस निरीक्षक (थाना प्रभारी / इंस्पेक्टर)",
      insigniaUrl: "police/inspector.svg",
      fallbackInsignia: "police/inspector.svg",
      tier: "jco",
      stars: 0,
      payLevel: "Level 7 / 8 (₹44,900 - ₹1,42,400)",
      description: "The commanding officer of a major police station (Station House Officer - SHO) or Circle Inspector overseeing multiple police outposts.",
      responsibilities: [
        "Station House Officer (SHO) commanding an entire police station and all personnel",
        "Chief investigator for major criminal cases and filing charge sheets in court",
        "Supervising preventive detention, beat patrols, and public grievance redressal"
      ],
      uniformDetails: "Three stars on shoulder strap with a dual red-and-blue ribbon stripe underneath.",
      history: "Pivotal link in Indian civil administration directly interfacing with common citizens.",
      eligibility: "Promoted after distinguished service as Sub-Inspector (minimum 8-10 years).",
      equivalents: "Subedar (Army), MCPO II (Navy), Warrant Officer (IAF), Inspector (CAPF)"
    },
    {
      id: "police-si",
      name: "Sub-Inspector (SI)",
      hindiName: "उप-निरीक्षक (सब-इंस्पेक्टर)",
      insigniaUrl: "police/sub_inspector.svg",
      fallbackInsignia: "police/sub_inspector.svg",
      tier: "jco",
      stars: 0,
      payLevel: "Level 6 (₹35,400 - ₹1,12,400)",
      description: "The primary Investigating Officer (IO) under the Code of Criminal Procedure (CrPC/BNSS) and in-charge of smaller police stations or Chowkis.",
      responsibilities: [
        "Authorised Investigating Officer empowered to file FIRs, make arrests, and submit charge sheets",
        "In-charge of Police Chowkis (outposts) and highway patrol teams",
        "Directing Head Constables and Constables in beat crime surveillance"
      ],
      uniformDetails: "Two five-pointed stars on the shoulder strap with red-and-blue ribbon stripe.",
      history: "The workhorse officer of Indian law enforcement recruited directly through state staff selection boards.",
      equivalents: "Naib Subedar (Army), CPO (Navy), Junior Warrant Officer (IAF), Sub-Inspector (CAPF)"
    },
    {
      id: "police-asi",
      name: "Assistant Sub-Inspector (ASI)",
      hindiName: "सहायक उप-निरीक्षक (एएसआई)",
      insigniaUrl: "police/asi.svg",
      fallbackInsignia: "police/asi.svg",
      tier: "jco",
      stars: 0,
      payLevel: "Level 5 (₹29,200 - ₹92,300)",
      description: "Non-gazetted subordinate officer assisting the Sub-Inspector, often serving as General Diary (GD) writer and reader in court.",
      responsibilities: [
        "Maintenance of General Diary (Rojnamcha) and registration of non-cognizable reports",
        "Court liaison officer handling warrants and summons",
        "Investigating petty offences and leading check-post vehicle inspection squads"
      ],
      uniformDetails: "One five-pointed star with a red-and-blue ribbon stripe underneath.",
      equivalents: "Havildar (Army), Petty Officer (Navy), Sergeant (IAF), ASI (CAPF)"
    },
    {
      id: "police-hc",
      name: "Head Constable (HC)",
      hindiName: "मुख्य आरक्षी / हेड कांस्टेबल",
      insigniaUrl: "police/head_constable.png",
      fallbackInsignia: "police/head_constable.png",
      tier: "nco",
      stars: 0,
      payLevel: "Level 4 (₹25,500 - ₹81,100)",
      description: "Senior non-commissioned officer leading squads of constables, serving as Station Writer or Armorer.",
      responsibilities: [
        "Supervising station lockups, malkhana (seized property room), and armory",
        "Leading beat patrols and managing emergency response dial 112/100 vehicles",
        "Investigating motor vehicle accidents and minor thefts"
      ],
      uniformDetails: "Three point-down red or golden chevrons on the upper sleeve, or triple stripes on epaulettes.",
      equivalents: "Havildar (Army), Petty Officer (Navy), Sergeant (IAF), Head Constable (CAPF)"
    },
    {
      id: "police-senior-constable",
      name: "Senior Police Constable / Police Naik",
      hindiName: "वरिष्ठ आरक्षी / पुलिस नायक",
      insigniaUrl: "police/senior_constable.png",
      fallbackInsignia: "police/senior_constable.png",
      tier: "nco",
      stars: 0,
      payLevel: "Level 3 (₹21,700 - ₹69,100)",
      description: "Intermediate rank in states with two-tier constable cadres (e.g. Maharashtra, Tamil Nadu).",
      responsibilities: [
        "Senior beat constable guiding younger constables on foot patrols",
        "Assisting in crowd management and traffic regulation at critical intersections"
      ],
      uniformDetails: "Two point-down chevrons on upper sleeve.",
      equivalents: "Naik (Army), Leading Seaman (Navy), Corporal (IAF)"
    },
    {
      id: "police-constable",
      name: "Police Constable (PC)",
      hindiName: "आरक्षी / पुलिस कांस्टेबल",
      insigniaUrl: "police/head_constable.png",
      fallbackInsignia: "police/head_constable.png",
      tier: "nco",
      stars: 0,
      payLevel: "Level 3 (₹21,700 - ₹69,100)",
      description: "The fundamental frontline peacekeeper of India, representing 80% of the police workforce across cities and villages.",
      responsibilities: [
        "Round-the-clock beat patrolling, crime prevention, and community liaison",
        "Bandobast duty during festivals, public rallies, elections, and strikes",
        "First responder at crime scenes and emergency rescue"
      ],
      uniformDetails: "Khaki uniform with state police shoulder title badge and leather belt with state emblem buckle.",
      history: "Evolved from the village chowkidars and barkandaz of pre-independence India into professional constables.",
      equivalents: "Sepoy (Army), Seaman (Navy), Aircraftman (IAF), Constable (CAPF)"
    }
  ],

  coastguard: [
    {
      id: "icg-dg",
      name: "Director General Coast Guard (DGCG)",
      hindiName: "महानिदेशक भारतीय तटरक्षक",
      insigniaUrl: "coastguard/dg_icg.svg",
      fallbackInsignia: "coastguard/dg_icg.svg",
      tier: "flag",
      stars: 3,
      payLevel: "Level 16 / 17 (₹2,05,400 - ₹2,25,000)",
      description: "The professional head and supreme commander of the Indian Coast Guard operating under the Ministry of Defence.",
      responsibilities: [
        "Command of the entire Coast Guard fleet across five regions (Western, Eastern, North-East, Andaman & Nicobar, North-West)",
        "Coordination with Navy and National Security Council on coastal security and EEZ protection",
        "Directing marine pollution response and international maritime search & rescue"
      ],
      uniformDetails: "Ashoka Lion Capital over crossed anchor and sword with three golden stars on shoulder boards.",
      equivalents: "Vice Admiral (Navy), Lt. General (Army), Air Marshal (IAF), DGP (Police)"
    },
    {
      id: "icg-ig",
      name: "Inspector General (IG Coast Guard)",
      hindiName: "महानिरीक्षक (तटरक्षक)",
      insigniaUrl: "coastguard/ig_icg.svg",
      fallbackInsignia: "coastguard/ig_icg.svg",
      tier: "flag",
      stars: 2,
      payLevel: "Level 14 (₹1,44,200 - ₹2,18,200)",
      description: "Two-star flag officer serving as Regional Commander of one of the five Coast Guard Regions.",
      responsibilities: [
        "Regional Commander commanding all Coast Guard districts, stations, and air enclaves in a maritime zone",
        "Directing offshore surveillance flights and rapid anti-smuggling interceptions",
        "Overseeing maritime environmental and oil-spill disaster response"
      ],
      uniformDetails: "Ashoka Lion over crossed anchor and sword with two stars.",
      equivalents: "Rear Admiral (Navy), Major General (Army), Air Vice Marshal (IAF), IGP (Police)"
    },
    {
      id: "icg-dig",
      name: "Deputy Inspector General (DIG Coast Guard)",
      hindiName: "उप-महानिरीक्षक (तटरक्षक)",
      insigniaUrl: "coastguard/dg_icg.svg",
      fallbackInsignia: "coastguard/dg_icg.svg",
      tier: "flag",
      stars: 1,
      payLevel: "Level 13A (₹1,39,600 - ₹2,17,600)",
      description: "One-star officer commanding a Coast Guard District or Major Air Station (CGAS).",
      responsibilities: [
        "District Commander overseeing Coast Guard stations and patrol squadrons in a maritime state",
        "Supervision of Offshore Patrol Vessels (OPVs) and Dornier-228 maritime patrol aircraft",
        "Operational coordination with coastal state marine police"
      ],
      uniformDetails: "Ashoka Lion over crossed anchor and sword with one star.",
      equivalents: "Commodore (Navy), Brigadier (Army), Air Commodore (IAF), DIG (Police)"
    },
    {
      id: "icg-commandant",
      name: "Commandant / Commandant (Junior Grade)",
      hindiName: "कमांडेंट",
      insigniaUrl: "coastguard/cadet.svg",
      fallbackInsignia: "coastguard/cadet.svg",
      tier: "commissioned",
      stars: 0,
      payLevel: "Level 13 / 12A (₹1,21,200 - ₹2,15,900)",
      description: "Senior commissioned officer commanding major offshore patrol vessels (e.g. Samarth, Sankalp class).",
      responsibilities: [
        "Commanding Officer of Offshore Patrol Vessels and Pollution Control Vessels",
        "Directing deep-sea anti-piracy and illegal foreign trawler arrests",
        "Heading air squadrons operating ALH Dhruv and Chetak helicopters"
      ],
      uniformDetails: "Four or three rows of golden lace with Coast Guard anchor crest.",
      equivalents: "Captain / Commander (Navy), Colonel / Lt Col (Army), Group Capt / Wing Cdr (IAF)"
    },
    {
      id: "icg-assistant-commandant",
      name: "Assistant Commandant",
      hindiName: "सहायक कमांडेंट",
      insigniaUrl: "coastguard/cadet.svg",
      fallbackInsignia: "coastguard/cadet.svg",
      tier: "commissioned",
      stars: 0,
      payLevel: "Level 10 (₹56,100 - ₹1,77,500)",
      description: "Direct-entry gazetted officer rank in the Indian Coast Guard.",
      responsibilities: [
        "Navigating officer and watch-keeper on interceptor boats and patrol vessels",
        "Boarding officer for search and seizure of suspicious maritime crafts",
        "Co-pilot in Coast Guard aviation flights"
      ],
      uniformDetails: "One golden lace row with anchor crest.",
      equivalents: "Sub Lieutenant (Navy), Lieutenant (Army), Flying Officer (IAF), ASP / DSP (Police)"
    },
    {
      id: "icg-pradhan-adhikari",
      name: "Pradhan Adhikari",
      hindiName: "प्रधान अधिकारी",
      insigniaUrl: "coastguard/pradhan_adhikari.svg",
      fallbackInsignia: "coastguard/pradhan_adhikari.svg",
      tier: "jco",
      stars: 0,
      payLevel: "Level 9 (₹53,100 - ₹1,67,800)",
      description: "Senior-most Subordinate Officer in the Indian Coast Guard.",
      responsibilities: [
        "Chief of boat on Coast Guard vessels supervising all enlisted ratings",
        "Senior technical supervisor for marine engines and shipboard radar suites",
        "Assisting Commanding Officer on crew welfare and ship maintenance"
      ],
      uniformDetails: "Ashoka Lion Capital with crossed anchors in golden wreath.",
      equivalents: "MCPO I (Navy), Subedar Major (Army), Master Warrant Officer (IAF)"
    },
    {
      id: "icg-uttam-adhikari",
      name: "Uttam Adhikari",
      hindiName: "उत्तम अधिकारी",
      insigniaUrl: "coastguard/uttam_adhikari.svg",
      fallbackInsignia: "coastguard/uttam_adhikari.svg",
      tier: "jco",
      stars: 0,
      payLevel: "Level 8 (₹47,600 - ₹1,51,100)",
      description: "Subordinate officer heading engineering and operational sections.",
      responsibilities: [
        "Supervising power generation, steering gears, and auxiliary ship systems",
        "Leading rescue swimmer teams during high-seas operations"
      ],
      uniformDetails: "Ashoka Lion with crossed anchors.",
      equivalents: "MCPO II (Navy), Subedar (Army), Warrant Officer (IAF)"
    },
    {
      id: "icg-adhikari",
      name: "Adhikari",
      hindiName: "अधिकारी",
      insigniaUrl: "coastguard/adhikari.svg",
      fallbackInsignia: "coastguard/adhikari.svg",
      tier: "jco",
      stars: 0,
      payLevel: "Level 7 (₹44,900 - ₹1,42,400)",
      description: "Entry-level Subordinate Officer in the Coast Guard.",
      responsibilities: [
        "Watchkeeping in engine rooms and steering compartments",
        "Supervision of pollution control dispersant spray booms"
      ],
      uniformDetails: "Crossed anchors with golden lace.",
      equivalents: "Chief Petty Officer (Navy), Naib Subedar (Army), JWO (IAF)"
    },
    {
      id: "icg-uttam-navik",
      name: "Uttam Navik",
      hindiName: "उत्तम नाविक",
      insigniaUrl: "coastguard/uttam_navik.svg",
      fallbackInsignia: "coastguard/uttam_navik.svg",
      tier: "nco",
      stars: 0,
      payLevel: "Level 4 (₹25,500 - ₹81,100)",
      description: "Experienced non-commissioned sailor executing maritime patrols.",
      responsibilities: [
        "Operation of guns, radars, and high-speed interceptor craft throttles",
        "Assisting in casualty evacuation from merchant vessels"
      ],
      uniformDetails: "Two chevrons with anchor badge.",
      equivalents: "Leading Seaman (Navy), Naik (Army), Corporal (IAF)"
    },
    {
      id: "icg-navik",
      name: "Navik (General Duty / Domestic Branch)",
      hindiName: "नाविक",
      insigniaUrl: "coastguard/uttam_navik.svg",
      fallbackInsignia: "coastguard/uttam_navik.svg",
      tier: "nco",
      stars: 0,
      payLevel: "Level 3 (₹21,700 - ₹69,100)",
      description: "Initial enlisted rating executing deck and engine duties across Coast Guard stations.",
      responsibilities: [
        "Deck watch, vessel line handling, and sea boat crewing",
        "Assisting in anti-poaching and maritime surveillance"
      ],
      uniformDetails: "White and navy coast guard uniform.",
      equivalents: "Seaman (Navy), Sepoy (Army), Aircraftman (IAF), Constable"
    }
  ],

  capf: [
    {
      id: "capf-dg",
      name: "Director General (CRPF / BSF / CISF / ITBP / SSB)",
      hindiName: "महानिदेशक (सीएपीएफ)",
      insigniaUrl: "capf/capf_dg.png",
      fallbackInsignia: "police/dgp.svg",
      tier: "flag",
      stars: 3,
      payLevel: "Level 17 (Apex Scale - ₹2,25,000 fixed)",
      description: "Apex IPS officer heading individual Central Armed Police Forces under the Ministry of Home Affairs.",
      responsibilities: [
        "Supreme command of forces numbering over 300,000 troops (CRPF: 325K, BSF: 270K, CISF: 180K)",
        "Safeguarding India-Pakistan / India-Bangladesh borders (BSF), India-China LAC (ITBP), Nepal/Bhutan borders (SSB)",
        "Counter-insurgency and anti-Naxalite operations in Red Corridor (CRPF), vital infrastructure and airport security (CISF)"
      ],
      uniformDetails: "National Emblem over crossed sword and baton with force badge (e.g. 'CRPF', 'BSF'). Three-star gorget patches.",
      equivalents: "Lt. General (Army), Vice Admiral (Navy), Air Marshal (IAF), DGP (State Police)"
    },
    {
      id: "capf-ig",
      name: "Inspector General (IG CAPF)",
      hindiName: "महानिरीक्षक (सीएपीएफ)",
      insigniaUrl: "capf/capf_ig.png",
      fallbackInsignia: "police/igp.svg",
      tier: "flag",
      stars: 2,
      payLevel: "Level 14 (₹1,44,200 - ₹2,18,200)",
      description: "Senior IPS or cadre officer commanding an operational Frontier / Sector consisting of multiple sectors and battalions.",
      responsibilities: [
        "Commanding Frontier Headquarters along active international borders or anti-Naxal theatres",
        "Directing tactical troop mobilization, border outposts (BOPs), and drone surveillance",
        "Coordinating with state police and Indian Army formations"
      ],
      uniformDetails: "National Emblem over crossed sword and baton with force badge. Two-star gorget patches.",
      equivalents: "Major General (Army), Rear Admiral (Navy), Air Vice Marshal (IAF), IGP (Police)"
    },
    {
      id: "capf-dig",
      name: "Deputy Inspector General (DIG CAPF)",
      hindiName: "उप-महानिरीक्षक (सीएपीएफ)",
      insigniaUrl: "capf/capf_dig.png",
      fallbackInsignia: "police/dig.svg",
      tier: "flag",
      stars: 1,
      payLevel: "Level 13A (₹1,31,100 - ₹2,16,600)",
      description: "Commanding an active Sector comprising 3 to 5 CAPF battalions.",
      responsibilities: [
        "Tactical command of border sectors and forward operational bases (FOBs)",
        "Supervising counter-infiltration grids and airport aviation security groups (ASG)"
      ],
      uniformDetails: "National Emblem over three stars in triangle with force title badge.",
      equivalents: "Brigadier (Army), Commodore (Navy), Air Commodore (IAF), DIG (Police)"
    },
    {
      id: "capf-commandant",
      name: "Commandant (Commanding Officer)",
      hindiName: "कमांडेंट",
      insigniaUrl: "capf/capf_dig.png",
      fallbackInsignia: "army_new/colonel.svg",
      tier: "commissioned",
      stars: 0,
      payLevel: "Level 13 (₹1,30,600 - ₹2,15,900)",
      description: "Commanding Officer of a CAPF Battalion (approx. 1,000 armed troops).",
      responsibilities: [
        "Overall command, combat deployment, and troop morale of an operational battalion",
        "Directing high-stakes encounters against insurgents, terrorists, and smugglers",
        "Disciplinary and financial authority of the battalion"
      ],
      uniformDetails: "National Emblem over two stars with force badge.",
      equivalents: "Colonel (Army), Captain (Navy), Group Captain (IAF), SSP (Police)"
    },
    {
      id: "capf-2ic",
      name: "Second-in-Command (2IC)",
      hindiName: "द्वितीय कमान अधिकारी (2आईसी)",
      insigniaUrl: "capf/capf_dig.png",
      fallbackInsignia: "army_new/lt_colonel.svg",
      tier: "commissioned",
      stars: 0,
      payLevel: "Level 12 (₹78,800 - ₹2,09,200)",
      description: "Executive officer and second-in-command of an armed police battalion.",
      responsibilities: [
        "Directing battalion operational logistics, intelligence, and convoy movements",
        "Commanding tactical operations in the absence of the Commandant"
      ],
      uniformDetails: "National Emblem over one star with force badge.",
      equivalents: "Lt. Colonel (Army), Commander (Navy), Wing Commander (IAF), SP (Police)"
    },
    {
      id: "capf-dc",
      name: "Deputy Commandant (DC)",
      hindiName: "उप-कमांडेंट",
      insigniaUrl: "capf/capf_dig.png",
      fallbackInsignia: "army_new/major.svg",
      tier: "commissioned",
      stars: 0,
      payLevel: "Level 11 (₹67,700 - ₹2,08,700)",
      description: "Commissioned officer commanding a company of 135 armed soldiers.",
      responsibilities: [
        "Company Commander stationed at forward border outposts or jungle warfare operating bases",
        "Direct tactical assault and search-and-destroy missions"
      ],
      uniformDetails: "National Emblem (Ashoka Lion Capital).",
      equivalents: "Major (Army), Lt. Commander (Navy), Squadron Leader (IAF), Addl. SP (Police)"
    },
    {
      id: "capf-ac",
      name: "Assistant Commandant (AC)",
      hindiName: "सहायक कमांडेंट",
      insigniaUrl: "capf/capf_dig.png",
      fallbackInsignia: "army_new/captain.svg",
      tier: "commissioned",
      stars: 0,
      payLevel: "Level 10 (₹56,100 - ₹1,77,500)",
      description: "Direct-entry Class-A Gazetted Officer recruited through UPSC Central Armed Police Forces (AC) Exam.",
      responsibilities: [
        "Company second-in-command or Platoon assault commander",
        "Leading high-risk ambush patrols, border surveillance, and VIP security detachments"
      ],
      uniformDetails: "Three five-pointed stars on shoulder straps.",
      equivalents: "Captain / Lieutenant (Army), Lieutenant (Navy), Flight Lt (IAF), DSP (Police)"
    },
    {
      id: "capf-subedar-major",
      name: "Subedar Major (SM / Inspector)",
      hindiName: "सूबेदार मेजर",
      insigniaUrl: "capf/capf_subedar_major.png",
      fallbackInsignia: "capf/capf_subedar_major.png",
      tier: "jco",
      stars: 0,
      payLevel: "Level 8 / 9 (₹47,600 - ₹1,67,800)",
      description: "Senior-most Subordinate Officer in the battalion, advisor to the Commandant on troops.",
      responsibilities: [
        "Principal advisor on troop morale, discipline, rations, and regimental quarter-guard",
        "Supervising battalion weapon readiness and ceremonial parades"
      ],
      uniformDetails: "Ashoka Lion Capital with ribbon stripe.",
      equivalents: "Subedar Major (Army), MCPO I (Navy), MWO (IAF), Inspector (Police)"
    },
    {
      id: "capf-inspector",
      name: "Inspector",
      hindiName: "इंस्पेक्टर",
      insigniaUrl: "police/inspector.svg",
      fallbackInsignia: "police/inspector.svg",
      tier: "jco",
      stars: 0,
      payLevel: "Level 7 (₹44,900 - ₹1,42,400)",
      description: "Subordinate officer commanding a border outpost (BOP) or specialized company division.",
      responsibilities: [
        "Post Commander at high-altitude or sensitive border outposts",
        "Planning round-the-clock foot and motorboat border patrols"
      ],
      uniformDetails: "Three stars with red and blue ribbon underneath.",
      equivalents: "Subedar (Army), MCPO II (Navy), WO (IAF), Inspector (Police)"
    },
    {
      id: "capf-sub-inspector",
      name: "Sub-Inspector (SI)",
      hindiName: "सब-इंस्पेक्टर",
      insigniaUrl: "police/sub_inspector.svg",
      fallbackInsignia: "police/sub_inspector.svg",
      tier: "jco",
      stars: 0,
      payLevel: "Level 6 (₹35,400 - ₹1,12,400)",
      description: "Subordinate officer commanding an armed platoon of 30 soldiers.",
      responsibilities: [
        "Platoon Commander executing long-range patrols and anti-infiltration blockades",
        "Handling heavy automatic weapons (MMG, AGS-30, 81mm Mortar)"
      ],
      uniformDetails: "Two stars with red and blue ribbon.",
      equivalents: "Naib Subedar (Army), CPO (Navy), JWO (IAF), SI (Police)"
    },
    {
      id: "capf-head-constable",
      name: "Head Constable (HC)",
      hindiName: "हेड कांस्टेबल",
      insigniaUrl: "police/head_constable.png",
      fallbackInsignia: "police/head_constable.png",
      tier: "nco",
      stars: 0,
      payLevel: "Level 4 (₹25,500 - ₹81,100)",
      description: "Non-commissioned officer commanding a section of 10 soldiers.",
      responsibilities: [
        "Section Commander on border patrol and counter-terror sweeps",
        "Managing arms stores and checkpoint surveillance"
      ],
      uniformDetails: "Three white or golden chevrons on right sleeve.",
      equivalents: "Havildar (Army), Petty Officer (Navy), Sergeant (IAF), HC (Police)"
    },
    {
      id: "capf-constable",
      name: "Constable (General Duty)",
      hindiName: "कांस्टेबल (जनरल ड्यूटी)",
      insigniaUrl: "police/senior_constable.png",
      fallbackInsignia: "police/senior_constable.png",
      tier: "nco",
      stars: 0,
      payLevel: "Level 3 (₹21,700 - ₹69,100)",
      description: "The resilient frontline combatant of Central Armed Police Forces safeguarding national frontiers.",
      responsibilities: [
        "Vigilant border guarding in extreme deserts (-50°C Siachen/Ladakh to 50°C Thar desert)",
        "Jungle warfare combat and security of critical nuclear/aerospace installations"
      ],
      uniformDetails: "Camouflage or khaki combat dress with force crest.",
      equivalents: "Sepoy (Army), Seaman (Navy), Aircraftman (IAF), Constable (Police)"
    }
  ],

  cds: [
    {
      id: "cds-chief",
      name: "Chief of Defence Staff (CDS)",
      hindiName: "चीफ ऑफ डिफेंस स्टाफ (सीडीएस)",
      insigniaUrl: "assets/cds_seal.svg",
      fallbackInsignia: "assets/cds_seal.svg",
      tier: "flag",
      stars: 4,
      payLevel: "Level 17 (Apex Scale - ₹2,50,000 fixed)",
      description: "Four-star General / Flag Officer who is first among equals with service chiefs, serving as Permanent Chairman of the Chiefs of Staff Committee and Head of the Department of Military Affairs (DMA).",
      responsibilities: [
        "Principal Military Advisor to the Minister of Defence on all tri-services matters",
        "Formulating theaterisation and joint integrated war-fighting commands",
        "Prioritizing inter-service capital acquisitions and military doctrine under 'Atmanirbhar Bharat'",
        "Administering Tri-services organizations: Strategic Forces Command (SFC), Defence Cyber Agency (DCyA), Defence Space Agency (DSA), Special Operations Division"
      ],
      uniformDetails: "Maroon gorget patches with four golden stars. Peak cap and belt buckle bearing the unified Tri-Services emblem: Ashoka Lion Capital over crossed sword, anchor, and eagle wings.",
      history: "Created in December 2019 upon the Kargil Review Committee recommendation. General Bipin Rawat was appointed the historic 1st CDS (2020), followed by General Anil Chauhan (2022-present).",
      eligibility: "Any serving or retired 4-star General or 3-star Lt. General / Vice Admiral / Air Marshal under 65 years of age.",
      equivalents: "General (Army), Admiral (Navy), Air Chief Marshal (IAF)"
    }
  ]
};

// Cross-Service Rank Equivalence Matrix (based on 7th Central Pay Commission & Warrant of Precedence)
export const equivalentMatrix = [
  {
    level: "5-Star (Honorary)",
    cpc: "Special Lifetime Honor",
    army: "Field Marshal",
    navy: "Admiral of the Fleet",
    airforce: "Marshal of the Air Force",
    coastguard: "—",
    capf: "—",
    police: "—"
  },
  {
    level: "4-Star (Apex)",
    cpc: "Level 17 (₹2,50,000)",
    army: "General (COAS)",
    navy: "Admiral (CNS)",
    airforce: "Air Chief Marshal (CAS)",
    coastguard: "—",
    capf: "—",
    police: "—"
  },
  {
    level: "3-Star (Apex / HAG+)",
    cpc: "Level 16 / 17 (₹2,25,000)",
    army: "Lieutenant General",
    navy: "Vice Admiral",
    airforce: "Air Marshal",
    coastguard: "Director General Coast Guard (DGCG)",
    capf: "Director General (CRPF/BSF/CISF/ITBP/SSB)",
    police: "Director General of Police (DGP) / CP"
  },
  {
    level: "2-Star (HAG)",
    cpc: "Level 14 (₹1,44,200 - ₹2,18,200)",
    army: "Major General",
    navy: "Rear Admiral",
    airforce: "Air Vice Marshal",
    coastguard: "Inspector General (IG Coast Guard)",
    capf: "Inspector General (IG CAPF)",
    police: "Inspector General of Police (IGP) / Joint CP"
  },
  {
    level: "1-Star",
    cpc: "Level 13A (₹1,39,600 - ₹2,17,600)",
    army: "Brigadier",
    navy: "Commodore",
    airforce: "Air Commodore",
    coastguard: "Deputy Inspector General (DIG)",
    capf: "Deputy Inspector General (DIG)",
    police: "Deputy Inspector General (DIG) / Addl. CP"
  },
  {
    level: "Senior Selection Grade",
    cpc: "Level 13 (₹1,30,600 - ₹2,15,900)",
    army: "Colonel",
    navy: "Captain",
    airforce: "Group Captain",
    coastguard: "Commandant",
    capf: "Commandant",
    police: "Senior Superintendent of Police (SSP) / DCP"
  },
  {
    level: "Senior Field Grade",
    cpc: "Level 12A / 12 (₹1,21,200 - ₹2,12,400)",
    army: "Lieutenant Colonel",
    navy: "Commander",
    airforce: "Wing Commander",
    coastguard: "Commandant (JG)",
    capf: "Second-in-Command (2IC)",
    police: "Superintendent of Police (SP) / DCP"
  },
  {
    level: "Field Grade",
    cpc: "Level 11 (₹69,400 - ₹2,07,200)",
    army: "Major",
    navy: "Lieutenant Commander",
    airforce: "Squadron Leader",
    coastguard: "Deputy Commandant",
    capf: "Deputy Commandant",
    police: "Additional SP / Addl. DCP"
  },
  {
    level: "Senior Commissioned",
    cpc: "Level 10B (₹61,300 - ₹1,93,900)",
    army: "Captain",
    navy: "Lieutenant",
    airforce: "Flight Lieutenant",
    coastguard: "Assistant Commandant (Senior)",
    capf: "Assistant Commandant (Senior)",
    police: "Assistant SP / Senior DSP / ACP"
  },
  {
    level: "Junior Commissioned",
    cpc: "Level 10 (₹56,100 - ₹1,77,500)",
    army: "Lieutenant",
    navy: "Sub Lieutenant",
    airforce: "Flying Officer",
    coastguard: "Assistant Commandant",
    capf: "Assistant Commandant",
    police: "Deputy SP (DSP) / ACP (Prob.)"
  },
  {
    level: "Senior Subordinate / JCO",
    cpc: "Level 9 (₹53,100 - ₹1,67,800)",
    army: "Subedar Major / Risaldar Major",
    navy: "Master Chief Petty Officer 1st Class",
    airforce: "Master Warrant Officer (MWO)",
    coastguard: "Pradhan Adhikari",
    capf: "Subedar Major",
    police: "Senior Inspector / Circle Inspector"
  },
  {
    level: "Subordinate / JCO",
    cpc: "Level 8 (₹47,600 - ₹1,51,100)",
    army: "Subedar / Risaldar",
    navy: "Master Chief Petty Officer 2nd Class",
    airforce: "Warrant Officer (WO)",
    coastguard: "Uttam Adhikari",
    capf: "Inspector",
    police: "Police Inspector (SHO)"
  },
  {
    level: "Junior Subordinate / JCO",
    cpc: "Level 7 (₹44,900 - ₹1,42,400)",
    army: "Naib Subedar",
    navy: "Chief Petty Officer (CPO)",
    airforce: "Junior Warrant Officer (JWO)",
    coastguard: "Adhikari",
    capf: "Sub-Inspector (SI)",
    police: "Sub-Inspector (SI)"
  },
  {
    level: "Senior NCO",
    cpc: "Level 5 (₹29,200 - ₹92,300)",
    army: "Havildar",
    navy: "Petty Officer (PO)",
    airforce: "Sergeant",
    coastguard: "Pradhan Navik",
    capf: "Head Constable",
    police: "Assistant Sub-Inspector (ASI) / HC"
  },
  {
    level: "NCO",
    cpc: "Level 4 (₹25,500 - ₹81,100)",
    army: "Naik",
    navy: "Leading Seaman",
    airforce: "Corporal",
    coastguard: "Uttam Navik",
    capf: "Head Constable (Junior)",
    police: "Head Constable (HC) / Senior Constable"
  },
  {
    level: "Junior NCO / Sepoy",
    cpc: "Level 3 (₹21,700 - ₹69,100)",
    army: "Sepoy / Lance Naik",
    navy: "Seaman",
    airforce: "Aircraftman / LAC",
    coastguard: "Navik (GD)",
    capf: "Constable (GD)",
    police: "Police Constable (PC)"
  }
];

export const specialBadges = [
  {
    id: "marcos",
    name: "MARCOS (Marine Commandos)",
    force: "Indian Navy",
    hindiName: "मार्कोस (मरीन कमांडो)",
    motto: "The Few The Fearless",
    image: "badges/marcos.png",
    type: "Maritime Special Operations Force",
    description: "The elite special operations unit of the Indian Navy, trained in sea-air-land combat, direct action, hostage rescue, and amphibious counter-terror operations. Nicknamed 'Dadiwala Fauj' (Bearded Army) by adversaries.",
    established: "1987 (Operation Pawan, Kargil, 26/11 Mumbai, Anti-Piracy Gulf of Aden)",
    capabilities: "Combat free-fall, underwater demolition, midget submarine operations, counter-piracy VBSS."
  },
  {
    id: "garud",
    name: "Garud Commando Force",
    force: "Indian Air Force",
    hindiName: "गरुड़ कमांडो फोर्स",
    motto: "प्रहार से रक्षा (Defense Through Strike)",
    image: "badges/garud.png",
    type: "Airborne Special Forces",
    description: "The special forces unit of the Indian Air Force tasked with counter-terrorist operations, airfield defense, deep combat search and rescue (CSAR), laser designating enemy targets, and airborne infiltration.",
    established: "2004 following terror attacks on airbases",
    capabilities: "HALO/HAHO jumps, sniper reconnaissance, radar suppression, anti-hijack strike."
  },
  {
    id: "nsg-badge",
    name: "National Security Guard (NSG - Black Cats)",
    force: "Ministry of Home Affairs / Inter-Services",
    hindiName: "राष्ट्रीय सुरक्षा गार्ड (ब्लैक कैट्स)",
    motto: "सर्वत्र सर्वोत्तम सुरक्षा (Omnipresent Omnipotent Security)",
    image: "capf/nsg_flag.svg",
    type: "Federal Contingency Counter-Terrorist Force",
    description: "India's premier federal counter-terrorist and hostage-rescue force drawing personnel from the Indian Army (51 & 52 Special Action Groups) and CAPF (Special Ranger Groups). Famously neutralized terrorists in Operation Black Tornado (26/11 Mumbai).",
    established: "1984 under the National Security Guard Act",
    capabilities: "Building intervention, aircraft anti-hijacking, counter-IED bomb disposal, VIP close protection."
  },
  {
    id: "cds-crest",
    name: "Tri-Services Integrated Command",
    force: "HQ Integrated Defence Staff",
    hindiName: "एकीकृत रक्षा स्टाफ मुख्यालय",
    motto: "Victory Through Jointness",
    image: "assets/cds_seal.svg",
    type: "Unified Military Command",
    description: "The joint staff organization enabling seamless synergy between the Indian Army, Navy, and Air Force under the guidance of the Chief of Defence Staff.",
    established: "2001 (Post Kargil Review)",
    capabilities: "Strategic planning, joint theatre command operationalization, unified cyber and space defence."
  }
];
