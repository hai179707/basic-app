import { FC } from "react";
import Logo from "./Logo";
import FooterNav from "./FooterNav";
import {
  RiFacebookCircleFill,
  RiInstagramFill,
  RiLinkedinBoxFill,
  RiTwitterFill,
} from "react-icons/ri";

const Footer: FC = () => {
  return (
    <div className="py-10">
      <div className="ct-container flex flex-wrap gap-y-10 border-b border-light pb-10">
        <div className="w-full lg:w-1/3 lg:pr-20">
          <Logo large dark />
          <p className="py-10 text-secondary">
            Lorem ipsum dolor sit amet consetetur sadipscing elitr, sederfs diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.
          </p>
          <ul className="flex gap-4 text-2xl text-secondary ">
            <li>
              <a
                href="/"
                target="_blank"
                className="hover:text-blue transition-colors duration-500"
              >
                <RiFacebookCircleFill />
              </a>
            </li>
            <li>
              <a
                href="/"
                target="_blank"
                className="hover:text-blue transition-colors duration-500"
              >
                <RiTwitterFill />
              </a>
            </li>
            <li>
              <a
                href="/"
                target="_blank"
                className="hover:text-blue transition-colors duration-500"
              >
                <RiInstagramFill />
              </a>
            </li>
            <li>
              <a
                href="/"
                target="_blank"
                className="hover:text-blue transition-colors duration-500"
              >
                <RiLinkedinBoxFill />
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full lg:w-2/3 flex flex-wrap gap-y-5">
          <FooterNav
            title="Quick Link"
            className="w-full lg:w-1/3"
            items={[
              { url: "/road-map", text: "Road Map" },
              { url: "/privacy-policy", text: "Privacy Policy" },
              { url: "/refund-policy", text: "Refund Policy" },
              { url: "/terms-of-service", text: "Terms of Service" },
              { url: "/pricing", text: "Pricing" },
            ]}
          />
          <FooterNav
            title="Resources"
            className="w-full lg:w-1/3"
            items={[
              { url: "/home", text: "Home" },
              { url: "/page", text: "Page" },
              { url: "/portfolio", text: "Portfolio" },
              { url: "/blog", text: "Blog" },
              { url: "/contact", text: "Contact" },
            ]}
          />
          <FooterNav
            title="Contact Us"
            className="w-full lg:w-1/3"
            items={[
              { url: "tel:+809272561823", text: "+809272561823" },
              { url: "mailto:info@gmail.com", text: "info@gmail.com" },
              { url: "/", text: "www.yourweb.com" },
              {
                text: "123 Stree New York City , United States Of America 750.",
              },
            ]}
          />
        </div>
      </div>
      <div className="ct-container pt-10 text-secondary">
        <p>Designed and Developed by UIdeck</p>
      </div>
    </div>
  );
};

export default Footer;
