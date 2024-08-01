import './styles/Styles.css';
import footerLogo from './assets/Asset 20@4x.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = () => {
    return (
        <Container fluid className='container-footer'>
            <Row className="justify-content-md-center">
                <Col md="auto">
                    <img src={footerLogo} height={150} alt="Little Lemon Logo"/>
                </Col>
                <Col md="auto">
                    <ul className='footerNav'>
                        <li><b>Doormat Navigation</b></li>
                        <li><a href="./Home.js">Home</a></li>
                        <li><a href="./About.js">About</a></li>
                        <li><a href="./Menu.js">Menu</a></li>
                        <li><a href="./Reservations.js">Reservations</a></li>
                        <li><a href="./OrderOnline.js">Order Online</a></li>
                        <li><a href="./Login.js">Login</a></li>
                    </ul>
                </Col>
                <Col md="auto">
                    <ul className='footerNav'>
                        <li><b>Contact</b></li>
                        <li>111 N 11st <br/> City, State 11111</li>
                        <li>(111) 111 - 1111</li>
                        <li>email@email.com</li>
                    </ul>
                </Col>
                <Col md="auto">
                    <ul className='footerNav'>
                        <li><b>Social Media Links</b></li>
                        <li><a href="www.instagram.com">Instagram</a></li>
                        <li><a href="www.facebook.com">Facebook</a></li>
                    </ul>
                </Col>
            </Row>
        </Container>
    );
}

export default Footer;

