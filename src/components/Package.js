import React from "react";
import "./Package.css";

function Package(props) {
	return (
		<>
			<div className="col">
				<div class="card" style={props.style}>
					<div class="card-header">{props.package}</div>
					<ul class="list-group list-group-flush" style={{ fontFamily: "Rubik" }}>
						<li class="list-group-item">{props.fitur1}</li>
						<li class="list-group-item">{props.fitur2}</li>
						<li class="list-group-item">{props.fitur3}</li>
					</ul>
					<div class="card-footer" style={{ fontWeight: 500 }}>
						${props.price}
					</div>
				</div>
			</div>
		</>
	);
}

export default Package;
