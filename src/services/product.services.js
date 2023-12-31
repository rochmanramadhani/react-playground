import axios from "axios"

export const getProducts = async (callback) => {
	return await axios
		.get("https://fakestoreapi.com/products")
		.then((res) => {
			callback(res.data)
		}).catch((err) => {
			console.log(err)
		})
}