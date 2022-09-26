import { useState } from 'react';
import './App.css';
import LoginScreen from './components/LoginScreen';
import ViewRoom from './components/ViewRoom';
import RoomManager from './utils/RoomManager';

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
		setInRoom(false);
	}
	let joinRoomSpec = () => setInRoom(true);
	let leaveRoom = () => setInRoom(false);
	let content = inRoom ? 
		<ViewRoom
			room={ room }
		></ViewRoom>
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
