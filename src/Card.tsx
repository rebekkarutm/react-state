//importing from react, the card back image, and CSS properties so I can better style the cards
import {useState} from 'react';
import img from './card_back.png';
import { CSSProperties } from 'react';

//creating data with the cardFront so I can differentiate between the back and front of the card
type Props = {
    data:{
        cardFront:string
    }
}

//creating the card and creating the hovering function
const Card = ({data}:Props)=>{
    const {cardFront} = data
    const [isHovering, setIsHovering] = useState(false);

    //setting the size of the div/cards
    const divStyle = {
        width: '366.5px',
        height: '512px'
    }

    //creating the rotating effect on the cards and using z-index to swap them out
    const backStyle:CSSProperties = {
       ...divStyle,
       zIndex: isHovering ? 0 : 1,
       transition: '0.8s',
       opacity: isHovering ? 0 : 1,
       position: 'absolute',
       backgroundImage: `url(${img})`,
       transform: isHovering ? 'rotate3d(1, 1, 1, 360deg)' : 'rotate3d(0, 0, 0, 0deg)'
    }

    //same as above but for the front of the card
    const frontStyle:CSSProperties = {
        ...divStyle,
        zIndex: isHovering ? 1 : 0,
        transition: '0.8s',
        opacity: isHovering ? 1 : 0,
        position: 'absolute',
        backgroundImage: `url(${cardFront})`,
        transform: isHovering ? 'rotate3d(1, 1, 1, 360deg)' : 'rotate3d(0, 0, 0, 0deg)'
    }

    //returning the cards with a hover effect as well as styles
    return (
        <div style={divStyle}
        onMouseOver={() => setIsHovering(true)}
        onMouseOut={() => setIsHovering(false)}
        >
            <div style={backStyle}>
            </div>
            <div style={frontStyle} >
            </div>
        </div>
    )
}

export default Card;