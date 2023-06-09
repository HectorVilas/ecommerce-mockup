import { goToPage, toggleNav } from "./functions.js";
import { storedData } from "./storedData.js";

const svgNs = 'http://www.w3.org/2000/svg';

export default function header() {
  const header = document.createElement('header');
  
  header.append(
    logo(),
    menuBtn(),
    nav(),
  );

  return header;
}
  
function logo() {
  const logoGroup = document.createElement('div');
  const logo = document.createElement('img');
  const h1 = document.createElement('h1');
  const span1 = document.createElement('span');
  const span2 = document.createElement('span');

  logoGroup.setAttribute('id', 'logo-group');
  span1.textContent = 'Leafy';
  span2.textContent = 'Living';

  logo.setAttribute('src', './media/images/icons/plant-logo.png');

  logoGroup.addEventListener('click', () => goToPage('home'));
  
  h1.append(span1, span2);
  logoGroup.append(logo, h1);

  return logoGroup;
}

function nav() {
  const favAmount = storedData.getCounts().favsCount;
  const cartAmount = storedData.getCounts().cartCount;

  const menu = document.createElement('nav');

  const sections = document.createElement('ul');
  const home = document.createElement('li');
  const about = document.createElement('li');
  const shop = document.createElement('li');

  sections.classList.add('nav-sections');
  const icons = document.createElement('div');
  const search = document.createElement('div');
  const favorites = document.createElement('div');
  const favoritesCount = document.createElement('p');
  const cart = document.createElement('div');
  const cartCount = document.createElement('p');
  const user = document.createElement('div');

  icons.classList.add('nav-icons');
  home.classList.add('nav-item', 'nav-home');
  about.classList.add('nav-item', 'nav-about');
  shop.classList.add('nav-item', 'nav-shop');
  home.textContent = 'Home';
  about.textContent = 'About us';
  shop.textContent = 'Shop';

  search.classList.add('nav-icon', 'nav-search');
  favorites.classList.add('nav-icon', 'nav-favorites', favAmount && 'has-content');
  favoritesCount.classList.add('nav-favorites-count');
  favoritesCount.textContent = favAmount;
  cart.classList.add('nav-icon', 'nav-cart', cartAmount && 'has-content');
  cartCount.classList.add('nav-cart-count');
  cartCount.textContent = cartAmount;
  user.classList.add('nav-icon', 'nav-user');
  
  menu.setAttribute('id', 'navigation');

  [favoritesCount, cartCount].forEach((counter) => {
    counter.addEventListener('animationend', () => {
      counter.classList.remove('counter-animate');
    });
  });
  home.addEventListener('click', () => goToPage("home"));
  shop.addEventListener('click', () => goToPage("shop"));
  
  favorites.append(favoritesCount);
  cart.append(cartCount);
  sections.append(home, about, shop);
  icons.append(search, favorites, cart, user);
  
  menu.append(sections, icons);
  return menu;
}

function menuBtn() {
  const menuBtn = document.createElementNS(svgNs, 'svg');
  const lineDraw = [
    'M 5 10 L 35 10',
    'M 5 20 L 35 20',
    'M 5 30 L 35 30',
  ];

  for (let i = 0; i < lineDraw.length; i += 1) {
    const line = document.createElementNS(svgNs, 'path');

    line.setAttribute('d', lineDraw[i]);
    line.classList.add(`menu-button-line`);

    menuBtn.append(line);
  }
  
  menuBtn.setAttribute('id', 'menu-button');
  menuBtn.setAttribute('width', 40);
  menuBtn.setAttribute('height', 40);

  menuBtn.addEventListener('click', toggleNav);

  return menuBtn;
}
