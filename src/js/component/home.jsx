import React from "react";
import { NavBar } from "./navbar.jsx";
import { Jumbo } from "./jumbotron.jsx";
import { Cards } from "./cards.jsx";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export const Home = () => {
	return (
		<>
			<NavBar />
			<div className="container-fluid">
				<div className="container">
					<Jumbo />
					<Cards />
				</div>
			</div>
			<p
				className="text-center bg-secondary text-white h-25 fixex-bottom p-3 mt-md-4 mb-0"
				style={{ vh: "100%" }}>
				Made with love by Ricardo DS
			</p>
		</>
	);
};

export default Home;
