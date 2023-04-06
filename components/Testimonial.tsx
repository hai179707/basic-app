import { FC } from "react";
import Section from "./Section";
import Heading from "./Heading";
import SectionTitle from "./SectionTitle";
import Card from "./Card";
import { RiDoubleQuotesL, RiStarFill } from "react-icons/ri";
import UserAvatar from "./UserAvatar";
import Paragraph from "./Paragraph";

const Testimonial: FC = () => {
  return (
    <Section pt={120}>
      <SectionTitle align="center" width="1/3">
        <Heading level="h2" size="2xl" sizemd="3xl" align="center">
          Users sharing
          <span> their experience</span>
        </Heading>
      </SectionTitle>
      <div className="pt-10 flex flex-wrap w-full gap-y-5 md:px-28 lg:px-0">
        <div className="px-4 w-full lg:w-1/3">
          <Card>
            <div className="flex justify-between">
              <RiDoubleQuotesL className="text-3xl text-ct-blue group-hover:text-ct-orange transition-colors duration-500" />
              <div className="flex gap-2">
                <RiStarFill className="text-ct-orange text-xl" />
                <RiStarFill className="text-ct-orange text-xl" />
                <RiStarFill className="text-ct-orange text-xl" />
                <RiStarFill className="text-ct-orange text-xl" />
                <RiStarFill className="text-ct-orange text-xl" />
              </div>
            </div>
            <Paragraph className="mt-8 mb-6">
              Lorem ipsum dolor sit amet,consetetur sadipscing elitr, seddiam
              nonu eirmod tempor invidunt labore. Lorem ipsum dolor sit amet,
              consetetur sadipscing elitr, seddiam nonu.
            </Paragraph>
            <div className="flex items-center">
              <UserAvatar src="/images/author-1.png" />
              <div>
                <Heading level="h6" size="lg">
                  Jenny Deo
                </Heading>
                <Paragraph>CEO, SpaceX</Paragraph>
              </div>
            </div>
          </Card>
        </div>
        <div className="px-4 w-full lg:w-1/3">
          <Card type="active">
            <div className="flex justify-between">
              <RiDoubleQuotesL className="text-3xl text-ct-blue group-hover:text-ct-orange transition-colors duration-500 ct-testimonial-quote" />
              <div className="flex gap-2">
                <RiStarFill className="text-ct-orange text-xl" />
                <RiStarFill className="text-ct-orange text-xl" />
                <RiStarFill className="text-ct-orange text-xl" />
                <RiStarFill className="text-ct-orange text-xl" />
                <RiStarFill className="text-ct-orange text-xl" />
              </div>
            </div>
            <Paragraph className="mt-8 mb-6">
              Lorem ipsum dolor sit amet,consetetur sadipscing elitr, seddiam
              nonu eirmod tempor invidunt labore. Lorem ipsum dolor sit amet,
              consetetur sadipscing elitr, seddiam nonu.
            </Paragraph>
            <div className="flex items-center">
              <UserAvatar src="/images/author-2.png" />
              <div>
                <Heading level="h6" size="lg">
                  Marjin Otte
                </Heading>
                <Paragraph>UX Specialist, Yoast</Paragraph>
              </div>
            </div>
          </Card>
        </div>
        <div className="px-4 w-full lg:w-1/3">
          <Card>
            <div className="flex justify-between">
              <RiDoubleQuotesL className="text-3xl text-ct-blue group-hover:text-ct-orange transition-colors duration-500" />
              <div className="flex gap-2">
                <RiStarFill className="text-ct-orange text-xl" />
                <RiStarFill className="text-ct-orange text-xl" />
                <RiStarFill className="text-ct-orange text-xl" />
                <RiStarFill className="text-ct-orange text-xl" />
                <RiStarFill className="text-ct-orange text-xl" />
              </div>
            </div>
            <Paragraph className="mt-8 mb-6">
              Lorem ipsum dolor sit amet,consetetur sadipscing elitr, seddiam
              nonu eirmod tempor invidunt labore. Lorem ipsum dolor sit amet,
              consetetur sadipscing elitr, seddiam nonu.
            </Paragraph>
            <div className="flex items-center">
              <UserAvatar src="/images/author-3.png" />
              <div>
                <Heading level="h6" size="lg">
                  David Smith
                </Heading>
                <Paragraph>CTO, Alphabet</Paragraph>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </Section>
  );
};

export default Testimonial;
