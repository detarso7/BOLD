const url2 = "https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=2" 

const productCard2 = document.querySelector("#card-2")

async function getMoreProducts () {

	const response = await fetch(url2)
	const data = await response.json()

	console.log(data)


	data.products.map((pro) =>{

		
		// Cria uma div que representará o card do produto
		const div = document.createElement("div")
		div.classList.add("contentCard")
		const divImg = document.createElement("div")
		divImg.classList.add("imgCard")
		const divCard = document.createElement("div")

		// Cria os elementos
		const img = document.createElement("img")
		const productName = document.createElement("h6")
		const text = document.createElement("p")
		const oldPrice = document.createElement("p")
		const price = document.createElement("span")
		const installmentsoldPrice = document.createElement("p")
		const buttonProduct = document.createElement("a")
		const br = document.createElement("br")

		// Inseri as informações da requisição
		img.setAttribute("src", `${pro.image}`)
		productName.innerText = pro.name
		text.innerText = pro.description
		oldPrice.innerText = `De: R$ ${pro.oldPrice},00`
		price.innerText = `Por R$ ${pro.price},00`
		installmentsoldPrice.innerText = `Ou ${pro.installments.count}x de: R$ ${pro.installments.value}0`
		buttonProduct.innerText = "Comprar"

		// Monta os elementos com as informações setadas
		divImg.appendChild(img)
		div.appendChild(productName)
		div.appendChild(text)
		div.appendChild(oldPrice)
		div.appendChild(price)
		div.appendChild(installmentsoldPrice)
		div.appendChild(br)
		div.appendChild(buttonProduct)

		divCard.appendChild(divImg)
		divCard.appendChild(div)

		// Inseri a dive montada no elemento selecionado anteriormente
		productCard2.appendChild(divCard)

	})
}

getMoreProducts()