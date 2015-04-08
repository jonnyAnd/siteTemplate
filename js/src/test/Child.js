function Child(){
}

Child.prototype = new ClassCore();
Child.prototype.constuctor = Child;
Child.prototype.parent = ClassCore.prototype;

Child.prototype.init = function(){
	console.log("Child.prototype.init()")


  this.dispatchEvent(new CoreEvent("SET_SCENE_EVENT", {sceneNameToSet:"baaaa"}));




}
