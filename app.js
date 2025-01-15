const loadAllProduct = ()=> fetch('https://fakestoreapi.com/products')
.then(res=>res.json())
.then(data=>{
    displayProducts(data)
})

const displayProducts = (products)=>{
    const productContainer = document.getElementById("product-container")

    products.forEach(product=>{
        const div = document.createElement("div")
        // div.classList.add("")
        div.innerHTML = `
        <img src="" alt="" />
        <h5></h5>
        <p></p>
        <button>Details</button>
        <button>Add To Cart</button>
        `
        productContainer.appendChild(div)
    })
}

loadAllProduct()