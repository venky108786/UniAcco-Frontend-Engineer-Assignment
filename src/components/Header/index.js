import './index.css'
import {BiGlobe} from 'react-icons/bi'
import {FaBars} from 'react-icons/fa'
import {HiUserCircle} from 'react-icons/hi2'
const Header = () => {
  const onClickLogoButton = () => {
    window.location.assign('https://www.airbnb.co.in/')
  }
  return (
    <nav className="nav-bar-header">
      <div className="nav-content">
        <div>
          <button
            type="button"
            className="logo-button"
            onClick={onClickLogoButton}
          >
            <img
              src="https://res.cloudinary.com/dvdfoq1j9/image/upload/v1667662008/Airbnb_Logo_gfcs9j.jpg"
              alt="logo"
              className="airbnb-logo"
            />
          </button>
        </div>
        <div className="header-options-container">
          <div>
            <button type="button" className="becom-a-host nav-bar-button">
              Become a host
            </button>
          </div>
          <div>
            <button type="button" className="nav-bar-button globe-icon-button">
              <BiGlobe className="icons" />
            </button>
          </div>
          <div className="signIn-container">
            <div>
              <FaBars className="icons" />
            </div>
            <div>
              <HiUserCircle className="icons" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
export default Header
