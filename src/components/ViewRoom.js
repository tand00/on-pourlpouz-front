import { useState, useEffect } from 'react';

import "../styles/ViewRoom.css";
import RoomQuestion from "./RoomQuestion";
import Reveal from './Reveal';

const UPDATE_INTERVAL = 500;

export default function ViewRoom(props) {
    const [status, setStatus] = useState({});
    async function updateStatus() { setStatus(await props.room.getStatus()); }
    async function nextState() { await props.room.nextState(); }
    useEffect(() => {
        updateStatus();
        const interval = setInterval(updateStatus, UPDATE_INTERVAL);
        return () => clearInterval(interval);
    }, []);
    if(status.state === "waiting") {
        return (
            <RoomQuestion 
                question={ status.question }
                timing={ status.timing }
            ></RoomQuestion>
        );
    }
    else if(status.state === "not-started") {
        return (
            <div class="center">
                <h1>Partie : { status.name }</h1>
                <h2>Dans ce jeu de dingo, vous allez devoir faire preuve d'inventivité et de rigolo hihi ! Tenez vous prêts...</h2>
                <button onClick={ nextState }>Commencer</button>
            </div>
        );
    }
    else if(status.state === "revealing") {
        return (
            <Reveal
                next={ props.room.nextState }
                answers={ status.answers }
                image={ status.question.image }
            ></Reveal>
        );
    }
    return (
        <div class="center">
            <h1>{ status.name }</h1>
            <h2>{ status.state }</h2>
            <button onClick={ nextState }>Suivant</button>
        </div>
    );
}