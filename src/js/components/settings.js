export const select = {
    templateOf: {
      homeWidget: '#template-home-widget',
      productWidget: '#template-product-widget',
      aboutWidget: '#template-about'
    },
    containerOf: {
      menu: '#product-list',
      cart: '#cart',
      pages: '#pages',
      home: '.home-wrapper',
    },
    all: {
      menuProducts: '#product-list > .product',
      menuProductsActive: '#product-list > .product.active',
      formInputs: 'input, select',
    },
    product: {
      evenNumberProduct: '.product-image '
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
    aboutSection: Handlebars.compile(document.querySelector(select.templateOf.aboutWidget).innerHTML),
  };
  
  