import { useState } from "react";
import ANDbox from "../images/ANDbox.png";
import "./BiomodProject.css";
import PDMSmold from "../images/PDMSmold.png"
import molddIRL from "../images/mold in real life.webp"

function DropdownSection({ title, children }) {
    const [open, setOpen] = useState(false);

    return (
        <div className="dropdown-section">
            <h2 onClick={() => setOpen(!open)} className={open ? "open" : ""}>
                {title}
                <span className="arrow">{open ? "▲" : "▼"}</span>
            </h2>
            {open && <div className="dropdown-content">{children}</div>}
        </div>
    );
}

export default function BiomodProject() {
    return (
        <div className="project">
            <img src={ANDbox} alt="ANDbox image" />
            <h1>BIOMOD</h1>
            <p>
                BIOMOD is a UBC engineering design team which specializes in Biomolecular Design.
                This year, I am a part of the BIOMOD Competition team, where myself along with 7 other members plan to compete in the annual BIOMOD Jamboree, an international competition where
                universities around the world present their projects and research. As a computational team
                member, my responsibilities include 3D modelling, numerical analysis, CADNano simulations, and much more.
                Our 2025 project topic is: Creating a Cell-Free System for Carbonic Anhydrase protein synthesis.
                Keep scrolling to learn about what I have been working on!
            </p>

            <DropdownSection title="Image Analysis (Fall 2025)">
                <p>Worked on a series of labs, that taught the basics of image analysis. We used numpy, OpenCV, and matplotlib to explore 
                    various different image analysis techniques such as Gaussian Blur and Sobel Edge Detection to modify images in different ways.
                    To confirm changes in the modified images, grayscale histograms, which shows the pixel intensity distributions were created. To see
                    all the labs that were done, with annotated notes, check out my github!
                </p>
            </DropdownSection>


            <DropdownSection title="PDMS Mold Design (Spring 2025)">
                <p>I designed a PDMS (silicon) mold to for the wetlab team to form p-gels.
                    The P-gel pads made from the mold is the mechanism used to syntheize proteins. 
                    The dimensions  and shape of the mold was determined by immense amounts of literature 
                    review weighed with the limitations of our equipment. After printing, the designed mold 
                    was directly used in experiments which will be presents and the 2025 competition.

                </p>
                <img src={PDMSmold}  />
                <img src={molddIRL}  />
            </DropdownSection>
        </div>
    );
}