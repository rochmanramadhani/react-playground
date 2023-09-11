// Desc: Format number to currency
function formatCurrency(price, locale = "id-ID", currency = "IDR") {
	if (typeof price !== "number") {
		throw new Error("Price must be a number");
	}

	return new Intl.NumberFormat(locale, {
		style: "currency",
		currency,
	}).format(price);
}

export {formatCurrency};
