import React from "react";
import { NavBar } from "./navbar.jsx";
import { Jumbo } from "./jumbotron.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Card } from "./cards.jsx";

//create your first component
export const Home = () => {
	return (
		<div className="container-fluid">
			<div className="container">
				<NavBar />
				<Jumbo />
				<Card />
			</div>

			<p className="text-center bg-secondary text-white h-25 fixex-bottom p-3 mt-md-4 mb-0">
				Made with love by Ricardo DS
			</p>
		</div>
	);
};

export default Home;
