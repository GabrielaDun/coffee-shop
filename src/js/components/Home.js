import {select, classNames, templates} from './settings.js';

class Home{
  constructor(id, data){
    const thisProduct = this;

    thisProduct.renderAbout();
  }
  renderAbout(){
    const thisProduct = this;

    const createDOMFromHTML = function(htmlString) {
      let div = document.createElement('div');
      div.innerHTML = htmlString.trim();
      return div.firstChild;
    };

    const generatedHTMLForProductSection = templates.aboutSection(thisProduct.data);
    thisProduct.element = createDOMFromHTML(generatedHTMLForProductSection);

    const menuContainer = document.querySelector(select.containerOf.about);
    console.log(menuContainer);
    menuContainer.appendChild(thisProduct.element);

  }
} 
export default Home;

/*
import {select, classNames, templates} from './settings.js';

class Home{
  constructor(id, data){
    const thisProduct = this;

    thisProduct.renderAbout();
  }
  renderAbout(){
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

    const generatedHTMLForHome = templates.menuProduct(thisProduct.data);
    thisProduct.element = createDOMFromHTML(generatedHTMLForHome);
    const homeproductContainer = document.querySelector(select.containerOf.home);
    homeproductContainer.appendChild(thisProduct.element);

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
*/