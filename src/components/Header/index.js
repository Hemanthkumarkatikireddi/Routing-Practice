// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="header-container">
    <div className="logo-container">
      <img
        className="logo-img"
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
      />
      <h1>Wave</h1>
    </div>
    <div>
      <Link className="link-Class" to="/">
        Home
      </Link>
      <Link className="link-Class" to="./../About">
        About
      </Link>
      <Link className="link-Class" to="./../Contact">
        Contact
      </Link>
    </div>
  </nav>
)

export default Header
