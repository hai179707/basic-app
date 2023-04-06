import { FC } from "react";
import Section from "./Section";
import Image from "next/image";
import SectionTitle from "./SectionTitle";
import Heading from "./Heading";
import Button from "./Button";
import Paragraph from "./Paragraph";

const About3: FC = () => {
  return (
    <Section pt={120}>
      <div className="flex flex-wrap gap-y-5 md:items-center">
        <div className="w-full md:w-1/2 pr-20">
          <SectionTitle align="left">
            <Heading level="h2" size="2xl" sizemd="3xl">
              <span>Crafted for</span> SaaS, App and Software Landing Page
            </Heading>
          </SectionTitle>
          <Paragraph sizelg="base" className="mb-10">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, seiam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing.
          </Paragraph>
          <Button>Try it Free</Button>
        </div>
        <div className="w-full md:w-1/2">
          <Image
            width={540}
            height={328}
            alt="about1"
            src="/images/about3.svg"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </div>
      <Image
        width={489}
        height={504}
        alt="about 1 shape"
        src="/images/about-shape-1.svg"
        className="absolute top-0 right-0 -z-1"
      />
    </Section>
  );
};

export default About3;
