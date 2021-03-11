import React from "react";
import Footer from "../components/Footer";
import Package from "../components/Package";
import "./Pricing.css";

function Pricing() {
	return (
		<>
			<section className="pricing">
				<div className="container">
					<div className="text">
						<h1>Choose Your Package </h1>
						<p>Choose the best package that suits your needs. Don't worry, you may re-select the package as you want</p>
					</div>
					<div className="row row-cols-1 row-cols-md-3 g-4">
						<Package style={{ width: "18rem", marginTop: 40 }} package="Personal" fitur1="Seat In Coach" fitur2="Halfday Tour" fitur3="Attraction Ticket" price="200" />
						<Package style={{ width: "18rem" }} package="Family" fitur1="Private Tour" fitur2="Fullday Tour" fitur3="Attraction Ticket" price="400" />
						<Package style={{ width: "18rem", marginTop: 40 }} package="Business" fitur1="Tailor Made" fitur2="Incentive Tour" fitur3="Local Guide Available" price="750" />
					</div>
				</div>
			</section>
			<Footer />
		</>
	);
}

export default Pricing;
