import React from "react";
import Title from "./title";
import Container from "./container";
import Padded from "./padded";
import Image from "next/image";
import Link from "next/link";

const Products = () => {
  return (
    <Padded>
      <Container>
        <Title title="Products" align="center" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10 mb-20">
          <Link
            href={"/products/galaxy-watch-ultra"}
            className="bg-gray-100 p-8 rounded-lg flex items-center gap-4 hover:shadow-2xl"
          >
            <Image
              src="/assets/images/galaxy-watch-ultra.webp"
              alt="Product 1"
              width={200}
              height={200}
              className="w-10 h-auto object-cover rounded-lg"
            />
            <p className="text-lg text-gray-600">Galaxy Watch Ultra</p>
          </Link>
          <Link
            href={"/products/galaxy-watch-8-classic"}
            className="bg-gray-100 p-8 rounded-lg flex items-center gap-4 hover:shadow-2xl"
          >
            <Image
              src="/assets/images/galaxy-watch-8-classic.webp"
              alt="Product 1"
              width={200}
              height={200}
              className="w-10 h-auto object-cover rounded-lg"
            />
            <p className="text-lg text-gray-600">Galaxy Watch 8 Classic</p>
          </Link>
          <Link
            href={"/products/galaxy-watch-8"}
            className="bg-gray-100 p-8 rounded-lg flex items-center gap-4 hover:shadow-2xl"
          >
            <Image
              src="/assets/images/galaxy-watch-8.webp"
              alt="Product 1"
              width={200}
              height={200}
              className="w-10 h-auto object-cover rounded-lg"
            />
            <p className="text-lg text-gray-600">Galaxy Watch 8</p>
          </Link>
          <Link
            href={"/products/galaxy-watch-7"}
            className="bg-gray-100 p-8 rounded-lg flex items-center gap-4 hover:shadow-2xl"
          >
            <Image
              src="/assets/images/galaxy-watch-7.webp"
              alt="Product 1"
              width={200}
              height={200}
              className="w-10 h-auto object-cover rounded-lg"
            />
            <p className="text-lg text-gray-600">Galaxy Watch 7</p>
          </Link>
        </div>
      </Container>
    </Padded>
  );
};

export default Products;
