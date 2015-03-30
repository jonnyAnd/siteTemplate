function CoreScene(){
  console.log("CoreScene")
}

CoreScene.prototype = new ClassCore();
CoreScene.prototype.constuctor = CoreScene;
CoreScene.prototype.parent = ClassCore.prototype;


CoreScene.prototype.addView = function(sceneView){
  console.log("adding view")

  this._view = sceneView;
  this._view.addEventListener("TEST_EVENT", this.eventTest.bind(this));
}

CoreScene.prototype.addModel = function(sceneModel){
  console.log("adding model")

  this._model = sceneModel;
}

CoreScene.prototype.init = function(){
  this._view.init();
}

CoreScene.prototype.updateRender = function(){
  this._view.updateRender();
}

CoreScene.prototype.onSetAsCurrentScene = function(){
  this._view.onSetAsCurrentScene();
}



// TEST TEST
CoreScene.prototype.eventTest = function(event){

  console.log("CoreScene.prototype.eventTest "+event.data.sceneNameToSet);


}
// TEST TEST
