import React from "react";

export const Card = () => {
	return (
		<div
			className="card text-center mb-md-0 mb-4"
			style={{ marginTop: "20%" }}>
			<img
				src="https://digitalfuturesociety.com/app/uploads/2021/06/BDT_logo_becas_geeks_v2.jpg"
				className="card-img-top"
				alt="..."
			/>
			<div className="card-body">
				<h5 className="card-title">My Card</h5>
				<p className="card-text">
					{"This is my first Landing Page made with React"}
				</p>
				<a href="#" className="btn btn-primary">
					Find Out More!
				</a>
			</div>
		</div>
	);
};
