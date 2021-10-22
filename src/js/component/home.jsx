import React from "react";
import { NavBar } from "./navbar.jsx";
import { Jumbo } from "./jumbotron.jsx";
import { Cards } from "./cards.jsx";
//include images into your bundle

import { Footer } from "./footer.jsx";

//create your first component
export const Home = () => {
	return (
		<>
			<NavBar />
			<div className="container-fluid p-0">
				<div id="page-container" className="container">
					<Jumbo />
					<Cards />
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Home;
