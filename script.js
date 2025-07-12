const productAll = document.querySelector(".product-all")
const input = document.getElementById("input")

const products = [
  { id: 1, name: "iPhone 14" },
  { id: 2, name: "Samsung Galaxy S22" },
  { id: 3, name: "Realme Narzo 60X" },
  { id: 4, name: "Redmi Note 13" },
  { id: 5, name: "Vivo Y200" }
];

function showProducts(products){
    products.forEach(item =>{
    let product = document.createElement("div")
    product.classList.add("product")
    let productNames = document.createElement("p")
    productNames.innerText = `${item.name}`

    product.appendChild(productNames)
    productAll.appendChild(product)
    })
}
showProducts(products)

 input.addEventListener("input",(e)=>{
    e.preventDefault()
    let inputValue = input.value.toLowerCase();
    let filtered = products.filter(item => item.name.toLowerCase().includes(inputValue));
    productAll.innerHTML = "";
    showProducts(filtered)
 })
