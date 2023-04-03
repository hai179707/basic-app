import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  dark?: boolean;
  large?: boolean;
}

const Logo = ({ dark, large }: LogoProps) => {
  return (
    <Link href="/" className="min-w-[111px]">
      {dark ? (
        <Image
          src="images/logo-2.svg"
          alt="logo dark"
          width={large ? 160 : 111}
          height={large ? 44 : 31}
          style={{
            width: "100%",
            height: "auto",
          }}
          className="cursor-pointer"
        />
      ) : (
        <Image
          src="images/logo.svg"
          alt="logo"
          width={large ? 160 : 111}
          height={large ? 44 : 31}
          className="cursor-pointer"
        />
      )}
    </Link>
  );
};

export default Logo;
