import React from "react";
import "./Footer.css";

function Footer() {
	let currentYear = new Date().getFullYear();
	return (
		<section className="footer" id="footer">
			<div className="container">
				<h1>
					GO<span>TRAV</span>
				</h1>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, maiores voluptatem et suscipit facere fugiat omnis vel odit eos maxime. Laudantium tenetur reprehenderit, fugit maxime illo saepe. Repellendus, quod natus.</p>
				<br />
				<p>&copy; {currentYear} Gagah Aji Gunadi</p>
			</div>
		</section>
	);
}

export default Footer;
