import './Title.css';
import instagram from '../images/instagram.png';
import linkedin from '../images/linkedin.png';
import github from '../images/github.png';

export default function Title() {
    return (
        <main className="Title">
            <div className="title-box">
                <p className="intro">
                    <span className="name">Selina Fu</span> is a{" "}
                    <span className="highlight product">Software Developer</span>{" "}
                    and <span className="highlight curious">curious</span> thinker.
                </p>

                {/* Social icons */}
                <div className="social-icons">
                    <a
                        href="https://www.linkedin.com/in/selinafu1209/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src= {linkedin} alt="LinkedIn" className="icon" />
                    </a>

                    <a
                        href="https://github.com/sefu06"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={github} alt="GitHub" className="icon" />
                    </a>

                    <a
                        href="https://www.instagram.com/sese.fu/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={instagram} alt="Instagram" className="icon" />
                    </a>
                </div>
            </div>
        </main>
    );
}