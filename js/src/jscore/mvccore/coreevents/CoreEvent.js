function CoreEvent(typeString, dataObject){


// this is not used and its utility needs to be reviewed (code for stop fucking over engineering!

  this.init(typeString, dataObject);
}

CoreEvent.prototype.init = function (typeString, dataObject){
  this.type = typeString;
  this.data = dataObject;
}
