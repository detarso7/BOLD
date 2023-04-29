// Define a URL da API a ser acessada
const url = "https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1" 

// Seleciona o elemento HTML que conterá os cards dos produtos
const productCard = document.querySelector("#card")

// Define uma função assíncrona que irá acessar a API e exibir as informações dos produtos na tela
async function getProducts () {

	const response = await fetch(url) // Realiza uma requisição HTTP para a API e aguarda a resposta
	const data = await response.json() // Extrai o conteúdo JSON da resposta HTTP e aguarda o processamento

	console.log(data)

	// Mapeia cada produto obtido na resposta HTTP e cria um card com suas informações
	data.products.map((pro) =>{

		// Cria uma div que representará o card do produto
		const div = document.createElement("div")

		// Cria os elementos
		const img = document.createElement("img")
		const productName = document.createElement("h6")
		const text = document.createElement("p")
		const oldPrice = document.createElement("p")
		const price = document.createElement("span")
		const installmentsoldPrice = document.createElement("p")
		const buttonProduct = document.createElement("a")

		// Inseri as informações da requisição
		img.setAttribute("src", `${pro.image}`)
		productName.innerText = pro.name
		text.innerText = pro.description
		oldPrice.innerText = `De: R$ ${pro.oldPrice},00`
		price.innerText = `Por R$ ${pro.price},00`
		installmentsoldPrice.innerText = `Ou ${pro.installments.count}x de: R$ ${pro.installments.value}0`
		buttonProduct.innerText = "Comprar"

		// Monta os elementos com as informações setadas
		div.appendChild(img)
		div.appendChild(productName)
		div.appendChild(text)
		div.appendChild(oldPrice)
		div.appendChild(price)
		div.appendChild(installmentsoldPrice)
		div.appendChild(buttonProduct)

		// Inseri a dive montada no elemento selecionado anteriormente
		productCard.appendChild(div)

	})
}

getProducts()