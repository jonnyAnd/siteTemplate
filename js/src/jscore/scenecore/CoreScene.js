function CoreScene(){
  console.log("CoreScene")
}

CoreScene.prototype.addView = function(sceneView){
  console.log("adding view")

  this._view = sceneView;
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
