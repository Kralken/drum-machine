import React, {useState} from 'react';
import Button from './Button.js';
import Settings from './Settings.js';
import data from './Data.js';

export default function Drum() {

    // turn app on or off
    const [isOn, setIsOn] = useState(true);

    // 1 is heater kit, 2 is smooth piano kit
    const [status, setStatus] = useState(1);
    const [volume, setVolume] = useState(5);

    // display view
    const [display, setDisplay] = useState("");


    const buttons = data.map(sound =>
        <Button
            sound={sound}
            key={sound.id}
            setDisplay={setDisplay}
            status={status}
            volume={volume}
            isOn={isOn}
        />
    );

    return (
        <div className="drum-container" id="drum-machine">   
            <div className="buttons-container">
                {buttons}
            </div>
            <Settings 
                volume={volume}
                volumeChange={setVolume}
                display={display}
                setDisplay={setDisplay}
                isOn={isOn}
                setIsOn={setIsOn}
                status={status}
                setStatus={setStatus}
            />
        </div>
    );
}