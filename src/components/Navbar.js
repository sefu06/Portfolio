import { Link } from "react-scroll";  
import './Navbar.css'


export default function Navbar() {
    return (
        <nav className="navbar">
            <ul>
                <li>
                    <Link to="home" smooth={true} duration={500}>Home</Link>
                </li>
                <li>
                    <Link to="projects" smooth={true} duration={500}>Projects</Link>
                </li>
                <li>
                    <Link to="about" smooth={true} duration={500}>About</Link>
                </li>
                <li>
                    <Link to="resume" smooth={true} duration={500}>Resume</Link>
                </li>
            </ul>
        </nav>
    );
}