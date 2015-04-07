
function CoreController(){
	console.log("CoreController")

}

CoreController.prototype = new ClassCore();
CoreController.prototype.constuctor = CoreController;
CoreController.prototype.parent = ClassCore.prototype;

CoreController.prototype.init = function(view, model){
  this._view = view;
	this._model = model;
  this._sceneArray = [];
  this._view.init();
  this.setupScenes();

  this.addEvents();
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

CoreController.prototype.addEvents = function(event){
  this._view.addEventListener("SET_SCENE_EVENT", this.onSetSceneEvent.bind(this));
}

CoreController.prototype.onSetSceneEvent = function(event){
  console.log("CoreController.prototype.onSetSceneEvent"+event.data.sceneNameToSet)



  this.showScene(event.data.sceneNameToSet);
}


CoreController.prototype.showScene = function(sceneID){
  console.log("CoreController.prototype.showScene --> "+sceneID);
  for (i = 0; i < this._sceneArray.length; i++) {
    var s = this._sceneArray[i];

    if(sceneID == s.sceneID){
      this._view.setCurrentScene(s)
    }
  }

  //TODO: catch if bad scene name is sent here

}








CoreController.prototype.hideScene = function(){}






