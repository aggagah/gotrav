import React from "react";

function Card(props) {
	return (
		<>
			<div class="col">
				<div class="card h-100" style={props.style}>
					<img src={props.imageSrc} class="card-img-top" alt="..." style={{ height: "300px" }} />
					<br />
					<div class="card-body" style={{ textAlign: "center" }}>
						<h5 class="card-title" style={{ color: "#030303", fontFamily: "Rubik" }}>
							{props.title}
						</h5>
						<p>{props.desc}</p>
					</div>
				</div>
			</div>
		</>
	);
}

export default Card;
