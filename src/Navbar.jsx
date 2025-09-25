function Navbar() {
return (
    <div>
      <div className="bg-black text-white py-1 position-relative overflow-hidden">
        <div className="d-flex align-items-center justify-content-center">
          <i className="bi bi-facebook mx-2"></i>
          <i className="bi bi-instagram mx-2"></i>
          <marquee className="mx-auto fw-bold">
            CULT OF CYPHER VOLUME I IS OUT NOW!
          </marquee>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg bg-white border-bottom py-2">
        <div className="container d-flex justify-content-between align-items-center">
          <div>
            <i className="bi bi-search fs-5"></i>
          </div>

          <a className="navbar-brand mx-auto text-center fw-bold" href="/">
            T I M E L E S S
          </a>

          <div>
            <i className="bi bi-person fs-5 mx-3"></i>
            <i className="bi bi-bag fs-5"></i>
          </div>
        </div>
      </nav>

      <div className="bg-white border-bottom">
        <ul className="nav justify-content-center py-2">
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
              id="topsDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              TOPS
            </a>
            <ul className="dropdown-menu" aria-labelledby="topsDropdown">
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
              id="bottomsDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              BOTTOMS
            </a>
            <ul className="dropdown-menu" aria-labelledby="bottomsDropdown">
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
              id="collectionsDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              COLLECTIONS
            </a>
            <ul className="dropdown-menu" aria-labelledby="collectionsDropdown">
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
  );
}

export default Navbar;
