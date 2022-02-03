/*<![CDATA[*/
(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'dooplicator.myshopify.com',
      storefrontAccessToken: 'd5789e2b92acc9e815e1ba5a49c2c925',
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: '6947436495037',
        node: document.getElementById('product-component-1632265353150'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
          "product": {
            "styles": {
              "product": {
                "@media (min-width: 601px)": {
                  "max-width": "calc(25% - 20px)",
                  "margin-left": "20px",
                  "margin-bottom": "50px"
                }
              },
              "button": {
                ":hover": {
                  "background-color": "#1e87db"
                },
                "background-color": "#2196f3",
                ":focus": {
                  "background-color": "#1e87db"
                }
              }
            },
            "buttonDestination": "checkout",
            "contents": {
              "button": false,
              "buttonWithQuantity": true
            },
            "width": "580px",
            "text": {
              "button": "buy"
            }
          },
          "productSet": {
            "styles": {
              "products": {
                "@media (min-width: 601px)": {
                  "margin-left": "-20px"
                }
              }
            }
          },
          "modalProduct": {
            "contents": {
              "img": false,
              "imgWithCarousel": true,
              "button": false,
              "buttonWithQuantity": true
            },
            "styles": {
              "product": {
                "@media (min-width: 601px)": {
                  "max-width": "100%",
                  "margin-left": "0px",
                  "margin-bottom": "0px"
                }
              },
              "button": {
                ":hover": {
                  "background-color": "#1e87db"
                },
                "background-color": "#2196f3",
                ":focus": {
                  "background-color": "#1e87db"
                }
              }
            },
            "text": {
              "button": "Add to cart"
            }
          },
          "option": {},
          "cart": {
            "styles": {
              "button": {
                ":hover": {
                  "background-color": "#1e87db"
                },
                "background-color": "#2196f3",
                ":focus": {
                  "background-color": "#1e87db"
                }
              }
            },
            "text": {
              "total": "Subtotal",
              "button": "Checkout"
            },
            "popup": false
          },
          "toggle": {
            "styles": {
              "toggle": {
                "background-color": "#2196f3",
                ":hover": {
                  "background-color": "#1e87db"
                },
                ":focus": {
                  "background-color": "#1e87db"
                }
              }
            }
          }
        },
      });
    });
  }
})();
/*]]>*/