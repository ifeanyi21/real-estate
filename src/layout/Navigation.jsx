import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
//import Badge from "react-bootstrap/Badge";
import { FaHeadset, FaUserCircle } from "react-icons/fa";
//import {useState, useEffect} from 'react'

function Navigation(props) {
  return (
    <div className={`bg-white sticky-top shadow-sm`}>
      <div className="container">
        <Navbar expand="md" style={{ padding: "10px 0px" }}>
          <>
            <Navbar.Toggle
              aria-controls={`offcanvasNavbar-expand-md`}
              style={{ marginRight: 20, fontSize: 14 }}
            />
            <Navbar.Brand style={{ marginRight: "auto" }}>
              <Link to="/" className="nav-link font-semibold text-3xl">
                Real Estate
              </Link>
            </Navbar.Brand>

            <Navbar.Collapse
              style={{ width: "70%" }}
              id="offcanvasNavbar-expand-md"
              aria-labelledby={`offcanvasNavbarLabel-expand-md`}
              placement="start"
            >
              <Nav className="justify-content-end flex-grow-1 pe-3 items-baseline">
                <div className="d-flex navbar-nav">
                  <Link to="/about" className="nav-link mr-1 px-2">
                    <span className="flex items-center">
                      <FaUserCircle />
                      <span className="ml-2"> About</span>
                    </span>
                  </Link>
                  <Link to="/contact-us" className="nav-link relative mr-1 px-2">
                    <span className="flex items-center">
                      <FaHeadset />
                      <span className="ml-2">Contact</span>
                    </span>
                  </Link>
                </div>
              </Nav>
            </Navbar.Collapse>
          </>
        </Navbar>
      </div>
    </div>
  );
}

export default Navigation;
