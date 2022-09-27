import "../styles/LoginScreen.css";

export default function LoginScreen(props) {
    let nameChanged = (e) => props.setRoomName(e.target.value);
    return (
        <div class="Login">
            <h1>On Pourlpouz</h1>
            <h2>Le jeu où Alice est trop forte</h2>
            <input placeholder="Partie à rejoindre" onChange={ nameChanged }></input>
            <button onClick={ props.createRoom }>Créer une partie</button>
            <button onClick={ props.joinRoom }>Rejoindre la partie</button>
            <button onClick={ props.joinRoomSpec }>Observer la partie</button>
        </div>
    );
}