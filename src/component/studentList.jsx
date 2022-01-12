import React, { Component } from "react";
import { List, Avatar, Table } from "antd";

class StudentList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			students: [],
		};
	}
	getAllmessages = async () => {
		try {
			let response = await fetch("http://localhost:740/getallmessages", {
				method: "GET",
			});
			let data = await response.json();
			this.setState({ students: data });
			console.log("heyy");
		} catch (e) {
			console.log(e);
		}
	};

	columns = [
		{
			title: "Nom",
			dataIndex: "Nom",
			key: "Nom",
		},
		{
			title: "Prenom",
			dataIndex: "Prenom",
			key: "Prenom",
		},
		{
			title: "Date",
			dataIndex: "date",
			key: "date",
		},
	];

	componentDidMount() {
		this.getAllmessages();
	}

	render() {
		console.log(this.state.students);
		return (
			<div>
				<Table dataSource={this.state.students} columns={this.columns} />
			</div>
		);
	}
}
export default StudentList;
