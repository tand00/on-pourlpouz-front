import { useState } from "react";

export default function Reveal(props) {
    let answers = props.answers;
    let answer = "";
    let button = "";
    async function nextAnswer() {
        answer = answers.pop();
    }
    if( answers.length === 0 ) { 
        answer = "Rien de plus à voir...";
        button = <button onClick={ props.next }>Continuer</button>;
    }
    else if( answer === "" ) {
        answer = "Tenez vous prêts...";
        button = <button onClick={ nextAnswer }>Voir les réponses</button>;
    }
    else {
        button = <button onClick={ nextAnswer }>Voir les réponses</button>;
    }
    return (
        <div class="center">
            <img src={ props.image }></img>
            <div key="1" class="card">
                <p>{ answer }</p>
                { button }
            </div>
        </div>
    );
}