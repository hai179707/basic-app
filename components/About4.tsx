import { FC, useCallback, useState } from "react";
import Section from "./Section";
import Image from "next/image";
import SectionTitle from "./SectionTitle";
import Heading from "./Heading";
import { RxPlay } from "react-icons/rx";
import VideoModal from "./VideoModal";
import SingleCouter from "./SingleCouter";
import Paragraph from "./Paragraph";

const About4: FC = () => {
  const [isOpenVideoModal, setIsOpenVideoModal] = useState<boolean>(false);

  const handleOpenVideoModal = (): void => {
    setIsOpenVideoModal(true);
  };

  const handleCloseVideoModal = useCallback((): void => {
    setIsOpenVideoModal(false);
  }, []);

  return (
    <Section pt={120}>
      <div className="flex flex-wrap gap-y-16">
        <div className="w-full md:w-1/2">
          <div className="relative">
            <Image
              width={389}
              height={305}
              alt="about1"
              src="/images/dots.svg"
              className="absolute -bottom-8 -left-8 -z-1"
            />
            <div className="relative w-full rounded-2xl overflow-hidden">
              <Image
                width={525}
                height={452}
                alt="video"
                src="/images/video.png"
                style={{ width: "100%", height: "auto" }}
              />
              <div className="absolute inset-0 bg-blue-overlay flex items-center justify-center">
                <div
                  className="w-14 h-14 rounded-full bg-white flex items-center justify-center cursor-pointer"
                  onClick={handleOpenVideoModal}
                >
                  <RxPlay className="text-3xl text-ct-red" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 md:pl-10">
          <SectionTitle align="left">
            <Heading level="h2" size="2xl" sizemd="3xl">
              Cool facts <span>about this app</span>
            </Heading>
          </SectionTitle>
          <Paragraph sizelg="base" className="mb-10">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, seiam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.
          </Paragraph>
          <div className="mt-14 flex justify-between">
            <SingleCouter
              theme="green"
              count={125}
              unit="K"
              text="Downloads"
              className="w-1/3"
            />
            <SingleCouter
              theme="red"
              count={87}
              unit="K"
              text="Active Users"
              className="w-1/3"
            />
            <SingleCouter
              theme="blue"
              count={4.8}
              text="User Rating"
              className="w-1/3"
            />
          </div>
        </div>
      </div>
      <VideoModal
        src="https://www.youtube.com/embed/r44RKWyfcFw?controls=0"
        isOpen={isOpenVideoModal}
        handleClose={handleCloseVideoModal}
      />
    </Section>
  );
};

export default About4;
