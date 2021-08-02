import "./category.css";
import { Link } from "react-router-dom";
const Category = (props) => {
	const CATEGORY_DATA = [
		{ id: 1, title: "Vitals", icon: "fas fa-users", path: "/home/vitals" },
		{
			id: 2,
			title: "Vaccination",
			icon: "fas fa-users",
			path: "/home/vaccination",
		},
		{
			id: 3,
			title: "Deworming",
			icon: "fas fa-users",
			path: "/home/deworming",
		},
		{
			id: 4,
			title: "Symptoms",
			icon: "fas fa-users",
			path: "/home/symptoms",
		},
		{
			id: 5,
			title: "Diagnostics",
			icon: "fas fa-users",
			path: "/home/diagnostics",
		},
		{
			id: 6,
			title: "Prescription",
			icon: "fas fa-users",
			path: "/home/prescription",
		},
	];
	const cdata = CATEGORY_DATA.map((item) => {
		return (
			<Link
			key={item.id}
				style={
					{ textDecoration: "none" }
				}
				to={item.path}
			>
				<div style={
					props.id === item.id
						? { background: "#67E0A3"}
						: null
				}  className="category-item">
					<i className={item.icon}></i>
					{item.title}
				</div>
			</Link>
		);
	});
	return <div className="category-wrapper">{cdata}</div>;
};
export default Category;
