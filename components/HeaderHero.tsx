import bannerBg from "@/assets/images/banner-bg.svg";
import Button from "./Button";
import Image from "next/image";
import { useCallback } from "react";
import Paragraph from "./Paragraph";

const HeaderHero = () => {
  const handleClick = useCallback((): void => {
    console.log("Get Started!");
  }, []);

  return (
    <div
      className="bg-cover bg-no-repeat bg-bottom text-white text-center pt-44"
      style={{ backgroundImage: `url(${bannerBg})` }}
    >
      <div className="ct-container flex flex-col items-center">
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-light">
          Basic - SaaS Landing Page
        </h3>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
          Kickstart Your SaaS or App Site
        </h2>
        <Paragraph type="white" size="base" className="pt-10 mb-10">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor
        </Paragraph>
        <Button theme="blue" className="mb-10" onClick={handleClick}>
          Get Started
        </Button>
        <Image
          width={650}
          height={364}
          alt="hero"
          src="/images/header-hero.png"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </div>
    </div>
  );
};

export default HeaderHero;
