function Navbar() {
  return (
    <div>
      {/* Top black bar */}
      <div className="bg-black text-white py-1 position-relative overflow-hidden">
        <div className="d-flex align-items-center justify-content-center">
          <i className="bi bi-facebook mx-2"></i>
          <i className="bi bi-instagram mx-2"></i>
          <marquee className="mx-auto fw-bold">
            CULT OF CYPHER VOLUME I IS OUT NOW!
          </marquee>
        </div>
      </div>

      <div className="bg-white border-bottom py-2">
        <div className="container d-flex justify-content-between align-items-center">

          <a className="navbar-brand fw-bold text-center mx-auto" href="/">
            T I M E L E S S
          </a>
        </div>
      </div>

      {/* Second row: nav links with hamburger */}
      <nav className="navbar navbar-expand-lg bg-white border-bottom">
        <div className="container">
          {/* Hamburger for small screens */}
          <button
            className="navbar-toggler mx-auto"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNav"
            aria-controls="mainNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="mainNav">
            <ul className="navbar-nav mx-auto text-center">
              <li className="nav-item">
                <a className="nav-link fw-bold text-dark" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="/winter-sale">
                  WINTER SALE
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-dark"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  TOPS
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/tops/tshirts">
                      T-Shirts
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/tops/hoodies">
                      Hoodies
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-dark"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  BOTTOMS
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/bottoms/pants">
                      Pants
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/bottoms/shorts">
                      Shorts
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-dark"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  COLLECTIONS
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/collections/new">
                      New Arrivals
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/collections/bestsellers">
                      Bestsellers
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
