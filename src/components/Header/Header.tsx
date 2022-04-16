import React from "react";
import Link from "next/link";
const Header = () => {
  return (
    <div style={{ display: "flex" }}>
      Header
      <ul>
        <li>
          <Link href="/home">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About Us</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a>Contact Us</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
