function ClassCore(){
}

ClassCore.prototype.addEventListener = function(eventType, callBackFunction){
  console.log("ClassCore.addEventListener "+eventType+" - callBackFunction-->"+callBackFunction);
  // create event array if null
  if (this.isNull(this._events)){
    this._events = [];
  }

  // if already in array, then remove it.
    var indexOfEvent = this.getIndexOfEventFromTypeString(eventType);
  if(indexOfEvent>-1){
    this.removeEventListener(eventType);
  }

  // push it in to array
  this._events.push({type:eventType, callBack:callBackFunction});
}

ClassCore.prototype.dispatchEvent = function(event){
    console.log("ClassCore.dispatchEvent "+event.type);
    var indexOfEvent = this.getIndexOfEventFromTypeString(event.type);

    if(indexOfEvent>-1){
      var eventReferenceObject = this._events[indexOfEvent];
      eventReferenceObject.callBack(event);
    }
}

ClassCore.prototype.removeEventListener = function(eventType){
   console.log("ClassCore.removeEventListener - "+eventType);


  if (this.isNull(this._events)){
    console.log("ClassCore.prototype.removeEventListener - No Events stored");
  }else{

    var indexOfEvent = this.getIndexOfEventFromTypeString(eventType);

    if(indexOfEvent>-1){
      this._events.shift(indexOfEvent);
    }
  }
}

ClassCore.prototype.getIndexOfEventFromTypeString = function(eventType){
  for (var i = 0; i < this._events.length; i++){
      var eventObject = this._events[i]

      if(eventObject.type == eventType){
        return i;
      }
  }
  return -1;
}


ClassCore.prototype.isNull = function(aVar){
  return (aVar === undefined || aVar === null);
}


