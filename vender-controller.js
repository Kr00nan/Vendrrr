function VenderController(){
  //private parts
  var venderService = new VenderService();

  //items is an array we need to get from the service and give to drawItems
  
  this.drawItems = function(){
    //we will take in a parameter(items) and iterate over it to build
    //a template to draw to the screen.
    var items = venderService.getItems();
    var text = document.getElementById('items');
    var template = "";

    for(i = 0; i < items.length; i++){
      template += `
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${items[i].name}</h5>
          <p>${items[i].description}</p>
          <p>Amount: ${items[i].amount}</p>
          <p>Price: ${items[i].price}</p>          
          <a class="card-link" onclick=app.controllers.venderController.purchaseItem(${i})>Purchase Item</a>
        </div>
      </div>
      `
    }
    text.innerHTML = template;
  
  }


  //public parts
  
  //we need a function to take money from our "view" and pass it to our service
  
  this.addMoney = function() {
    var elemID = document.getElementById('money');
    elemID.textContent = "Money: $" + venderService.addMoney().toFixed(2);
  }

  this.purchaseItem = function(product) {
    venderService.purchaseItem(product);
    this.drawItems();
  }


}