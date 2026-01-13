import "./SustainABite.css";
import DemoVideo from "../images/sustainabiteDemo.MP4";

export default function SustainABite() {
    return (
        <div className="sustainabite-page">
            <h1 className="project-title">
                SustainABite: Combatting Food Surplus One Connection at a Time
            </h1>

            <div className="content-row">
                <video
                    className="project-video"
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source src={DemoVideo} type="video/mp4" />
                </video>

                <div className="details">
                    <p>
                        SustainABite was inspired by the challenges university students face with tight budgets and food waste from bulk buying. The app helps students share excess food, split bulk purchases, and track their impact, making food sharing simple, social, and sustainable.

                        <br></br>
                        <br></br>

                        Built during a hackathon using React Native, our clean design and intuitive UX earned first place. Afterward, I added a backend with Expo Go, Firebase, and JavaScript, enabling data storage and an in-app chat, turning the prototype into a fully functional, community-focused platform.

                        <br></br>
                        <br></br>
                        There is a demo showing some of the functionalities above, but the complete
                        code can be found on my <a href="https://github.com/sefu06" className="link">github</a>!
                    </p>
                </div>
            </div>
        </div>
    );
}
