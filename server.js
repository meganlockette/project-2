
  
  
  // const stripe = require('stripe')(pk_test_0uwz6cLFxSQZi0pFYpzjhFQ500rdecdAox)
  // var elements = stripe.elements()

  var express = require("express");
  const fs = require('fs') //allows us to read different files
  // Sets up the Express App
  // =============================================================
  var app = express();
  var PORT = process.env.PORT || 3000;
  // Sets up the Express app to handle data parsing
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  // Static directory
  app.use(express.static("public"));
  // Routes
  // =============================================================
  // require("./app/routes/api-routes.js")(app);
  require("./app/routes/html-routes")(app);
  // Starts the server to begin listening
  // =============================================================
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  
  
  // //  // Create an instance of the card Element.
  // var cardElement = elements.create('card', {style: style});
  // console.log("card", card)
  // // Add an instance of the card Element into the `card-element` <div>.
  // card.mount('#card-payment');
  
  // if (process.env.NODE_ENV !== 'production') {
  //   require('dotenv').config()
  // }
  
  // // const stripeSecretKey = process.env.STRIPE_SECRET_KEY
  // // const stripePublicKey = process.env.STRIPE_PUBLIC_KEY
  
  // console.log(stripeSecretKey, stripePublicKey)
  // var style = {
  //   base: {
  //     // Add your base input styles here. For example:
  //     fontSize: '16px',
  //     color: '#32325d',
  //   },
  // };

  
  // app.set('view engine', 'ejs')
  // app.use(express.static('public'))
  
  // app.get('/shop', function(req, res) {
  //   fs.readFile('checkout.html', function(error, data) {
  //       if (error) {
  //         res.status(500).end()
  //       } else {
  //           res.render('checkout.html', { 
  //             stripePublicKey: stripePublicKey,
  //             items: JSON.parse(data)
  //           }) 
  //       }
  //    })
  // })
  
  // // Set your secret key: remember to change this to your live secret key in production
  // // See your keys here: https://dashboard.stripe.com/account/apikeys
  
  
  // // Token is created using Stripe Checkout or Elements!
  // // Get the payment token ID submitted by the form:
  // const token = request.body.stripeToken; // Using Express
  
  // (async() => {
  //   const charge = await stripe.charges.create({
  //   amount: 999,
  //   currency: 'usd',
  //   description: 'Example charge',
  //   source: token,
  // });
  // })();
  
  // token function to call server with token i.d 
  // var stripeHandler = StripeCheckout.configure({
  //   key: stripePublicKey,
  //   locale: 'auto',
  //   token: function(token) {
  //     console.log(token)
    

  //   }
  // })
  // // call stripe handler, 
  // function purchaseClicked() {
  //   var priceElement = document.getElementsByClassName('cart-total-price')[0]
  //   var price = parseFloat(priceElement.innerText.replace('$', '')) * 100

  //   stripeHandler.open({
  //     amount: price
  //   })
  // }

  // function addToCartClicked(event) {
  //     var button = event.target
  //     var shopItem = button.parseElement.parseElement
  //     var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
  //     var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
  //     var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src
  //     var id = shopItem.dataset.itemId

  //     addItemToCart(title, price, imageSrc, id)
  //     updateCartTotal()
  // }

  // function addItemToCart(title, price, imageSrc, id) {
  //     var cartRow = document.createElement('div')
  //     cartRow.classList.add('cart-row')
  //     cartRow.dataset.itemId = id
  //     var cartItems = document.getElementsByClassName('row')[0]
  //     var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
  //     for (var i = 0; i < cartItemNames.length; i++) {
  //         if (cartItemNames[i].innerText == title) {
  //             alert('This item is already in the cart')
  //             return
  //         }
  //     }
  // }


  
  // app.listen(3000)
  
