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
    { name: 'Javascript', src: '/stack/js.svg' },
    { name: 'Typescript', src: '/stack/ts.svg' },
    { name: 'React', src: '/stack/react.svg' },
    { name: 'Next.js', src: '/stack/nextjs.svg' },
    { name: 'Node.js', src: '/stack/nodejs.svg' },
    { name: 'Express.js', src: '/stack/express.svg' },
    { name: 'Nest.js', src: '/stack/nest.svg' },
    { name: 'Socket.io', src: '/stack/socket.svg' },
    { name: 'PostgreSQL', src: '/stack/postgres.svg' },
    { name: 'MongoDB', src: '/stack/mongo.svg' },
    { name: 'Sass/Scss', src: '/stack/sass.svg' },
    { name: 'Tailwindcss', src: '/stack/tailwind.svg' },
    { name: 'Figma', src: '/stack/figma.svg' },
    { name: 'Cypress', src: '/stack/cypress.svg' },
    { name: 'Storybook', src: '/stack/storybook.svg' },
    { name: 'Git', src: '/stack/git.svg' },
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

