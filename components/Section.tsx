import { ReactNode } from "react";

const Section = ({ pt = 70, children }: { pt?: number; children: ReactNode }) => {
  return (
    <div style={{ paddingTop: `${pt}px` }}>
      <div className="ct-container">{children}</div>
    </div>
  );
};

export default Section;
