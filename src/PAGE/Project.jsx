import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Header from '../COMMAN/Header';
import Footer from '../COMMAN/Footer';
import ProjectCard from './projectcard';
import { useNavigate } from 'react-router-dom';

export default function Projects() {
    return (
        <>
            <Header />
            <FeaturedProjects />
            <Footer />
        </>
    );
}
const projects = [
    {
        id: 1,
        title: "DelightfulEats",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuDe4WCjNaidmD8Mpy5ufrOQKL3nfwpSav7w&s"
    },
    {
        id: 2,
        title: "Educational Tuition",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq4Hs_LJBmPZYgNgF040i1KRKXo6EK4eMW7Q&s"
    },
    {
        id: 3,
        title: "Spotify Clone",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnSJ0EnwiI3AZ-CiKnhzNVHN8f3llJFNkrxA&s"
    }
];

function FeaturedProjects() {
    const navigate = useNavigate();

    return (
        <>
            <Container fluid className="px-5 py-4">
                <h3 style={{ color: '#a855f7' }}>Featured Projects</h3>

                <Row className="mt-3">
                    {projects.map((project) => (
                        <Col md={4} key={project.id} className="mb-4">
                            <Card style={{ background: '#1a1f3c', border: 'none' }}>
                                <Card.Img src={project.image} />
                                <Card.Body>
                                    <Card.Title className="text-white">
                                        {project.title}
                                    </Card.Title>

                                    <Button
                                        size="sm"
                                        style={{ background: '#a855f7', border: 'none' }}
                                        onClick={() => navigate(`/project/${project.id}`)}
                                    >
                                        View
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    )
}