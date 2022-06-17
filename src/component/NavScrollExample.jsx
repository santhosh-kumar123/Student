import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Model from "../Model/Model";
import Portal from "../Model/Portal";

function NavScrollExample() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <img
          style={{ height: "80px", width: "80px" }}
          src="https://iconarchive.com/download/i108931/google/noto-emoji-people-profession/10207-man-student-light-skin-tone.ico"
          alt=""
        />
        <Navbar.Brand
          className="me-auto my-2 my-lg-0 m-1"
          style={{ color: "blue", fontSize: "36px", fontFamily: "sans-serif" }}
          href="#"
        >
          Student
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 m-5"
            style={{
              maxHeight: "100px",
              color: "orange",
              fontSize: "28px",
              paddingLeft: "400px",
            }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/Admin">Admin</Nav.Link>
            {/* <Nav.Link href="/Create">Create</Nav.Link>
            <Nav.Link href="/Edit">Edit</Nav.Link> */}
            <NavDropdown title="Courses" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action1">Java</NavDropdown.Item>
              <NavDropdown.Item href="#action2">Python</NavDropdown.Item>
              <NavDropdown.Item href="#action3">MERN</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Apptitude</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form
            className="d-flex"
            style={{ width: "200px", marginRight: "150px" }}
            onSubmit={e => {
              e.preventDefault();
            }}
          >
            <input
              list="san"
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              style={{ width: "400px", marginRight: "200px" }}
            />
            <datalist id="san">
              <option value="Santhosh">Santhosh</option>
              <option value="Prashanth">Prashanth</option>
              <option value="Anish">Anish</option>
              <option value="Vishnu">Vishnu</option>
            </datalist>
            <Button variant="outline-success">
              <Portal />
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
