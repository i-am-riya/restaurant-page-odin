import "./styles.css";
import getHomeTabContent from './home.js';
import getMenuTabContent from "./menu.js";
import getContactTabContent from "./contact.js";

const homeTabButton = document.getElementById('home-tab-button');
const menuTabButton = document.getElementById('menu-tab-button');
const contactTabButton = document.getElementById('contact-tab-button');
const contentDiv = document.getElementById('content');

homeTabButton.addEventListener('click', () => {
  contentDiv.innerHTML = getHomeTabContent();
});

menuTabButton.addEventListener('click', () => {
  contentDiv.innerHTML = getMenuTabContent();
});

contactTabButton.addEventListener('click', () => {
  contentDiv.innerHTML = getContactTabContent();
});

// Show home tab content by default
contentDiv.innerHTML = getHomeTabContent();
