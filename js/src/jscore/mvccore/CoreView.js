var renderer;
var stage;


function CoreView(){
  this.currentScene;
}

CoreView.prototype = new ClassCore();
CoreView.prototype.constuctor = CoreView;
CoreView.prototype.parent = ClassCore.prototype;

CoreView.prototype.init = function(view, model){
  this.setupStage();
}

CoreView.prototype.setCurrentScene = function(selectedScene){
  console.log("CoreView.prototype.setCurrentScene("+selectedScene+")")

  this.currentScene = selectedScene;
  this.currentScene.onSetAsCurrentScene();
  this.addEventsToScene();
}

CoreView.prototype.addEventsToScene = function(){
   console.log("CoreView.prototype.addEventsToScene()")
   this.currentScene.addEventListener("SET_SCENE_EVENT", this.onSetSceneEvent.bind(this));
}


CoreView.prototype.setupStage = function(){
  var interactive = true;
	stage = new PIXI.Stage(0xCCCCCC, interactive);
	renderer = new PIXI.autoDetectRenderer(this.getViewportDimension().w, this.getViewportDimension().h);
	document.body.appendChild(renderer.view);
}

CoreView.prototype.getViewportDimension = function(){
	var e = window, a = 'inner';
	if (!( 'innerWidth' in window )) {
	    a = 'client';
	    e = document.documentElement || document.body;
	}
	return {w:e[a + 'Width'], h:e[a + 'Height']};
}

CoreView.prototype.updateRender = function(){
	renderer.resize(this.getViewportDimension().w,this.getViewportDimension().h);
  this.currentScene.updateRender();
	requestAnimFrame(updateRender);
  renderer.render(stage);
}


CoreView.prototype.onSetSceneEvent = function(event){
  console.log("CoreView.prototype.onSetSceneEvent"+event.data.sceneNameToSet);



  //this.dispatchEvent(event);
  this.dispatchEvent(new CoreEvent("SET_SCENE_EVENT", {sceneNameToSet:event.data.sceneNameToSet}));
}


CoreView.prototype.imageExists = function(image_url){

  //todo: do i use this, should it be here??
    var http = new XMLHttpRequest();

    http.open('HEAD', image_url, false);
    http.send();

    return http.status != 404;
}
