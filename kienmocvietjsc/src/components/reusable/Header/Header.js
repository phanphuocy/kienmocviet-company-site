import React from "react"
import "./Header.module.scss"

// Import custom components
import { Link } from "gatsby"

const Header = () => {
  return (
    <header>
      <div>
        <Link className="logoType">IAI</Link>
      </div>
      <div>
        <ul>
          <li>
            <Link to="/ve-chung-toi">Ve Chung Toi</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header
