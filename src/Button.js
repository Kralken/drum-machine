import React, {useState, useRef, useEffect} from 'react';

export default function Button({ sound, setDisplay, status, volume, isOn }) {
    
    const buttonRef = useRef(null);
    const audioRef = useRef(null);

    // detects key presses
    useEffect(() => {
        window.addEventListener("keydown", handleKeyPress);
        return (() => window.removeEventListener("keydown", handleKeyPress));
    }, [])

    // click button when the pressed key is equal to the id
    function handleKeyPress(e) {
        if (e.key === sound.id) {
            buttonRef.current.click();
        }
    }

    // used for styling the button when pressed
    const [buttonPressed, setButtonPressed] = useState(false);

    function handleClick() {
        audioRef.current.play();
        audioRef.current.volume = volume * 0.1;
        setButtonPressed(true);
        setTimeout(() => setButtonPressed(false), 200); // return to false to style the button to unpressed state
        setDisplay(sound[status].name)
    }

    return (
        <div
            id={sound[status].name}
            className={`button button_${sound.id} drum-pad`}
            onClick={isOn ? handleClick : null}
            style={ { backgroundColor: buttonPressed ? "lime" : "white" } }
            ref={buttonRef}
        >
            {sound.id.toUpperCase()}
            <audio src={sound[status].link} id={sound.id.toUpperCase()} className="clip" ref={audioRef}></audio>
        </div>
    );
}