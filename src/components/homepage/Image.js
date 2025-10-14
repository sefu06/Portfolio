import "./Image.css"
import mouse from '../images/mouse.png';

export default function Image() {
    return (
        <div className="mouse-container">
            <img src={mouse} />
        </div>
    );
}