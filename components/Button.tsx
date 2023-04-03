import { cn } from "@/utils";
import { cva, VariantProps } from "class-variance-authority";
import { FC, HTMLAttributes } from "react";

const buttonVariants = cva(
  "min-h-[45px] leading-[45px] text-white px-6 rounded-lg hover:bg-right select-none transition-all duration-500",
  {
    variants: {
      theme: {
        red: "bg-red",
        blue: "bg-blue",
      },
    },
    defaultVariants: {
      theme: "red",
    },
  }
);

interface ButtonProps
  extends HTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button: FC<ButtonProps> = ({ theme, className, children, ...props }) => {
  return (
    <button
      {...props}
      className={cn(buttonVariants({ theme, className }))}
      style={{ backgroundSize: "200%" }}
    >
      {children}
    </button>
  );
};

export default Button;
