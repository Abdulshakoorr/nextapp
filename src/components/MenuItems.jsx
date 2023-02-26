import Link from "next/link";
import React from "react";

const MenuItems = ({ title, address, icon }) => {
  return (
    <ul>
      <Link href={address}>
        <li className="block sm:hidden">{icon}</li>
        <li className="hidden sm:block font-medium">{title}</li>
      </Link>
    </ul>
  );
};

export default MenuItems;
