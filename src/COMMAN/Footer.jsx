import { Container, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaEnvelope,
} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer style={{ background: '#0b0e1f' }} className="pt-5 pb-3 mt-5">
      <Container fluid className="px-5">
        <Row className="align-items-center">

          {/* Brand */}
          <Col md={4} className="mb-4 mb-md-0">
            <h4 className="fw-bold" style={{ color: '#a855f7' }}>
              TARANG.DEV
            </h4>
            <p className="text-secondary mb-0">
              MERN Stack Developer building modern web experiences.
            </p>
          </Col>

          {/* Quick Links */}
          <Col md={4} className="mb-4 mb-md-0">
            <h6 className="text-uppercase mb-3">Quick Links</h6>
            <ul className="list-unstyled text-secondary">
              <li><Link className="nav-link" to="/">Home</Link></li>
              <li><Link className="nav-link" to="/about">About</Link></li>
              <Link className="nav-link" to="/skills">Skills</Link><li></li>
              <li><Link className="nav-link" to="/projects">Projects</Link></li>
              <li><Link className="nav-link" to="/contact">Contact</Link></li>
            </ul>
          </Col>

          {/* Social Links */}
          <Col md={4}>
            <h6 className="text-uppercase mb-3">Connect</h6>
            <div className="d-flex gap-3 fs-5">
              <a href="#" className="text-secondary">
                <FaGithub />
              </a>
              <a href="#" className="text-secondary">
                <FaLinkedin />
              </a>
              <a href="#" className="text-secondary">
                <FaFacebook />
              </a>
              <a href="#" className="text-secondary">
                <FaInstagram />
              </a>
              <a href="mailto:example@gmail.com" className="text-secondary">
                <FaEnvelope />
              </a>
            </div>
          </Col>

        </Row>

        <hr className="border-secondary my-4" />

        {/* Copyright */}
        <Row>
          <Col className="text-center text-secondary small">
            © {new Date().getFullYear()} TARANG.DEV — All Rights Reserved
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
