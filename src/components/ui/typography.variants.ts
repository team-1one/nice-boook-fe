import { cva } from "class-variance-authority";

export const typographyVariants = cva(
  "font-sans antialiased text-gray-primary",
  {
    variants: {
      variant: {
        h1: [
          // 320px
          "text-[32px] font-bold leading-[41px] tracking-[-0.01em]",
          // 640px - 1200px
          "breakpoint-sm:text-[48px] breakpoint-sm:leading-[56px] breakpoint-sm:tracking-[-0.02em]"
        ],
        h2: [
          "text-[22px] font-bold leading-[31px] tracking-[0]",
          "breakpoint-sm:text-[32px] breakpoint-sm:leading-[41px] breakpoint-sm:tracking-[-0.01em]"
        ],
        h3: [
          "text-[20px] font-semibold leading-[26px] tracking-[0]",
          "breakpoint-sm:text-[22px] breakpoint-sm:font-bold sm:leading-[31px]"
        ],
        h4: [
          "text-[16px] font-semibold leading-[20px] tracking-[0]",
          "breakpoint-sm:text-[20px] breakpoint-sm:leading-[26px]"
        ],
        h5: "text-[16px] font-semibold leading-[24px] tracking-[0]",
        uppercase: "text-[12px] font-bold leading-[11px] tracking-[0.01em] uppercase",
        button: "text-[14px] font-semibold leading-[21px] tracking-[0]",
        body: "text-[14px] font-normal leading-[21px] tracking-[0]",
        small: "text-[12px] font-semibold leading-[15px] tracking-[0]",
      },
      color: {
        primary: "text-[var(--color-gray-primary)]",
        secondary: "text-[var(--color-gray-secondary)]",
        white: "text-[var(--color-white)]",
      },
    },
    
    defaultVariants: {
      variant: "body",
    },
  }
);