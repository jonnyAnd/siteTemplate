function CoreSceneView(){
}

CoreSceneView.prototype.init = function(){
  console.log("CoreSceneView.prototype.init-->Override in app scene view")
}

CoreSceneView.prototype.onSetAsCurrentScene = function(){
  console.log("CoreSceneView.prototype.onSetAsCurrentScene-->Override in app scene view!!!")
}

CoreSceneView.prototype.updateRender = function(){
  console.log("CoreSceneView.prototype.updateRender-->Override in app scene view!!!")
}

CoreSceneView.prototype.onSetAsCurrentScene = function(){

  console.log("SET CURRENT SCENE")


}
