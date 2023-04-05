import { FC } from "react";
import Section from "./Section";
import Heading from "./Heading";
import SectionTitle from "./SectionTitle";

const Features: FC = () => {
  return (
    <Section pt={120}>
      <SectionTitle align="center" width='2/3'>
          <Heading level="h2" size='2xl' sizemd='3xl' align='center'>
            Clean and simple design,{" "}
            <span>Comes with everything you need to get started!</span>
          </Heading>
      </SectionTitle>
    </Section>
  );
};

export default Features;
