import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface LogoProps {
  dark?: boolean;
  large?: boolean;
}

const Logo: FC<LogoProps> = ({ dark, large }) => {
  return (
    <Link href="/" className="min-w-[111px]">
      {dark ? (
        <Image
          src="images/logo-2.svg"
          alt="logo dark"
          width={large ? 160 : 111}
          height={large ? 44 : 31}
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
