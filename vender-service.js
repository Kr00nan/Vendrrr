function VenderService(){

  ///////////// PRIVATE ///////////////

  var money = 0
  var initialStock = [
    {
      name: "Fruit Snack Gummies",
      description: "Fruit salad done right.",
      price: 1.00,
      amount: 45
    },
    {
      name: "Plant Food",
      description: "Are you hungry? I could use a light snack.",
      price: 5.00,
      amount: 20
    },
    {
      name: "Admiral-able Ack-Bar",
      description: "Snack like an Admiral.",
      price: .75,
      amount: 3
    },
    {
      name: "Paranormal Snacktivity",
      description: "The perfect midnight snack.",
      price: .25,
      amount: 7
    },
    {
      name: "The Void",
      description: "This snack eats you!",
      price: 3.25,
      amount: 1
    }
  ]

  var items = initialStock.slice();
  
  function hasMoney() {
    return money >= 0;
  }

  function hasProduct(product) {
    return items[product].amount > 0;
  }

  ///////////// PUBLIC ///////////////
  
  this.addMoney = function(){
    money += .25;
    return this.getMoney();
  }

  this.getMoney = function() {
    return money;
  }

  this.getItems = function (callBack) {
    return items;
  }

  this.purchaseItem = function (product) {

    if (hasMoney() && money >= items[product].price) {
      if (hasProduct(product)) {
        items[product].amount--;
        money -= items[product].price;
      } 
    }
  }
}