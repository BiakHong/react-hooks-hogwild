import React, { useState } from "react";
import Nav from "./Nav";
import hogs from "../porkers_data";
import Tiles from "./Tile";



function App() {
	const [greased, setGreased] =useState(false)

	function showGreased(){
		setGreased((greased)=> !greased)
		console.log(greased)
	}
	return (
		<div className="App">
			<Nav />
			<span>
			<h3>Show Only Greased</h3>
			<input class="toggle" type="checkbox" onChange={showGreased} />
			</span>
			
			<Tiles hogs={hogs} greased={greased}/>
		</div>
	);
}

export default App;
