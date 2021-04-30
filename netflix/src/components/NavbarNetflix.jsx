import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import SearchBar from "../components/SearchBar";

const NavbarNetflix = () => {
  return (
    <Navbar bg='light' expand='lg'>
      <Navbar.Brand href='#home'>Netflix</Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='mr-auto'>
          <Nav.Link href='#home'>Home</Nav.Link>
          <Nav.Link href='#link'>Link</Nav.Link>
          <NavDropdown title='Dropdown' id='basic-nav-dropdown'>
            <NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
            <NavDropdown.Item href='#action/3.2'>
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href='#action/3.3'>Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href='#action/3.4'>
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <SearchBar />
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarNetflix;

{
  /* <nav className="navbar navbar-expand-sm navbar-dark" id="navBarId">
  <a className="navbar-brand" href="mainpage.html">
    <img src="./assets/netflix_logo.png" alt height="50px" width="120px" />
  </a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse d-flex" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto d-none d-sm-none d-md-none d-lg-flex">
      <li className="nav-item">
        <a className="nav-link" href="#">
          Home
        </a>
      </li>
      <li className="nav-item ">
        <a className="nav-link" href="#">TV Shows</a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="#">Movies<span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Recently Added</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">My List</a>
      </li>
    </ul>
    <ul className="navbar-nav mr-auto d-flex d-sm-flex d-md-flex d-lg-none">
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" id="browse" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Browse
        </a>
        <div className="dropdown-menu rounded-0 customDropDown" aria-labelledby="navbarDropdown">
          <div id="smalltriangle" />
          <a className="dropdown-item text-white " href="#">Home</a>
          <a className="dropdown-item text-white" href="profil.html">TV Shows</a>
          <a className="dropdown-item font-weight-bold text-white" href="settings.html">Moviest</a>
          <a className="dropdown-item font-weight-bold text-white" href="#">Recently Added</a>
          <a className="dropdown-item font-weight-bold text-white" href="#">My List</a>
        </div>
      </li>
    </ul>
    <ul className="navbar-nav ml-auto ">
      <li className="nav-item">
        <div className="d-flex flex-row input-hidden" id="searchContainer">
          <a className="btn d-flex align-items-center" data-toggle="collapse" href="#searchfield" role="button" id="lensInSearchBox">
            <ion-icon className="text-muted" style={{fontSize: 20}} name="search-outline" />
          </a>
          <input className="form-control mr-sm-2 bg-transparent border-0" type="search" id="searchField" placeholder="Title, People, Genres" aria-label="Search" />
        </div>
      </li>
      <li className="nav-item">
        <a className="nav-link" href>KIDS</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href>
          <ion-icon name="alarm-outline" />
        </a>
      </li>
      <li className="nav-item dropdown" id="SearchDropDown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <img className="rounded" src="./assets/avatar.png" alt width="32px" />
          <span className="caret-down" />
        </a>
        {/* Items */
}
{
  /*
        <div className="dropdown-menu dropdown-menu-right rounded-0 customDropDown" id="dropDown" aria-labelledby="navbarDropdown">
          <div id="smalltriangle" />
          <a className="dropdown-item text-white" href="#">
            <img className="mr-2" src="./assets/Capture.PNG" alt width="32px" />Max
          </a>
          <a className="dropdown-item text-white" href="profil.html">Manage Profiles</a>
          <div className="dropdown-divider" />
          <a className="dropdown-item font-weight-bold text-white" href="settings.html">Account</a>
          <a className="dropdown-item font-weight-bold text-white" href="#">Help Center</a>
          <a className="dropdown-item font-weight-bold text-white" href="#">Sign out from Netflix</a>
        </div>
        {/* end Items */
}
{
  /*}
      </li>
    </ul>
  </div>
</nav> */
}
