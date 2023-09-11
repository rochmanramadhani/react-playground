import CardProduct from "../components/Fragments/CardProduct.jsx";
import Button from "../components/Elements/Button/index.jsx";
import {useMemo, useState} from "react";
import {formatCurrency} from "../utils/formatter.js";

const products = [
	{
		id: 1,
		name: "Stylish Shoes",
		image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNob2VzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
		price: 1000000,
		description: "New shoes, who dis? These stylish shoes will make you the talk of the town. Made from vegan leather."
	},
	{
		id: 2,
		name: "Stylish Sunglasses",
		image: "https://images.unsplash.com/photo-1581778571772-11f8c6af4103?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2048&q=80",
		price: 500000,
		description: "Protect your eyes from the sun in style with these fashionable sunglasses. They offer both UV protection and a trendy look."
	},
	{
		id: 3,
		name: "Classic Leather Wallet",
		image: "https://images.unsplash.com/photo-1627123424574-724758594e93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2FsbGV0fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
		price: 250000,
		description: "Upgrade your accessories with this high-quality leather wallet. It features multiple card slots and a coin pocket."
	},
	{
		id: 4,
		name: "Designer Watch",
		image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2F0Y2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
		price: 1500000,
		description: "Elevate your wrist game with this elegant designer watch. It combines functionality with a timeless design."
	},
	// Add more products as needed
];

const email = localStorage.getItem("email")

const ProductPage = () => {
	const [cartItems, setCartItems] = useState([]);

	const handleLogout = () => {
		localStorage.removeItem("email")
		localStorage.removeItem("password")

		window.location.href = "/login"
	}

	const handleAddToCart = (id) => {
		const item = products.find((product) => product.id === id);
		const itemExist = cartItems.find((item) => item.id === id);

		if (itemExist) {
			setCartItems(
				cartItems.map((item) =>
					item.id === id ? {...item, quantity: item.quantity + 1} : item
				)
			);
		} else {
			setCartItems([...cartItems, {...item, quantity: 1, name: item.name}]);
		}
	};

	const handleIncrement = (id) => {
		setCartItems(
			cartItems.map((item) =>
				item.id === id ? {...item, quantity: item.quantity + 1} : item
			)
		);
	};

	const handleDecrement = (id) => {
		setCartItems((prevCartItems) =>
			prevCartItems
				.map((item) =>
					item.id === id && item.quantity > 0
						? {...item, quantity: item.quantity - 1}
						: item
				)
				.filter((item) => item.quantity > 0) // Remove items with quantity 0
		);

	};

	const calculatedTotal = useMemo(() => {
		return cartItems.reduce(
			(total, item) => total + item.price * item.quantity,
			0
		);
	}, [cartItems]);

	return (
		<>
			<nav className="bg-blue-500 p-4">
				<div className="container mx-auto flex justify-between items-center">
					<div className="flex items-center">
						<a href="#" className="text-white text-xl font-semibold mr-4">My Website</a>
					</div>
					<div className="flex items-center">
						<span className="text-white mr-2">{email}</span>
						<Button classname="bg-red-500 ml-6" onClick={handleLogout}>Logout</Button>
					</div>
				</div>
			</nav>
			<div className="flex justify-center mt-8 mx-4">
				<div className="w-3/4 flex flex-wrap gap-x-2">
					{products.map((product) => (
						<CardProduct key={product.id}>
							<CardProduct.Header image={product.image}/>
							<CardProduct.Body name={product.name}>
								{product.description}
							</CardProduct.Body>
							<CardProduct.Footer
								price={product.price}
								onClick={() => handleAddToCart(product.id)} // Fix this
							/>
						</CardProduct>
					))}
				</div>
				<div className="w-1/4">
					<div className="bg-white p-4 rounded-lg shadow">
						<h2 className="text-xl font-semibold mb-4">Your Cart</h2>
						{cartItems.map((item) => (
							<div key={item.id} className="flex items-center justify-between mb-2">
								<div>
									<p className="font-semibold">{item.name}</p>
									<p className="text-gray-600">Price: {formatCurrency(item.price)}</p>
								</div>
								<div className="flex items-center">
									<button
										onClick={() => handleDecrement(item.id)} // Added onClick
										className="text-blue-500 hover:text-blue-700 px-2"
									>
										-
									</button>
									<p className="mx-2">{item.quantity}</p>
									<button
										onClick={() => handleIncrement(item.id)} // Added onClick
										className="text-blue-500 hover:text-blue-700 px-2"
									>
										+
									</button>
								</div>
							</div>
						))}
						<div className="border-t pt-4">
							<div className="flex justify-between">
								<p className="font-semibold">Total:</p>
								<p>{formatCurrency(calculatedTotal)}</p>
							</div>
							<button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-2 w-full">
								Checkout
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default ProductPage;
