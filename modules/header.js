const svgNs = 'http://www.w3.org/2000/svg';

export default function header() {
  const header = document.createElement('header');
  header.append(
    logo(),
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

  logo.setAttribute('src', './media/images/plant-logo.png');
  
  h1.append(span1, span2);
  logoGroup.append(logo, h1);

  return logoGroup;
}

function nav() {
  const menu = document.createElement('nav');

  const sections = document.createElement('ul');
  const home = document.createElement('li');
  const about = document.createElement('li');
  const shop = document.createElement('li');

  sections.classList.add('nav-sections');
  const icons = document.createElement('div');
  const search = document.createElement('div');
  const favorites = document.createElement('div');
  const cart = document.createElement('div');
  const user = document.createElement('div');

  icons.classList.add('nav-icons');
  home.classList.add('nav-home', 'active');
  about.classList.add('nav-about');
  shop.classList.add('nav-shop');
  home.textContent = 'Home';
  about.textContent = 'About us';
  shop.textContent = 'Shop';

  search.classList.add('nav-icon', 'nav-search');
  favorites.classList.add('nav-icon', 'nav-favorites');
  cart.classList.add('nav-icon', 'nav-cart');
  user.classList.add('nav-icon', 'nav-user');
  
  menu.setAttribute('id', 'navigation');
  
  sections.append(home, about, shop);
  icons.append(search, favorites, cart, user);
  
  menu.append(sections, icons);
  return menu;
}