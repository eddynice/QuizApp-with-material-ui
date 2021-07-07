import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./style.css";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0);
  const location = useLocation();

  const trackScreenWidth = () => {
    const width = window.innerWidth;
    setScreenWidth(width);
    if (width > 800) {
      setOpen(true);
    }
  };

  useEffect(() => {
    trackScreenWidth();
    window.addEventListener("resize", trackScreenWidth);
    return () => window.removeEventListener("resize", trackScreenWidth);
  }, []);

  const getListStyle = () => {
    if (screenWidth < 800) {
      return { left: open ? 0 : "-100vw" };
    }
  };

  const handleClose = () => {
    if (screenWidth < 800) {
      setOpen(false);
    }
  };

  return (
    <nav>
      <div className="container">
        <div className="wrapper">
          <Link to="/" className="brand">
            <h3>Brand</h3>
          </Link>

          <div className="menu">
            <img
              src="https://github.com/DwinaTech/public-images/blob/main/menu-bars.png?raw=true"
              alt="menu-bar"
              style={{ opacity: !open ? 1 : 0, right: "-56px " }}
              onClick={() => {
                setOpen(!open);
              }}
            />
            <img
              src="https://github.com/DwinaTech/public-images/blob/main/cross-menu-icon.png?raw=true"
              alt="menu-cross"
              style={{ opacity: open ? 1 : 0 }}
              onClick={() => {
                setOpen(!open);
              }}
            />
          </div>

          <ul className="list" style={getListStyle()}>
            <li>
              <Link
                to="/"
                onClick={handleClose}
                className={location.pathname === "/" ? "active" : ""}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                onClick={handleClose}
                className={location.pathname === "/about" ? "active" : ""}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={handleClose}
                className={location.pathname === "/contact" ? "active" : ""}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
