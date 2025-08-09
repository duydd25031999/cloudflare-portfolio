// src/utils/component.config.js

export const TYPOGRAPHY_VARIANTS = {
    'heading-h1': `
    text-[36px] leading-[40px] font-semibold
    md:text-[48px] md:leading-[48px] md:font-bold
    lg:text-[60px] lg:leading-[72px]
  `,

    'heading-h2': `
    text-[18px] leading-[28px] font-semibold
    lg:text-[36px] lg:leading-[40px]
  `,

    'heading-h3': `
    text-[24px] leading-[32px]
    lg:text-[30px] lg:leading-[36px]
  `,

    'subtitle': `
    text-[18px] leading-[28px]
    lg:text-[20px] lg:leading-[28px]
  `,

    'body1': `
    text-[16px] leading-[24px]
    md:text-[18px] md:leading-[28px]
  `,

    'body2': `
    text-[16px] leading-[24px]
  `,

    'body3': `
    text-[14px] leading-[20px]
  `,
};

export const LINK_VARIANTS = {
    normal: 'underline',
    menu: 'no-underline',
}

export const FONT_WEIGHTS = {
    400: 'font-normal',
    500: 'font-medium',
    600: 'font-semibold',
    700: 'font-bold',
};

export const STACK_SKILLS = [
    { name: 'Javascript', level: 'proficient', src: '/icon-javscript.png' },
    { name: 'Typescript', level: 'proficient', src: '/icon-typescript.png' },
    { name: 'React', level: 'proficient', src: '/icon-react.png' },
    { name: 'Next.js', level: 'knowledgeable',  src: '/icon-nextjs.png' },
    { name: 'Vue', level: 'proficient', src: '/icon-vue.png' },
    { name: 'Nuxt.js', level: 'knowledgeable',  src: '/icon-nuxt.png' },
    { name: 'Node.js', src: '/icon-nodejs.png' },
    { name: 'Express.js', src: '/icon-express.png' },
    { name: 'Socket.io', src: '/icon-socket.png' },
    { name: 'My SQL', src: '/icon-mysql.png' },
    { name: 'MongoDB', src: '/icon-mongodb.png' },
    // { name: 'HTML 5', level: 'knowledgeable', src: '/icon-html.png' },
    // { name: 'CSS', level: 'proficient', src: '/icon-css.png' },
    { name: 'Sass/Scss', level: 'knowledgeable', src: '/icon-sass.png' },
    { name: 'Tailwindcss', level: 'knowledgeable', src: '/icon-tailwindcss.png' },
    { name: 'Figma', src: '/icon-figma.png' },
    { name: 'Git', src: '/icon-git.png' },
    { name: 'Vite', src: '/icon-vite.png' },
];

// Source: your CV markdown (projects)
export const PROJECT_LIST = [
    {
        id: "bespin",
        name: "Bespin",
        role: "Front-end Developer",
        period: { from: "Dec 2024", to: "Present" },
        summary:
            "A cloud-native chatbot platform that helps DevOps and cloud engineers manage servers and AWS services via LLM AI model to transform natural language into right commands and actions.",
        responsibilities: [
            "Presale: analyze idea, high-level design, estimates, WBS",
            "Real-time Web Terminal for EC2 via AWS SSM + WebSocket",
            "Integrated multiple AI models (ChatGPT, Claude, etc.) for agent-based orchestration",
            "AI Copilot for in-terminal file editing",
            "Prepared demos that supported investment rounds",
        ],
        achievements: [
            "Worked with WebSocket, LLM AI, AWS EC2",
            "Presale process with analyzing client ideas and building high-level designs.",
            "Led FE in fast-changing startup",
            "Helped secure investment with technical demos",
        ],
        tech: ["WebSocket", "LLM", "Cloud-native", "Chatbot", "AWS EC2", "Presale consulting"],
        links: {},
    },
    {
        id: "cloud-in-one",
        name: "Cloud in One",
        role: "Front-end Developer",
        period: { from: "Nov 2023", to: "Dec 2024" },
        summary:
            "This project involves developing a cloud management application that integrates multiple providers into a single management system. This comprehensive solution allows users to manage various cloud services seamlessly from one platform. It offers features such as unified monitoring, resource allocation and performance tracking, ensuring efficient and streamlined cloud operations.",
        responsibilities: [
            "Develop features & fix bugs",
            "Maintain existing functions",
            "Collaborate with PM/BA/Design on roadmap",
            "Daily syncs and progress reporting",
        ],
        achievements: [
            "Adapted to a large-scale system developed over ~4 years",
            "Applied TDD to improve reliability",
        ],
        tech: ["Cloud management", "Large-scale system", "TDD practice"],
        links: {},
    },
    {
        id: "samsung-dc",
        name: "Data Center Management",
        role: "Front-end Developer",
        period: { from: "Jun 2023", to: "Nov 2023" },
        summary: "Internal system for managing & analyzing servers and cloud services.",
        responsibilities: ["UI/UX handling & edits", "New feature development", "Bug fixes"],
        achievements: [],
        tech: ["Samsung SDS", "Data visualization"],
        links: {},
    },
    {
        id: "panasonic-vendor",
        name: "Panasonic Vendor Management",
        role: "Front-end Developer",
        period: { from: "Jan 2023", to: "May 2023" },
        summary: "An internal web application of Panasonic Vietnam company. It manages and stores information about vendors.",
        responsibilities: [
            "Presale: idea analysis, high-level design, estimates, WBS",
            "Detail Design docs",
            "Feature implementation",
            "Testing & go-live support",
            "Technical support for team",
        ],
        achievements: [
            "Clear WBS & detail designs in presale",
            "Supported AWS S3 integration",
        ],
        tech: ["Presale analysis", "WBS planning", "Detail design", "Go-live", "AWS S3"],
        links: {},
    },
    {
        id: "samsung-prms",
        name: "Project Requirement Management System",
        role: "Front-end Developer",
        period: { from: "Aug 2022", to: "Dec 2022" },
        summary: "A web application of Samsung company for managing Product requirement, Test case.",
        responsibilities: ["UI/UX handling & edits", "New feature development", "Bug fixes"],
        achievements: [],
        tech: [],
        links: {},
    },
    {
        id: "gempages",
        name: "Gempages Web Builder",
        role: "Front-end Developer",
        period: { from: "May 2021", to: "May 2022" },
        summary: "Web builder application for Shopify – E-commerce platform with customers mainly in Europe.",
        responsibilities: [
            "UI/UX handling & edits",
            "Feature development",
            "Support CS to assist users",
            "Bug fixes",
            "Testing & go-live support",
        ],
        achievements: [
            "Helped European users via live support",
            "Built strong product ownership mindset",
        ],
        tech: ["Shopify", "E-commerce", "Web builder", "Customer support"],
        links: {},
    },
    {
        id: "motelo",
        name: "Motelo",
        role: "Web Developer",
        period: { from: "Nov 2020", to: "Apr 2021" },
        client: "—",
        summary:
            "Platform for finding and renting houses for college students. This is a web application for supporting the house owner to the public and posting their rooms for rent and students want to find room suits for their needs based on the surrounding data.",
        responsibilities: [
            "User research",
            "Project architecture design",
            "Feature development",
            "Bug fixes",
            "Testing & go-live support",
        ],
        achievements: [
            "Initiated product via market research",
            "Designed full architecture & docs",
            "Developed and tested features for a student housing platform.",
            "Delivered MVP from concept to release",
        ],
        tech: ["Housing", "Market research", "Go-live", "Project Management"],
        links: {},
    },
    {
        id: "soundid",
        name: "SoundID",
        role: "Web Developer",
        period: { from: "Mar 2020", to: "May 2020" },
        client: "Japan",
        summary:
            "Bar reservation project. Stack: CakePHP, Bootstrap 4, jQuery, MySQL.",
        responsibilities: ["Development", "Code optimization", "Bug fixing"],
        achievements: [],
        tech: ["CakePHP", "Bootstrap 4", "jQuery", "MySQL"],
        links: {},
    },
    {
        id: "moneylab",
        name: "MoneyLab",
        role: "Backend Developer",
        period: { from: "Feb 2020", to: "Mar 2020" },
        client: "—",
        summary:
            "Manages real-estate records. Stack: Laravel + MySQL.",
        responsibilities: ["Development", "Code optimization", "Bug fixing"],
        achievements: [],
        tech: ["Laravel", "MySQL"],
        links: {},
    },
];

// helper to pick projects by id
const pick = (ids) => PROJECT_LIST.filter(p => ids.includes(p.id));

export const EXPERIENCES_LIST = [
    {
        company: "CMC Global",
        role: "Web Developer",
        from: "June 2022",
        to: "Present",
        responsibilities: [
            "Developed and maintained large-scale web apps using VueJS and ReactJS.",
            "Handled project implementation and presale consulting (analysis, HLD, WBS).",
            "Collaborated with PM, BA, UI/UX to define roadmaps and ship features.",
            "Led front-end efforts in complex environments and planning meetings.",
        ],
        achievements: [
            "Built AI-integrated platforms (e.g., Bespin) with WebSocket, LLM, AWS EC2, Copilot.",
            "Transformed client ideas into clear technical plans for presale wins.",
            "Delivered features for enterprise systems (Samsung, Panasonic) using TDD & design docs.",
            "Strengthened cloud/system-design and stakeholder communication; led/colead feature teams.",
        ],
        projects: pick([
            "bespin",
            "cloud-in-one",
            "samsung-dc",
            "panasonic-vendor",
            "samsung-prms",
        ]),
        logo: "/logo-cmcg.webp",
    },
    {
        company: "Seal Commerce",
        role: "Front-end Developer",
        from: "May 2021",
        to: "May 2022",
        responsibilities: [
            "Implemented web design and development principles to build stable software.",
            "Supported projects throughout all phases of delivery.",
            "Developed UI using Vue, Bootstrap 4, jQuery.",
        ],
        achievements: [
            "Communicated technical issues clearly to team and clients.",
            "Explored innovative ideas and POCs based on project requirements.",
        ],
        projects: pick(["gempages"]),
        logo: "/logo-sealcommerce.png",
    },
    {
        company: "IMPL Vietnam",
        role: "Web Developer",
        from: "Dec 2019",
        to: "Sep 2020",
        responsibilities: [
            "Maintained and developed open-source web projects for Japanese customers.",
            "Primary tech stack: JavaScript, PHP.",
        ],
        achievements: [
            "Contributed to open-source software and learned Japanese customer workflows.",
            "Deepened foundations in HTML, CSS, and JavaScript.",
        ],
        projects: pick([
            "soundid",
            "moneylab",
        ]),
        logo: "/logo-impl.png",
    },
    {
        company: "Freelance",
        role: "Web Developer",
        responsibilities: [
            "Collaborate with clients to understand requirements, propose solutions, and ensure on-time, in-scope delivery.",
            "Oversee the full development cycle to deliver scalable, maintainable, and user-friendly applications.",
        ],
        achievements: [
            "Delivered successful projects across E-commerce, meeting both client goals and user needs.",
            "Enhanced skills in front-end frameworks and presale consulting.",
        ],
        projects: pick(["motelo"]),
    },
];

