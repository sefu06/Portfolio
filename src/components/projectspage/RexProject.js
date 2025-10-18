import "./RexProject.css";
import URO from "../images/uro.jpeg";
import REXPoster from "../images/REXPoster.png"

export default function RexProject() {
    return (
        <div className="project-detail">
            <h1>REX Program w/ Undergraduate Research Opportunities @ UBC</h1>

            <img
                src={URO}
                alt="UBC Undergraduate Research Opportunities logo"
                className="project-image"
            />

            {/* ✅ Fixed: class → className */}
            <div className="project-description">
                <p>
                    Worked with a graduate statistics student to perform single-cell RNA sequencing using the
                    <strong> Seurat</strong> package in R. We were given a dataset of cancer cells from
                    <strong> BC Cancer</strong>, with the goal of identifying the type of cancer cell for each cell.
                    We then compared our results with literature values to determine the pros and cons of various
                    batch correction methods.
                </p>

                <h3>Technical Skills:</h3>
                <ul>
                    <li>Bioinformatics analysis using R and the Seurat package</li>
                    <li>Single-cell RNA sequencing (scRNA-seq) data processing and interpretation</li>
                    <li>Quality control (QC) and filtering of large biological datasets</li>
                    <li>Dimensionality reduction techniques (PCA, t-SNE, UMAP)</li>
                    <li>Clustering analysis to identify cell populations and subtypes</li>
                    <li>Proficiency in R programming and data manipulation (e.g., dplyr, ggplot2)</li>
                </ul>

                <p>Our end goal was presenting at MURC, an undergraduate research conference at UBC. Below  
                    is the poster we presented at the MURC conference.
                </p>
            </div>


            <img
                src={REXPoster}
                alt="REX Poser"
                className="poster-image"
            />
        </div>
    );
}
