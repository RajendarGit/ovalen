import Link from "next/link";
import React from "react";
import Padded from "./padded";
import Logo from "./logo";
import Container from "./container";

const Footer = () => {
  return (
    <footer className="bg-black text-white text-center md:text-left">
      <Padded>
        <Container>
          <div className="md:flex flex-row justify-between items-center">
            <div className="mx-auto w-1/2 md:mx-0 md:w-auto"><Logo /></div>
            <p className="my-4 md:my-0">&copy; {new Date().getFullYear()} Designed by Rajendar. All rights reserved.</p>
            <ul className="flex justify-center space-x-4 mt-2">
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-300 hover:text-white"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-300 hover:text-white">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </Container>
      </Padded>
    </footer>
  );
};

export default Footer;
