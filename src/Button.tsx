import {useState, CSSProperties} from 'react';

//making props from the text so I can personalise it to each button
type Props = {
    text:string
    clickText:string
}

//making the text on the button change when clicked
const Button = ({text, clickText}:Props)=>{
    const [buttonText, setButtonText] = useState(text);
    const buttonClick = () => {
        setButtonText(clickText)
    }

    //styling the button, using a boolean operator to change the styles when the button is clicked
    const buttonStyle:CSSProperties = {
        backgroundColor: buttonText===text ? '#3B5BA6' : '#FCCB04',
        color: buttonText===text ? '#FCCB04' : '#3B5BA6',
        height: '60px',
        width: '366.5px',
        border: buttonText===text ? 'solid 8px #192653' : 'solid 8px #3B5BA6',
        borderRadius: '12px',
        fontSize: '28px',
        fontWeight: 'bold',
        cursor: buttonText===text? 'pointer' : 'default'
    }

    //returning the button with the CSS styles, on click function and the text props
    return (
        <>
        <button
            onClick={buttonClick}
            style={buttonStyle}
        >{buttonText}</button>
        </>
    )
}

export default Button;