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

CoreSceneView.prototype.updateRender = function(){
  console.log("CoreSceneView.prototype.updateRender-->Override in app scene view!!!")
}

CoreSceneView.prototype.setAsCurrentScene = function(sceneName){
  console.log("SET CURRENT SCENE"+sceneName)

  // test code - data not getting through

//  var eventObj:



  this.dispatchEvent("TEST_EVENT", {sceneNameToSet:sceneName});
}
