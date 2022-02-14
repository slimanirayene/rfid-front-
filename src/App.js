import React, { Component } from "react";
import "./App.css";
import StudentList from "./component/studentList";
import "antd/dist/antd.css";

class App extends Component {
	render() {
		let date = new Date();
		console.log("ee", date.getDate());
		return (
			<div className="App">
				<h1>Liste des étudiants :</h1>
				<StudentList />
			</div>
		);
	}
}

export default App;
