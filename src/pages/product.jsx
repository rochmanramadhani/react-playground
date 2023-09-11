import CardProduct from "../components/Fragments/CardProduct.jsx";

const ProductPage = () => {
	return (
		<div className="flex justify-center gap-x-6">
			<CardProduct>
				<CardProduct.Header image="/images/shoes-1.jpg"/>
				<CardProduct.Body title="Sepatu Baru">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores at, consequatur in ipsum nesciunt
					recusandae vero! Asperiores consequuntur eaque eius incidunt nam nemo quae voluptatum! Consectetur
					consequuntur enim repellendus tempore?
				</CardProduct.Body>
				<CardProduct.Footer price="Rp. 1.000.000"/>
			</CardProduct>
		</div>
	);
}

export default ProductPage;
