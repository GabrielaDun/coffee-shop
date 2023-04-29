import {select, templates} from './settings.js';

class Contact {
    constructor(){
      const thisContact = this;
      thisContact.renderContact();
    }
    renderContact(){
      const thisContact = this;
  
      const createDOMFromHTML = function(htmlString) {
        let div = document.createElement('div');
        div.innerHTML = htmlString.trim();
        return div.firstChild;
      };
      console.log('tak');
  
      const generatedHTMLForContactSection = templates.contactSection();
      thisContact.contact = createDOMFromHTML(generatedHTMLForContactSection);
  
      const menuContainer = document.querySelector(select.containerOf.contact);
      menuContainer.appendChild(thisContact.contact);
    }
}
export default Contact;