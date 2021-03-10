import { useLayoutEffect, useState } from "react";

function useWindowScrollPosition(id) {
	const [animation, setAnimation] = useState(false);

	useLayoutEffect(() => {
		function updatePosition() {
			const offsetHeight = window.document.getElementById(id).offsetHeight;
			if (window.pageYOffset > offsetHeight * 0.9) {
				setAnimation(true);
			}
		}
		window.addEventListener("scroll", updatePosition);
		updatePosition();
		return () => {
			window.removeEventListener("scroll", updatePosition);
		};
	}, [id]);
	return animation;
}

export default useWindowScrollPosition;
