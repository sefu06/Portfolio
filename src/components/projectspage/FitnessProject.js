import DemoVideo from "../images/demo.mov";
import "./FitnessProject.css"

export default function FitnessProject() {
    return (
        <div className="wholepage">
        <div className="video-container">
            <video
                src={DemoVideo}
                autoPlay
                loop
                muted
                playsInline
                className="project-video"
            />
            </div>
            <p className="details">
                This Fitness Tracker app is a Java-based desktop application
                built using Java Swing for the user interface and JSON for data persistence.
                It allows users to easily track their workouts, fitness goals, and exercise
                progress through an intuitive and interactive interface. The app supports key features
                such as adding and organizing exercises by category, creating and managing custom
                workout plans, and setting personalized fitness goals. Data is saved and loaded
                seamlessly through JSON serialization, ensuring that users’ progress and preferences
                are preserved between sessions. Designed with simplicity and usability in mind, this project
                demonstrates effective use of object-oriented programming, GUI design, and data persistence
                techniques in Java.

                <br></br>
                <br></br>
                There is a demo showing some of the functionalities above, but the complete
                code can be found on my <a href= "https://github.com/sefu06" className="link">github</a>!
            </p>
        </div>
        
    );
}