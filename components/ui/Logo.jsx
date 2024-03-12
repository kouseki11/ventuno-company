import React from "react";
import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href="/">
      <div className="flex items-center space-x-2 cursor-pointer">
      <div className="w-14 h-14 sm:w-16 sm:h-16 relative">
          <Image
            src="/images/ventuno.jpg"
            alt="Logo"
            layout="fill"
            objectFit="contain"
            className="rounded-full"
          />
        </div>
      </div>
    </Link>
  );
};

export default Logo;
