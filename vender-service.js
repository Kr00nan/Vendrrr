function VenderService(){

  ///////////// PRIVATE ///////////////

  var money = 0;
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
    },
    {
      name: "Mountain Dew Cheetos",
      description: "Gamers, this one goes out to you.",
      price: 1.25,
      amount: 10
    }
  ];

  // var items = [
  //   {
  //     name: "Fruit Snack Gummies",
  //     description: "Fruit salad done right.",
  //     price: 1.00,
  //     amount: 45
  //   },
  //   {
  //     name: "Plant Food",
  //     description: "Are you hungry? I could use a light snack.",
  //     price: 5.00,
  //     amount: 20
  //   },
  //   {
  //     name: "Admiral-able Ack-Bar",
  //     description: "Snack like an Admiral.",
  //     price: .75,
  //     amount: 3
  //   },
  //   {
  //     name: "Paranormal Snacktivity",
  //     description: "The perfect midnight snack.",
  //     price: .25,
  //     amount: 7
  //   },
  //   {
  //     name: "The Void",
  //     description: "This snack eats you!",
  //     price: 3.25,
  //     amount: 1
  //   },
  //   {
  //     name: "Mountain Dew Cheetos",
  //     description: "Gamers, this one goes out to you.",
  //     price: 1.25,
  //     amount: 10
  //   }
  // ];

  var items = JSON.parse(JSON.stringify(initialStock));
  
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

  this.getItems = function(callBack) {
    callBack(items);
  }

  this.purchaseItem = function(product, callBack) {

    if (hasMoney() && money >= items[product].price) {
      if (hasProduct(product)) {
        items[product].amount--;
        money -= items[product].price;
        callBack(items);
      } 
    }
  }

  this.reStock = function(callBack) {
    // .slice copies object references into the new array.
    // Both the original and new array refer to the same object.
    // debugger
    items = JSON.parse(JSON.stringify(initialStock));
    callBack(items);
  }

}