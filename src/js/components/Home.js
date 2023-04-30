import {select, templates} from './settings.js';

class Home {
  constructor(){
    const thisHome = this;

    thisHome.renderAbout();
  }
  renderAbout(){
    const thisHome = this;

    const createDOMFromHTML = function(htmlString) {
      let div = document.createElement('div');
      div.innerHTML = htmlString.trim();
      return div.firstChild;
    };

    const generatedHTMLForProductSection = templates.aboutSection(thisHome.data);
    thisHome.element = createDOMFromHTML(generatedHTMLForProductSection);

    const menuContainer = document.querySelector(select.containerOf.about);
    console.log(menuContainer);
    menuContainer.appendChild(thisHome.element);
  }

  
} 

export default Home;
