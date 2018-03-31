import React, { Component } from "react";

export default class Timer extends Component {
	render() {
		let prepareTime = this.props.prepareTime;
		let timeRemaining = this.props.timeRemaining;
		let isHost = this.props.isHost;
		let message;
		if (prepareTime !== 0 && timeRemaining === 0) {
			message = <h2>The game starts in {prepareTime}</h2>;
		} else {
			if (timeRemaining !== 0 ) {
				message = <h1 id="time-remaining">{timeRemaining}</h1>;
			} else {
				message = (
					<div>
						<h3>Waiting for {isHost?"you":"host"} to start the game...</h3>
						{isHost &&
							<button
								type="button"
								className="btn btn-primary"
								onClick={this.props.prepareGame}
								disabled={timeRemaining !== 0}>
								<i className="fa fa-play"></i>
							</button>
						}
					</div>
				);
			}
		}
		return <div id="timer">{message}</div>;
	}
}
