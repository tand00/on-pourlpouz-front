import "../styles/RoomQuestion.css";

export default function RoomQuestion(props) {
    return (
        <div class="RoomQuestion">
            <h2>{ props.question.text }</h2>
            <progress value={ props.timing.remaining } max={ props.timing.total_time }>{ props.timing.remaining }s</progress>
            <img src={ props.question.image }></img>
        </div>
    );
}