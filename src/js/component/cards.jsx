import React from "react";
import { Card } from "./card.jsx";

export const Cards = () => {
	return (
		<div className="row">
			<div className="col">
				<Card />
			</div>
			<div className="col">
				<Card />
			</div>
			<div className="col">
				<Card />
			</div>
			<div className="col">
				<Card />
			</div>
		</div>
	);
};
