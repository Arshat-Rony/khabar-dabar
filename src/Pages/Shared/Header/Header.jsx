import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from "react-router-dom"
import logo from "../../../images/others/logo.png"
import { BsCart3 } from "react-icons/bs"
import './Header.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';
const Header = () => {
    const [user] = useAuthState(auth)
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} width="180px" alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} className="text-black" to="/home">
                            <BsCart3 />
                        </Nav.Link>
                        <Nav.Link className='text-black fw-bold ms-md-4' as={Link} to="/login">Login</Nav.Link>

                        <span className='text-black fw-bold ms-md-4'>
                            {
                                user && <Nav.Link
                                    className='text-black   ms-md-4' >{user?.displayName.toLocaleUpperCase
                                        ()}</Nav.Link>
                            }
                        </span>
                        {
                            user ?
                                <Nav.Link
                                    onClick={() => signOut(auth)} className='sign-up-btn text-white px-5 ms-0 ms-md-4' >SignOut</Nav.Link>
                                : <Nav.Link className='sign-up-btn text-white px-5 ms-0 ms-md-4' as={Link} to="/SignUp">SignUp</Nav.Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;