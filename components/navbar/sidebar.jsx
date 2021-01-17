import React from "react";
import Link from 'next/link'

import { slide as Menu } from "react-burger-menu";

export default (props) => {
  return (
    // Pass on our props
    <Menu {...props}>
      <Link href="/">
        <a className="menu-item bm-item">Strona główna</a>
      </Link>

      <Link href="/menu">
        <a className="menu-item bm-item">Menu</a>
      </Link>

      <Link href="tel:+48-33-852-12-12">
        <a className="call-us menu-item bm-item">
        Zamów
          <img src="/images/call.svg" />
          
        </a>
      </Link>

      <Link href="/blog">
        <a className="menu-item bm-item">Blog</a>
      </Link>
    </Menu>
  );
};
