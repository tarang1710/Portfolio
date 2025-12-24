import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import Header from '../COMMAN/Header';
import Footer from '../COMMAN/Footer';

export default function Contact() {
    return (
        <>
            <Header />
            <Touch />
            <Footer />
        </>
    );
}

function Touch() {
    return (
        <>
            <Container fluid className="px-5 py-5">
                <h3 style={{ color: '#a855f7' }}>Get In Touch</h3>
                <Row className="mt-3">
                    <Col md={6}>
                        <Card className="p-3" style={{ background: '#1a1f3c', border: 'none' }}>
                            <p className="text-secondary">darjitarang1017@gmail.com</p>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card className="p-3" style={{ background: '#1a1f3c', border: 'none' }}>
                            <Form>
                                <Form.Control className="mb-2" placeholder="Name" />
                                <Form.Control className="mb-2" placeholder="Email" />
                                <Form.Control as="textarea" rows={3} className="mb-2" placeholder="Message" />
                                <Button style={{ background: '#a855f7', border: 'none' }}>Send</Button>
                            </Form>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}