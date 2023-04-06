import { VariantProps, cva } from "class-variance-authority";
import { FC, HTMLAttributes, memo } from "react";

const cardVariants = cva(
  "group bg-white rounded-xl overflow-hidden drop-shadow-normal relative border-2 transition-all duration-500",
  {
    variants: {
      type: {
        active: "active border-ct-orange",
        default: "border-transparent",
        hover: "border-transparent hover:border-ct-orange",
      },
      p: {
        base: "p-8",
        none: "p-0",
      },
    },
    defaultVariants: {
      p: "base",
      type: "default",
    },
  }
);

interface CardProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

const Card: FC<CardProps> = ({ type, p, className, children, ...props }) => {
  return (
    <div {...props} className={cardVariants({ type, p, className })}>
      {children}
    </div>
  );
};

export default memo(Card);
