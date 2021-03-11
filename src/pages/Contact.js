import React from "react";
import ContactImage from "../images/undraw_contact_us_15o2.svg";
import "./Contact.css";

function Contact() {
	return (
		<>
			<section className="contact">
				<div className="container">
					<div className="top-text">
						<h4>Get In Touch</h4>
						<p>Get to know more about us below</p>
					</div>
					<div className="bottom">
						<div className="left">
							<img src={ContactImage} alt=""></img>
						</div>
						<div className="right">
							<div className="text">
								<h4>Contact Information</h4>
							</div>
							<div className="identity">
								<i class="fa fa-location-arrow">
									<h6>Pemalang, Central Java</h6>
								</i>
								<i class="fa fa-envelope">
									<h6>gagahsp4@gmail.com</h6>
								</i>
								<i class="fa fa-whatsapp" aria-hidden="true">
									<h6>0812-2600-2935</h6>
								</i>
								<i class="fa fa-github" aria-hidden="true">
									<h6>aggagah</h6>
								</i>
								<i class="fa fa-instagram" aria-hidden="true">
									<h6>ag.gagah</h6>
								</i>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default Contact;
