// src/utils/typography.config.js

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

export const FONT_WEIGHTS = {
    400: 'font-normal',
    500: 'font-medium',
    600: 'font-semibold',
    700: 'font-bold',
};

export const DEFAULT_TEXT_COLOR = 'gray-900'
