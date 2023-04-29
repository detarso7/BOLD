const url2 = "https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=2" 

const productCard2 = document.querySelector("#card-2")

async function getMoreProducts () {

	const response = await fetch(url2)
	const data = await response.json()

	console.log(data)


	data.products.map((pro) =>{

		
		const div = document.createElement("div")

		
		const img = document.createElement("img")
		const productName = document.createElement("h6")
		const text = document.createElement("p")
		const oldPrice = document.createElement("p")
		const price = document.createElement("span")
		const installmentsoldPrice = document.createElement("p")
		const buttonProduct = document.createElement("a")
		const br = document.createElement("br")

		
		img.setAttribute("src", `${pro.image}`)
		productName.innerText = pro.name
		text.innerText = pro.description
		oldPrice.innerText = `De: R$ ${pro.oldPrice},00`
		price.innerText = `Por R$ ${pro.price},00`
		installmentsoldPrice.innerText = `Ou ${pro.installments.count}x de: R$ ${pro.installments.value}0`
		buttonProduct.innerText = "Comprar"

		
		div.appendChild(img)
		div.appendChild(productName)
		div.appendChild(text)
		div.appendChild(oldPrice)
		div.appendChild(price)
		div.appendChild(installmentsoldPrice)
		div.appendChild(br)
		div.appendChild(buttonProduct)

		
		productCard2.appendChild(div)

	})
}

getMoreProducts()