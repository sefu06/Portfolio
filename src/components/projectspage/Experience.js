import './Experience.css';
import { Link } from "react-router-dom";

import biomod from "../images/biomod.png";
import rex from "../images/REXPoster.png";
import fitnesstracker from "../images/fitnesstracker.png"

export default function Experience() {
    return (
        <section className="Projects">
            <h1 className="Projects-title">Projects/Experience</h1>

            <div className="Project">
                <Link to="/projects/biomod" className="Project_description">
                    <img src={biomod} alt="BIOMOD Project" />
                    </Link>
                <div className="project-text">
                    <span className="name">BIOMOD, 2024 - Present </span>
                    <br></br>
                
                    <Link to="/projects/biomod" className="Project_description">
                        Creating a Cell-Free System for
                        Carbonic Anhydrase protein synthesis
                        </Link>
                    
                    <br></br>
                    <div className='Skills'>
                        <p>Python / R / CADNano</p>
                    </div>
                   

                </div>
                
            </div>

            <div className="Project">
                <img src={rex} alt="REX Project" />
                <div className="project-text">
                    <span className="name">Undergraduate Research Experience Program, 2024-2025</span>
                    <br></br>
                    <Link to = "/projects/rex" className='Project_description'>Bencharking Batch Correction Methods for ScRNA-sequencing</Link>
                    <br></br>
                    <div className='Skills'>
                        <p>R / SQL</p>
                    </div>
                </div>
            </div>

            <div className="Project">
                <img src={fitnesstracker} alt="Fitness Tracker App" />
                <div className="project-text">
                    <span className="name">Fitness Tracker App </span>
                    <br></br>
                    <Link to = "/projects/fitnessproject" className='Project_description'>A user-friendly app that can be used to keep track of your fitness goals </Link>
                    <br></br>
                    <div className='Skills'>
                        <p>Java / JSON</p>
                    </div>
                </div>
            </div>

    
        </section>
    );
}