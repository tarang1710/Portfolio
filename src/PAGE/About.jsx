import { Container, Card } from 'react-bootstrap';
import Header from '../COMMAN/Header';
import Footer from '../COMMAN/Footer';

export default function About() {
    return (
        <>
            <Header />
            <Aboutdata />
            <Footer />
        </>
    );
}

function Aboutdata() {
    return (
        <>
            <Container fluid className="px-5 py-4">
                <h3 style={{ color: '#a855f7' }}>About My Journey</h3>
                <Card className="p-3 mt-3" style={{ background: '#1a1f3c', border: 'none' }}>
                    <p className="text-secondary mb-0">Passionate and dedicated Final-year IT engineering student with a strong foundation in programming languages and web technologies. Eager to apply academic knowledge to real-world projects and develop profession skills through internship opportunities.</p>
                </Card>
            </Container>
        </>
    )
}