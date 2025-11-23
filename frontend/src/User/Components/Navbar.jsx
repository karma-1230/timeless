import { useState, useEffect } from "react";
import { FaUserCircle, FaShoppingCart } from "react-icons/fa";
import styles from "../Styles/Navbar.module.css";

export default function Navbar() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    setLoggedIn(!!localStorage.getItem("token"));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token"); // remove JWT
    setLoggedIn(false);               // update UI
    window.location.href = "/";       // redirect home (optional)
  };

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
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Nav Links */}
          <div className="collapse navbar-collapse justify-content-center" id="mainNav">
            <ul className="navbar-nav text-center">
              <li className="nav-item">
                <a className="nav-link text-dark" href="/winter-sale">WINTER SALE</a>
              </li>

              {/* TOPS */}
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-dark" href="#" role="button" data-bs-toggle="dropdown">
                  TOPS
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/tops/tshirts">T-Shirts</a></li>
                  <li><a className="dropdown-item" href="/tops/hoodies">Hoodies</a></li>
                </ul>
              </li>

              {/* BOTTOMS */}
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-dark" href="#" role="button" data-bs-toggle="dropdown">
                  BOTTOMS
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/bottoms/pants">Pants</a></li>
                  <li><a className="dropdown-item" href="/bottoms/shorts">Shorts</a></li>
                </ul>
              </li>

              {/* COLLECTIONS */}
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-dark" href="#" role="button" data-bs-toggle="dropdown">
                  COLLECTIONS
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/products">All</a></li>
                  <li><a className="dropdown-item" href="/collections/bestsellers">Bestsellers</a></li>
                </ul>
              </li>
            </ul>

            {/* Right-side icons */}
            <ul className="navbar-nav ms-auto d-flex align-items-center">
              {loggedIn ? (
                <>
                  {/* Cart */}
                  <li className="nav-item me-3">
                    <a className="nav-link text-dark position-relative" href="/cart">
                      <FaShoppingCart size={20} />
                      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        2
                      </span>
                    </a>
                  </li>

                  {/* Profile Dropdown */}
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle text-dark d-flex align-items-center"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                    >
                      <FaUserCircle size={20} className="me-1" /> Profile
                    </a>

                    <ul className="dropdown-menu dropdown-menu-end">
                      <li><a className="dropdown-item" href="/profile">My Account</a></li>
                      <li><a className="dropdown-item" href="/orders">Orders</a></li>
                      <li><hr className="dropdown-divider" /></li>
                      <li>
                        <button className="dropdown-item text-danger" onClick={handleLogout}>
                          Logout
                        </button>
                      </li>
                    </ul>
                  </li>
                </>
              ) : (
                <li className="nav-item">
                  <a className="nav-link text-dark fw-bold" href="/login">Login</a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
