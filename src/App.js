import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from './components/Navbar';
import Title from "./components/homepage/Title";
import Experience from "./components/projectspage/Experience";
import Resume from './components/Resume';
import Image from './components/homepage/Image';
import Major from "./components/homepage/Major";
import Stars from "./components/homepage/Stars";
import About from "./components/aboutpage/About";
import Collage from "./components/aboutpage/Collage";
import BiomodProject from "./components/projectspage/BiomodProject";
import RexProject from "./components/projectspage/RexProject";
import FitnessProject from "./components/projectspage/FitnessProject";
import Layout from "./Layout";

function HomePage() {
    const location = useLocation();

    useEffect(() => {
        if (location.state?.scrollTo) {
            const sectionId = location.state.scrollTo;

            const scrollWhenReady = () => {
                const section = document.getElementById(sectionId);
                if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                } else {
                    // retry on next animation frame until section is in the DOM
                    requestAnimationFrame(scrollWhenReady);
                }
            };

            scrollWhenReady();
        }
    }, [location]);

    return (
        <section className="WholeProject">
            <section id="home">
                <div className="title-section">
                    <Stars />
                    <Image />
                    <Major />
                    <Title />
                    <p className="scroll-text">scroll down for more!</p>
                </div>
            </section>

            <section id="projects">
                <Experience />
            </section>

            <section id="about">
                <About />
                <Collage />
            </section>

            <section id="resume">
                <Resume />
            </section>
        </section>
    );
}

function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    {/* ✅ Use HomePage component */}
                    <Route path="/" element={<HomePage />} />

                    <Route path="/projects/biomod" element={<BiomodProject />} />
                    <Route path="/projects/rex" element={<RexProject />} />
                    <Route path="/projects/fitnessproject" element={<FitnessProject />} />
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;
