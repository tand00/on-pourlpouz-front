import { useState } from "react";

import "../styles/Reveal.css";

export default function Reveal(props) {
    const [currentIndex, setCurrentIndex] = useState(0);
    let answers = ["Tenez vous prêts..."].concat(props.answers).concat(["Rien de plus à voir..."]);
    let button = "";
    function nextAnswer() {
        if(currentIndex < answers.length - 1) setCurrentIndex(idx => idx + 1);
    }
    if( currentIndex >= answers.length - 1 ) { 
        button = <button onClick={ props.next }>Continuer</button>;
    } else {
        button = <button onClick={ nextAnswer }>Voir les réponses</button>;
    }
    return (
        <div class="Reveal">
            <img src={ props.image }></img>
            <div class="card">
                <p>{ answers[currentIndex] }</p>
            </div>
            { button }
        </div>
    );
}