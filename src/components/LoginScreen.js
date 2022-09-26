import "../styles/LoginScreen.css";

export default function LoginScreen(props) {
    let nameChanged = (e) => props.setRoomName(e.target.value);
    return (
        <div class="Login">
            <h1>On Pourlpouz</h1>
            <h2>Le jeu où Alice est très forte</h2>
            <input placeholder="Partie à rejoindre" onChange={ nameChanged }></input>
            <button>Créer une partie</button>
            <button>Rejoindre la partie</button>
            <button>Observer la partie</button>
        </div>
    );
}