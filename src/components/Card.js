import React from "react";

function Card(props) {
	return (
		<>
			<div class="col" style={props.style}>
				<div class="card h-100" style={{ background: "#f5f5f5" }}>
					<img src={props.imageSrc} class="card-img-top" alt="..." style={{ height: "250px" }} />
					<div class="card-body" style={{ textAlign: "center" }}>
						<h5 class="card-title" style={{ color: "#030303", fontFamily: "Rubik" }}>
							{props.title}
						</h5>
					</div>
				</div>
			</div>
		</>
	);
}

export default Card;
