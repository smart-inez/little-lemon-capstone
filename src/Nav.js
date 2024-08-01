import './styles/Styles.css';
import Header from './Header';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';

const Navigation = () => {
    return(
        // <>
        //     <ul>
        //         <li><a href="./Home.js">Home</a></li>
        //         <li><a href="./About.js">About</a></li>
        //         <li><a href="./Menu.js">Menu</a></li>
        //         <li><a href="./Reservations.js">Reservations</a></li>
        //         <li><a href="./OrderOnline.js">Order Online</a></li>
        //         <li><a href="./Login.js">Login</a></li>
        //     </ul>
        // </>
        <div className='center-navbar'>
            <Navbar collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="#home"><Header /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav collapseOnSelect>
                            <Nav.Link href="./Home.js">Home</Nav.Link>
                            <Nav.Link href="./About.js">About</Nav.Link>
                            <Nav.Link href="./Menu.js">Menu</Nav.Link>
                            <Nav.Link href="./Reservations.js">Reservations</Nav.Link>
                            <Nav.Link href="./OrderOnline.js">Order Online</Nav.Link>
                            <Nav.Link href="./Login.js">Login</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
        
    );
}

export default Navigation;