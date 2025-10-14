import { useState } from "react";
import ANDbox from "../images/ANDbox.png";
import "./BiomodProject.css";

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
                Every year, we attend the annual BIOMOD Jamboree, an international competition where
                universities around the world present their projects and research. As a computational team
                member, my responsibilities include 3D modelling, numerical analysis, CADNano simulations, and much more.
                Our 2025 project topic is: Creating a Cell-Free System for Carbonic Anhydrase protein synthesis.
                Keep scrolling to learn about what I have been working on!
            </p>

            <DropdownSection title="Image Analysis (Fall 2025)">
                <p>In Progress... Coming soon</p>
            </DropdownSection>

            <DropdownSection title="TreeSAP Cost Analysis (Summer 2025)">
                <p>Cost analysis using trees is a method in algorithm design that helps us measure the efficiency of operations performed
                    on tree-based data structures (such as binary search trees, heaps, AVL trees, or red–black trees).
                    The goal is to understand not just the cost of a single operation, but the overall performance across a sequence of operations.</p>
            </DropdownSection>

            <DropdownSection title="PDMS Mold Design (Spring 2025)">
                <p>I designed a PDMS (silicon) mold to for the wetlab team to form p-gels.
                    The P-gel pads made from the mold is the mechanism used to syntheize proteins. 
                    The dimensions  and shape of the mold was determined by immense amounts of literature 
                    review weighed with the limitations of our equipment. After printing, the designed mold 
                    was directly used in experiments which will be presents and the 2025 competition.

                </p>
                <img src={ANDbox} alt = "ANDbox dropbox" />
            </DropdownSection>
        </div>
    );
}