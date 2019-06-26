import React from "react";

//include images into your bundle
import TheHour from "../../img/TheHourLogo.png";
import Navbar from "./navbar.js";

//create your first component
export default class Home extends React.Component {
	render() {
		return (
			<div>
				<Navbar />
				<div className="text-center mt-5">
					<h1>THE HOUR</h1>
					<p>
						<img src={TheHour} />
					</p>
					<a href="#" className="btn btn-success">
						BUTTON
					</a>
					<p>Made by The Hour Team</p>
				</div>
			</div>
		);
	}
}
