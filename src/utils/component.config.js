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

export const EXPERIENCES_LIST = [
    {
        img: '/upwork.png',
        from: 'Nov 2021',
        to: 'Present',
        title: 'Sr. Frontend Developer',
        description: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'Ut pretium arcu et massa semper, id fringilla leo semper.',
            'Sed quis justo ac magna.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        ],
    },
    {
        img: '/upwork.png',
        from: 'Jul 2017',
        to: 'Oct 2021',
        title: 'Team Lead',
        description: [
            'Sed quis justo ac magna.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'Sed quis justo ac magna.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        ],
    },
    {
        img: '/upwork.png',
        from: 'Dec 2015',
        to: 'May 2017',
        title: 'Full Stack Developer',
        description: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        ],
    },
];

