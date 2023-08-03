import { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaShoppingCart, FaUser } from 'react-icons/fa';

export default function Header() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        setIsLoggedIn(!!token); // Convert token to boolean to check if user is logged in
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
        setIsLoggedIn(false);
    };

    return (
        <header>
          <Navbar bg='dark' variant='dark' expand='md' collapseOnSelect>
            <Container>
                <Navbar.Brand href="/">GA Shop</Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav'/>
                <Navbar.Collapse id="navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="/cart"><FaShoppingCart />Cart</Nav.Link>
                        {
                            isLoggedIn ? 
                            <Nav.Link onClick={handleLogout}><FaUser />Sign Out</Nav.Link>
                            :
                            <Nav.Link href="/login"><FaUser />Sign In</Nav.Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
          </Navbar>
        </header>
    );
};
