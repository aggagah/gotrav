import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import Home from "../pages/Home";
import Pricing from "../pages/Pricing";
import Contact from "../pages/Contact";
import "./Navbar.css";

function Navbar() {
	const [scrolled, setScrolled] = useState(false);
	const handleScroll = () => {
		const offset = window.scrollY;
		if (offset > 50) {
			setScrolled(true);
		} else {
			setScrolled(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
	});
	let navbarClasses = ["navbar navbar-expand-lg fixed-top transparent"];
	if (scrolled) {
		navbarClasses.push("active");
	}

	return (
		<Router>
			<nav className={navbarClasses.join(" ")}>
				<div className="container">
					<Link className="navbar-brand" to="/">
						GO<span>TRAV</span>
					</Link>
					<button style={{ border: "1px solid #f0f0f0" }} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<Link className="nav-link" to="/pricing" style={{ fontFamily: "Rubik", color: "#f5f5f5", fontSize: "20px" }}>
									Pricing
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/contact" style={{ fontFamily: "Rubik", color: "#f5f5f5", fontSize: "20px", background: "transparent" }}>
									Contact Us
								</Link>
							</li>
						</ul>
						<Link to="/signup">
							<button className="reservation">Make a Reservation</button>
						</Link>
					</div>
				</div>
			</nav>

			<Route path="/" exact component={Home}></Route>
			<Route path="/pricing" exact component={Pricing}></Route>
			<Route path="/contact" exact component={Contact}></Route>
		</Router>
	);
}

export default Navbar;
