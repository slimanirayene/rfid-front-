import React, { Component } from "react";
import { List, Avatar, Table } from "antd";

class StudentList extends Component {
	constructor(props) {
		super(props);
	}
	columns = [
		{
			title: "Nom",
			dataIndex: "nom",
			key: "nom",
		},
		{
			title: "Prenom",
			dataIndex: "prenom",
			key: "prenom",
		},
		{
			title: "Date",
			dataIndex: "date",
			key: "date",
		},
	];

	data = this.props.data;
	render() {
		console.log(this.props.data);
		return (
			<div>
				<Table dataSource={this.dataSource} columns={this.columns} />
			</div>
		);
	}
}
export default StudentList;
