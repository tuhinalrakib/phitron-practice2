const loadAllProduct = ()=> fetch('https://fakestoreapi.com/products')
.then(res=>res.json())
.then(data=>{
    displayProducts(data)
})

const displayProducts = (products)=>{
    const productContainer = document.getElementById("product-container")

    products.forEach(product=>{
        console.log(product)
        const div = document.createElement("div")
        // div.classList.add("")
        div.innerHTML = `
        <img class="card-img" src="${product.image}" alt="" />
        <h5> ${product.title.slice(0,10)} </h5>
        <p> ${product.description.slice(0,20)} </p>
        <button>Details</button>
        <button>Add To Cart</button>
        `
        productContainer.appendChild(div)
    })
}

loadAllProduct()