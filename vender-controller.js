function VenderController(){

  ///////////// PRIVATE ///////////////
  
  var venderService = new VenderService();
  var moneyId = document.getElementById('money');
  var itemId = document.getElementById('items');
  
  this.drawItems = function(){

    var items = venderService.getItems();
    var template = "";

    for(var i = 0; i < items.length; i++){
      template += `
      <div class="card" style="width: 15rem;">
        <div class="card-body">
          <h5 class="card-title">${items[i].name}</h5>
          <p>${items[i].description}</p>
          <p>Amount: ${items[i].amount}</p>
          <p>Price: ${items[i].price}</p>          
          <button class="card-link" onclick=app.controllers.venderController.purchaseItem(${i})>Purchase Item</button>
        </div>
      </div>
      `
    }

    itemId.innerHTML = template;

  }

  ///////////// PUBLIC ///////////////
  
  this.addMoney = function() {
    moneyId.textContent = "Money: $" + venderService.addMoney().toFixed(2);
  }

  this.purchaseItem = function(product) {
    venderService.purchaseItem(product);
    moneyId.textContent = "Money: $" + venderService.getMoney().toFixed(2);
    this.drawItems();
  }

  // this.reStock = function() {
  //   venderService.reStock();
  // }

}