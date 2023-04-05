import { VariantProps, cva } from "class-variance-authority";
import { FC, HTMLAttributes, memo } from "react";

const sectionTitleVariants = cva("pt-2, pb-10", {
  variants: {
    align: {
      center: "mx-auto",
      left: "ml-0",
      right: "ml-auto",
    },
    width: {
      full: "w-full",
      "1/2": "w-full md:w-1/2",
      "1/3": "w-full md:w-1/3",
      "2/3": "w-full md:w-2/3",
    },
  },
  defaultVariants: {
    align: "left",
    width: "full",
  },
});

interface SectionTitleProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof sectionTitleVariants> {}

const SectionTitle: FC<SectionTitleProps> = ({
  align,
  width,
  children,
  ...props
}) => {
  return (
    <div className="w-full">
      <div
        className={
          align === "center"
            ? "w-36 h-1 mb-2 bg-vertical-red mx-auto"
            : align === "left"
            ? "w-36 h-1 mb-2 bg-vertical-red"
            : "w-36 h-1 mb-2 bg-vertical-red ml-auto"
        }
      ></div>
      <div {...props} className={sectionTitleVariants({ align, width })}>
        {children}
      </div>
    </div>
  );
};

export default memo(SectionTitle);
