const loadAllProduct = () =>
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => {
      displayProducts(data);
    });

const displayProducts = (products) => {
  const productContainer = document.getElementById("product-container");

  products.forEach((product) => {
    // console.log(product)
    const div = document.createElement("div");
    // div.classList.add("")
    div.innerHTML = `
        <img class="card-img" src="${product.image}" alt="" />
        <h5> ${product.title.slice(0, 5)} </h5>
        <p> ${product.description.slice(0, 20)} </p>
        <button onClick="singleProduct('${product.id}')">Details</button>
        <button onClick="handleAddToCard('${product.title?.slice(0, 5)}','${
      product.price
    }')">Add To Cart</button>
        `;
    productContainer.appendChild(div);
  });
};

const handleAddToCard = (name, price) => {
  const cartCount = document.getElementById("count").innerText;
  let convertedCount = parseInt(cartCount);

  convertedCount += 1;
  console.log(convertedCount)
  const container = document.getElementById("cart-main-container");
  const div = document.createElement("div");
  div.classList.add("card-info");
  div.innerHTML = `
    <p> ${name} </p>
    <h3 class="price"> ${price} </h3>
    `;
  container.appendChild(div);
  updateTotal();
};

const updateTotal = () => {
  const allPrice = document.getElementsByClassName("price");
  let count = 0;
  for (const element of allPrice) {
    count += parseFloat(element.innerText);
  }
  document.getElementById("total").innerText = `$${count.toFixed(2)}`;
};

const singleProduct = (id)=>{
    // fetch single product
    console.log(id);
    fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res=>res.json())
            .then(json=>console.log(json))
}

loadAllProduct();
