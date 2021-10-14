import React from "react";
import { Content } from "./body.jsx";

export const Card = () => {
	return (
		<div className="row">
			<div className="col">
				<Content />
			</div>
			<div className="col">
				<Content />
			</div>
			<div className="col">
				<Content />
			</div>
			<div className="col">
				<Content />
			</div>
		</div>
	);
};
