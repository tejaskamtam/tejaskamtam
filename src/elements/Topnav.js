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
                expand="lg"
                variant="dark"
                collapseOnSelect
            >
                <img src="https://picsum.photos/50" href="#home"></img>
                <Navbar.Brand href="#home">Tejas Kamtam</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Nav>
                        <Nav.Link href="#about">01. About</Nav.Link>
                        <Nav.Link href="#experience">02. Experience</Nav.Link>
                        <Nav.Link href="#projects">03. Projects</Nav.Link>
                        <Nav.Link href="#contact">04. Contact</Nav.Link>
                        <Button href="#resume">Resume</Button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}
