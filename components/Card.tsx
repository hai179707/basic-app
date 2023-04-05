import { VariantProps, cva } from "class-variance-authority";
import { FC, HTMLAttributes } from "react";

const cardVariants = cva(
  "group bg-white rounded-xl drop-shadow-normal relative py-12 px-8 border-2 border-transparent transition-all duration-500",
  {
    variants: {
        type: {
            active: 'border-ct-red'
        }
    }
  }
);

interface CardProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

const Card: FC<CardProps> = ({ type, className, children, ...props }) => {

  return (
    <div {...props} className={cardVariants({ type, className })}>
      {children}
    </div>
  );
};

export default Card;
