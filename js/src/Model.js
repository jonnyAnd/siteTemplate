function Model(){
  console.log("extended model")
}

Model.prototype = new CoreModel();
Model.prototype.constuctor = Model;
