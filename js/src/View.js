


function View(){
  console.log("extended view");
}

View.prototype = new CoreView();
View.prototype.constuctor = View;
View.prototype.parent = CoreView.prototype;

