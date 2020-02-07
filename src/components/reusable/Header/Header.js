import React, { useState } from "react"
import "./Header.scss"


// Import icons
import { FiMenu } from "react-icons/fi";
import { FiX } from "react-icons/fi";

// Import layout
import WidthConstraint from "../WidthConstraint/WitdhConstraint"

// Import icon image
import icon from "../../../../static/branding/gatsby-icon.png"

// Import custom components
import { Link } from "gatsby"

// const Hamburger = () => (
//   <div className="hamburger-container">
//     <input type="checkbox" className="toggler" />
//     <div className="hambuger"></div>
//     <div className="menu">
//       <div>
//         <div>
//           <ul>
//             <li>
//               <Link to="/ve-chung-toi">Ve Chung Toi</Link>
//             </li>
//             <li>
//               <Link to="/blog">Blog</Link>
//             </li>
//           </ul>
//         </div>
//       </div>

//     </div>
//   </div>
// )

const NavLinkGroup = () => (
  <ul>
    <li>
      <Link to="/ve-chung-toi">Về Chúng Tôi</Link>
    </li>
    <li>
      <Link to="/ve-chung-toi">Du An</Link>
    </li>
    <li>
      <Link to="/ve-chung-toi">Cong Trinh</Link>
    </li>
    <li>
      <Link to="/ve-chung-toi">Lien He</Link>
    </li>
    <li>
      <Link to="/blog">Bai Viet</Link>
    </li>
  </ul>
)
const HambugerMenu = () => {
  const [showOverlay, setShowOverlay] = useState(false);
  return (
    <div className="hamburger-container">
      <button onClick={() =>
        setShowOverlay(!showOverlay)}>
        {!showOverlay ? <FiMenu size={24} /> : <FiX size={24} />}
      </button>
      {showOverlay && <div className="overlay">
        <NavLinkGroup />
      </div>}
    </div >
  )
}
const Header = () => {
  console.log(icon)
  return (
    <header>
      <div className="small-contact">
        <WidthConstraint>
          <p>SDT: 01010101001</p>
        </WidthConstraint>
      </div>
      <div className="navbar">
        <WidthConstraint>
          <div className="logo-container">
            <Link to="/">
              <img src={icon} width="36" />
            </Link>
            <Link to="/">
              <p className="logo-type">IAI Corporation</p>
            </Link>
          </div>
          <div className="nav-container">
            <div className="nav-item-group">
              <NavLinkGroup />
            </div>
          </div>
          <HambugerMenu />
        </WidthConstraint>
      </div>
    </header>
  )
}

export default Header
