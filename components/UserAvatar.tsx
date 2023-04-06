import Image from "next/image";
import { FC } from "react";

interface UserAvatarProps {
  src: string;
}

const UserAvatar: FC<UserAvatarProps> = ({ src }) => {
  return (
    <div className="relative w-32 h-32 flex items-center justify-center">
      <Image
        className="absolute"
        width={120}
        height={120}
        alt="shape"
        src="/images/testimonial-shape.svg"
      />
      <Image width={77} height={77} alt="avatar" src={src} />
    </div>
  );
};

export default UserAvatar;
