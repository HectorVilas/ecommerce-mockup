import home from "./pages/home.js";
import shop from "./pages/shop.js";
import { storedData } from "./storedData.js";

export function addToCart() {
  const thisCard = this.closest('.shop-card');
  const thisCardMainBtn = thisCard.querySelector('.shop-card-buy');
  const itemId = parseInt(thisCard.dataset.itemId);
  const cart = document.querySelector('.nav-cart');
  const cartCount = document.querySelector('.nav-cart-count');
  
  const amount = parseInt(thisCard.dataset.amount);
  const addSubstract = parseInt(this.dataset.quantity);
  const newAmount = amount + addSubstract;

  thisCard.dataset.amount = newAmount;
  cartCount.textContent = parseInt(cartCount.textContent) + addSubstract;

  cartCount.classList.add('counter-animate');
  if (cartCount.textContent === '0') {
    cart.classList.remove('has-content');
  } else {
    cart.classList.add('has-content');
  };
  if (newAmount === 0) {
    thisCardMainBtn.textContent = 'Add to Cart';
    thisCardMainBtn.removeAttribute('disabled', true);
  } else {
    thisCardMainBtn.textContent = `${newAmount} Item${newAmount > 1 ? 's' : ''} added`;
    thisCardMainBtn.setAttribute('disabled', true);
  }

  if (newAmount > amount) {
    storedData.addToCart(itemId);
  } else {
    storedData.removeFromCart(itemId);
  }
}

export function toggleFavorite() {
  const favIcon = document.querySelector('.nav-favorites');
  const favCount = document.querySelector('.nav-favorites-count');
  const thisCard = this.closest('.shop-card');
  const itemId = parseInt(thisCard.dataset.itemId);
  const isChecked = this.checked;
  const addSubstract = isChecked ? 1 : -1;
  
  favCount.textContent = parseInt(favCount.textContent) + addSubstract;

  favCount.classList.add('counter-animate');
  if (parseInt(favCount.textContent) === 0) {
    favIcon.classList.remove('has-content');
  } else {
    favIcon.classList.add('has-content');
  };

  if (isChecked) {
    storedData.addFav(itemId);
  } else {
    storedData.removeFav(itemId);
  }
}

export function goToPage(page) {
  const main = document.querySelector('main');
  const previousNavActive = document.querySelector('#navigation .active');
  const headerNav = document.querySelector(`.nav-${page}`);
  let sections;

  previousNavActive?.classList?.remove('active');
  headerNav.classList.add('active');
  if (page === 'home') {
    sections = home();
  } else if (page === 'shop') {
    sections = shop();
  };

  main.replaceChildren(...sections);
  window.scrollTo(0, 0);
}

export function toggleNav() {
  const nav = document.querySelector('#navigation');
  const isOpen = !nav.classList.contains('nav-show');
  const line = document.querySelectorAll('.menu-button-line');
  const lineDrawMenuClosed = [
    'M 5 10 L 35 10',
    'M 5 20 L 35 20',
    'M 5 30 L 35 30',
  ];
  const crossLeft = 8;
  const crossRight = 27;
  const lineDrawMenuOpen = [
    `M ${crossLeft} ${crossLeft} L ${crossRight} ${crossRight}`,
    `M 20 20 L 20 20`,
    `M ${crossLeft} ${crossRight} L ${crossRight} ${crossLeft}`,
  ];
  nav.classList.toggle('nav-show');

  line.forEach((line, i) => {
    line.setAttribute('d', isOpen ? lineDrawMenuOpen[i] : lineDrawMenuClosed[i]);
  });
}
