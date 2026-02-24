import { cva } from 'class-variance-authority';

export const typographyVariants = cva(
  'font-sans antialiased text-gray-primary',
  {
    variants: {
      variant: {
        h1: [
          // mobile
          'text-[32px] font-bold leading-[41px] tracking-[-0.01em]',
          // >640px
          'sm:text-[48px] sm:leading-[56px] sm:tracking-[-0.02em]',
        ],
        h2: [
          'text-[22px] font-bold leading-[31px]',
          'sm:text-[32px] sm:leading-[41px] sm:tracking-[-0.01em]',
        ],
        h3: [
          'text-[20px] font-semibold leading-[26px]',
          'sm:text-[22px] sm:font-bold sm:leading-[31px]',
        ],
        h4: [
          'text-[16px] font-semibold leading-[20px]',
          'sm:text-[20px] sm:leading-[26px]',
        ],
        h5: 'text-[16px] font-semibold leading-[24px]',
        uppercase:
          'text-[12px] font-bold leading-[11px] tracking-[0.01em] uppercase',
        button: 'text-[14px] font-semibold leading-[21px]',
        body: 'text-[14px] font-normal leading-[21px]',
        small: 'text-[12px] font-semibold leading-[15px]',
      },
      color: {
        primary: 'text-gray-primary',
        secondary: 'text-gray-secondary',
        icons: 'text-gray-icons',
        white: 'text-white',
        green: 'text-green',
        red: 'text-red',
      },
    },
    defaultVariants: {
      variant: 'body',
      color: 'primary',
    },
  },
);
