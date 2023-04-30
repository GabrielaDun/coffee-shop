export const select = {
    templateOf: {
      homeWidget: '#template-home-widget',
      productWidget: '#template-product-widget',
      aboutWidget: '#template-about',
      contactWidget: '#template-contact'
    },
    containerOf: {
      menu: '.product-wrapper',
      pages: '#pages',
      home: '.home-wrapper',
      contact: '.contact-wrapper',
      about: '.about-wrapper',
    },
    all: {
      menuProducts: '#product-list > .product',
      menuProductsActive: '#product-list > .product.active',
      formInputs: 'input, select',
    },
    product: {
      evenNumberProduct: '.product-image ',
      evenNumberHome: '.home-wrapper .product-image ',
      evenNumberPro: '.product-wrapper .product-image ',
    },
    nav: {
      links: '.main-nav a',
    },
    
  };
  
  export const classNames = {
    evenNumberProduct: 'active',

    menuProduct: {
      wrapperActive: 'active',
      evenNumberProduct: 'active',
    },
    pages: {
      active: 'active',
    }, 
    nav: {
      active: 'active',
    }
  };
  
  export const settings = {
    db: {
      url: '//' + window.location.hostname + (window.location.hostname=='localhost' ? ':3131' : ''),
      products: 'products',
    },
  };
  
  export const templates = {
    menuProduct: Handlebars.compile(document.querySelector(select.templateOf.productWidget).innerHTML),
    contactSection: Handlebars.compile(document.querySelector(select.templateOf.contactWidget).innerHTML),
    aboutSection: Handlebars.compile(document.querySelector(select.templateOf.homeWidget).innerHTML),
  };
  
  