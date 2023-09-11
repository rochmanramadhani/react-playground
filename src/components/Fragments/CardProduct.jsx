import Button from "../Elements/Button/index.jsx";
import {formatCurrency} from "../../utils/formatter.js";

const CardProduct = (props) => {
	const {children} = props;

	return (
		<div
			className="w-full max-w-sm border border-gray-300 rounded-lg shadow-lg overflow-hidden mb-2 flex flex-col justify-between">
			{children}
		</div>
	);
};

const Header = (props) => {
	const {image} = props;

	return (
		<a href="#">
			<img
				className="w-full h-72 object-cover"
				src={image}
				alt="product"
			/>
		</a>
	)
}

const Body = (props) => {
	const {children, name} = props;

	return (
		<div className="px-6 py-4 h-full">
			<h5 className="text-xl font-semibold text-gray-800">{name}</h5>
			<p className="text-sm text-gray-600 mt-2">
				{children}
			</p>
		</div>
	)
}

const Footer = (props) => {
	const {price, onClick} = props;

	return (
		<div className="flex items-center justify-between px-6 py-4 bg-gray-100">
			{/* Another approach */}
			{/*<span className="text-xl font-bold text-gray-800">Rp {price.toLocaleString("id-ID", { style: "currency", currency: "IDR" })}</span>*/}
			<span className="text-xl font-bold text-gray-800">{formatCurrency(price)}</span>
			<Button className="px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 transition duration-300 ease-in-out" onClick={onClick}>
				Add To Cart
			</Button>
		</div>
	)
}

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
