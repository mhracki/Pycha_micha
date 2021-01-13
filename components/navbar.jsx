import Link from 'next/link'
import React from 'react'

const Navbar =({color}) =>{
  return (
    <div className={`flex nav ${color}`}>
      <div className="img-container flex">
        <Link href="/">{color?<img className="logo" src="/images/logobk.png"/>:<img className="logo"  src="/images/logowh.png"/>}</Link>
      </div>



      <ul className="flex link">
      <li>
        <Link href="/">
          <a>Strona główna</a>
        </Link>
      </li>
      <li>
        <Link href="/menu">
          <a>Menu</a>
        </Link>
      </li>
      <li>

        <Link href="tel:+48-33-852-12-12">
          <a className="call-us"><img  src="/images/call.svg"/>Zamów</a>
        </Link>
      </li>
      <li>
        <Link href="/blog">
          <a>Blog</a>
        </Link>
      </li>
    </ul>
    {/*https://codesandbox.io/s/sidebar-using-react-burger-menu-o4bws?file=/src/styles.css*/}
    </div>
  )
}
export default Navbar;
