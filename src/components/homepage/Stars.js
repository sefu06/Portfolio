import "./Stars.css"
import stars from '../images/stars.png';

export default function Image() {
    return (
        <div className="stars-container">
            <img src={stars} />
        </div>
    );
}