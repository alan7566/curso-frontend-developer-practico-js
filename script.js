const nav_email = document.querySelector('.navbar-email');
const desktop_menu = document.querySelector('.desktop-menu');
const desktop_menu_button = document.querySelector('.menu');
const mobile_menu = document.querySelector('.mobile-menu');
const menuCarrito = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');

nav_email.addEventListener('click', toggleDesktopEmail); 
desktop_menu_button.addEventListener('click', toggleMobileMenu);
menuCarrito.addEventListener('click', toggleCarrito);

function toggleDesktopEmail() {
  const isAsideActive = !aside.classList.contains('inactive');

  if (isAsideActive) {
    aside.classList.toggle('inactive');
  }

  desktop_menu.classList.toggle('inactive');
}

function toggleMobileMenu() {
  const isAsideActive = !aside.classList.contains('inactive');
  if (isAsideActive) {
    aside.classList.toggle('inactive');
  }


    mobile_menu.classList.toggle('inactive');
  }

function toggleCarrito() {
  const isMobileMenuActive = !mobile_menu.classList.contains('inactive');
  const isdesktopEmailActive = !desktop_menu.classList.contains('inactive');

    /* aside.classList.toggle('inactive'); */
    
    if (isMobileMenuActive) {
      mobile_menu.classList.toggle('inactive');
    }
    if (isdesktopEmailActive) {
      desktop_menu.classList.toggle('inactive');
    }

    aside.classList.toggle('inactive');
    
  }

  const productList = [];
  productList.push({
    name: "Bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  });

  productList.push({
    name: "Bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  });

  productList.push({
    name: "Bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  });

  for (product of productList) {
    const productElement = document.createElement('div');
    productElement.classList.add('product-card');
    
    const productImage = document.createElement('img');
    productImage.setAttribute('src', product.image);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDiv = document.createElement('div');

    const productName = document.createElement('p');
    productName.innerText = product.name;
    const productPrice = document.createElement('p');
    productPrice.innerText = "$" + product.price;
    
    const productInfoFigure = document.createElement('figure');
    const productImageCart = document.createElement('img');
    productImageCart.setAttribute("src", "./icons/bt_add_to_cart.svg");

    productInfoFigure.appendChild(productImageCart);
    productInfoDiv.appendChild(productName);
    productInfoDiv.appendChild(productPrice);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productElement.appendChild(productImage);
    productElement.appendChild(productInfo);

    cardsContainer.appendChild(productElement);
  }