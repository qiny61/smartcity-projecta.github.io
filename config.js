// config.js (Students edit only this file)
window.SITE_CONFIG = {
  pageTitle: "Eglinton–Scarlett Traffic Simulation | Student Showcase",
  homeUrl: "https://roadwayvr.com",

  hero: {
    profileImage: "assets/img/image1.jpg",

    // NEW: course code tag shown above the course project pill
    courseTag: "SMRTTECH 4SC3",

    // updated tagline text (big pill)
    tagline: "Course Project: Smart Cities and Communities",

    studentName: "Yihang Qin",
    program: "Automation System Engineering Technology/ Smart System",
    university: "McMaster University, Canada",
    email: "qiny61@mcmaster.ca"
  },

  disclaimer: {
    short:
      "Academic project for a university course. Educational purposes only. Not an official city analysis, consultation, or endorsement.",
    long:
      "This website presents a student academic project created for coursework. Any analyses, results, and potential improvements are simulation-based and provided for educational purposes only. They do not represent official work, endorsement, or consultation for any city or agency.",
    videoOverlaySuggestion:
      "Academic Project · Educational Use Only · Not Official City Work"
  },

  theme: {
    heroBg: "#111111",
    heroText: "#ffffff",
    pageBg: "#f8fafc",
    accent: "#7c3aed"
  },

  dividers: {
    dividerBg: "#f9f9f9",
    dividerText: "#ffffff"
  },

  footer: {
    footerBg: "#111111",
    footerText: "#ffffff",
    footerBorder: "#222222",

    homeLinkText: "RoadwayVR",

    templateCredit:
      "This academic showcase template was developed by RoadwayVR.",

    templateCreditLinkText:
      "Learn more at RoadwayVR.com",

    templateCreditUrl:
      "https://roadwayvr.com"
  },

  intro: {
    projectTitleLabel: "Project Title",
    projectTitle: "Analysis of Simulated Existing Traffic Conditions, a 100% CAV Future, and a Candidate Intervention at the Eglinton–Scarlett Intersection",
    heroVideo: "assets/video/video.mp4",
    heroVideoPoster: "",
    heroVideoAlt: "Autoplay preview video (academic project)",
    videoCaption:
      "Autoplay preview (≈20 seconds): Base Scenario (100% HDV) → Scenario 1 (100% AV/CAV) at Eglinton–Scarlett, Toronto"
  },

  caseStudy: {
    title: "Introduction",

    backgroundTitle: "Background",
    backgroundBullets: [
      "Eglinton Avenue West and Scarlett Road form a signalized intersection in Toronto, Ontario.",
      "SUMO microsimulation models individual vehicles, lanes, turning movements, and signals.",
      "Connected and automated vehicles (CAVs) may change following gaps, acceleration, and speed.",
      "Signal-timing changes can affect how traffic on a major-road approach moves through the junction."
    ],

    problemTitle: "Problem Statement",
    problemBullets: [
      "A documented HDV baseline is needed before scenarios can be compared.",
      "The effect of a 100% CAV fleet on the selected edge is uncertain.",
      "The benefit of a major-road signal-timing change is unverified.",
      "Simulation results are hard to communicate to a non-technical audience."
    ],

    objectivesTitle: "Project Objectives",
    objectivesBullets: [
      "Build a SUMO network and traffic model of Eglinton–Scarlett and characterize the 100% HDV baseline.",
      "Compare the speed–density relationship on edge E96 under 100% CAV versus 100% HDV.",
      "Implement and evaluate a major-road signal-timing change on the same edge.",
      "Present the project's methods and findings through a web showcase."
    ]
  },

  overview: {
    title: "Methodology",
    steps: [
      {
        title: "Step 1: Study Area Selection (GIS)",
        text: "Select the Eglinton Ave W–Scarlett Rd intersection in Toronto as the study area.",
        image: "assets/img/image2.jpg"
      },
      {
        title: "Step 2: Road Network and HDV Baseline (SUMO)",
        text: "Build the SUMO network and run the 100% HDV baseline on edge E96.",
        image: "assets/img/image3.jpg"
      },
      {
        title: "Step 3: 100% AV/CAV Scenario (SUMO)",
        text: "Replace all vehicles with CACC-based CAVs while keeping other inputs the same.",
        image: "assets/img/image4.jpg"
      },
      {
        title: "Step 4: Signal-Timing Intervention (SUMO)",
        text: "Move 2 s of green time from phase 2 to phase 0 within the 29 s cycle.",
        image: "assets/img/image5.jpg"
      }
    ]
  },

  implementation: {
    title: "Methodology Steps (Demo Modules)",
    modules: [
      {
        title: "Module 1: Study Area Selection (GIS)",
        bullets: [
          { text: "Selected the Eglinton Avenue West–Scarlett Road intersection in Toronto (43.684° N, 79.512° W)." },
          { text: "Eglinton Avenue West is the major corridor and Scarlett Road is the crossing road." },
          { text: "Used a GIS aerial map to define the study boundary and the surrounding road network." }
        ],
        image: "assets/img/image2.jpg"
      },
      {
        title: "Module 2: Road Network and HDV Baseline (SUMO)",
        bullets: [
          { text: "Stage A1: built the SUMO network with lanes, turning lanes, junctions, and movement connections." },
          { text: "Stage A2: added major-road demand of 300 veh/h straight and 150 veh/h per turn, with a 17/3/6/3 s signal plan." },
          { text: "Ran the 100% HDV baseline and extracted speed–density data on edge E96 (Eglinton Ave W)." }
        ],
        image: "assets/img/image3.jpg"
      },
      {
        title: "Module 3: 100% AV/CAV Scenario (SUMO)",
        bullets: [
          { text: "Changed all 12 traffic flows to a CAV vehicle type using the CACC car-following model." },
          { text: "Set desired headway (tau) to 0.6 s, minimum gap to 1.5 m, and lane-change cooperation to 1.0." },
          { text: "Collected 37 speed–density observations on edge E96 at 100 s intervals." }
        ],
        image: "assets/img/image4.jpg"
      },
      {
        title: "Module 4: Signal-Timing Intervention (SUMO)",
        bullets: [
          { text: "Kept 100% HDVs and changed only the major-road signal timing." },
          { text: "Phase 0 increased from 17 s to 19 s, and phase 2 decreased from 6 s to 4 s." },
          { text: "The 29 s cycle stayed the same, and edge E96 was measured again for comparison." }
        ],
        image: "assets/img/image5.jpg"
      }
    ]
  },

  results: {
    title: "Results & Potential Improvements",
    subtitle:
      "Speed–density relationships on edge E96 (Eglinton Ave W) for the 100% HDV base scenario and the 100% AV/CAV scenario, using a linear Greenshields fit. Results are simulation-based and for educational purposes only.",

    charts: {
      left: {
        title: "Base Scenario (100% HDV) — Speed–Density on Edge E96",
        src: "assets/img/image6.jpg",
        alt: "Speed–density plot for the 100% HDV base scenario on edge E96, vf = 12 m/s and kj = 59 veh/km"
      },
      right: {
        title: "Scenario 1 (100% AV/CAV) — Speed–Density on Edge E96",
        src: "assets/img/image7.jpg",
        alt: "Speed–density plot for the 100% AV/CAV scenario on edge E96, vf = 11 m/s and kj = 65 veh/km"
      }
    },

    discussionTitle: "Discussion",
    discussionBullets: [
      "Base Scenario (100% HDV): fitted free-flow speed is 12.0 m/s and jam density is 59 veh/km.",
      "Scenario 1 (100% AV/CAV): free-flow speed falls to 11.0 m/s (−8.3%) and jam density rises to 65 veh/km (+10.2%).",
      "The derived critical point moves from 29.5 veh/km at 6.0 m/s to 32.5 veh/km at 5.5 m/s, showing a different relationship rather than a clear performance ranking.",
      "Potential improvement: the signal-timing change raised the fitted free-flow speed to 12.7 m/s, but it needs further validation.",
      "Results are preliminary: one edge, one run per scenario, different plot axes, and no field calibration."
    ]
  },

  team: {
    title: "Team & Acknowledgments",
    subtitle:
      "This section clarifies academic context, roles, tools, and sources. Clear attribution improves credibility and shows ethical data handling.",

    members: [
      { name: "Yihang Qin", role: "SUMO Road Network Development + Traffic Demand and Signal Configuration + HDV/CAV Scenario Development + Intervention Design and Implementation + Results Analysis and Visualization + Report Writing and Referencing" }
    ],

    acknowledgments: [
      "Course: SMRTTECH 4SC3 – Smart Cities and Communities (Fall 2026)",
      "Institution: McMaster University, Hamilton, Ontario",
      "Instructors: Dr. Marjan Alavi (Course), Dr. Ahmad Mohammadi (Lab)",
      "Mini Project A: Group 7 – Justin Tang, Yihang Qin, Haider Ladha",
      "Tools: SUMO 1.26.0, OBS Studio, Clipchamp, GitHub Pages"
    ],

    repoLabel: "Project Repository",
    repoUrl: "https://github.com/USERNAME/smartcity-projecta.github.io"
  }
};
