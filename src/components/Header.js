import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from "reactstrap";
import { Link } from "react-router-dom";
import styles from "./header.module.scss";
import { useSelector } from "react-redux";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <header className="App-header">
      <Navbar color="dark" dark expand="md" className={styles.nav}>
        <NavbarBrand
          tag={() => (
            <Link
              className={["alert-link", styles.link, styles.main].join(" ")}
              to="/home"
            >
              Dragons!
            </Link>
          )}
        />
        <NavbarToggler color="dark" onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            {isAuthenticated ? (
              <NavItem>
                  <Link
                    className={["alert-link", styles.link].join(" ")}
                    to="/list"
                  >
                    List
                  </Link>
              </NavItem>
            ) : (
              <NavItem>
                  <Link
                    className={["alert-link", styles.link].join(" ")}
                    to="/login"
                  >
                    Login
                  </Link>
              </NavItem>
            )}

            <NavItem>
                <Link
                  className={["alert-link", styles.link].join(" ")}
                  target="_blank"
                  to="//github.com/dreukrag/front-dragon"
                >
                  Github
                </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
