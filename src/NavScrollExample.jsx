import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

export default function NavbarContact() {
  const location = useLocation();
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  // Handle Search
  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim() === "") {
      alert("Please enter something to search 🔍");
      return;
    }
    navigate(`/search?q=${encodeURIComponent(query)}`);
  };

  // Active Link Style
  const isActive = (path) =>
    location.pathname === path
      ? { color: "#00bcd4", fontWeight: "bold", textDecoration: "underline" }
      : { color: "white" };

  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark" className="shadow-sm">
      <Container fluid>
        <Navbar.Brand
          as={Link}
          to="/"
          className="fw-bold text-info"
          style={{ fontSize: "22px" }}
        >
          Contact Manager
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            <Link to="/Home" style={{ ...isActive("/Home"), marginRight: "15px" }}>
              Home
            </Link>
            <Link to="/About" style={{ ...isActive("/About"), marginRight: "15px" }}>
              About
            </Link>
            <Link to="/Contact" style={{ ...isActive("/Contact"), marginRight: "15px" }}>
              Contact
            </Link>
          </Nav>

          <Form className="d-flex" onSubmit={handleSearch}>
          </Form>
        </Navbar.Collapse>
      </Container>

      {/* Inline Styling */}
      <style>{`
        a {
          text-decoration: none;
          transition: color 0.3s ease, transform 0.2s ease;
        }
        a:hover {
          color: #00bcd4 !important;
          transform: scale(1.05);
        }
        .navbar {
          position: sticky;
          top: 0;
          z-index: 999;
        }
      `}</style>
    </Navbar>
  );
}
