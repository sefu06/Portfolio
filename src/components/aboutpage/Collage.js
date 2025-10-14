import "./Collage.css"
import ferrydock from '../images/ferrydock.jpeg';
import road from '../images/road.jpeg';
import landscape from '../images/landscape.jpeg';
import sign from '../images/sign.jpeg';
import sunset from '../images/kitssunset.jpeg';

import Lucas1 from '../images/lucas.jpeg';
import Lucas2 from '../images/lucas2.jpeg';
import Lucas3 from '../images/lucas3.jpeg';
import Lucasswim from '../images/lucasswimming.jpeg';
import meandlucas from '../images/meandlucas.jpeg';

import sandwich from '../images/sandwich.jpeg';
import takoyaki from '../images/takoyaki.jpeg';
import jos from "../images/jos.jpg"
import cactus from "../images/cactus.jpg";

import friends from "../images/friends.jpg";
import forestry from "../images/forestry.jpg";
import nitobe from "../images/nitobe.jpg";

export default function Collage() {
    const images = [
        ferrydock,
        landscape,
        sign,
        sunset,
        
        Lucas1,
        Lucas2,
        Lucas3,
        Lucasswim,
        meandlucas,

        sandwich,
        takoyaki,
        jos,
        cactus,

        friends,
        forestry,
        nitobe
    ];
    return (
        <div className="collage">
            {images.map((src, index) => (
                <img
                    key={index}
                    src={src}
                    alt={`collage-${index}`}
                    className={`img-${index}`}
        
                />
                
            ))}
            <p className="floating-text">
                photography
            </p>
            <p className="dog">
                my dog (Lucas)
            </p>
            <p className="food">
                good food!
            </p>
            <p className="lifeatubc">
                life at ubc
            </p>
        </div>
    );
 }
