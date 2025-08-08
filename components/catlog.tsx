import Image from "next/image";
import React from "react";

const Catlog = () => {
  return (
    <div className="grid grid-cols-2">
      <Image
        src="/assets/images/cat1.jpg"
        alt="Catlog"
        width={1000}
        height={500}
        className="w-full object-cover h-60"
      />
      <Image
        src="/assets/images/cat2.jpg"
        alt="Catlog"
        width={1000}
        height={500}
        className="w-full object-cover h-60"
      />
      <Image
        src="/assets/images/cat3.jpg"
        alt="Catlog"
        width={1000}
        height={500}
        className="w-full object-cover h-60"
      />
      <Image
        src="/assets/images/map.png"
        alt="Catlog"
        width={1000}
        height={500}
        className="w-full object-cover h-60"
      />
    </div>
  );
};

export default Catlog;
