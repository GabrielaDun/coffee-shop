import {select, classNames, templates} from './settings.js';

class Product{
  constructor(id, data){
    const thisProduct = this;
    thisProduct.id = id;
    thisProduct.data = data;
    console.log(data);

    thisProduct.renderInMenu();
    //thisProduct.getElements();
  }
  renderInMenu(){
    const thisProduct = this;

    const createDOMFromHTML = function(htmlString) {
      let div = document.createElement('div');
      div.innerHTML = htmlString.trim();
      return div.firstChild;
    };


    const generatedHTMLForAboutSection = templates.menuProduct(thisProduct.data);
    thisProduct.element = createDOMFromHTML(generatedHTMLForAboutSection);

    const menuContainer = document.querySelector(select.containerOf.menu);
    menuContainer.appendChild(thisProduct.element);

    console.log(menuContainer);
    thisProduct.imageSideSelect();

  }

  imageSideSelect(){
    const thisProduct = this;
    const imagesContainer = thisProduct.element.querySelector(select.product.evenNumberProduct);
    if (thisProduct.data.id % 2 == 0){
      console.log('parzysta')
      imagesContainer.classList.add(classNames.evenNumberProduct);
    }


  }

} 
export default Product;