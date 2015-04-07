function CoreScene(){
  console.log("CoreScene")
}

CoreScene.prototype = new ClassCore();
CoreScene.prototype.constuctor = CoreScene;
CoreScene.prototype.parent = ClassCore.prototype;


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
  console.log("CoreScene.prototype.onSetAsCurrentScene ");

  this._view.addEventListener("SET_SCENE_EVENT", this.onSetSceneEvent.bind(this));
  this._view.onSetAsCurrentScene();
}

CoreScene.prototype.onSetSceneEvent = function(event){

  console.log("CoreScene.prototype.onSetSceneEvent "+event.data.sceneNameToSet);
  this._view.removeEventListener("SET_SCENE_EVENT");

  //TODO:Fix bubbles, event has referacnes so we need to add a clone to the event system
  //this.dispatchEvent(event);


  this.dispatchEvent(new CoreEvent("SET_SCENE_EVENT", {sceneNameToSet:event.data.sceneNameToSet}));

}

