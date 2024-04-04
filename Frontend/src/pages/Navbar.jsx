import Navbar from "react-bootstrap/Navbar";

function Navbars() {
  return (
    <div className="navbar-container">
      <Navbar
        bg="dark"
        data-bs-theme="dark"
        className="navbar fixed-top bg-body-tertiary "
      >
        <div className="container-fluid ">
          <Navbar.Brand>Movie App</Navbar.Brand>

          <ul className="nav nav-underline">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Search
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/fav">
                My Favourites
              </a>
            </li>
          </ul>
        </div>
      </Navbar>
    </div>
  );
}

export default Navbars;
