// import React from "react";
import Link from "next/link";
import type { FC } from "react";

const Header: FC = () => {
  return (
    <header>
      <strong>MEGA header</strong>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/kittens">Kittens</Link>
        <Link href="/dogs">dogs</Link>
        <Link href="/bober">bober</Link>
      </nav>
    </header>
  );
};

export default Header;
