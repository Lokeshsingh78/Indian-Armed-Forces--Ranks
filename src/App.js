import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [currentForce, setCurrentForce] = useState('army');
  const [currentRankIndex, setCurrentRankIndex] = useState(0);
  const [modalActive, setModalActive] = useState(false);

  const ranksData = {
    army: [
      {
        id: "field-marshal",
        name: "Field Marshal",
        insigniaUrl: "army/FieldMarshal.png", 
        description: "Field Marshal is the highest rank in the Indian Army. It is an honorary rank and has been given only twice in the history of independent India.",
        responsibilities: [
            "Ceremonial position representing the highest military honor",
            "Strategic advisor to government on defense matters",
            "Representational duties at the highest international levels"
        ],
        history: "Only two officers have held this rank: Field Marshal SHFJ Manekshaw and Field Marshal KM Cariappa, as recognition of their exceptional service.",
        eligibility: "This is a ceremonial rank conferred for exceptional service of the highest order, typically given to a General after retirement.",
        equivalents: "Marshal of the Air Force (IAF), Admiral of the Fleet (Indian Navy)"
    },
    {
        id: "general",
        name: "General",
        insigniaUrl: "army/General.gif",
        description: "General is a four-star rank and the highest active operational rank in the Indian Army. The Chief of Army Staff holds this rank.",
        responsibilities: [
            "Command of the entire Army",
            "Strategic planning for national defense",
            "Military advisor to the government",
            "Coordination with other military branches"
        ],
        history: "The rank of General has been an integral part of the Indian Army since independence, representing the highest operational leadership position.",
        eligibility: "Officers reach this rank after approximately 40 years of distinguished service, typically after serving as Vice Chief of Army Staff or Army Commander.",
        equivalents: "Air Chief Marshal (IAF), Admiral (Indian Navy)"
    },
    {
        id: "lieutenant-general",
        name: "Lieutenant General",
        insigniaUrl: "army/Lieutenant-General.gif",
        description: "Lieutenant General is a three-star rank in the Indian Army. Officers at this rank command Army Corps, serve as Principal Staff Officers at Army HQ, or head training establishments.",
        responsibilities: [
            "Command of an Army Corps (consisting of two or more divisions)",
            "Serve as Army Commanders of the seven commands",
            "Hold positions like Vice Chief of Army Staff",
            "Command key training institutions"
        ],
        history: "The rank has evolved from the British military system and has been an essential part of the Army's command structure since independence.",
        eligibility: "Officers typically reach this rank after 35-36 years of service, having successfully commanded a division.",
        equivalents: "Air Marshal (IAF), Vice Admiral (Indian Navy)"
    },
    {
        id: "major-general",
        name: "Major General",
        insigniaUrl: "army/Major-General.gif",
        description: "Major General is a two-star rank in the Indian Army. Officers at this rank typically command divisions consisting of multiple brigades.",
        responsibilities: [
            "Command of a Division (approximately 15,000 soldiers)",
            "Area or sub-area command responsibilities",
            "Strategic planning for divisional operations",
            "Coordination with higher command and civil authorities"
        ],
        history: "The rank has been an integral part of the Indian Army's command structure since its organization under British rule and continued after independence.",
        eligibility: "Officers reach this rank after approximately 30-32 years of service, having successfully commanded a brigade.",
        equivalents: "Air Vice Marshal (IAF), Rear Admiral (Indian Navy)"
    },
    {
        id: "brigadier",
        name: "Brigadier",
        insigniaUrl: "army/Brigadier.gif",
        description: "Brigadier is a one-star rank in the Indian Army. Officers at this rank command brigades consisting of multiple battalions.",
        responsibilities: [
            "Command of a Brigade (3-4 battalions, approximately 3,000-5,000 soldiers)",
            "Planning and execution of tactical operations",
            "Coordination between battalion and divisional operations",
            "Resource management and troop welfare"
        ],
        history: "The rank was earlier known as Brigadier General and was simplified to Brigadier after independence while maintaining its position in the hierarchy.",
        eligibility: "Officers reach this rank after approximately 25-28 years of service, having successfully commanded a battalion or regiment.",
        equivalents: "Air Commodore (IAF), Commodore (Indian Navy)"
    },
    {
        id: "colonel",
        name: "Colonel",
        insigniaUrl: "army/Colonel.gif",
        description: "Colonel is a senior rank in the Indian Army. Officers at this rank command regiments or serve as staff officers at division, corps, or army headquarters.",
        responsibilities: [
            "Command of a regiment",
            "Staff appointments at division or corps level",
            "Training establishment roles",
            "Administrative and logistical planning"
        ],
        history: "The rank has historical significance dating back to medieval Europe, where a Colonel was the leader of a column of troops.",
        eligibility: "Officers reach this rank after approximately 20-22 years of service.",
        equivalents: "Group Captain (IAF), Captain (Indian Navy)"
    },
    {
        id: "lieutenant-colonel",
        name: "Lieutenant Colonel",
        insigniaUrl: "army/Lieutenant-Colonel.gif",
        description: "Lieutenant Colonel is a rank in the Indian Army. Officers at this rank typically command battalions consisting of approximately 800 soldiers.",
        responsibilities: [
            "Command of a battalion",
            "Staff appointments at brigade or division level",
            "Training and administrative roles",
            "Planning and execution of tactical operations"
        ],
        history: "The rank evolved from the need for a second-in-command to the Colonel, hence the prefix 'Lieutenant'.",
        eligibility: "Officers reach this rank after approximately 15-17 years of service.",
        equivalents: "Wing Commander (IAF), Commander (Indian Navy)"
    },
    {
        id: "major",
        name: "Major",
        insigniaUrl: "army/Major.gif",
        description: "Major is a field grade rank in the Indian Army. Officers at this rank serve as company commanders or staff officers at battalion or brigade level.",
        responsibilities: [
            "Command of a company (approximately 120-150 soldiers)",
            "Staff officer at battalion or brigade headquarters",
            "Training and administrative duties",
            "Specialized roles in various corps"
        ],
        history: "The rank of Major has been a standard field officer rank in many armies throughout history.",
        eligibility: "Officers reach this rank after approximately 10-11 years of service.",
        equivalents: "Squadron Leader (IAF), Lieutenant Commander (Indian Navy)"
    },
    {
        id: "captain",
        name: "Captain",
        insigniaUrl: "army/Captain.gif",
        description: "Captain is a junior officer rank in the Indian Army. Officers at this rank typically lead companies or serve as staff officers at battalion level.",
        responsibilities: [
            "Company second-in-command or company commander",
            "Staff officer at battalion headquarters",
            "Specialized roles in various corps",
            "Training of junior officers and soldiers"
        ],
        history: "The rank of Captain traditionally refers to the officer who leads a company-sized unit.",
        eligibility: "Officers reach this rank after approximately 6-7 years of service.",
        equivalents: "Flight Lieutenant (IAF), Lieutenant (Indian Navy)"
    },
    {
        id: "lieutenant",
        name: "Lieutenant",
        insigniaUrl: "army/Lieutenant.gif",
        description: "Lieutenant is a junior officer rank in the Indian Army. Officers at this rank typically lead platoons or serve as staff officers.",
        responsibilities: [
            "Platoon commander (30-40 soldiers)",
            "Staff officer duties",
            "Training and administrative roles",
            "Specialized roles in various corps"
        ],
        history: "The term 'Lieutenant' comes from French, meaning 'placeholder', as they traditionally acted in place of a captain when needed.",
        eligibility: "Officers reach this rank after approximately 2-3 years of service.",
        equivalents: "Flying Officer (IAF), Sub Lieutenant (Indian Navy)"
    },
        {
            id: "subedar-major",
            name: "Subedar Major",
            insigniaUrl: "army/Subedar-Major.gif",
            description: "Subedar Major is the senior-most rank among Junior Commissioned Officers (JCOs) in the Indian Army, acting as a key link between officers and enlisted personnel.",
            responsibilities: [
                "Senior advisor to commanding officers",
                "Mentorship and training of JCOs and NCOs",
                "Maintaining discipline and morale",
                "Representing enlisted personnel in administrative matters"
            ],
            history: "The rank originates from the British Indian Army and has been a vital leadership position in battalions.",
            eligibility: "Promoted from Subedar based on seniority and performance.",
            equivalents: "Master Chief Petty Officer (Indian Navy), Master Warrant Officer (IAF)"
        },
        {
            id: "subedar",
            name: "Subedar",
            insigniaUrl: "army/Subedar.gif",
            description: "Subedar is a Junior Commissioned Officer (JCO) rank in the Indian Army, responsible for leading platoons and managing administrative duties.",
            responsibilities: [
                "Commanding a platoon",
                "Supervising junior officers and enlisted personnel",
                "Administrative and operational leadership",
                "Training and mentoring soldiers"
            ],
            history: "The rank was established during the British era and remains an important leadership position in the Indian Army.",
            eligibility: "Promoted from Naib Subedar based on experience and leadership skills.",
            equivalents: "Chief Petty Officer (Indian Navy), Warrant Officer (IAF)"
        },
        {
            id: "naib-subedar",
            name: "Naib Subedar",
            insigniaUrl: "army/Naib-Subedar.gif",
            description: "Naib Subedar is the lowest Junior Commissioned Officer (JCO) rank in the Indian Army, responsible for small unit leadership and training.",
            responsibilities: [
                "Leading small units and sections",
                "Providing tactical and training support",
                "Assisting in administrative duties",
                "Maintaining discipline and morale"
            ],
            history: "Introduced in the British Indian Army, the rank continues to serve as a key link between officers and enlisted soldiers.",
            eligibility: "Promoted from Havildar based on service and merit.",
            equivalents: "Petty Officer (Indian Navy), Junior Warrant Officer (IAF)"
        },
        {
            id: "havildar",
            name: "Havildar",
            insigniaUrl: "army/Havildar.gif",
            description: "Havildar is a Non-Commissioned Officer (NCO) rank in the Indian Army, responsible for supervising soldiers and executing orders from JCOs.",
            responsibilities: [
                "Leading squads and managing unit discipline",
                "Training junior soldiers",
                "Executing operational tasks",
                "Assisting in logistics and administration"
            ],
            history: "The rank dates back to the Mughal and British Indian Army periods, serving as a vital leadership position among enlisted soldiers.",
            eligibility: "Promoted from Naik based on performance and experience.",
            equivalents: "Leading Seaman (Indian Navy), Sergeant (IAF)"
        },
        {
            id: "naik",
            name: "Naik",
            insigniaUrl: "army/Naik.gif",
            description: "Naik is a junior Non-Commissioned Officer (NCO) rank in the Indian Army, assisting Havildars and leading small teams.",
            responsibilities: [
                "Leading small teams and units",
                "Executing orders from Havildars and JCOs",
                "Training and mentoring soldiers",
                "Carrying out tactical operations"
            ],
            history: "The rank was traditionally used in the British Indian Army and continues in the Indian Army as a supervisory role.",
            eligibility: "Promoted from Lance Naik based on service record.",
            equivalents: "Leading Seaman (Indian Navy), Corporal (IAF)"
        },
        {
            id: "lance-naik",
            name: "Lance Naik",
            insigniaUrl: "army/Lance-Naik.gif",
            description: "Lance Naik is the lowest Non-Commissioned Officer (NCO) rank in the Indian Army, assisting Naiks and commanding small groups.",
            responsibilities: [
                "Supporting Naiks and Havildars",
                "Leading small squads in combat and training",
                "Executing specific operational and administrative tasks",
                "Assisting in logistics"
            ],
            history: "The rank originated in colonial times and remains a step toward leadership in the Indian Army.",
            eligibility: "Promoted from Sepoy based on merit and experience.",
            equivalents: "Leading Seaman (Indian Navy), Corporal (IAF)"
        },
        {
            id: "sepoy",
            name: "Sepoy",
            insigniaUrl: "army/Sepoy.gif",
            description: "Sepoy is the entry-level rank in the Indian Army, responsible for executing orders and participating in combat and operational duties.",
            responsibilities: [
                "Carrying out general duties and combat roles",
                "Following orders from NCOs and JCOs",
                "Participating in training and drills",
                "Supporting operational and logistical tasks"
            ],
            history: "The term 'Sepoy' dates back to the Mughal and British Indian Army eras, referring to regular foot soldiers.",
            eligibility: "Assigned upon enlistment in the Indian Army.",
            equivalents: "Seaman II (Indian Navy), Aircraftman (IAF)"
        } 
],
airforce: [
    {
        id: "marshal-of-the-air-force",
        name: "Marshal of the Air Force",
        insigniaUrl: "airforce/Rank-Marshal-Air-Force.gif",
        description: "Marshal of the Air Force is the highest rank in the Indian Air Force. It is an honorary rank that has been awarded only once in history.",
        responsibilities: [
            "Ceremonial position representing the highest air force honor",
            "Strategic advisor to government on aerial defense matters",
            "Representational duties at the highest international levels"
        ],
        history: "Only one officer has held this rank: Marshal of the Air Force Arjan Singh, as recognition of his exceptional service during the 1965 Indo-Pak war and his contribution to the IAF.",
        eligibility: "This is a ceremonial rank conferred for exceptional service of the highest order, typically given to an Air Chief Marshal after retirement.",
        equivalents: "Field Marshal (Indian Army), Admiral of the Fleet (Indian Navy)"
    },
    {
        id: "air-chief-marshal",
        name: "Air Chief Marshal",
        insigniaUrl: "airforce/Rank-Air-Chief-Marshal.gif",
        description: "Air Chief Marshal is a four-star rank and the highest active operational rank in the Indian Air Force. The Chief of Air Staff holds this rank.",
        responsibilities: [
            "Command of the entire Air Force",
            "Strategic planning for air defense",
            "Military advisor to the government on air operations",
            "Coordination with other military branches"
        ],
        history: "The rank has been an integral part of the IAF since independence, representing the highest operational leadership position.",
        eligibility: "Officers reach this rank after approximately 40 years of distinguished service.",
        equivalents: "General (Indian Army), Admiral (Indian Navy)"
    },
    {
        id: "air-marshal",
        name: "Air Marshal",
        insigniaUrl: "airforce/Rank-Air-Marshal.gif",
        description: "Air Marshal is a three-star rank in the Indian Air Force. Officers at this rank command operational commands or serve as Principal Staff Officers at Air HQ.",
        responsibilities: [
            "Command of an operational air command",
            "Air Officer Commanding-in-Chief of various commands",
            "Vice Chief of Air Staff position",
            "Command of training establishments"
        ],
        history: "The rank has evolved from the Royal Air Force system and has been an essential part of the IAF's command structure since independence.",
        eligibility: "Officers typically reach this rank after 35-36 years of service.",
        equivalents: "Lieutenant General (Indian Army), Vice Admiral (Indian Navy)"
    },
    {
        id: "air-vice-marshal",
        name: "Air Vice Marshal",
        insigniaUrl: "airforce/Rank-Air-Vice-Marshal.gif",
        description: "Air Vice Marshal is a two-star rank in the Indian Air Force. Officers at this rank typically command air force groups or serve as senior staff officers.",
        responsibilities: [
            "Command of an air force group",
            "Senior staff positions at command headquarters",
            "Operational planning and resource allocation",
            "Training and administration of air bases"
        ],
        history: "The rank has been an integral part of the IAF's command structure since its organization under British influence and continued after independence.",
        eligibility: "Officers reach this rank after approximately 30-32 years of service.",
        equivalents: "Major General (Indian Army), Rear Admiral (Indian Navy)"
    },
    {
        id: "air-commodore",
        name: "Air Commodore",
        insigniaUrl: "airforce/Rank-Air-Commodore.gif",
        description: "Air Commodore is a one-star rank in the Indian Air Force. Officers at this rank command air force wings or stations.",
        responsibilities: [
            "Command of an air force station or wing",
            "Planning and execution of air operations",
            "Resource management and personnel administration",
            "Coordination with higher command"
        ],
        history: "The rank has evolved from the Royal Air Force system and has been an essential part of the IAF's command structure since independence.",
        eligibility: "Officers reach this rank after approximately 25-28 years of service.",
        equivalents: "Brigadier (Indian Army), Commodore (Indian Navy)"
    },
    {
        id: "group-captain",
        name: "Group Captain",
        insigniaUrl: "airforce/Rank-Group-Captain.gif",
        description: "Group Captain is a senior rank in the Indian Air Force. Officers at this rank command air force stations or serve as senior staff officers.",
        responsibilities: [
            "Command of an air force station",
            "Staff appointments at command headquarters",
            "Training establishment roles",
            "Administrative and operational planning"
        ],
        history: "The rank has historical roots in the Royal Air Force where it was created as an equivalent to Colonel in the Army.",
        eligibility: "Officers reach this rank after approximately 20-22 years of service.",
        equivalents: "Colonel (Indian Army), Captain (Indian Navy)"
    },
    {
        id: "wing-commander",
        name: "Wing Commander",
        insigniaUrl: "airforce/Rank-Wing-Commander.gif",
        description: "Wing Commander is a rank in the Indian Air Force. Officers at this rank typically command wings or squadrons.",
        responsibilities: [
            "Command of a flying wing",
            "Command of multiple squadrons",
            "Staff appointments at air force stations",
            "Training and administrative roles"
        ],
        history: "The rank originated in the Royal Air Force, where it denoted the commander of a wing of aircraft.",
        eligibility: "Officers reach this rank after approximately 15-17 years of service.",
        equivalents: "Lieutenant Colonel (Indian Army), Commander (Indian Navy)"
    },
    {
        id: "squadron-leader",
        name: "Squadron Leader",
        insigniaUrl: "airforce/Rank-Squadron-Leader.gif",
        description: "Squadron Leader is a rank in the Indian Air Force. Officers at this rank typically command squadrons or serve as staff officers.",
        responsibilities: [
            "Command of a squadron",
            "Flight commander duties",
            "Staff officer at wing or station headquarters",
            "Specialized roles in various branches"
        ],
        history: "The rank originated in the Royal Air Force, where it denoted the commander of a squadron of aircraft.",
        eligibility: "Officers reach this rank after approximately 10-11 years of service.",
        equivalents: "Major (Indian Army), Lieutenant Commander (Indian Navy)"
    },
    {
        id: "flight-lieutenant",
        name: "Flight Lieutenant",
        insigniaUrl: "airforce/Rank-Flight-Lieutenant.gif",
        description: "Flight Lieutenant is a junior officer rank in the Indian Air Force. Officers at this rank typically serve as flight commanders or staff officers.",
        responsibilities: [
            "Flight commander duties",
            "Aircraft pilot or navigator",
            "Staff officer at squadron level",
            "Specialized roles in various branches"
        ],
        history: "The rank originated in the Royal Air Force, where it denoted an officer who commanded a flight of aircraft.",
        eligibility: "Officers reach this rank after approximately 6-7 years of service.",
        equivalents: "Captain (Indian Army), Lieutenant (Indian Navy)"
    },
    {
        id: "flying-officer",
        name: "Flying Officer",
        insigniaUrl: "airforce/Rank-Flying-Officer.gif",
        description: "Flying Officer is a junior officer rank in the Indian Air Force. Officers at this rank typically serve as pilots or in specialized roles.",
        responsibilities: [
            "Aircraft pilot or navigator",
            "Staff officer duties",
            "Training and administrative roles",
            "Specialized roles in various branches"
        ],
        history: "The rank originated in the Royal Air Force, where it was created as an equivalent to Lieutenant in the Army.",
        eligibility: "Officers reach this rank after approximately 2-3 years of service.",
        equivalents: "Lieutenant (Indian Army), Sub Lieutenant (Indian Navy)"
    },
    {
        id: "master-warrant-officer",
        name: "Master Warrant Officer",
        insigniaUrl: "airforce/Rank-MWO.jpg",
        description: "Master Warrant Officer is a senior non-commissioned rank in the Indian Air Force, responsible for providing leadership and expertise in technical and operational roles.",
        responsibilities: [
            "Supervising enlisted personnel",
            "Providing technical and leadership expertise",
            "Advising officers on operational matters",
            "Mentoring junior airmen"
        ],
        history: "The rank has evolved to recognize highly skilled and experienced non-commissioned officers who play a crucial role in the IAF.",
        eligibility: "Reached through promotions based on experience and performance.",
        equivalents: "Subedar Major (Indian Army), Sub Lieutenant (Indian Navy)"
        },
        {
            "id": "warrant-officer",
            "name": "Warrant Officer",
            "insigniaUrl": "airforce/Rank-WO.jpg",
            "description": "A senior non-commissioned rank in the Indian Air Force, overseeing enlisted personnel and assisting in operations.",
            "responsibilities": [
                "Supervising enlisted personnel",
                "Assisting officers in operational duties",
                "Technical and administrative support",
                "Training and mentoring junior ranks"
            ],
            "history": "The rank originated in the British Armed Forces as a senior non-commissioned officer position.",
            "eligibility": "Attained through promotions based on service and experience.",
            "equivalents": "Subedar (Indian Army), Master Chief Petty Officer (Indian Navy)"
        },
        {
            "id": "junior-warrant-officer",
            "name": "Junior Warrant Officer",
            "insigniaUrl": "airforce/Rank-JWO.jpg",
            "description": "A senior non-commissioned rank in the Indian Air Force, responsible for technical and leadership duties.",
            "responsibilities": [
                "Supervising technical and operational tasks",
                "Assisting in leadership and training",
                "Administrative responsibilities",
                "Mentoring junior enlisted personnel"
            ],
            "history": "The rank evolved from the British Armed Forces' system of warrant officers.",
            "eligibility": "Achieved through promotions based on experience and performance.",
            "equivalents": "Naib Subedar (Indian Army), Chief Petty Officer (Indian Navy)"
        },
        {
            "id": "sergeant",
            "name": "Sergeant",
            "insigniaUrl": "airforce/Rank-Sergeant.gif",
            "description": "A non-commissioned officer rank responsible for supervising junior personnel and technical duties.",
            "responsibilities": [
                "Supervising junior enlisted personnel",
                "Technical and operational duties",
                "Training responsibilities",
                "Assisting in administrative tasks"
            ],
            "history": "The rank has its origins in military structures worldwide, signifying an experienced enlisted leader.",
            "eligibility": "Earned through promotion based on service and performance.",
            "equivalents": "Havildar (Indian Army), Petty Officer (Indian Navy)"
        },
        {
            "id": "corporal",
            "name": "Corporal",
            "insigniaUrl": "airforce/Rank-Corporal.gif",
            "description": "A junior non-commissioned officer rank assisting in technical and administrative duties.",
            "responsibilities": [
                "Assisting in training and supervision",
                "Technical support and maintenance duties",
                "Administrative tasks",
                "Ensuring discipline among lower ranks"
            ],
            "history": "The rank originated in European military structures, signifying a leadership position among enlisted personnel.",
            "eligibility": "Promoted based on experience and performance.",
            "equivalents": "Lance Naik (Indian Army), Leading Seaman (Indian Navy)"
        },
        {
            "id": "leading-aircraftman",
            "name": "Leading Aircraftman",
            "insigniaUrl": "airforce/Rank-Leading-Aircraftsman.gif",
            "description": "An enlisted rank above Aircraftman, responsible for assisting in basic operational duties.",
            "responsibilities": [
                "Assisting in technical and operational duties",
                "Supporting senior enlisted personnel",
                "Basic training responsibilities",
                "Carrying out orders from superiors"
            ],
            "history": "The rank originated in the Royal Air Force as a senior enlisted designation.",
            "eligibility": "Achieved through experience and satisfactory performance.",
            "equivalents": "Sepoy (Indian Army), Able Seaman (Indian Navy)"
        },
        {
            "id": "aircraftman",
            "name": "Aircraftman",
            "insigniaUrl": "airforce/Aircraftman.png",
            "description": "The lowest rank in the Indian Air Force, typically held by new recruits undergoing training.",
            "responsibilities": [
                "Basic training duties",
                "Assisting in ground operations",
                "Supporting technical and administrative tasks",
                "Learning Air Force protocols and procedures"
            ],
            "history": "The rank originated in the Royal Air Force as an entry-level designation for new recruits.",
            "eligibility": "Assigned upon enlistment in the Indian Air Force.",
            "equivalents": "Sepoy (Indian Army), Seaman (Indian Navy)"
        } 
],
navy: [
    {
        id: "admiral-of-the-fleet",
        name: "Admiral of the Fleet",
        insigniaUrl: "navy/Admiral-of-the-Fleet.png",
        description: "Admiral of the Fleet is the highest rank in the Indian Navy. It is an honorary rank that has not been awarded to any officer yet.",
        responsibilities: [
            "Ceremonial position representing the highest naval honor",
            "Strategic advisor to government on maritime defense matters",
            "Representational duties at the highest international levels"
        ],
        history: "This rank has been established but has not been awarded to any officer in the Indian Navy to date.",
        eligibility: "This would be a ceremonial rank conferred for exceptional service of the highest order, typically given to an Admiral after retirement.",
        equivalents: "Field Marshal (Indian Army), Marshal of the Air Force (IAF)"
    },
    {
        id: "admiral",
        name: "Admiral",
        insigniaUrl: "navy/Admiral.gif",
        description: "Admiral is a four-star rank and the highest active operational rank in the Indian Navy. The Chief of Naval Staff holds this rank.",
        responsibilities: [
            "Command of the entire Navy",
            "Strategic planning for maritime defense",
            "Military advisor to the government on naval operations",
            "Coordination with other military branches"
        ],
        history: "The rank has been an integral part of the Indian Navy since independence, representing the highest operational leadership position.",
        eligibility: "Officers reach this rank after approximately 40 years of distinguished service.",
        equivalents: "General (Indian Army), Air Chief Marshal (IAF)"
    },
    {
        id: "vice-admiral",
        name: "Vice Admiral",
        insigniaUrl: "navy/Vice-Admiral.gif",
        description: "Vice Admiral is a three-star rank in the Indian Navy. Officers at this rank command naval commands or serve as Principal Staff Officers at Naval HQ.",
        responsibilities: [
            "Command of a naval command",
            "Flag Officer Commanding-in-Chief of various commands",
            "Vice Chief of Naval Staff position",
            "Command of training establishments"
        ],
        history: "The rank has evolved from the Royal Navy system and has been an essential part of the Indian Navy's command structure since independence.",
        eligibility: "Officers typically reach this rank after 35-36 years of service.",
        equivalents: "Lieutenant General (Indian Army), Air Marshal (IAF)"
    },
    {
        id: "rear-admiral",
        name: "Rear Admiral",
        insigniaUrl: "navy/Rear-Admiral.gif",
        description: "Rear Admiral is a two-star rank in the Indian Navy. Officers at this rank typically command naval areas or serve as senior staff officers.",
        responsibilities: [
            "Command of a naval area",
            "Senior staff positions at command headquarters",
            "Operational planning and resource allocation",
            "Training and administration of naval bases"
        ],
        history: "The rank has been an integral part of the Indian Navy's command structure since its organization under British influence and continued after independence.",
        eligibility: "Officers reach this rank after approximately 30-32 years of service.",
        equivalents: "Major General (Indian Army), Air Vice Marshal (IAF)"
    },
    {
        id: "commodore",
        name: "Commodore",
        insigniaUrl: "navy/Commodore.gif",
        description: "Commodore is a one-star rank in the Indian Navy. Officers at this rank command naval stations or flotillas.",
        responsibilities: [
            "Command of a naval station or flotilla",
            "Planning and execution of naval operations",
            "Resource management and personnel administration",
            "Coordination with higher command"
        ],
        history: "The rank has evolved from the Royal Navy system and has been an essential part of the Indian Navy's command structure since independence.",
        eligibility: "Officers reach this rank after approximately 25-28 years of service.",
        equivalents: "Brigadier (Indian Army), Air Commodore (IAF)"
    },
    {
        id: "captain",
        name: "Captain",
        insigniaUrl: "navy/Captain.gif",
        description: "Captain is a senior rank in the Indian Navy. Officers at this rank command ships or naval establishments.",
        responsibilities: [
            "Command of a major warship",
            "Command of a naval establishment",
            "Staff appointments at command headquarters",
            "Training establishment roles"
        ],
        history: "The rank has historical significance dating back centuries, where a Captain was the officer who commanded a ship of the line.",
        eligibility: "Officers reach this rank after approximately 20-22 years of service.",
        equivalents: "Colonel (Indian Army), Group Captain (IAF)"
    },
    {
        id: "commander",
        name: "Commander",
        insigniaUrl: "navy/Commander.gif",
        description: "Commander is a rank in the Indian Navy. Officers at this rank command smaller ships or serve as executive officers on larger vessels.",
        responsibilities: [
            "Command of a frigate or smaller vessel",
            "Executive Officer on a major warship",
            "Staff appointments at naval bases",
            "Training and administrative roles"
        ],
        history: "The rank has historical roots in naval traditions, where Commanders were officers who commanded smaller vessels or served as seconds-in-command.",
        eligibility: "Officers reach this rank after approximately 15-17 years of service.",
        equivalents: "Lieutenant Colonel (Indian Army), Wing Commander (IAF)"
    },
    {
        id: "lieutenant-commander",
        name: "Lieutenant Commander",
        insigniaUrl: "navy/Lieutenant-Commander.gif",
        description: "Lieutenant Commander is a rank in the Indian Navy. Officers at this rank typically command small vessels or serve as department heads on larger ships.",
        responsibilities: [
            "Command of a patrol craft or auxiliary vessel",
            "Department Head on a major warship",
            "Staff officer at naval bases",
            "Specialized roles in various branches"
        ],
        history: "The rank evolved as a position between Lieutenant and Commander, reflecting increased responsibilities and experience.",
        eligibility: "Officers reach this rank after approximately 10-11 years of service.",
        equivalents: "Major (Indian Army), Squadron Leader (IAF)"
    },
    {
        id: "lieutenant",
        name: "Lieutenant",
        insigniaUrl: "navy/Lieutenant.gif",
        description: "Lieutenant is a junior officer rank in the Indian Navy. Officers at this rank typically serve as division officers on ships or in specialized roles.",
        responsibilities: [
            "Division Officer on a ship",
            "Officer of the Watch duties",
            "Staff officer at naval establishments",
            "Specialized roles in various branches"
        ],
        history: "The rank has long naval traditions, where Lieutenants were officers who 'held the place' (lieu tenant) of the Captain when needed.",
        eligibility: "Officers reach this rank after approximately 6-7 years of service.",
        equivalents: "Captain (Indian Army), Flight Lieutenant (IAF)"
    },
    {
        id: "sub-lieutenant",
        name: "Sub Lieutenant",
        insigniaUrl: "navy/Sub-Lieutenant.gif",
        description: "Sub Lieutenant is a junior officer rank in the Indian Navy. Officers at this rank typically serve as division officers under training or in specialized roles.",
        responsibilities: [
            "Junior Division Officer on a ship",
            "Under-training officer",
            "Staff officer duties",
            "Specialized roles in various branches"
        ],
        history: "The rank originated in naval traditions as a junior grade of Lieutenant.",
        eligibility: "Officers reach this rank after approximately 2-3 years of service.",
        equivalents: "Lieutenant (Indian Army), Flying Officer (IAF)"
    },
    {
        id: "master-chief-petty-officer-1st-class",
        name: "Master Chief Petty Officer 1st Class",
        insigniaUrl: "navy/MCPO-I.gif",
        description: "Master Chief Petty Officer 1st Class is a senior-most non-commissioned rank in the Indian Navy, responsible for overseeing enlisted personnel and providing strategic guidance.",
        responsibilities: [
            "Supervising senior enlisted personnel",
            "Providing strategic leadership and technical expertise",
            "Advising officers on enlisted matters",
            "Mentoring and training junior sailors"
        ],
        history: "The rank evolved to provide experienced leadership among senior enlisted personnel in naval forces worldwide.",
        eligibility: "Reached through extensive service and exceptional leadership performance.",
        equivalents: "Honorary Captain (Indian Army), Master Warrant Officer (IAF)"
    },
    {
        id: "master-chief-petty-officer-2nd-class",
        name: "Master Chief Petty Officer 2nd Class",
        insigniaUrl: "navy/MCPO-II.gif",
        description: "Master Chief Petty Officer 2nd Class is a senior non-commissioned rank in the Indian Navy, responsible for leading enlisted personnel and managing technical operations.",
        responsibilities: [
            "Supervising enlisted personnel",
            "Providing technical and operational leadership",
            "Advising officers on enlisted matters",
            "Mentoring junior sailors"
        ],
        history: "The rank was established to recognize experienced non-commissioned officers with leadership responsibilities.",
        eligibility: "Reached through long-term service and demonstrated leadership skills.",
        equivalents: "Subedar Major (Indian Army), Warrant Officer (IAF)"
    },
    {
        id: "chief-petty-officer",
        name: "Chief Petty Officer",
        insigniaUrl: "navy/CPO.gif",
        description: "Chief Petty Officer is a non-commissioned rank in the Indian Navy, responsible for leading small teams and technical operations.",
        responsibilities: [
            "Supervising technical and operational teams",
            "Providing leadership and training",
            "Assisting in administrative and operational tasks",
            "Acting as a bridge between officers and enlisted sailors"
        ],
        history: "The rank evolved from the need for experienced technical leaders at sea.",
        eligibility: "Reached through promotions based on performance and experience.",
        equivalents: "Naib Subedar (Indian Army), Junior Warrant Officer (IAF)"
    },
    {
        id: "petty-officer",
        name: "Petty Officer",
        insigniaUrl: "navy/Petty-Officer.gif",
        description: "Petty Officer is a junior non-commissioned rank in the Indian Navy, responsible for technical duties and team leadership.",
        responsibilities: [
            "Supervising small teams and technical operations",
            "Assisting in administrative responsibilities",
            "Providing training and mentoring",
            "Supporting operational duties"
        ],
        history: "The rank has its origins in naval systems worldwide as a leadership position for experienced enlisted personnel.",
        eligibility: "Promoted based on service and leadership performance.",
        equivalents: "Havildar (Indian Army), Sergeant (IAF)"
    },
    {
        id: "leading-seaman",
        name: "Leading Seaman",
        insigniaUrl: "navy/Leading-Seaman.gif",
        description: "Leading Seaman is a junior enlisted rank in the Indian Navy, responsible for supporting naval operations and assisting senior personnel.",
        responsibilities: [
            "Assisting in technical and operational tasks",
            "Training junior sailors",
            "Carrying out maintenance duties",
            "Supporting senior enlisted ranks"
        ],
        history: "The rank originated as a leadership position among enlisted sailors.",
        eligibility: "Reached through experience and satisfactory performance.",
        equivalents: "Lance Naik (Indian Army), Corporal (IAF)"
    },
    {
        id: "seaman-i",
        name: "Seaman I",
        insigniaUrl: "navy/No-insignia.png",
        description: "Seaman I is an enlisted rank in the Indian Navy, responsible for performing general duties and assisting in shipboard operations.",
        responsibilities: [
            "Performing general naval duties",
            "Assisting in ship operations and maintenance",
            "Following orders from senior personnel",
            "Undergoing training for advancement"
        ],
        history: "The rank has existed in naval forces worldwide as a standard enlisted designation.",
        eligibility: "Reached through experience and satisfactory performance.",
        equivalents: "Sepoy (Indian Army), Leading Aircraftman (IAF)"
    },
    {
        id: "seaman-ii",
        name: "Seaman II",
        insigniaUrl: "navy/No-insignia.png",
        description: "Seaman II is the lowest enlisted rank in the Indian Navy, typically held by new recruits undergoing training.",
        responsibilities: [
            "Basic training duties",
            "Assisting in ship maintenance",
            "Following senior personnel instructions",
            "Learning naval protocols and procedures"
        ],
        history: "The rank originated as an entry-level position in naval forces worldwide.",
        eligibility: "Assigned upon enlistment in the Indian Navy.",
        equivalents: "Sepoy (Indian Army), Aircraftman (IAF)"
      }
    ]
  };

  const displayRanks = (force) => {
    return ranksData[force].map((rank, index) => (
      <div 
        className={`rank-card ${force}-rank`} 
        key={rank.id}
        onClick={() => openRankModal(force, index)}
      >
        <div className="rank-header">
          <img src={rank.insigniaUrl} alt={`${rank.name} Insignia`} className="insignia-img" />
          <h3 className="rank-name">{rank.name}</h3>
        </div>
        <div className="rank-body">
          <p className="rank-details">{truncateText(rank.description, 100)}</p>
          <button className="view-more-btn">View Details</button>
        </div>
      </div>
    ));
  };

  const truncateText = (text, maxLength) => {
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
    if (currentRankIndex < ranksData[currentForce].length - 1) {
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
    e.preventDefault();
    const mainContent = document.querySelector(".main-content");
    const navHeight = document.querySelector(".forces-nav").offsetHeight;
    
    if (mainContent) {
      const targetScroll = mainContent.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({ top: targetScroll, behavior: "smooth" });
    }
  };

  const currentRank = ranksData[currentForce][currentRankIndex];

  return (
    <div className="page-container">
      <header className="main-header">
        <div className="header-logo">
          <img src="assets/Emblem.png" alt="Indian Emblem" id="mainLogo" />
        </div>
        <div className="header-text">
          <h1>Indian Armed Forces Ranks & Insignia</h1>
          <p>Decoding the Honor and Hierarchy of the Indian Army, Indian Air Force, and Indian Navy</p>
        </div>
      </header>
      
      <div className="forces-nav">
        <button 
          className={`force-btn army-btn ${currentForce === 'army' ? 'active' : ''}`} 
          data-force="army"
          onClick={(e) => {
            setCurrentForce('army');
            scrollToRanks(e);
          }}
        >
          <div className="force-logo">
            <img src="assets/IndianArmy.png" alt="Army Logo" className="branch-logo" />
          </div>
          <span>Indian Army</span>
        </button>
        
        <button 
          className={`force-btn airforce-btn ${currentForce === 'airforce' ? 'active' : ''}`} 
          data-force="airforce"
          onClick={(e) => {
            setCurrentForce('airforce');
            scrollToRanks(e);
          }}
        >
          <div className="force-logo">
            <img src="assets/Indian_Air_Force.png" alt="Air Force Logo" className="branch-logo" />
          </div>
          <span>Indian Air Force</span>
        </button>
        
        <button 
          className={`force-btn navy-btn ${currentForce === 'navy' ? 'active' : ''}`} 
          data-force="navy"
          onClick={(e) => {
            setCurrentForce('navy');
            scrollToRanks(e);
          }}
        >
          <div className="force-logo">
            <img src="assets/Indian_Navy.png" alt="Navy Logo" className="branch-logo" />
          </div>
          <span>Indian Navy</span>
        </button>
      </div>
      
      <main className="main-content">
        <div className="branch-description" id="branchDescription">
          {/* Branch description would be loaded here */}
        </div>
        <div className="ranks-container" id="ranksContainer">
          {displayRanks(currentForce)}
        </div>
      </main>
      
      <div className={`modal-overlay ${modalActive ? 'active' : ''}`} onClick={(e) => {
        if (e.target.className.includes('modal-overlay')) {
          closeModal();
        }
      }}>
        <div className={`modal ${currentForce}-modal`}>
          <div className="modal-header">
            <h2 className="modal-title">
              <img src={currentRank?.insigniaUrl} alt="Insignia" className="modal-insignia" />
              <span>{currentRank?.name}</span>
            </h2>
            <button className="modal-close" onClick={closeModal}>×</button>
          </div>
          <div className="modal-body">
            <div className="modal-section">
              <h3 className="modal-section-title">Description</h3>
              <p>{currentRank?.description}</p>
            </div>
            <div className="modal-section">
              <h3 className="modal-section-title">Responsibilities</h3>
              <ul className="responsibilities">
                {currentRank?.responsibilities.map((resp, index) => (
                  <li key={index}>{resp}</li>
                ))}
              </ul>
            </div>
            <div className="modal-section">
              <h3 className="modal-section-title">History</h3>
              <p>{currentRank?.history}</p>
            </div>
            <div className="modal-section">
              <h3 className="modal-section-title">Eligibility</h3>
              <p>{currentRank?.eligibility}</p>
            </div>
            <div className="modal-section">
              <h3 className="modal-section-title">Equivalent Ranks</h3>
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
              disabled={currentRankIndex === ranksData[currentForce].length - 1}
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
            <p>Dedicated to the valor of the Indian Armed Forces 🇮🇳 | Designed by <strong>Lokesh Singh Tanwar❤️</strong></p>
            <p>© 2025 Indian Armed Forces Information Portal | All Rights Reserved</p>
            <div className="official-links">
              <a href="https://indianarmy.nic.in/" target="_blank" rel="noopener noreferrer">Indian Army</a> | 
              <a href="https://indianairforce.nic.in/" target="_blank" rel="noopener noreferrer">Indian Air Force</a> | 
              <a href="https://www.joinindiannavy.gov.in/" target="_blank" rel="noopener noreferrer">Indian Navy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
