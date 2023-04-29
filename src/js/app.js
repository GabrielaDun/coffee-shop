import {select, classNames, settings} from './components/settings.js';
import Product from './components/Product.js';
import Contact from './components/Contact.js';
import Home from './components/Home.js';

const app = {

  init: function(){
    const thisApp = this;

    thisApp.initData();
    thisApp.initPages();
    thisApp.initContact();
    thisApp.initProducts();
    thisApp.initHome();
    console.log('hey!', thisApp.data);
  },

  initData: function(){
    const thisApp = this;

    thisApp.data = {};
    const url = settings.db.url + '/' + settings.db.products;

    fetch(url)
      .then(function(rawResponse){
        return rawResponse.json();
      })
      .then(function(parsedResponse){
        console.log('parsedResponse', parsedResponse);

        // Save persedResponse as thisApp.data.products
        thisApp.data.products = parsedResponse;
        console.log(thisApp.data.products);
        // execute initMenu method
        thisApp.initProducts();

      });
  },
  initHome: function(){
    const thisApp = this;
    const homeElem = document.querySelector(select.containerOf.home);
    thisApp.home = new Home (homeElem);
  },
  
  activatePage: function(pageId){
    const thisApp = this;
    for(let page of thisApp.pages){
      console.log(pageId);
      console.log(page.id);
      console.log(page);
      page.classList.toggle(classNames.pages.active, page.id == pageId);
    }
    // code to make clicked links bold
    /*for(let link of thisApp.navLinks){
      link.classList.toggle(
        classNames.nav.active, 
        link.getAttribute('href') == '#' + pageId
      );
    }*/
  },

  initProducts: function() {
    const thisApp = this;
    console.log(thisApp.data.products);

    for (let productData in thisApp.data.products){
      new Product(thisApp.data.products[productData].id, thisApp.data.products[productData]);
    }
  },

  initPages: function(){
    const thisApp = this;
    thisApp.pages = document.querySelector(select.containerOf.pages).children;
    thisApp.navLinks = document.querySelectorAll(select.nav.links);
    const idFromHash = window.location.hash.replace('#/', '');

    let pageMatchingHash = thisApp.pages[0].id;

    for (let page of thisApp.pages){
      if(page.id == idFromHash){
        pageMatchingHash = page.id;
        break;
      }
    }
    thisApp.activatePage(pageMatchingHash);
    for (let link of thisApp.navLinks){
      link.addEventListener('click', function(event){
        const clickedElement = this;
        event.preventDefault();

        const id = clickedElement.getAttribute('href').replace('#', '');
        console.log(id);
        thisApp.activatePage(id);
        window.location.hash = '#/' + id;

      });
    }
  },

  initContact: function() {
    const thisApp = this;
    const contactElem = document.querySelector(select.containerOf.contact);
    thisApp.contact = new Contact (contactElem);
    
  },
  initHome: function() {
    const thisApp = this;
    const homeElem = document.querySelector(select.containerOf.home);
    thisApp.contact = new Home (homeElem);
    
  },
};

app.init();
