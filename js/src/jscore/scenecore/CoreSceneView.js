function CoreSceneView(){
}

CoreSceneView.prototype = new ClassCore();
CoreSceneView.prototype.constuctor = CoreSceneView;
CoreSceneView.prototype.parent = ClassCore.prototype;


CoreSceneView.prototype.init = function(){
  console.log("CoreSceneView.prototype.init-->Override in app scene view")
}

CoreSceneView.prototype.onSetAsCurrentScene = function(){
  console.log("CoreSceneView.prototype.onSetAsCurrentScene-->Override in app scene view!!!")
}

CoreSceneView.prototype.cleanUp = function(){
  console.log("CoreSceneView.prototype.cleanUp")

  for (i = 0; i < this._visualElements.length; i++){
    stage.removeChild(this._visualElements.shift(i));
  }
}

CoreSceneView.prototype.updateRender = function(){
  console.log("CoreSceneView.prototype.updateRender-->Override in app scene view!!!")
}

CoreSceneView.prototype.gotoScene = function(sceneName){
  console.log("CoreSceneView.prototype.setAsCurrentScene-->"+sceneName)
  this.cleanUp();
  this.dispatchEvent(new CoreEvent("SET_SCENE_EVENT", {sceneNameToSet:sceneName}));
}


CoreSceneView.prototype.addChild = function(clip){
  if (this.isNull(this._visualElements)){
    console.log("making visual _visualElements")
    this._visualElements = [];
  }

  this._visualElements.push(clip);

  stage.addChild(clip);
}
