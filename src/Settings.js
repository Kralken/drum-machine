import React from 'react';

export default function Settings({volume, volumeChange, display, setDisplay, isOn, setIsOn, status, setStatus}) {

    function handleVolumeChange(e) {
        volumeChange(e.target.value);
        setDisplay("Volume: " + e.target.value);
        setTimeout(() => setDisplay(""), 500);

    }

    function handleOnOffToggle() {
        setIsOn(!isOn);
        if (!isOn) {
            setDisplay("Hello, World!");
            setTimeout(() => setDisplay(""), 500)
        } else {
            setDisplay("OFF");
        }
    }

    function handleTypeChange() {
        if (status === 1) {
            setStatus(2);
        } else {
            setStatus(1);
        }

        if(status === 1) {
            setDisplay("Smooth Piano Kit")
        } else {
            setDisplay("Heater Kit")
        }
    }

    return (
        <div className="settings-container">
            <div className="setting display" id="display">{display}</div>
            <div
                className="setting vol-slider"
            >
                VOLUME
                <input
                    type="range"
                    min="0"
                    max="10"
                    value={volume}
                    onChange={handleVolumeChange}
                    disabled={!isOn}
                >
                </input>
            </div>
            <div
                className="setting horizontal-setting"
            >
                <div
                    className="on-off-setting-container"
                    onClick={handleOnOffToggle}
                >
                    <div
                        className="horizontal-child on-off-setting"
                    >
                        <div
                            className="on-off-status"
                            style={ { backgroundColor: isOn ? "red" : "white" } }
                        ></div>
                    </div>
                    <p>{isOn ? "ON" : "OFF"}</p>
                </div>
                <div
                    className="horizontal-child set-type"
                    onClick={isOn ? handleTypeChange : null}
                    style={{"justifyContent": status === 1 ? "left" : "right"}}
                >
                    <div
                        className="inner-set-type"
                    ></div>
                </div>
            </div>
        </div>
    );
}