import React from "react";
import Container from "./container";
import Padded from "./padded";
import Title from "./title";
import { Button } from "./ui/button";
import Image from "next/image";

const NewArticle = () => {
  return (
    <Container>
      <Padded>
        <div className="md:flex md:flex-row justify-between items-center gap-4 mb-8">
          <Title title="New Article" />
          <Button className="btn-theme mt-6 w-full h-40 md:w-auto md:h-10 md:mt-0">View more</Button>
        </div>
        <div className="md:flex md:flex-row gap-4 lg:mb-20">
          <div className="relative bg-[url('/assets/images/cat1.jpg')] bg-cover bg-center h-auto w-full rounded-2xl">
            <div className="absolute bottom-0 left-0 w-full p-10 hidden md:block">
              <p className="text-lg text-white mb-2">
                lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <p className="text-md text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti accusamus nisi exercitationem repellendus libero eius.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <Image
              src="/assets/images/cat2.jpg"
              alt="Article Image"
              width={500}
              height={300}
              className="rounded-2xl object-cover w-full h-auto"
            />
            <Image
              src="/assets/images/cat3.jpg"
              alt="Article Image"
              width={500}
              height={300}
              className="rounded-2xl object-cover w-full h-auto"
            />
          </div>
        </div>
      </Padded>
    </Container>
  );
};

export default NewArticle;
