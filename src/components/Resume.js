import "./Resume.css"
import React from 'react';


export default function Resume() {
    return (
        <main className="Resume">
            <h1 className="big-text">
                Thanks for making it this far!
            </h1>
            <p className="small-text1">
                Here is my resume if you want to take a look at it! Feel free to reach out if you have any questions through my 
                <a href="https://www.linkedin.com/in/selinafu1209/" className="Linkedin" target="_blank"
                    rel="noopener noreferrer">  Linkedin</a> or through email
                at   <a href="mailto:selina.fu88@gmail.com" className="Email" target="_blank"
                    rel="noopener noreferrer">
                    selina.fu88@gmail.com
                </a>
                :) </p>
            
            <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer" className="Button">
                View Selina's Resume
            </a>



        </main>
    );

}