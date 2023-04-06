import { VariantProps, cva } from "class-variance-authority";
import { FC, HTMLAttributes, memo } from "react";

const headingVariants = cva("pb-2", {
  variants: {
    size: {
      xs: "text-xs",
      sm: "text-sm",
      base: "text-base",
      lg: "text-lg",
      xl: "text-xl",
      "2xl": "text-2xl",
      "3xl": "text-3xl",
      "4xl": "text-4xl",
      "5xl": "text-5xl",
      "6xl": "text-6xl",
      "7xl": "text-7xl",
      "8xl": "text-8xl",
      "9xl": "text-9xl",
    },
    sizesm: {
      xs: "sm:text-xs",
      sm: "sm:text-sm",
      base: "sm:text-base",
      lg: "sm:text-lg",
      xl: "sm:text-xl",
      "2xl": "sm:text-2xl",
      "3xl": "sm:text-3xl",
      "4xl": "sm:text-4xl",
      "5xl": "sm:text-5xl",
      "6xl": "sm:text-6xl",
      "7xl": "sm:text-7xl",
      "8xl": "sm:text-8xl",
      "9xl": "sm:text-9xl",
    },
    sizemd: {
      xs: "md:text-xs",
      sm: "md:text-sm",
      base: "md:text-base",
      lg: "md:text-lg",
      xl: "md:text-xl",
      "2xl": "md:text-2xl",
      "3xl": "md:text-3xl",
      "4xl": "md:text-4xl",
      "5xl": "md:text-5xl",
      "6xl": "md:text-6xl",
      "7xl": "md:text-7xl",
      "8xl": "md:text-8xl",
      "9xl": "md:text-9xl",
    },
    sizelg: {
      xs: "lg:text-xs",
      sm: "lg:text-sm",
      base: "lg:text-base",
      lg: "lg:text-lg",
      xl: "lg:text-xl",
      "2xl": "lg:text-2xl",
      "3xl": "lg:text-3xl",
      "4xl": "lg:text-4xl",
      "5xl": "lg:text-5xl",
      "6xl": "lg:text-6xl",
      "7xl": "lg:text-7xl",
      "8xl": "lg:text-8xl",
      "9xl": "lg:text-9xl",
    },
    sizexl: {
      xs: "xl:text-xs",
      sm: "xl:text-sm",
      base: "xl:text-base",
      lg: "xl:text-lg",
      xl: "xl:text-xl",
      "2xl": "xl:text-2xl",
      "3xl": "xl:text-3xl",
      "4xl": "xl:text-4xl",
      "5xl": "xl:text-5xl",
      "6xl": "xl:text-6xl",
      "7xl": "xl:text-7xl",
      "8xl": "xl:text-8xl",
      "9xl": "xl:text-9xl",
    },
    align: {
      center: "text-center",
      left: "text-left",
      right: "text-right",
    },
    type: {
      secondary: "text-ct-secondary",
      black: "text-black",
      white: "text-white",
    },
  },
  defaultVariants: {
    size: "sm",
    align: "left",
    type: "secondary",
  },
});

interface ParagraphProps
  extends HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof headingVariants> {}

const Paragraph: FC<ParagraphProps> = ({
  size,
  sizesm,
  sizemd,
  sizelg,
  sizexl,
  type,
  align,
  className,
  children,
  ...props
}) => {
  return (
    <p
      {...props}
      className={headingVariants({
        size,
        sizesm,
        sizemd,
        sizelg,
        sizexl,
        type,
        align,
        className,
      })}
    >
      {children}
    </p>
  );
};

export default memo(Paragraph);
