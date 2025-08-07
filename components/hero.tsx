import Image from "next/image";
import Container from "./container";

const Hero = () => {
  return (
    <div className="relative bg-white text-black">
      {/* Background Image */}
      <Image
        src="/assets/images/hero-banner.jpg"
        alt="Hero Image"
        width={800}
        height={600}
        priority
        className="object-cover w-full lg:w-2/3 h-full absolute inset-0 z-0 right-0 ml-auto rounded-l-2xl"
      />

      {/* Overlay */}
      <div className="relative z-10 py-24">
        <Container>
          <div className="bg-white max-w-xl p-8 rounded-2xl">
            <p className="text-sm text-gray-400 mb-2 border-l-2 border-gray-300 pl-3">
              Effective gadgets for the modern world
            </p>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
              Ovalen will make <br /> your life easier
            </h1>
            <p className="text-gray-600 text-lg mb-6">
              Explore our best products to find what you want, there you will definitely find it.
            </p>
            <button className="bg-black text-white px-6 py-3 rounded-full font-medium">
              Explore Product
            </button>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Hero;