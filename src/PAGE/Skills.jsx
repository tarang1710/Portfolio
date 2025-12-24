import { Container, Row, Col, Card } from 'react-bootstrap';
import Header from '../COMMAN/Header';
import Footer from '../COMMAN/Footer';

export default function Skills() {
    return (
        <>
            <Header />
            <Technicalskills />
            <Qualification />
            <Footer />
        </>
    );
}

const technicalSkillsData = [
    {
        title: "Frontend",
        skills: ["React", "HTML", "CSS", "JavaScript", "Bootstrap"]
    },
    {
        title: "Backend",
        skills: ["Node.js", "Express.js", "REST API"]
    },
    {
        title: "Database & Tools",
        skills: ["MongoDB", "Git", "GitHub"]
    }
];

function Technicalskills() {

    return (
        <>
            <Container fluid className="px-5 py-4">
                <h3 style={{ color: "#a855f7" }}>Technical Skills</h3>

                <Row className="mt-3">
                    {technicalSkillsData.map((item, index) => (
                        <Col md={4} key={index} className="mb-3">
                            <Card
                                className="p-3 h-100"
                                style={{ background: "#1a1f3c", border: "none" }}
                            >
                                <h5 className="text-light">{item.title}</h5>
                                <ul className="text-secondary mb-0">
                                    {item.skills.map((skill, i) => (
                                        <li key={i}>{skill}</li>
                                    ))}
                                </ul>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    )
}
function Qualification() {
    return (
        <>
            <Container fluid className="px-5 py-4">
                <h3 style={{ color: '#a855f7' }}>Educational Qualification</h3>
                <Card className="p-3 mt-3" style={{ background: '#f5f2f2ff', border: 'none' }}>
                    <strong>Bachelor of Engineering(BE) in Information Technology(IT)</strong>
                    <p className="text-secondary mb-0">Gujarat technologies University(GTU)</p>
                </Card>
            </Container>
        </>
    )
}