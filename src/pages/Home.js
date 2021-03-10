import React, { useEffect, useState } from "react";
import { Collapse } from "@material-ui/core";
import Card from "../components/Card";
import useWindowScrollPosition from "../hook/useWindowScrollPosition";
import "./Home.css";
import indonesia from "../images/indonesia.jpg";
import fuji from "../images/mount-fuji.jpg";
import prevImg from "../images/prev-img.png";

function Home() {
	const [checked, setChecked] = useState(false);
	useEffect(() => {
		setChecked(true);
	}, []);

	const checkedScrollOffset = useWindowScrollPosition("preview");
	let currentYear = new Date().getFullYear();

	return (
		<>
			<section className="home" id="/">
				<div className="container home">
					<Collapse in={checked} {...(checked ? { timeout: 2500 } : {})}>
						<h1>
							<span>Travel</span> Around
							<br />
							the World
						</h1>

						<a href="#preview">
							<i className="fa fa-chevron-down" aria-hidden="true"></i>
						</a>
					</Collapse>
				</div>
			</section>

			<section className="preview" id="preview">
				<div className="container">
					<div className="description">
						<h2>
							Find your destination <br />
							with best price
						</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium inventore incidunt quibusdam quos fugit alias ea, non, consequuntur sint, deleniti omnis voluptates. Quia voluptatibus placeat adipisci delectus, doloremque maxime incidunt nesciunt quod non. Temporibus
							voluptate odio consequatur mollitia fugit consequuntur placeat earum at, hic quo ipsum suscipit! Quia, a quasi.
						</p>
					</div>
					<div className="image">
						<img src={prevImg} alt="" />
					</div>
				</div>
			</section>

			<section className="destination" id="destination">
				<div className="container">
					<div className="text">
						<h1>Our Most Popular Destination</h1>
					</div>
					<Collapse in={checkedScrollOffset} {...(checkedScrollOffset ? { timeout: 2000 } : {})}>
						<div className="row row-cols-1 row-cols-md-3 g-4" checkedScrollOffset={checkedScrollOffset}>
							<Card imageSrc={indonesia} title="Indonesia" />
							<Card imageSrc={fuji} title="Japan" />
							<Card imageSrc={indonesia} title="Indonesia" />
						</div>
					</Collapse>
				</div>
			</section>

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
		</>
	);
}

export default Home;
