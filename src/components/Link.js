import { Link, Element, animateScroll as scroll } from "react-scroll";

export default function ILink(params) {
	return (
		<Link
			activeClass="active"
			spy={true}
			smooth={true}
			offset={-64}
			duration={500}
			{...params}
		/>
	);
}
