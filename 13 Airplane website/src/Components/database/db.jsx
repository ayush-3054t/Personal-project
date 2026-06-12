const data = [
    {
        img: "https://taskandpurpose.com/wp-content/uploads/2022/05/12/F22Top.png?quality=85",
        name: "F-22 Raptor",
        type: "Fighter",
        content: "The F-22 Raptor is a fifth-generation, stealth air superiority fighter aircraft, designed and manufactured by Lockheed Martin. It is a single-seat, twin-engine, all-weather fighter that can operate at speeds faster than the speed of sound.",
        generation: "5th",
        country: "USA"
    },
    {
        img: "https://images02.military.com/sites/default/files/media/equipment/military-aircraft/f-16-fighting-falcon/2014/02/f-16-fighting-falcon_004.jpg",
        name: "F-16 Fighting Falcon",
        type: "Fighter",
        content: "The General Dynamics F-16 Fighting Falcon is an American single-engine supersonic multirole fighter aircraft originally developed by General Dynamics for the United States Air Force (USAF). Designed as an air superiority day fighter, it evolved into a successful all-weather multirole aircraft with over 4,600 built since 1976.",
        generation: "4th",
        country: "USA"
    },
    {
        img: "https://images05.military.com/sites/default/files/media/equipment/military-aircraft/f-35c-lightning-ii/2014/02/f-35c-lightning-ii_004.jpg",
        name: "F-35C Lightning II",
        type: "Fighter",
        content: "The F-35C Lightning II is the U.S. Navy’s first low-observable carrier-based aviation platform. The F-35 is being purchased to replace the F/A-18C/D Hornet as the carrier strike group’s primary offensive fighter for aerial defense and close air support.",
        generation: "5th",
        country: "USA"
    },
    {
        img: "https://images03.military.com/sites/default/files/media/equipment/military-aircraft/f-35b-lightning-ii/2014/02/f-35b-lightning-ii_003.jpg",
        name: "F-35B Lightning II",
        type: "Fighter",
        content: "The F-35B Lightning II is the Marine Corps variant of the Joint Strike Fighter and features a vertical lift fan and pivoting engine nozzle to deliver vertical landing and short takeoff capability to expeditionary airfields. The F-35 will replace AV-8B Harrier IIs in the Marine Corps inventory.",
        generation: "5th",
        country: "USA"
    },
    {
        img: "https://images05.military.com/sites/default/files/media/equipment/military-aircraft/b-2-spirit/2014/02/b-2-spirit_003.jpg",
        name: "B-2 Spirit",
        type: "Bomber",
        content: "Designed during the Cold War as the world’s first low-observable or “stealth” strategic bomber, the B-2 Spirit harkens back to the designs of revalutionary engineer Jack Northrop. His “flying wing” design first debuted in 1949 as the YB-49 but was not adopted by the Air Force at the time. The B-2 Spirit is a multi-role bomber capable of delivering both conventional and nuclear munitions. ",
        generation: "5th",
        country: "USA"
    },
    {
        img: "https://images02.military.com/sites/default/files/media/equipment/military-aircraft/b-1b-lancer/2014/02/b-1b-lancer_012.jpg",
        name: "B-1B Lancer",
        type: "Bomber",
        content: "An icon of the latter decades of the Cold War, the B-1B Lancer was originally designed as a strategic nuclear bomber with a mission to fly at low altitude in order to avoid Soviet early warning radars. With the end of the Cold War, the B-1B Lancer has been adapted to carry conventional munitions and has been used extensively in close air support and tactical bombing missions. ",
        generation: "4th",
        country: "USA"
    },
    {
        img: "https://images04.military.com/sites/default/files/media/equipment/military-aircraft/f-15-eagle/2014/02/f-15-eagle_004.jpg",
        name: "F-15 Eagle",
        type: "Fighter",
        content: "The F-15 Eagle has been the U.S. Air Force’s primary fighter jet aircraft and intercept platform for decades. The Eagle's air superiority is achieved through a mixture of unprecedented maneuverability and acceleration, range, weapons and avionics. It can penetrate enemy defense and outperform and outfight any current enemy aircraft.",
        generation: "4th",
        country: "USA"
    },
    {
        img: "https://images01.military.com/sites/default/files/media/equipment/military-aircraft/ch-47d-chinook/2014/02/ch-47d-chinook_011.jpg",
        name: "CH-47D Chinook",
        type: "Helicopter",
        content: "The CH-47D Chinook is the U.S. Army’s primary heavy troop and supply transport aircraft. Originally fielded in the Vietnam War, the CH-47 has undergone a series up upgrades to increase lift and airworthiness in combat environments.",
        generation: "",
        country: "USA"
    },
    {
        img: "https://images02.military.com/sites/default/files/media/equipment/military-aircraft/f-18cd-hornet/2014/02/f-18cd-hornet_006.jpg",
        name: "F/A-18C/D Hornet",
        type: "Fighter",
        content: "The F/A-18 Hornet is an all-weather jet aircraft that is used by the U.S. Navy and Marine Corps as both a fighter and attack platform. In its fighter mode, the F/A-18 is used primarily as a fighter escort and for fleet air defense; in its attack mode, it is used for force projection, interdiction and close and deep air support.",
        generation: "4th",
        country: "USA"
    },
    {
        img: "https://images02.military.com/sites/default/files/media/equipment/military-aircraft/u2-dragonlady/2014/02/u-2_8.jpg",
        name: "U-2 Dragon Lady",
        type: "Others",
        content: "One of the United States’ most secret aerial reconnaissance platforms for more than half a century, the storied U-2 Dragon Lady still flies some of the U.S. military’s most sensitive spy missions worldwide.",
        generation: "4th",
        country: "USA"
    },
    {
        img: "https://images03.military.com/sites/default/files/media/equipment/military-aircraft/ah-64-apache-longbow/2014/02/ah-64-apache-longbow_008.jpg",
        name: "AH-64 Apache Longbow",
        type: "Helicopter",
        content: "The AH-64 Apache is the Army's heavy division/corps attack helicopter. The AH-64D Longbow remanufacture effort incorporates a millimeter wave fire control radar, radar frequency interferometer, fire-and-forget radar-guided HELLFIRE missile and cockpit management and digitization enhancements. ",
        generation: "",
        country: "USA"
    },
    {
        img: "https://images05.military.com/sites/default/files/media/equipment/military-aircraft/c-130-hercules/2014/02/c-130-hercules_008.jpg",
        name: "C-130 Hercules",
        type: "Transport",
        content: "The workhorse of the Air Force combat airlift fleet, the C-130 Hercules has been in service for more than half a century. Designed specifically to transport troops and equipment in the combat zone via airdrop or short runways.",
        generation: "",
        country: "USA"
    },
    {
        img: "https://images02.military.com/sites/default/files/media/equipment/military-aircraft/c-17-globemaster-iii/2014/02/c-17-globemaster-iii_008.jpg",
        name: "C-17 Globemaster III",
        type: "Transport",
        content: "The C-17 Globemaster serves as the U.S. Air Force’s primary strategic lift aircraft for global transport of troops and equipment. The C-17 is capable of rapid strategic delivery of troops and all types of cargo to main operating bases or directly to forward bases in the deployment area. ",
        generation: "",
        country: "USA"
    },
    {
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Sr71_1.jpg/1280px-Sr71_1.jpg",
        name: "Lockheed SR-71 Blackbird",
        type: "Others",
        content: "The SR-71 Blackbird was a long-range, high-altitude, Mach 3+ strategic reconnaissance aircraft developed and manufactured by Lockheed Corporation",
        generation: "",
        country: "USA"
    },
    {
        img: "https://upload.wikimedia.org/wikipedia/commons/4/49/F-47-artist-rendition_%28cropped%29.jpg",
        name: "Boeing F-47",
        type: "Fighter",
        content: "The Boeing F-47 is a planned American air superiority fighter aircraft developed for the United States Air Force (USAF) under the Next Generation Air Dominance (NGAD) program. It is designed to be a sixth-generation fighter and is intended to replace the Lockheed Martin F-22 Raptor. ",
        generation: "Future",
        country: "USA"
    },



    {
        img: "https://i.ytimg.com/vi/FE6CTvs_g9Y/sddefault.jpg",
        name: "Sukhoi Su-57 (Felon)",
        type: "Fighter",
        content: "The Sukhoi Su-57, Russia's first fifth-generation stealth fighter, is a twin-engine, multirole aircraft designed for air superiority and strike missions, capable of engaging both aerial and ground targets. It features advanced avionics, maneuverability, and stealth technology.  ",
        generation: "5th",
        country: "Russia"
    },
    {
        img: "https://upload.wikimedia.org/wikipedia/commons/1/1d/Sukhoi_Su-35S_%2828333541172%29.jpg",
        name: "Sukhoi Su-35 Flanker E",
        type: "Fighter",
        content: "Sukhoi's Su-35 Super Flanker (NATO designation -Flanker E) took the world market by storm when it proved able to challenge and defeat any aircraft in the East (and West) except for absolute top-of-the-line fighters such as the EF2000 and F-22.",
        generation: "4.5th",
        country: "Russia"
    },
    {
        img: "https://upload.wikimedia.org/wikipedia/commons/c/c8/Russian_Sukhoi_Su-34_at_Latakia_%281%29.jpg",
        name: "Sukhoi Su-34 Fullback",
        type: "Fighter",
        content: "The Su-34 (NATO reporting name: Fullback) is a Soviet/Russian fighter-bomber. In the Sukhoi Design Bureau, the idea to create an aircraft based on the Su-27 emerged back in the 1980s. The goal was to replace the ageing Su-24 and create a universal combat aircraft.",
        generation: "4th",
        country: "Russia"
    },
    {
        img: "https://upload.wikimedia.org/wikipedia/commons/c/c3/SU-30_MKI_Lajes.JPG",
        name: "Sukhoi Su-30",
        type: "Fighter",
        content: "The Sukhoi Su-30 (Russian: Сухой Су-30; NATO reporting name: Flanker-C/G/H) is a twin-engine, two-seat supermaneuverable fighter aircraft developed in the Soviet Union in the 1980s by Russia's Sukhoi Aviation Corporation. It is a multirole fighter for all-weather, air-to-air interdiction missions. The Russian Aerospace Forces (VKS) were reported to have 130 Su-30SMs in operation as of 2024.",
        generation: "4th",
        country: "Russia"
    },
    {
        img: "https://upload.wikimedia.org/wikipedia/commons/a/ad/Sukhoi_su-27_%28blue%29_flying_in_sky.jpg",
        name: "Sukhoi Su-27 Flanker",
        type: "Fighter",
        content: "Sukhoi Su-27, Russian air-superiority fighter plane, introduced into the air forces of the Soviet Union beginning in 1985 and now one of the premier fighters of Russia, Ukraine, Belarus, Kazakhstan, Uzbekistan, Indonesia, India, China, and Vietnam. Versions of the plane are built under license in China and India.",
        generation: "4th",
        country: "Russia"
    },
    {
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Hungarian_Air_Force_Mikoyan-Gurevich_MiG-29UB_Fulcrum-B.jpg/1024px-Hungarian_Air_Force_Mikoyan-Gurevich_MiG-29UB_Fulcrum-B.jpg",
        name: "Mikoyan MiG-29 Fulcrum",
        type: "Fighter",
        content: "The Mikoyan MiG-29 (Russian: Микоян МиГ-29; NATO reporting name: Fulcrum) is a twin-engine fighter aircraft designed in the Soviet Union. Developed by the Mikoyan design bureau as an air superiority fighter during the 1970s.",
        generation: "4th",
        country: "Russia"
    },
    {
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Russian_Air_Force_MiG-25.jpg/330px-Russian_Air_Force_MiG-25.jpg",
        name: "Mikoyan MiG-25 Foxbat",
        type: "Fighter",
        content: "The Mikoyan-Gurevich MiG-25, also known as Foxbat by NATO, was a supersonic interceptor and reconnaissance aircraft designed by the Soviet Union. It was one of the fastest military aircraft to enter service and was known for its high speed and altitude capabilities. ",
        generation: "4th",
        country: "Russia"
    },
    {
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Sukhoi_Su-25_of_the_Russian_Air_Force_landing_at_Vladivostok_%288683076150%29.jpg/330px-Sukhoi_Su-25_of_the_Russian_Air_Force_landing_at_Vladivostok_%288683076150%29.jpg",
        name: "Sukhoi Su-25 Frogfoot",
        type: "Fighter",
        content: "The Sukhoi Su-25 Frogfoot is considered a third-generation aircraft. It was developed in the Soviet Union in the 1970s and primarily designed for close air support and ground attack missions. ",
        generation: "Older",
        country: "Russia"
    },
    {
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Il-76MD-90A_RF-78653.jpg/330px-Il-76MD-90A_RF-78653.jpg",
        name: "Ilyushin IL-76 Candid",
        type: "Transport",
        content: "The Ilyushin Il-76 is a four-engine turbofan strategic airlifter, primarily designed for military transport and heavy-lift operations.",
        generation: "",
        country: "Russia"
    },
    {
        img: "https://upload.wikimedia.org/wikipedia/commons/1/19/Russian_Air_Force_Kamov_Ka-52_%2819442404770%29.jpg",
        name: "Kamov Ka-50",
        type: "Helicopter",
        content: "The Kamov Ka-50 Black Shark is a single-seat Russian attack helicopter with a coaxial rotor system typical of the Kamov Design Bureau . It was designed in the 1980s and adopted for service in the Russian Army in 1995.",
        generation: "",
        country: "Russia"
    },



    {
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/HAL_%28Hindustan_Aeronautics%29%2C_HF-24%2C_Marut_%287585415088%29.jpg/330px-HAL_%28Hindustan_Aeronautics%29%2C_HF-24%2C_Marut_%287585415088%29.jpg",
        name: "HAL HF-24 Marut",
        type: "Fighter",
        content: "The HAL HF-24 Marut (Spirit of the Tempest) is an Indian jet fighter aircraft developed and manufactured by Hindustan Aeronautics Limited (HAL) during the 1960s and early 70s. The Marut was designed by the German aeronautical engineer Kurt Tank, with the Project Engineer being George William Benjamin. The aircraft was the first Indian-developed jet fighter.",
        generation: "Older",
        country: "India"
    },
    {
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/HAL_Tejas_%28LA-5018%29_of_Squadron_18_Flying_Bullets.jpg/330px-HAL_Tejas_%28LA-5018%29_of_Squadron_18_Flying_Bullets.jpg",
        name: "HAL Tejas Mk1A",
        type: "Fighter",
        content: "The Tejas Mk1A, developed by HAL, is an advanced version of India's indigenous Light Combat Aircraft (LCA) Tejas. It's an upgraded variant of the Tejas Mk1.",
        generation: "4th",
        country: "India"
    },
    {
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/HAL_Prachand_%28ZF_4834%29.jpg/1280px-HAL_Prachand_%28ZF_4834%29.jpg",
        name: "HAL LCH Prachand",
        type: "Helicopter",
        content: "The Light Combat Helicopter (LCH) Prachand is India's first indigenously designed and developed attack helicopter, specifically built for high-altitude operations. It is designed to operate at altitudes over 5,000 meters, making it suitable for regions like Siachen Glacier and Eastern Ladakh.",
        generation: "",
        country: "India"
    },
    {
        img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTXru067ceq6yi_JuDVDKk-HefLAAs4DNwtgBHNQL13dtBSqec3n_HstFBzXs1kdCR-xE7gxfsId_ydWPkpbW8e1dJSZSgtTUzJ1FMvTwU",
        name: "HAL ALH Dhruv",
        type: "Helicopter",
        content: "The Advanced Light Helicopter (ALH), also known as Dhruv, is a multi-role, multi-mission utility helicopter developed indigenously by Hindustan Aeronautics Limited (HAL).",
        generation: "",
        country: "India"
    },




    {
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Mirage_2000C_in-flight_2_%28cropped%29.jpg/330px-Mirage_2000C_in-flight_2_%28cropped%29.jpg",
        name: "Dassault Mirage 2000",
        type: "Fighter",
        content: "The Dassault Mirage 2000 is a French multirole, single-engine, delta wing, fourth-generation jet fighter manufactured by Dassault Aviation. It was designed in the late 1970s as a lightweight fighter to replace the Mirage III for the French Air Force (Armée de l'air). ",
        generation: "4th",
        country: "Europe"
    },
    {
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Chile_Air_Force_Dassault_%28SABCA%29_Mirage_5MA_Elkan_Lofting-2.jpg/330px-Chile_Air_Force_Dassault_%28SABCA%29_Mirage_5MA_Elkan_Lofting-2.jpg",
        name: "Dassault Mirage 5",
        type: "Fighter",
        content: "The Dassault Mirage 2000 is a French multirole, single-engine, delta wing, fourth-generation jet fighter manufactured by Dassault Aviation. It was designed in the late 1970s as a lightweight fighter to replace the Mirage III for the French Air Force (Armée de l'air). ",
        generation: "3rd",
        country: "Europe"
    },
    {
        img: "https://i0.wp.com/www.defencexp.com/wp-content/uploads/2025/03/FACT-CHECK-36.jpg?fit=1200%2C675&ssl=1",
        name: "Dassault Rafale",
        type: "Fighter",
        content: "The Dassault Rafale is a versatile, multirole fighter jet designed and manufactured by Dassault Aviation. Known for its omni-role capabilities, it can perform a wide range of missions, including air-to-air combat, ground attack, reconnaissance, and air defense.",
        generation: "4.5th",
        country: "Europe"
    },
    {
        img: "https://www.ausairpower.net/JOW/Typhoon-DD-RIAT-2009-JOW-1S.jpg",
        name: "Eurofighter Typhoon",
        type: "Fighter",
        content: "The Eurofighter Typhoon is a highly capable, multirole combat aircraft developed by a European consortium. It's known for its agility, speed, and versatility, making it suitable for a wide range of air-to-air and air-to-ground missions.",
        generation: "4.5th",
        country: "Europe"
    },
    {
        img: "https://res.cloudinary.com/dkkd45ayz/image/upload/f_auto,dpr_auto,q_auto,fl_progressive/w_1.0,h_0.8439039408866995073891625616,c_fill,g_auto/w_1024,h_576,c_scale/saab/28326",
        name: "Saab JAS 39 Gripen",
        type: "Fighter",
        content: "The Saab JAS 39 Gripen is a Swedish-developed, single-engine, multirole fighter designed for air-to-air, air-to-ground, and reconnaissance missions. It's known for its advanced technology, cost-effectiveness, and versatility, making it suitable for various roles and operational environments. ",
        generation: "4th",
        country: "Europe"
    },




    {
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/20170810034434%21Mitsubishi_F-2_in_flight_23_%28cropped%29.jpg/330px-20170810034434%21Mitsubishi_F-2_in_flight_23_%28cropped%29.jpg",
        name: "Mitsubishi F-2",
        type: "Fighter",
        content: "The Mitsubishi F-2 is a multirole fighter derived from the General Dynamics F-16 Fighting Falcon, and manufactured by Mitsubishi Heavy Industries and Lockheed Martin for the Japan Air Self-Defense Force, with a 60/40 split in manufacturing between Japan and the United States.",
        generation: "4.5th",
        country: "Rest"
    },
    {
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/2024-07-21_Pitch_Black_Flypast_003.jpg/1200px-2024-07-21_Pitch_Black_Flypast_003.jpg",
        name: "KAI T-50 Golden Eagle",
        type: "Fighter",
        content: "The T-50 Golden Eagle is a South Korean-developed advanced supersonic jet trainer, light combat aircraft, and light fighter. It's the first supersonic aircraft designed and built entirely in South Korea, making it a significant step in their aerospace capabilities.",
        generation: "4.5th",
        country: "Rest"
    },
];

export default data;