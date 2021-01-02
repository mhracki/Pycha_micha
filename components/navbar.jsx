import Link from 'next/link'
import React from 'react'

const Navbar =() =>{
  return (
    <div className="flex nav">
      <Link href="/"><img height="150px" src="/images/logo_black.svg"/></Link>
      <ul className="flex link">
      <li>
        <Link href="/menu">
          <a>Menu</a>
        </Link>
      </li>
      <li>
        <Link href="tel:+48-33-852-12-12">
          <a>Zadzwoń Teraz</a>
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
