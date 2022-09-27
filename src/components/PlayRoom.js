import { useState, useEffect, useRef } from 'react';

import "../styles/PlayRoom.css";

export default function PlayRoom(props) {
    const inputRef = useRef(null);
    const [ alreadySent, setAlreadySent ] = useState(false);
    const [ display, setDisplay ] = useState(false);
    async function updateStatus() {
        let data = await props.room.getStatus();
        let status = data.state;
        if( status !== "waiting" ) {
            setDisplay(false);
            setAlreadySent(false);
        } else {
            if(!alreadySent) setDisplay(true);
            else setDisplay(false);
        }
    }
    function send() {
        setAlreadySent(true);
        setDisplay(false);
        let answer = inputRef.current.value;
        props.room.sendAnswer(answer);
    }
    useEffect(() => {
        updateStatus();
        const interval = setInterval(updateStatus, 500);
        return () => clearInterval(interval);
    }, [ alreadySent ]);
    if(!display) {
        return (
            <div class="PlayRoom">
                <h1>En attente de la fiesta...</h1>
            </div>
        );
    }
    return (
        <div class="PlayRoom center">
            <h1>Mmh dites moi tout ?</h1>
            <textarea ref={ inputRef } placeholder="Pierre-Gazon"></textarea>
            <button onClick={ send }>Valider</button>
        </div>
    );
}