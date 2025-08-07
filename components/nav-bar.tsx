import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <nav>
      <ul className="flex space-x-4">
        <li>
          <Link href="/" className="text-gray-300 hover:text-white">
            What&apos;s New
          </Link>
        </li>
        <li>
          <Link href="/about" className="text-gray-300 hover:text-white">
            Stories
          </Link>
        </li>
        <li>
          <Link href="/contact" className="text-gray-300 hover:text-white">
            Brands
          </Link>
        </li>
        <li>
          <Link href="/contact" className="text-gray-300 hover:text-white">
            Insurance
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
