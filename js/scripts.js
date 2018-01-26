function Pizza(size, bread, topping) {
  this.size = size;
  this.bread = bread;
  this.topping = topping;
}
var pizzaPoints = function(inputtedSize, inputtedBread, inputtedTopping) {
  var points = 0;
    if (inputtedSize === "Large") {
      points = points + 2;
}   else if (inputtedSize === "Medium") {
      points = points + 1;
}   else {
      points = points;
}
    if (inputtedBread === "Hand Tossed"){
      points = points + 2;
}   else if (inputtedBread === "Stuffed Crust") {
      points = points + 3;
}   else {
      points = points + 1;
}
    if (inputtedTopping === "Cheese") {
      points = points + 1;
}   else if (inputtedTopping === "Pepperoni") {
      points = points + 2;
}   else {
      points = points + 3;
}
      return points;
}
