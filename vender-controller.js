function VenderController(){

  ///////////// PRIVATE ///////////////
  
  var venderService = new VenderService();
  var moneyId = document.getElementById('money');
  var itemId = document.getElementById('items');
  
  
  ///////////// PUBLIC ///////////////
  
  function drawItems(items){

    var template = "";

    for(var i = 0; i < items.length; i++){
      template += `
      <div class="card" style="width: 16rem;">
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

  this.addMoney = function() {
    moneyId.textContent = "Money: $" + venderService.addMoney().toFixed(2);
  }

  this.purchaseItem = function(product) {
    venderService.purchaseItem(product, drawItems);
    moneyId.textContent = "Money: $" + venderService.getMoney().toFixed(2);
  }

  this.reStock = function() {
    // debugger
    venderService.reStock(drawItems);
    // console.log("reStock function");
  }

  venderService.getItems(drawItems);

}
