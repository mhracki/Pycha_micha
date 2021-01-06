import Link from 'next/link'
import React from 'react'

const Navbar =({color}) =>{
  return (
    <div className={`flex nav ${color}`}>
      <div className="img-container flex">  
        <Link href="/">{color?<img height="100px" src="/images/logobk.png"/>:<img height="100px" src="/images/logowh.png"/>}</Link>
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
          <a className="call-us">Zadzwoń Teraz! </a>
        </Link>
      </li>
      <li>
        <Link href="/blog/o-nas">
          <a>O nas</a>
        </Link>
      </li>
    </ul>
      
    </div>
  )
}
export default Navbar;
