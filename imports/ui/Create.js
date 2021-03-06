import React, { Component } from "react";

export default class Create extends Component {
	render() {
		return (
			<div className="col-sm-6">
				<h1>Create a game</h1>
				<label>
					Select a language:{" "}
					<select
						value={this.props.language}
						onChange={this.props.handleLanguageChange}>
						<option value="es">Spanish</option>
						<option value="en">English</option>
					</select>
				</label>
				<br />
				<button
					id="create-game"
					className="btn btn-primary"
					type="button"
					title="Create a game"
					onClick={this.props.handleCreate}>
					<i className="fa fa-group fa-2x"></i>
				</button>
			</div>
		);
	}
}
