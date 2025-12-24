import { Navbar, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <Navbar expand="lg" variant="dark" className="px-5" style={{ background: '#0f1225' }}>
            <Navbar.Brand className="fw-bold">TARANG.DEV</Navbar.Brand>
            <Navbar.Toggle />
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav ms-auto mr-5">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item @@about__active">
                        <Link className="nav-link" to="/about">About</Link>
                    </li>
                    <li className="nav-item @@services__active">
                        <Link className="nav-link" to="/skills">Skills</Link>
                    </li>
                    <li className="nav-item @@contact__active">
                        <Link className="nav-link" to="/projects">Projects</Link>

                    </li>
                    <li className="nav-item @@contact__active">
                        <Link className="nav-link" to="/contact">Contact</Link>

                    </li>
                </ul>
            </div>
        </Navbar>
    );
}