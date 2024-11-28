function toggleFavorite(id, name, price, image) {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    const isFavorite = favorites.find(item => item.id === id);

    if (isFavorite) {
        favorites = favorites.filter(item => item.id !== id);
        alert(`${name} a été retiré de vos favoris.`);
    } else {
        favorites.push({ id, name, price, image });
        alert(`${name} a été ajouté à vos favoris.`);
    }

    localStorage.setItem("favorites", JSON.stringify(favorites));
}

function loadFavorites() {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const favoritesContainer = document.getElementById("favorites-container");

    if (favorites.length === 0) {
        favoritesContainer.innerHTML = "<p>Aucun produit dans vos favoris.</p>";
    } else {
        favoritesContainer.innerHTML = favorites
            .map(
                item => `
                <div class="card">
                    <img src="${item.image}" alt="${item.name}" class="adidas">
                    <p>${item.name} | ${item.price}€</p>
                    <button class="add-to-cart">Ajouter au panier</button>
                </div>
            `
            )
            .join("");
            document.addEventListener('DOMContentLoaded', () => {
                const addToCartButtons = document.querySelectorAll('.add-to-cart');
            
                addToCartButtons.forEach(button => {
                    button.addEventListener('click', (e) => {
                        const product = e.target.closest('.product');
                        const productName = product.querySelector('h3').innerText;
                        const productPrice = product.querySelector('p').innerText;
                        const productImage = product.querySelector('img').src;
            
                        const cartItem = {
                            name: productName,
                            price: productPrice,
                            image: productImage
                        };
            
                        let cart = JSON.parse(localStorage.getItem('cart')) || [];
                        cart.push(cartItem);
                        localStorage.setItem('cart', JSON.stringify(cart));
            
                        alert(`${productName} a été ajouté au panier !`);
                    });
                });
            });
    }
}