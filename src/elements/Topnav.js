import React from "react";
import { Button, Nav, Navbar } from "react-bootstrap";

const mystyle = {
    color: "white",
    backgroundColor: "dark",
};

export default function Topnav() {
    return (
        <div class="Topnav">
            <Navbar
                bg="dark"
                sticky="top"
                expand="md"
                variant="dark"
                collapseOnSelect
            >
                <img
                    className="px-2"
                    src="https://picsum.photos/50"
                    href="#about"
                ></img>
                <Navbar.Brand href="#about">Tejas Kamtam</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Nav navbarScroll className="col justify-content-end">
                        <Nav.Link href="#about">01. About</Nav.Link>
                        <Nav.Link href="#experience">02. Experience</Nav.Link>
                        <Nav.Link href="#projects">03. Projects</Nav.Link>
                        <Nav.Link href="#contact">04. Contact</Nav.Link>
                        <Button className="mx-3" href="#resume">
                            Resume
                        </Button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}
