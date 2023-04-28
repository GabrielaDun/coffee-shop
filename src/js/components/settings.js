export const select = {
    templateOf: {
      homeWidget: '#template-home-widget',
      productWidget: '#template-product-widget'
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
    menuProduct: {
      clickable: '.product__header',
      form: '.product__order',
      priceElem: '.product__total-price .price',
      cartButton: '[href="#add-to-cart"]',
    },
    nav: {
      links: '.main-nav a',
    },
    
  };
  
  export const classNames = {
    menuProduct: {
      wrapperActive: 'active',
      imageVisible: 'active',
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
  };
  
  