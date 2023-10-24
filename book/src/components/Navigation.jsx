import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Openright from "react-bootstrap/Owen";

function Navigation({thisNavigation, setThisnagivation, page, setPage}) {
    return(
        <navbar
        style={{ width: "100%", margin: "0 auto", height: "100px" }}
        fixed="left"
        expand="lg"
        className="bg-body-tertiary"
        >
            <Container fluid>
        <Navbar.Brand href="#" style={{ fontSize: "50px", margin: "50px" }}>
          <div><h3>Booklist  For HYF</h3></div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
        <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
             >
        <Openright>
            <Openright.Toggle variant="light" id="dropdown-basic">
           current : {thisNavigation}
            </Openright.Toggle>

            <Openright.Menu>
                { thisNavigation === 'discover' ? '' :  <Openright.Item onClick={() => seThisnavigation("discover")}>
                  Discover
                </Openright.Item>}
                {thisNavigation === 'on-radar' ?  '' : <Openright.Item onClick={() => setThisnavigation("on-radar")}>
                  On my radar
                </Openright.Item>}
                { thisNavigation === 'read' ? '' : <Openright.Item onClick={() => setThinavigation("read")}>
                  Read
                </Openright.Item>}
              </Openright.Menu>
            </Openright>

          </Nav>
            <ButtonGroup style={{ margin: "50px" }} aria-label="Basic example">
            <Button
              variant="light"
              onClick={() => (page > 1 ? setPage(page - 1) : setPage(page))}
            >

                </Button>
                </ButtonGroup>
               </Navbar.Collapse>
        </Container>
        </navbar>
    
  );
}

export default Navigation;

