import { Button, Card } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../COMMAN/Header";
import Footer from "../COMMAN/Footer";
import homeImg from "../assets/home.png";
import rescipes from "../assets/rescipes.png";
import Spotify from "../assets/Spotify.png";



export default function Layout() {
    return (
        <>
            <Header />
            <ProjectCard />
            <Footer />
        </>
    )
}

const projects = [
    {
        id: "1",
        title: "DelightfulEats",
        description: ["Stack: React, Vite, JavaScript, Bootstrap, Styled Components, Context API. ",
            "Built a responsive food recipe web app that allows users to explore, search, and favorite meals from an external recipe API. ", "Implemented recipe search and filtering by name, cuisine, and tags using React Router and Context API for efficient state management. ", "Designed detailed recipe pages with ingredients, instructions, and user ratings to enhance user engagement.", "Developed a user-friendly UI with Bootstrap and Styled Components, including carousel for featured recipes and toast notifications for user feedback.", "Integrated feedback form and favorite list functionality with local Storage for persistent user experience"
        ],
        image: rescipes
    },
    {
        id: "2",
        title: "Educational Tuition",
        description: ["Developed a full-stack web application enabling users to explore education services, submit processing inquiries in real-time.",
            "Built responsive and intuitive UI components using React.JS and Bootstrap.",
            "Created RESTful APIs with Node.js and Express.js to handle user inquiries, estimate calculations, and status updates and education data.",
            "Designed MongoDB schemas to manage user inquiries, inquiry processing pipelines."
        ],
        image: homeImg

    },
    {
        id: "3",
        title: "Spotify Clone",
        description: ["Spotify Clone UI design React vite with Bootstrap."],
        image: Spotify
    }
];

function ProjectCard() {
    const { id } = useParams();
    const navigate = useNavigate();

    return (
        <div className="d-flex justify-content-center mt-5">
            {projects
                .filter(project => project.id === id)
                .map(project => (
                    <Card
                        key={project.id}
                        style={{
                            background: "#c2c2c4ff",
                            border: "none",
                            color: "white",
                            borderRadius: "12px",
                            maxWidth: "600px",
                            width: "100%"
                        }}
                    >
                        <Card.Img
                            variant="top"
                            src={project.image}
                            style={{
                                padding: "20px",
                            }}
                        />

                        <Card.Body>
                            <Card.Title style={{ color: "#a855f7" }}>
                                {project.title}
                            </Card.Title>

                            <ul style={{ color: "#070202ff", paddingLeft: "18px" }}>
                                {project.description.map((point, index) => (
                                    <li key={index} style={{ marginBottom: "8px" }}>
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </Card.Body>

                        <div className=" d-flex justify-content-center p-2">
                            <Button
                                style={{ background: '#a855f7', border: 'none' }}
                                onClick={() => navigate("/projects")}
                            >
                                Go Back
                            </Button>
                        </div>
                    </Card>
                ))}
        </div>
    );
}

