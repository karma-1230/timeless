import styles from "../Styles/Navbar.module.css";

export default function Navbar() {
  return (
    <div>
      {/* Top Strip */}
      <div className={`${styles.topBar} py-1`}>
        <div className="d-flex align-items-center justify-content-center">
          <marquee className="mx-auto fw-bold">
            CULT OF CYPHER VOLUME I IS OUT NOW!
          </marquee>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="navbar navbar-expand-lg bg-white border-bottom py-3">
        <div className="container">
          {/* Brand */}
          <a className={`navbar-brand fw-bold ${styles.brand}`} href="/">
            T I M E L E S S
          </a>

          {/* Toggler */}
          <button
            className="navbar-toggler ms-auto"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNav"
            aria-controls="mainNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Nav Links */}
          <div className="collapse navbar-collapse justify-content-center" id="mainNav">
            <ul className="navbar-nav text-center">
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

              {/* TOPS */}
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

              {/* BOTTOMS */}
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

              {/* COLLECTIONS */}
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
