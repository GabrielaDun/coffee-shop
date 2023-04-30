import {select, templates} from './settings.js';

class Product{
  constructor(id, data){
    const thisProduct = this;
    thisProduct.id = id;
    thisProduct.data = data;
    console.log(data);

    thisProduct.renderInMenu();
  }

  renderInMenu(){
    const thisProduct = this;

    const createDOMFromHTML = function(htmlString) {
      let div = document.createElement('div');
      div.innerHTML = htmlString.trim();
      return div.firstChild;
    };

    
    /* Generate product sectiion in product page */
    const generatedHTMLForProductSection = templates.menuProduct(thisProduct.data);
    thisProduct.element = createDOMFromHTML(generatedHTMLForProductSection);
    const menuContainer = document.querySelector(select.containerOf.menu);
    menuContainer.appendChild(thisProduct.element);


    /* Generate product sectiion in home page */
    const generatedHTMLForHome = templates.menuProduct(thisProduct.data);
    thisProduct.element = createDOMFromHTML(generatedHTMLForHome);
    const homeproductContainer = document.querySelector(select.containerOf.home);
    homeproductContainer.appendChild(thisProduct.element);

  }

} 
export default Product;