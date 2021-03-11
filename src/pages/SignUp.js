import React from "react";
import Footer from "../components/Footer";
import Illustration from "../images/undraw_welcome_cats_thqn.svg";
import "./SignUp.css";
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";

function SignUp() {
	return (
		<>
			<section className="signup">
				<div className="container">
					<div className="left">
						<img src={Illustration} alt="" />
					</div>
					<div className="right">
						<div className="text">
							<h1>
								New in GO<span>TRAV</span> ?
							</h1>
						</div>

						<div className="form">
							<form>
								<div className="mb-3">
									<label class="form-label">Full Name</label>
									<input type="text" class="form-control"></input>
								</div>
								<div class="mb-3">
									<label for="exampleInputEmail1" class="form-label">
										Email address
									</label>
									<input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
								</div>
								<div class="mb-3">
									<label for="exampleInputPassword1" class="form-label">
										Password
									</label>
									<input type="password" class="form-control" id="exampleInputPassword1" />
								</div>
								<div class="mb-3 form-check">
									<input type="checkbox" class="form-check-input" id="exampleCheck1" style={{ backgroundColor: "#333" }} />
									<label class="form-check-label" for="exampleCheck1">
										I have read and agreed to the terms and conditions
									</label>
								</div>
								<button type="submit" class="btn btn-primary">
									Register
								</button>
							</form>
						</div>
						<div className="soc-icon">
							<p>or login with your social media account</p>
							<div className="icon">
								<GitHubIcon />
								<InstagramIcon />
								<FacebookIcon />
							</div>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</>
	);
}

export default SignUp;
