
function CoreController(){
	console.log("CoreController")

}

CoreController.prototype.init = function(view, model){

  this._view = view;
	this._model = model;
  this._sceneArray = [];
  this._view.init();
  this.setupScenes();
}

CoreController.prototype.setupScenes = function(){

  // override this in main contoller
}

CoreController.prototype.addScene = function(sceneID, sceneCoreClass, sceneModel, sceneView){

  sceneCoreClass.addView(sceneView);
  sceneCoreClass.addModel(sceneModel);
  sceneCoreClass.sceneID = sceneID;
  sceneCoreClass.init();
  this._sceneArray.push(sceneCoreClass);
}

CoreController.prototype.showScene = function(sceneID){

  for (i = 0; i < this._sceneArray.length; i++) {
    var s = this._sceneArray[i];

    if(sceneID == s.sceneID){
      console.log("SceneFound!!!!")
      this._view.setCurrentScene(s)
    }
  }

  //TODO: catch if bad scene name is sent here

}

CoreController.prototype.hideScene = function(){}






