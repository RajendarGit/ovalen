import React from "react";
import Container from "./container";
import Title from "./title";
import { Button } from "./ui/button";
import Image from "next/image";
import Padded from "./padded";

const AdvancedTechnology = () => {
  return (
    <Container>
      <Padded>
        <div className="md:flex flex-row items-center justify-center lg:py-20 gap-4 lg:gap-20">
          <div className="grid">
            <Title
              title="Advanced Technology"
              description="Our advanced technology ensures the highest quality and performance."
            />
            <Button className="mt-10 btn-theme w-1/3">Shop Now</Button>
          </div>
          <Image
            src="/assets/images/engine.png"
            alt="Technology"
            width={1000}
            height={500}
            className="w-full object-cover lg:w-1/2 h-120 rounded-2xl shadow-xl mt-10 md:mt-0"
          />
        </div>
      </Padded>
    </Container>
  );
};

export default AdvancedTechnology;
