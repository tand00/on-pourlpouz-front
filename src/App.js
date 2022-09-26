import { useState } from 'react';
import './App.css';
import LoginScreen from './components/LoginScreen';
import RoomManager from './utils/RoomManager';

function App() {
	let room = new RoomManager("");
	let setRoomName = (name) => room.name = name;
	return (
		<div className="App">
			<LoginScreen setRoomName={ setRoomName }></LoginScreen>
		</div>
	);
}

export default App;
