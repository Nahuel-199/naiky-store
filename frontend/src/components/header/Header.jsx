import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsInstagram } from "react-icons/bs";
import { BiMenuAltRight } from "react-icons/bi";
import "./header.scss";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={`main-header ${scrolled ? "sticky-header" : ""}`}>
        <div className="header-content">
          <ul className="left">
            <li onClick={() => navigate("/")}>Home</li>
            <li onClick={() => navigate("/about")}>Nosotros</li>
            <li onClick={() => navigate("/products")}>Productos</li>
          </ul>

          <div className="center" onClick={() => navigate("/")}>
            NAIKY-STORE.
          </div>
          <div className="right">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/aoe_indumentaria"
            >
              <BsInstagram className="insta" />
            </a>
            <BiMenuAltRight onClick={() => setOpen(!open)} style={{fontSize: "34px"}} className="menux-icon"/>
            {open && (
              <div className="container__menus">
                <ul>
                  <Link to="/products">
                    <li>Productos</li>
                    </Link>
                    <Link to="/about">
                    <li>Nosotros</li>
                    </Link>
                </ul>
              </div>
            )}
            <span className="right__span">
              naiky_shore
            </span>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;