import { cva, VariantProps } from "class-variance-authority";
import { FC, HTMLAttributes, memo, useEffect, useMemo, useState } from "react";
import Paragraph from "./Paragraph";

const singleCouterVariants = cva(
  "flex flex-col justify-center items-center relative max-w-[155px] h-[120px] rounded-[60px] text-white after:absolute after:content-[''] after:w-full after:h-[120px] after:rounded-[60px] after:-z-1 after:top-0 after:left-0 after:-rotate-45",
  {
    variants: {
      theme: {
        red: "after:bg-horizontal-red",
        blue: "after:bg-horizontal-blue",
        green: "after:bg-horizontal-green",
      },
    },
    defaultVariants: {
      theme: "red",
    },
  }
);

interface SingleCouterProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof singleCouterVariants> {
  count: number;
  text: string;
  unit?: string;
}

const SingleCouter: FC<SingleCouterProps> = ({
  theme,
  className,
  count,
  text,
  unit,
  ...props
}) => {
  const [counter, setCouter] = useState<number>(0);

  const time = useMemo(() => {
    if (count <= 5) {
      return Math.round(2000 / (count * 10));
    } else {
      return Math.round(2000 / count);
    }
  }, []);

  useEffect(() => {
    const myInterval = setInterval(() => {
      if (counter < count) {
        if (count <= 5) {
          setCouter(+(counter + 0.1).toFixed(1));
        } else {
          setCouter(counter + 1);
        }
      }
    }, time);

    return () => clearInterval(myInterval);
  }, [counter, time]);

  return (
    <div {...props} className={singleCouterVariants({ theme, className })}>
      <div className="text-xl font-semibold">
        {counter}
        {unit ? unit : ""}
      </div>
      <Paragraph type="white">{text}</Paragraph>
    </div>
  );
};

export default memo(SingleCouter);
