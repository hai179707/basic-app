import { FC } from "react";
import Section from "./Section";
import Heading from "./Heading";
import SectionTitle from "./SectionTitle";
import Card from "./Card";
import Image from "next/image";
import {
  RiFacebookFill,
  RiInstagramFill,
  RiLinkedinBoxFill,
  RiTwitterFill,
} from "react-icons/ri";
import Link from "next/link";
import Paragraph from "./Paragraph";

const Team: FC = () => {
  return (
    <Section pt={120}>
      <SectionTitle align="center" width="1/3">
        <Heading level="h2" size="2xl" sizemd="3xl" align="center">
          <span>Meet Our </span>
          Creative Team Members
        </Heading>
      </SectionTitle>
      <div className="pt-10 flex flex-wrap w-full gap-y-5 md:px-28 lg:px-0 text-center">
        <div className="px-4 w-full lg:w-1/3">
          <Card p="none">
            <div className="relative">
              <Image
                width={740}
                height={620}
                alt="team"
                src="/images/team-1.png"
                style={{ width: "100%", height: "auto" }}
              />
              <div className="absolute bottom-10 left-0 right-0">
                <div className="w-2/3 mx-auto rounded-full px-4 py-7 text-white text-2xl bg-white023 relative">
                  <div className="absolute inset-0 z-1 flex justify-around items-center">
                    <Link href="/" target="_blank">
                      <RiFacebookFill />
                    </Link>
                    <Link href="/" target="_blank">
                      <RiTwitterFill />
                    </Link>
                    <Link href="/" target="_blank">
                      <RiInstagramFill />
                    </Link>
                    <Link href="/" target="_blank">
                      <RiLinkedinBoxFill />
                    </Link>
                  </div>
                  <div className="absolute inset-0 bg-vertical-red opacity-0 group-hover:opacity-100 rounded-full transition-opacity duration-500"></div>
                </div>
              </div>
            </div>
            <div className="p-8">
              <Link href="/">
                <Heading level="h5" size="xl" align="center">
                  Isabela Moreira
                </Heading>
              </Link>
              <Paragraph align="center" className="mt-3">
                Founder and CEO
              </Paragraph>
            </div>
          </Card>
        </div>
        <div className="px-4 w-full lg:w-1/3">
          <Card p="none">
            <div className="relative">
              <Image
                width={740}
                height={620}
                alt="team"
                src="/images/team-2.png"
                style={{ width: "100%", height: "auto" }}
              />
              <div className="absolute bottom-10 left-0 right-0">
                <div className="w-2/3 mx-auto rounded-full px-4 py-7 text-white text-2xl bg-white023 relative">
                  <div className="absolute inset-0 z-1 flex justify-around items-center">
                    <Link href="/" target="_blank">
                      <RiFacebookFill />
                    </Link>
                    <Link href="/" target="_blank">
                      <RiTwitterFill />
                    </Link>
                    <Link href="/" target="_blank">
                      <RiInstagramFill />
                    </Link>
                    <Link href="/" target="_blank">
                      <RiLinkedinBoxFill />
                    </Link>
                  </div>
                  <div className="absolute inset-0 bg-vertical-red opacity-0 group-hover:opacity-100 rounded-full transition-opacity duration-500"></div>
                </div>
              </div>
            </div>
            <div className="p-8">
              <Link href="/">
                <Heading level="h5" size="xl" align="center">
                  Elon Musk
                </Heading>
              </Link>
              <Paragraph align="center" className="mt-3">
                Sr. Software Engineer
              </Paragraph>
            </div>
          </Card>
        </div>
        <div className="px-4 w-full lg:w-1/3">
          <Card p="none">
            <div className="relative">
              <Image
                width={740}
                height={620}
                alt="team"
                src="/images/team-3.png"
                style={{ width: "100%", height: "auto" }}
              />
              <div className="absolute bottom-10 left-0 right-0">
                <div className="w-2/3 mx-auto rounded-full px-4 py-7 text-white text-2xl bg-white023 relative">
                  <div className="absolute inset-0 z-1 flex justify-around items-center">
                    <Link href="/" target="_blank">
                      <RiFacebookFill />
                    </Link>
                    <Link href="/" target="_blank">
                      <RiTwitterFill />
                    </Link>
                    <Link href="/" target="_blank">
                      <RiInstagramFill />
                    </Link>
                    <Link href="/" target="_blank">
                      <RiLinkedinBoxFill />
                    </Link>
                  </div>
                  <div className="absolute inset-0 bg-vertical-red opacity-0 group-hover:opacity-100 rounded-full transition-opacity duration-500"></div>
                </div>
              </div>
            </div>
            <div className="p-8">
              <Link href="/">
                <Heading level="h5" size="xl" align="center">
                  Fiona Smith
                </Heading>
              </Link>
              <Paragraph align="center" className="mt-3">
                Business Development Manager
              </Paragraph>
            </div>
          </Card>
        </div>
      </div>
    </Section>
  );
};

export default Team;
