import { menu } from "@/data/menu";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <nav>
      <ul className="flex space-x-10">
        {menu.map(item => (
          <li key={item.name}>
            <Link href={item.path} className="text-gray-50">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
