export const sections = [
  "about",
  "education",
  "projects",
  "tech",
  "experience",
  "contact",
];

export const about = {
  title: "About Me",
  details:
    "First-class Computer Science graduate skilled in Software Engineering and Web Development. My strong academic foundation, coupled with practical experience in Neural Networks, Object-Oriented Programming, and Algorithms, equips me to drive innovation and solve complex challenges within a software solutions role.",
};
export const education = {
  title: "Education",
  list: [
    {
      award: "BSc Computer Science",
      institution: "Queen Mary University of London | Sep 2021 – May 2024",
      details:
        "Achieved First Class Honours (82.3%). Relevant modules include Software Engineering, Object-Oriented Programming, and Neural Networks.",
    },
    {
      award: "A-Levels",
      institution: "Kingsmead School | Sep 2013 – Jun 2020",
      details: "Mathematics (A*), Further Mathematics (A*), Music (A).",
    },
    {
      award: "GCSEs",
      institution: "Kingsmead School | Sep 2013 – Jun 2020",
      details:
        "Seven 8's, two 7's, one A*, and one A. Key subjects: Mathematics (8), Computing (A*).",
    },
  ],
};

export const projects = {
  title: "Projects",
  list: [
    {
      image: "/src/assets/images/projects/cats.jpg",
      title: "Strengths Diary Web App",
      techStack: [
        "React.js",
        "Firebase Firestore",
        "Firebase Authentication",
        "Chart.js",
        "HuggingFace",
        "JavaScript",
        "CSS",
      ],
      info: "Final-year Full-stack React.js and Firebase Implementation Project | Aug 2023 - May 2024",
      description:
        "A full-stack web app designed to help users manage personal pledges and improve well-being, leveraging VIA's 24 Character Strengths.",

      details: [
        "Produced full-stack web app, supporting VIA’s 24 Character Strengths for pledge management and well-being improvement",
        "Implemented dynamic, user-friendly interface, allowing seamless goal setting and progress tracking with Chart.js visualisations",
        "Integrated AI Strengths Assistant using HuggingFace model for pledge suggestions, supporting those less familiar with strengths",
        "Self-taught React, mastering two-way binding, state management, and modular coding principles, leading to 75.2% project grade",
      ],
      link: "#",
    },
    {
      image: "/src/assets/images/projects/cats.jpg",
      title: "Medieval-Themed Survival Game",
      techStack: ["Unity", "C#", "Git", "Visual Scripting", "Github Projects"],
      info: "Collaborative Unity Project for Game Dev Module | Sep 2023 – Jan 2024",
      description:
        "A medieval-themed survival game developed in Unity, focusing on player stats, cloud-based saves, and in-game UI design.",

      details: [
        "Led team of 5 to develop Unity and C# game, managing task delegation, goals and meetings via GitHub, achieving 85.4% grade",
        "Scripted features like player stats, cloud-based save/load functionality and designed all menus, enriching UX and game atmosphere",
      ],
      link: "#",
    },
    {
      image: "/src/assets/images/projects/cats.jpg",
      title: "Crypto Wallet App Prototype",
      techStack: ["Java", "Kotlin", "REST API", "MySQL", "Spring Boot", "Git"],
      info: "Group Software Engineering Project for SEP Module - Jan 2023 – Apr 2023",
      description:
        "A prototype crypto wallet app built using agile principles and developed with a Java back-end and Kotlin front-end.",

      details: [
        "Developed cutting-edge crypto wallet prototype, utilising industry-standard soft-dev principles, models, and an agile lifecycle",
        "Collaborated closely with client over 3 months, receiving weekly feedback and guidance, ensuring alignment with project objectives",
        "Spearheaded Java back-end and database development, integrating seamlessly with Kotlin front-end via the REST API",
        "Attained 82.3% project grade and runner-up recognition for Best Cryptocurrency Application award",
      ],
      link: "#",
    },
    {
      image: "/src/assets/images/projects/cats.jpg",
      title: "Text-based Adventure Game",
      techStack: ["Java", "OOP", "GUI", "Git"],
      info: "Object-Oriented Project for OOP Module | Mar 2022 – Apr 2022",
      description:
        "A text-based adventure game with a GUI, applying OOP principles and featuring decision-based gameplay and time-restricted inputs.",

      details: [
        "Crafted decision-making adventure game with GUI by applying OOP principles, developing debugging, and problem-solving skills",
        "Strengthened structural design skills in planning and abstracting code, leading to efficiency and good time management",
        "Researched and implemented countdown feature to enhance UX (time-constrict user input), securing a flawless 100% project score",
      ],
      link: "#",
    },
  ],
};

const proficiency = (p) => {
  if (p === 0) {
    return ["elementary", 25];
  } else if (p === 1) {
    return ["intermediate", 50];
  } else if (p === 2) {
    return ["advanced", 75];
  } else if (p === 3) {
    return ["expert", 100];
  } else return 0;
};

export const tech = {
  title: "Technical Skills",
  skills: [
    { name: "HTML", proficiency: proficiency(2) },
    { name: "CSS", proficiency: proficiency(2) },
    { name: "JavaScript", proficiency: proficiency(1) },
    { name: "React.js", proficiency: proficiency(1) },
    { name: "Java", proficiency: proficiency(1) },
    { name: "Python", proficiency: proficiency(1) },
    { name: "MySQL", proficiency: proficiency(0) },
    { name: "C#", proficiency: proficiency(0) },
    { name: "Git", proficiency: proficiency(1) },
    { name: "Linux", proficiency: proficiency(0) },
    { name: "VS Code", proficiency: proficiency(1) },
  ],
};

export const experiences = {
  title: "Experience",
  list: [
    {
      title: "Teaching Assistant",
      info: "QMUL | Sep 2022 – Dec 2022",
      details: [
        "Conducted lab sessions and provided feedback to enhance student understanding of computer science principles.",
      ],
    },
    {
      title: "Student Consultancy",
      info: "QMUL & IBM | Jun 2022",
      details: [
        "Led meetings and devised learning journeys for IBM’s internal training programs.",
      ],
    },
  ],
};
