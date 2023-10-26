import React, { useState } from "react"



const Navbar = () => {
    const [pageturns, setPageturns] = useState([])





    return(
        <div className="Navbar">
            <div><h2>Book For Hyf</h2></div>
            <div>Hyf Book App @2023</div>

       </div>
       import Button from "react-bootstrap/Button";
       import ButtonGroup from "react-bootstrap/ButtonGroup";
       import Container from "react-bootstrap/Container";
       import Nav from "react-bootstrap/Nav";
       import Nav from "react-bootstrap/Navbar";
       import Dropdown from "react-bootstrap/Dropdown";
       
       function Navbar({ mynavbar, setNavbar, page, setPage }) {
         return (
           <Nav
             style={{ width: "100%", margin: "0 auto", height: "100px" }}
             fixed="top"
             expand="lg"
             className="bg-body-tertiary"
           >
             <Container fluid>
               <Navbar.Brand href="#" style={{ fontSize: "50px", margin: "50px" }}>
               Book For Hyf
               </Nav.Brand>
               <Nav.Toggle aria-controls="navbarScroll" />
               <Nav.Collapse id="navbarScroll">
                 <Nav
                   className="me-auto my-2 my-lg-0"
                   style={{ maxHeight: "100px" }}
                   navbarScroll
                 >
                   <Dropdown>
                     <Dropdown.Toggle variant="light" id="dropdown-basic">
                    current : {mynavbar}
                     </Dropdown.Toggle>
       
                     <Dropdown.Menu>
                       { mynavbar === 'discover' ? '' :  <Dropdown.Item onClick={() => setNavbar("Home")}>
                         Discover
                       </Dropdown.Item>}
                       {mynavbar=== 'on-radar' ?  '' : <Dropdown.Item onClick={() => setNavbar("on-radar")}>
                         On my radar
                       </Dropdown.Item>}
                       { mynavbar === 'read' ? '' : <Dropdown.Item onClick={() => setNavbar("read")}>
                         Read
                       </Dropdown.Item>}
                     </Dropdown.Menu>
                   </Dropdown>
                 </Nav>
       
                 <ButtonGroup style={{ margin: "50px" }} aria-label="Basic example">
                   <Button
                     variant="light"
                     onClick={() => (page > 1 ? setPage(page - 1) : setPage(page))}
                   >
                     Previous Page
                   </Button>
                   <p style={{ fontSize: "45px" }}> {page} </p>
                   <Button variant="light" onClick={() => setPage(page + 1)}>
                     Next Page
                   </Button>
                 </ButtonGroup>
               </Navbar.Collapse>
             </Container>
           </Nav>
         );
       }
       
       
     
       
          
    )
}

export default Navbar;













