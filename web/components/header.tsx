import { Navbar, Nav } from "react-bootstrap";

export default function Header() {
  return (
    <>
      <br />
      <header>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="/">Type Sharing Demo</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/status">Status</Nav.Link>
              <Nav.Link href="/swagger">Swagger</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
      <br />
    </>
  );
}
