import { FC } from "react";
import Section from "./Section";
import Heading from "./Heading";
import SectionTitle from "./SectionTitle";
import Card from "./Card";
import ServiceIcon from "./ServiceIcon";
import { TbBalloon } from "react-icons/tb";
import { RiFlashlightLine, RiSettings3Line } from "react-icons/ri";
import { HiOutlineChevronRight } from "react-icons/hi";
import Link from "next/link";

const Services: FC = () => {
  return (
    <Section pt={120}>
      <SectionTitle align="center" width="1/2">
        <Heading level="h2" size="2xl" sizemd="3xl" align="center">
          Clean and simple design,{" "}
          <span>Comes with everything you need to get started!</span>
        </Heading>
      </SectionTitle>
      <div className="pt-10 sm:pt-16 flex flex-wrap w-full gap-y-5 md:px-28 lg:px-0 text-center">
        <div className="px-4 w-full lg:w-1/3">
          <Card className="hover:border-ct-red">
            <ServiceIcon
              shape="/images/services-shape-1.svg"
              icon={TbBalloon}
            />
            <div className="pt-6">
              <Link href='/' className="font-bold text-xl sm:text-2xl hover:text-ct-blue transition-colors duration-300">Clean</Link>
              <p className="text-sm text-ct-secondary my-5">Lorem ipsum dolor sit amet,consetetur sadipscing elitr, seddiam nonu eirmod tempor invidunt labore.</p>
              <div className="flex justify-center">
                <Link href='/' className="group/link flex gap-2 items-center hover:text-ct-blue transition-colors duration-300">
                  <span>Learn More</span>
                  <HiOutlineChevronRight className="text-xl group-hover/link:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          </Card>
        </div>
        <div className="px-4 w-full lg:w-1/3">
          <Card className="hover:border-ct-red">
            <ServiceIcon
              shape="/images/services-shape-2.svg"
              icon={RiSettings3Line}
            />
            <div className="pt-6">
              <Link href='/' className="font-bold text-xl sm:text-2xl hover:text-ct-blue transition-colors duration-300">Robust</Link>
              <p className="text-sm text-ct-secondary my-5">Lorem ipsum dolor sit amet,consetetur sadipscing elitr, seddiam nonu eirmod tempor invidunt labore.</p>
              <div className="flex justify-center">
                <Link href='/' className="group/link flex gap-2 items-center hover:text-ct-blue transition-colors duration-300">
                  <span>Learn More</span>
                  <HiOutlineChevronRight className="text-xl group-hover/link:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          </Card>
        </div>
        <div className="px-4 w-full lg:w-1/3">
          <Card className="hover:border-ct-red">
            <ServiceIcon
              shape="/images/services-shape-3.svg"
              icon={RiFlashlightLine}
            />
            <div className="pt-6">
              <Link href='/' className="font-bold text-xl sm:text-2xl hover:text-ct-blue transition-colors duration-300">Powerful</Link>
              <p className="text-sm text-ct-secondary my-5">Lorem ipsum dolor sit amet,consetetur sadipscing elitr, seddiam nonu eirmod tempor invidunt labore.</p>
              <div className="flex justify-center">
                <Link href='/' className="group/link flex gap-2 items-center hover:text-ct-blue transition-colors duration-300">
                  <span>Learn More</span>
                  <HiOutlineChevronRight className="text-xl group-hover/link:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </Section>
  );
};

export default Services;
