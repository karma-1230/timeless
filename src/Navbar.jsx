function Navbar() {
    const navStyle = {
        backdropFilter: "blur(10px)",
        background: "rgba(0,0,0,0.4)",
        boxShadow: "0 4px 20px rgba(0,0,0,0.5)",
        fontFamily: "'CloisterBlack', serif",
    };

    const linkStyle = {
        color: "white",
        fontSize: "1.1rem",
        marginLeft: "1.5rem",
        cursor: "pointer",
        transition: "color 0.3s ease",
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top" style={navStyle}>
            <div className="container-fluid">
                <a className="navbar-brand" href="#" style={{ fontSize: "1.8rem", letterSpacing: "2px" }}>
                    TIMELESS
                </a>

                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a
                                className="nav-link"
                                href="#products"
                                style={linkStyle}
                                onMouseEnter={(e) => (e.target.style.color = "#f5a623")}
                                onMouseLeave={(e) => (e.target.style.color = "white")}
                            >
                                Products
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link"
                                href="#signup"
                                style={linkStyle}
                                onMouseEnter={(e) => (e.target.style.color = "#f5a623")}
                                onMouseLeave={(e) => (e.target.style.color = "white")}
                            >
                                Signup
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
