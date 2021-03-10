import React from "react";
import Footer from "../components/Footer";
import Card from "../components/Card";
import "./Pricing.css";
import personal from "../images/personal.png";
import family from "../images/family.png";
import business from "../images/business.png";

function Pricing() {
	return (
		<>
			<section className="pricing">
				<div className="container">
					<div className="text">
						<h1>Choose Your Plan </h1>
						<p>Choose the best package that suits your needs. Don't worry, you may re-select the package as you want</p>
					</div>
					<div className="row row-cols-1 row-cols-md-3 g-4">
						<Card
							imageSrc={personal}
							title="Personal"
							desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, expedita voluptas possimus deleniti atque voluptate assumenda amet doloribus sint itaque."
							style={{ height: 550, padding: 10, background: "#f5f5f5", marginTop: 50 }}
						/>
						<Card
							imageSrc={family}
							title="Family"
							desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, expedita voluptas possimus deleniti atque voluptate assumenda amet doloribus sint itaque."
							style={{ height: 550, padding: 10, background: "#f5f5f5", marginTop: 10 }}
						/>
						<Card
							imageSrc={business}
							title="Business"
							desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, expedita voluptas possimus deleniti atque voluptate assumenda amet doloribus sint itaque."
							style={{ height: 550, padding: 10, background: "#f5f5f5", marginTop: 50 }}
						/>
					</div>
				</div>
			</section>
			<Footer />
		</>
	);
}

export default Pricing;
