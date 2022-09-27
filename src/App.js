import { useState } from 'react';
import './App.css';
import LoginScreen from './components/LoginScreen';
import ViewRoom from './components/ViewRoom';
import RoomManager from './utils/RoomManager';
import PlayRoom from'./components/PlayRoom';

let room = new RoomManager("");

function App() {
	const [ inRoom, setInRoom ] = useState(false);
	const [ isSpec, setIsSpec ] = useState(true);
	let setRoomName = (name) => room.name = name;
	let createRoom = async function() {
		await room.create();
		if(!room.hasError) {
			setInRoom(true);
		}
	};
	let joinRoom = function() {
		setIsSpec(false);
		setInRoom(true);
	}
	let joinRoomSpec = () => setInRoom(true);
	let leaveRoom = () => setInRoom(false);
	let content = inRoom ? 
		isSpec ?
			<ViewRoom room={ room }></ViewRoom> :
			<PlayRoom room={ room }></PlayRoom>
		:
		<LoginScreen 
			setRoomName={ setRoomName }
			createRoom={ createRoom }
			joinRoom={ joinRoom }
			joinRoomSpec={ joinRoomSpec }
		></LoginScreen>;
 	return (
		<div className="App">
			{ content }
		</div>
	);
}

export default App;
