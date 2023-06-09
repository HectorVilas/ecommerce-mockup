import { articles } from "../../articles.js";
import shopCard from "../shopCard.js";

const shopCategories = ['All Collections', 'Cacti', 'Plants', 'Succulents'];

export default function shop() {
  const shop = [categories(), banner(), catalog()];
  
  return shop;
}

function categories() {
  const section = document.createElement('section');
  const categoriesList = document.createElement('ul');

  shopCategories.forEach((category, i) => {
    const li = document.createElement('li');
    li.textContent = category;

    if (i === 0) li.classList.add('active');
    
    categoriesList.append(li);
  });

  section.append(categoriesList);

  section.classList.add('shop-categories');
  
  return section;
}

function banner() {
  const section = document.createElement('section');
  const title = document.createElement('h1');

  title.textContent = shopCategories[0];

  section.classList.add('shop-banner');

  section.append(title);
  
  return section;
}

function catalog() {
  const section = document.createElement('section');
  const filterDiv = document.createElement('div');
  const filter = document.createElement('p');
  const dropdown = document.createElement('select');
  const dropdownOptions = ['Best Selling', 'Lorem Ipsum', 'Dolor Sit', 'Amet Consectetur'];
  const articlesDiv = document.createElement('div');

  dropdownOptions.forEach(category => {
    const option = document.createElement('option');
    option.textContent = category;

    dropdown.append(option);
  });
  
  articles.forEach((item) => {
    const newCard = shopCard(
      item.id,
      item.img,
      item.category,
      item.name,
      item.price,
      );

      articlesDiv.append(newCard);
  });

  filter.textContent = 'Filter';
  
  section.classList.add('shop-catalog');
  filterDiv.classList.add('shop-filter');
  articlesDiv.classList.add('shop-articles');

  filterDiv.append(filter, dropdown);
  section.append(filterDiv, articlesDiv);
  
  return section;
}
