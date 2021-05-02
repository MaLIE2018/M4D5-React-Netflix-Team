import SearchBar from "../components/SearchBar";

import netflix_logo from "../assets/img/netflix_logo.png";
import avatar from "../assets/img/avatar.png";
import { AlarmOutline } from "react-ionicons";
// import { render } from "@testing-library/react";
import React from "react";

class NavbarNetflix extends React.Component {
  render() {
    return (
      <nav className='navbar navbar-expand-sm navbar-dark' id='navBarId'>
        <a className='navbar-brand' href='mainpage.html'>
          <img src={netflix_logo} height='50px' width='120px' />
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon' />
        </button>
        <div
          className='collapse navbar-collapse d-flex'
          id='navbarSupportedContent'>
          <ul className='navbar-nav mr-auto d-none d-sm-none d-md-none d-lg-flex'>
            <li className='nav-item'>
              <a className='nav-link' href='#'>
                Home
              </a>
            </li>
            <li className='nav-item '>
              <a className='nav-link' href='#'>
                TV Shows
              </a>
            </li>
            <li className='nav-item active'>
              <a className='nav-link' href='#'>
                Movies<span className='sr-only'>(current)</span>
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>
                Recently Added
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>
                My List
              </a>
            </li>
          </ul>
          <ul className='navbar-nav mr-auto d-flex d-sm-flex d-md-flex d-lg-none'>
            <li className='nav-item dropdown'>
              <a
                className='nav-link dropdown-toggle'
                id='browse'
                href='#'
                role='button'
                data-toggle='dropdown'
                aria-haspopup='true'
                aria-expanded='false'>
                Browse
              </a>
              <div
                className='dropdown-menu rounded-0 customDropDown'
                aria-labelledby='navbarDropdown'>
                <div id='smalltriangle' />
                <a className='dropdown-item text-white ' href='#'>
                  Home
                </a>
                <a className='dropdown-item text-white' href='profil.html'>
                  TV Shows
                </a>
                <a
                  className='dropdown-item font-weight-bold text-white'
                  href='settings.html'>
                  Moviest
                </a>
                <a
                  className='dropdown-item font-weight-bold text-white'
                  href='#'>
                  Recently Added
                </a>
                <a
                  className='dropdown-item font-weight-bold text-white'
                  href='#'>
                  My List
                </a>
              </div>
            </li>
          </ul>
          <ul className='navbar-nav ml-auto '>
            <li className='nav-item'>
              <SearchBar
                onSearchTextChange={this.props.onSearchTextChange}
                searchText={this.props.SearchText}
              />
            </li>
            <li className='nav-item'>
              <a className='nav-link'>KIDS</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link'>
                <AlarmOutline
                  color={"#ffffff"}
                  title={"Clock"}
                  height='30px'
                  width='30px'
                />
              </a>
            </li>
            <li className='nav-item dropdown' id='SearchDropDown'>
              <a
                className='nav-link dropdown-toggle'
                href='#'
                id='navbarDropdown'
                role='button'
                data-toggle='dropdown'
                aria-haspopup='true'
                aria-expanded='false'>
                <img className='rounded' src={avatar} width='32px' />
                <span className='caret-down' />
              </a>
              <div
                className='dropdown-menu dropdown-menu-right rounded-0 customDropDown'
                id='dropDown'
                aria-labelledby='navbarDropdown'>
                <div id='smalltriangle' />
                <a className='dropdown-item text-white' href='#'>
                  <img
                    className='mr-2'
                    src='./assets/Capture.PNG'
                    width='32px'
                  />
                  Max
                </a>
                <a className='dropdown-item text-white' href='#'>
                  Manage Profiles
                </a>
                <div className='dropdown-divider' />
                <a
                  className='dropdown-item font-weight-bold text-white'
                  href='settings.html'>
                  Account
                </a>
                <a
                  className='dropdown-item font-weight-bold text-white'
                  href='#'>
                  Help Center
                </a>
                <a
                  className='dropdown-item font-weight-bold text-white'
                  href='#'>
                  Sign out from Netflix
                </a>
              </div>
              {/* end Items */}
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavbarNetflix;
