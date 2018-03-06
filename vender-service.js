function VenderService(){
  //private parts
  var money = 0

  //our purchaseable items, add some of your own!
  //we could add an id property to these items to display location for purchasing(A1, D4, etc)
  var items = [
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

  //public parts
  
  this.addMoney = function(){
    money += .25;
    return money;
  }

  this.getItems = function () {
    return items;
  }

  this.purchaseItem = function (product) {
    // debugger
    if (hasMoney() && money >= items[product].price) {
      if (hasProduct(product)) {
        items[product].amount--;
        money - items[product].price;
      } else {
        alert("Item not available for purchase.");
      }
    } else {
      alert("Please insert quarters.")
    }
  }

  function hasMoney() {
    return money >= 0;
  }

  function hasProduct(product) {
    return items[product].amount > 0;
  }

}