import img from "./assets/images/projects/cats.jpg";

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
      image: { img },
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
      image: { img },
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
      image: { img },
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
      image: { img },
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
    {
      image: { img },
      title: "Portfolio Website",
      techStack: ["HTML", "CSS", "JavaScript", "PHP"],
      info: "Mini project | Feb 2022 – Apr 2022",
      description:
        "Developed an online portfolio to showcase experiences, achieving 100% in the phase 1 assessment and 96% in phase 2.",
      details: [
        "Created portfolio to showcase experiences using HTML, CSS, JavaScript, and PHP, developing a fundamental understanding of front-end web technologies",
        "Organised blog entries, manipulated database tables, and gained strong insight into client and server-side processing",
      ],
      link: "#",
    },
    {
      image: { img },
      title: "Text-based Game",
      techStack: ["Java"],
      info: "Procedural Programming Project | Sep 2021 – Dec 2021",
      description:
        "A procedural-style decision-making game coded in Java, improving logical and problem-solving skills.",
      details: [
        "Coded and tested a decision-making game in Java, developing logical and problem-solving skills",
        "Developed strong structural design skills in planning, writing, and abstracting code",
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
      image: { img },
      title: "upReach Associate",
      info: "upReach | Oct 2021 – Present",
      details: [
        "Selected as high potential undergraduate to undertake employability support for underrepresented backgrounds amongst students",
        "Engaged in insight days, with firms such as Alfa, skills workshops, and networking events, developing commercial awareness",
        "Advanced CV and application skills through meetings and mock interviews with personal coordinator, setting personal goals",
      ],
    },
    {
      image: { img },
      title: "Mentor (Buddy Scheme)",
      info: "QMUL | Sep 2022 – Jun 2023",
      details: [
        "Provided invaluable support and guidance to fellow students, helping them transition into university life",
        "Organised and facilitated engaging meetups with mentees to foster a friendly networking atmosphere, contributing to their growth",
      ],
    },
    {
      image: { img },
      title: "Teaching Assistant",
      info: "QMUL | Sep 2022 – Dec 2022",
      details: [
        "Conducted lab sessions and provided feedback to enhance student understanding of computer science principles",
        "Provided detailed feedback on student work and evaluated presentations to enhance their communication and presentation skills",
        "Served as a dedicated mentor, contributing to up to 96 students’ academic success and development",
      ],
    },
    {
      image: { img },
      title: "Student Consultancy",
      info: "QMUL & IBM | Jun 2022",
      details: [
        "Led 2 client meetings with IBM to identify their requirements and conducted primary research on sample of 10 users to review current IBM learning journeys, improving client management by navigating different approaches and mitigating risks",
        "Devised 3 learning journeys using Spoke and created project plan after undertaking training from employees over 8 days",
        "Delivered 15-minute presentation on solutions found using Mozilla Hub wireframes, receiving excellent feedback",
      ],
    },
    {
      image: { img },
      title: "Tech500 Bootcamp",
      info: "upReach | Jun 2022 – Jul 2022",
      details: [
        "Participated in workshops covering project & product management, technical skills (programming, web-dev), and entrepreneurship",
        "Completed team-building training fostering connections through networking sessions with professionals and upReach associates",
      ],
    },
    {
      image: { img },
      title: "Tech500 Hackathon",
      info: "Samsung & upReach | Mar 2022",
      details: [
        "Effectively cooperated with diverse team of 5 students to brainstorm and develop an app monitoring rising energy costs",
        "Employed a variety of problem solving and technical skills by using HTML and CSS to create prototypes",
        "Delivered a 7+ minute presentation, putting forward a viable solution to a panel of industry professionals from Samsung",
      ],
    },
    {
      image: { img },
      title: "QHack Entrepreneurial Bootcamp",
      info: "QMUL | Mar 2022",
      details: [
        "3-day entrepreneurial skill bootcamp inventing and developing a fitness social media app, pitching to industry professionals",
        "Formulated and refined a lean canvas by carrying out customer segment research and interviews, developing communication skills",
      ],
    },
    {
      image: { img },
      title: "Tata Consultancy Services Bursary Programme",
      info: "TCS & QMUL | Jan 2022 – May 2022",
      details: [
        "Awarded £3000 as a high-achieving student from a low-income background in support of studies",
        "Participated in workshops and networking events for TCS and QMUL, strengthening commercial awareness and interpersonal skills",
      ],
    },
    {
      image: { img },
      title: "Voluntary Tutoring",
      info: "Team Up | Oct 2021 – Dec 2021",
      details: [
        "10-week programme tutoring two KS3 Maths students from disadvantaged backgrounds, improving leadership skills",
        "Completed weekly reports, self-reflection tasks and module on teacher explanation techniques, improving presentation skills",
        "Conducted diagnostic tests ante- and post-programme, highlighting a 9% improvement in students’ performance thanks to improved teaching quality – implementing a RAG rating system helped monitor student progress on strengths and weaknesses",
      ],
    },
    {
      image: { img },
      title: "QTaster & QMentoring",
      info: "QMUL | Sep 2021 – Apr 2022",
      details: [
        "Gained insights into the tech industry by networking with employers from companies such as Microsoft, ING, and Credit Suisse, gaining commercial awareness",
        "Paired with alumni working in the tech industry and set monthly goals discussed in periodic meetings",
      ],
    },
    {
      image: { img },
      title: "PRP Assignments",
      techStack: ["Research", "Collaboration", "Presentation", ""],
      info: "Group Projects | Sep 2021 – Dec 2021",
      description:
        "Group projects focused on Ethics, Sustainability, and Problem Definition.",
      details: [
        "Delegated tasks to members of the team and assessed their performance, ensuring accuracy and fairness",
        "Developed excellent time management skills while researching topics in depth under tight deadlines",
        "Led presentation of the project, achieving 34/35 and refining leadership skills",
      ],
      link: "#",
    },
    {
      image: { img },
      title: "Artist Profile Management",
      info: "Ediz Tan | Feb 2021 – Jun 2021",
      details: [
        "Designed a thematically consistent website to represent personal brand as an artist, developing accuracy and creativity",
        "Marketed self-produced piano pieces by running Facebook ad campaigns, reaching 4000+ listeners and 140+ link clicks",
        "Scheduled 10 posts and 14 song releases, improving organisational skills by setting and managing own workload",
      ],
    },
    {
      image: { img },
      title: "Accountancy Work Experience",
      info: "Billur & Co. | Jun 2019 – Jul 2019",
      details: [
        "Shadowed accounting team in processing payrolls and tax filings for 100+ client accounts, learning to implement tasks effectively",
        "Utilised Money Manager to input and monitor client data sourced from income statements and invoices, saving 10+ hours of data entry with accuracy and efficiency, also improving data handling and attention to detail",
      ],
    },
    {
      image: { img },
      title: "Food Service Work Experience",
      info: "The Blue Mermaid | Jul 2017",
      details: [
        "Communicated with and tailored services to 150+ customers, learning to respond to customer needs",
        "Managed commercial transactions worth £1000+, understanding consumer trends in the industry",
        "Worked in a team of 5 to optimise service delivery within a fast-paced environment, developing the ability to collaborate effectively",
      ],
    },
  ],
};

export const contact = {
  title: "Contact Me",
  message: "Feel free to reach out to me.",
};
