import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { useState } from "react";
import ContactCard from "./Enquiries";

function MiddleNav() {
  const [activeLink, setActiveLink] = useState("");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div style={{ marginLeft: "16rem" }}>
      <Router>
        <Navbar bg="dark" variant="dark" className="app_nav">
          <Nav className="mr-auto">
            <Link
              exact
              to="/"
              className={`nav_link ${activeLink === "/" ? "activeLink" : ""}`}
              onClick={() => handleLinkClick("/")}
              style={{ marginLeft: "63px" }}
            >
              Booking
            </Link>
            <Link
              to="/enquiry"
              className={`nav_link ${
                activeLink === "/enquiry" ? "activeLink" : ""
              }`}
              onClick={() => handleLinkClick("/enquiry")}
            >
              Enquiries
            </Link>
            <Link
              to="/services"
              className={`nav_link ${
                activeLink === "/services" ? "activeLink" : ""
              }`}
              onClick={() => handleLinkClick("/services")}
            >
              My Services
            </Link>
          </Nav>
        </Navbar>
        <hr className="booking_hr" />
        <Routes>
          <Route path="/enquiry" element={<ContactCard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default MiddleNav;
