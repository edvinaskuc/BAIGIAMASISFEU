import React, { useState } from "react";
import {
  Navbar,
  Nav,
  Container,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

function NavBar() {
  const [searchInput, setSearchInput] = useState("");

  const handleSearchInput = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    console.log(`Searching for: ${searchInput}`);
  };

  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="/">
          <span className="fw-bolder text-primary">LISTME</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto mb-2 mb-lg-0 small fw-bolder">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/Top3">TOP 3</Nav.Link>
            <Nav.Link href="/AllList">All List</Nav.Link>
            <Nav.Link href="/Developers">Developers</Nav.Link>
            <Nav.Link href="/AddGame">|| + Add Game</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Form className="d-flex sm" onSubmit={handleSearch}>
          <FormControl
            type="search"
            placeholder="Search"
            className="mr-2 sm"
            aria-label="Search"
            value={searchInput}
            onChange={handleSearchInput}
          />
          <Button variant="outline-primary" type="submit">
            Search
          </Button>
        </Form>
      </Container>
    </Navbar>
  );
}

export default NavBar;
