import Link from "next/link";

interface LogoProps {
  dark?: boolean;
  large?: boolean;
}

const Logo = ({ dark, large }: LogoProps) => {
  return (
    <Link href="/" className="min-w-[111px]">
      {dark ? (
        <img
          src="images/logo-2.svg"
          alt="logo dark"
          className={large ? "cursor-pointer w-40" : "cursor-pointer"}
        />
      ) : (
        <img
          src="images/logo.svg"
          alt="logo"
          className={large ? "cursor-pointer w-40" : "cursor-pointer"}
        />
      )}
    </Link>
  );
};

export default Logo;
