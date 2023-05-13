import React, {useState} from 'react';

export default function Button({sound, setDisplay, status, volume, isOn}) {


    // used for styling the button when pressed
    const [buttonPressed, setButtonPressed] = useState(false);

    function handleClick() {
        document.getElementById(sound.id.toUpperCase()).play();
        document.getElementById(sound.id.toUpperCase()).volume = volume * 0.1;
        setButtonPressed(true);
        setTimeout(() => setButtonPressed(false), 200); // return to false to style the button to unpressed state
        setDisplay(sound[status].name)
    }

    return (
        <div
        id={sound[status].name}
        className={`button button_${sound.id} drum-pad`}
        onClick={isOn ? handleClick : null}
        style={{backgroundColor: buttonPressed ? "lime": "white"}}
        >
            {sound.id.toUpperCase()}
            <audio src={sound[status].link} id={sound.id.toUpperCase()} className="clip"></audio>
        </div>
    );
}