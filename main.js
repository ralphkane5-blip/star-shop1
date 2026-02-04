let cart = [];
let total = 0;

function addToCart(name, price) {
  cart.push({name, price});
  total += price;
  document.getElementById("count").innerText = cart.length;
  alert(name + " ajouté au panier");
}

function openCart() {
  document.getElementById("cart").style.right = "0";
  updateCart();
}

function closeCart() {
  document.getElementById("cart").style.right = "-100%";
}

function updateCart() {
  let list = document.getElementById("cartItems");
  list.innerHTML = "";
  cart.forEach(item => {
    let li = document.createElement("li");
    li.innerText = item.name + " - " + item.price + " FCFA";
    list.appendChild(li);
  });
  document.getElementById("total").innerText = total;
}

function orderWhatsApp() {
  let message = "Bonjour, je veux commander :\n";
  cart.forEach(item => {
    message += item.name + " - " + item.price + " FCFA\n";
  });
  message += "Total: " + total + " FCFA";

  let phone = "225051229674"; // remplace par ton numéro WhatsApp
  let url = "https://wa.me/" + phone + "?text=" + encodeURIComponent(message);
  window.open(url, "_blank");
}