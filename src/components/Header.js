import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { Link } from "react-router-dom";
import styles from "./header.module.scss";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

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
            <NavItem>
              <NavLink>
                <Link
                  className={["alert-link", styles.link].join(" ")}
                  to="/login"
                >
                  Login
                </Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link
                  className={["alert-link", styles.link].join(" ")}
                  target="_blank"
                  to="//github.com/reactstrap/reactstrap"
                >
                  Github
                </Link>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
