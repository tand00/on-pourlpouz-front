import { useState, useEffect } from 'react';

import "../styles/ViewRoom.css";

export default function ViewRoom(props) {
    const [status, setStatus] = useState({});
    async function updateStatus() {
        let data = await props.room.getStatus();
        console.log(data);
        setStatus(data);
    }
    async function nextState() {
        await props.room.nextState();
    }
    useEffect(() => {
        const interval = setInterval(updateStatus, 1000);
        return () => clearInterval(interval);
    }, []);
    return (
        <div>
            <h1>{ status.name }</h1>
            <h2>{status.state}</h2>
            { (status.state === "not-started" || status.state === "revealing") &&
            <button onClick={ nextState }>Next</button> }
            { status.state == "waiting" &&
            <img src={ status.question.image }></img> }
        </div>
    );
}