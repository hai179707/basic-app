import { FC, useEffect, useState } from "react";
import Logo from "./Logo";
import Link from "next/link";
import Button from "./Button";
import { useRouter } from "next/router";
import { RiMenuLine, RiCloseLine } from "react-icons/ri";

const Header: FC = () => {
  const [stickyHeader, setStickyHeader] = useState<boolean>(false);
  const [isOpenMobileNav, setIsOpenMobileNav] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    setStickyHeader(window.scrollY >= 50 || router.asPath !== "/");

    const handleChangeHeader = () => {
      if (window.scrollY >= 50 || router.asPath !== "/") {
        setStickyHeader(true);
      } else {
        setStickyHeader(false);
      }
    };

    window.addEventListener("scroll", handleChangeHeader);

    return () => window.removeEventListener("scroll", handleChangeHeader);
  }, [router.asPath]);

  return (
    <div
      className={
        stickyHeader
          ? "fixed z-1 top-0 left-0 right-0 bg-white h-16 flex items-center drop-shadow-sm transition-all duration-500"
          : "fixed z-1 top-0 left-0 right-0 bg-transparent h-24 flex items-center transition-all duration-500"
      }
    >
      <div className="ct-container flex justify-between items-center">
        <Logo dark={stickyHeader} />
        <div className="flex justify-end items-center">
          <ul className="gap-6 lg:gap-10 text-white pr-10 hidden lg:flex">
            <li className={router.asPath === "/" ? "active" : ""}>
              <Link
                className={
                  stickyHeader
                    ? "py-1 text-black transition-all duration-500 header-nav-link"
                    : "py-1 transition-all duration-500"
                }
                href="/"
              >
                Home
              </Link>
            </li>
            <li className={router.asPath === "/#features" ? "active" : ""}>
              <Link
                className={
                  stickyHeader
                    ? "py-1 text-black transition-all duration-500 header-nav-link"
                    : "py-1 transition-all duration-500"
                }
                href="/#features"
              >
                Features
              </Link>
            </li>
            <li className={router.asPath === "/#about" ? "active" : ""}>
              <Link
                className={
                  stickyHeader
                    ? "py-1 text-black transition-all duration-500 header-nav-link"
                    : "py-1 transition-all duration-500"
                }
                href="/#about"
              >
                About
              </Link>
            </li>
            <li className={router.asPath === "/#why" ? "active" : ""}>
              <Link
                className={
                  stickyHeader
                    ? "py-1 text-black transition-all duration-500 header-nav-link"
                    : "py-1 transition-all duration-500"
                }
                href="/#why"
              >
                Why
              </Link>
            </li>
            <li className={router.asPath === "/#team" ? "active" : ""}>
              <Link
                className={
                  stickyHeader
                    ? "py-1 text-black transition-all duration-500 header-nav-link"
                    : "py-1 transition-all duration-500"
                }
                href="/#team"
              >
                Team
              </Link>
            </li>
            <li className={router.asPath === "/#blog" ? "active" : ""}>
              <Link
                className={
                  stickyHeader
                    ? "py-1 text-black transition-all duration-500 header-nav-link"
                    : "py-1 transition-all duration-500"
                }
                href="/#blog"
              >
                Blog
              </Link>
            </li>
          </ul>
          <ul
            className={
              isOpenMobileNav
                ? "text-black text-lg flex flex-col lg:hidden bg-white fixed top-0 right-0 w-screen h-screen items-center justify-center transition-all duration-500"
                : "text-black text-lg flex flex-col lg:hidden bg-white fixed top-0 right-full w-screen h-screen items-center justify-center transition-all duration-500"
            }
          >
            <li className={router.asPath === "/" ? "active w-full" : "w-full"}>
              <Link
                className="py-2 header-nav-link w-full text-center block"
                onClick={() => setIsOpenMobileNav(false)}
                href="/"
              >
                Home
              </Link>
            </li>
            <li
              className={
                router.asPath === "/#features" ? "active w-full" : "w-full"
              }
            >
              <Link
                className="py-2 header-nav-link w-full text-center block"
                onClick={() => setIsOpenMobileNav(false)}
                href="/#features"
              >
                Features
              </Link>
            </li>
            <li
              className={
                router.asPath === "/#about" ? "active w-full" : "w-full"
              }
            >
              <Link
                className="py-2 header-nav-link w-full text-center block"
                onClick={() => setIsOpenMobileNav(false)}
                href="/#about"
              >
                About
              </Link>
            </li>
            <li
              className={router.asPath === "/#why" ? "active w-full" : "w-full"}
            >
              <Link
                className="py-2 header-nav-link w-full text-center block"
                onClick={() => setIsOpenMobileNav(false)}
                href="/#why"
              >
                Why
              </Link>
            </li>
            <li
              className={
                router.asPath === "/#team" ? "active w-full" : "w-full"
              }
            >
              <Link
                className="py-2 header-nav-link w-full text-center block"
                onClick={() => setIsOpenMobileNav(false)}
                href="/#team"
              >
                Team
              </Link>
            </li>
            <li
              className={
                router.asPath === "/#blog" ? "active w-full" : "w-full"
              }
            >
              <Link
                className="py-2 header-nav-link w-full text-center block"
                onClick={() => setIsOpenMobileNav(false)}
                href="/#blog"
              >
                Blog
              </Link>
            </li>
            <RiCloseLine
              className="text-black text-3xl cursor-pointer absolute top-5 right-5 hover:rotate-90 transition-transform duration-500"
              onClick={() => setIsOpenMobileNav(false)}
            />
          </ul>
          <Button theme="red">Download Now</Button>
          <RiMenuLine
            className={
              stickyHeader
                ? "lg:hidden text-black text-3xl cursor-pointer ml-3"
                : "lg:hidden text-white text-3xl cursor-pointer ml-3"
            }
            onClick={() => setIsOpenMobileNav(true)}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
