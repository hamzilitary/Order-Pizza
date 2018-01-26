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
};
var determinePrice = function(points) {
  if (points <= 4) {
  $("#price10").text($("ul#pizzaInfo").append("<li><span class='price'>$10</span></li>"));
} else if (points > 4 && points < 8) {
  $("#price15").text($("ul#pizzaInfo").append("<li><span class='price'>$15</span></li>"));
} else {
  $("#price20").text($("ul#pizzaInfo").append("<li><span class='price'>$20</span></li>"));
}
};
