const url = "https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1"

const loadingElement = document.querySelector('#loading')
const productContainer = document.querySelector("#product-container")

async function getProducts () {
	const response = await fetch(url)
	const data = await response.json()

	console.log(data)
}

getProducts()