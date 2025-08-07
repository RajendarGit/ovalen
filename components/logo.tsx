import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link className="flex items-center gap-2" href="/">
      <Image
        src={"/assets/images/logo.png"}
        alt="Ovalen"
        width={50}
        height={50}
      />
      <span className="text-lg font-bold tracking-widest uppercase text-gray-700">
        Ovalen
      </span>
    </Link>
  );
};

export default Logo;
