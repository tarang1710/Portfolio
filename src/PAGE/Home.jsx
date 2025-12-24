import { Container, Row, Col, Button } from 'react-bootstrap';
import Header from '../COMMAN/Header';
import Footer from '../COMMAN/Footer';

import Profile from "../assets/tarang.jpg";
import { useNavigate } from 'react-router-dom';

export default function Home() {
    return (
        <>
            <Header />
            <Hero />
            <Footer />

        </>
    )
}

function Hero() {
    const navigate = useNavigate();
    return (
        <Container fluid className="py-5 px-5">
            <Row className="align-items-center">
                <Col md={7}>
                    <h1 className="fw-bold">Hi, I'm <span style={{ color: '#a855f7' }}>TARANG DARJI</span></h1>
                    <h5 className="text-muted" > <span style={{ color: '#f1f0f3ff' }}>MERN Stack Developer</span></h5>
                    <p className="text-secondary mt-3">Building modern MERN applications with clean UI.</p>
                    <a href="/Tarang_Darji_CV.pdf" download>
                        <Button
                            style={{ background: "#a855f7", border: "none" }}
                            className="me-3"
                        >
                            Download CV
                        </Button>
                    </a>
                    <Button variant="outline-light" onClick={() => navigate("/contact")}>Contact</Button>
                </Col>
                <Col md={5} className="text-center">
                    <div style={{ border: '4px solid #a855f7', borderRadius: '50%', padding: '10px', display: 'inline-block' }}>
                        <img src={Profile} alt='Tarang Darji' style={{
                            width: "210px",
                            height: "250px",
                            objectFit: "cover",
                        }} className="rounded-circle" />
                    </div>
                </Col>
            </Row>
        </Container>
    );
}