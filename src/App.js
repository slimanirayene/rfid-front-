import React, { Component } from "react";
import "./App.css";
import StudentList from "./component/studentList";
import "antd/dist/antd.css";
import { Button } from "antd";
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			students: [],
		};
	}
	getAllmessages = async () => {
		let response = await fetch("http://localhost:740/getallmessages", {
			method: "GET",
		});
		let data = await response.json();
		// console.log(data);
		this.setState({ students: data });
	};
	render() {
		return (
			<div className="App">
				<h1>Student List</h1>
				<Button onClick={this.getAllmessages}>Test</Button>
				<StudentList data={this.state.students} />
				{/* {this.state.students.map((el) => {
					return <StudentList nom={el.Nom} prenom={el.Prenom} date={el.date} />;
				})} */}
			</div>
		);
	}
}

export default App;
