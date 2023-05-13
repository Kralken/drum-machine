import React, {useEffect} from 'react';
import data from './Data.js';
import Drum from './Drum.js';
import Footer from './Footer.js'

// only keys to listen for, don't execute anythin if other keys are pressed
export const validKeys = data.map(sound => {
    return sound.id;
});

export default function App() {

    useEffect(() => {
        window.addEventListener("keydown", handleKeyPress);
        return (() => window.removeEventListener("keydown", handleKeyPress));
    }, [])

    function handleKeyPress(e) {
        if (validKeys.includes(e.key.toLowerCase())) {
            document.getElementById(e.key.toUpperCase()).click();
        }
    }

    return (
        <React.StrictMode>
            <Drum/>
            <Footer/>
        </React.StrictMode>
    )
}