import {select, classNames, templates} from './settings.js';

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


    const generatedHTMLForProductSection = templates.menuProduct(thisProduct.data);
    thisProduct.element = createDOMFromHTML(generatedHTMLForProductSection);

    const menuContainer = document.querySelector(select.containerOf.menu);
    console.log(menuContainer);
    menuContainer.appendChild(thisProduct.element);
    thisProduct.imageSideSelect();

    const generatedHTMLForHome = templates.menuProduct(thisProduct.data);
    thisProduct.element = createDOMFromHTML(generatedHTMLForHome);
    const homeproductContainer = document.querySelector(select.containerOf.home);
    console.log(homeproductContainer);
    homeproductContainer.appendChild(thisProduct.element);

    thisProduct.imageSideSelect();

  }

  imageSideSelect(){
    const thisProduct = this;
    const imagesContainer = thisProduct.element.querySelectorAll(select.product.evenNumberProduct);
    console.log(imagesContainer);
    /*if (thisProduct.data.id % 2 == 0){
      console.log('parzysta')
      imagesContainer.classList.add(classNames.evenNumberProduct);
    }*/


  }

} 
export default Product;