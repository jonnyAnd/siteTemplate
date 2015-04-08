function Parent(){
}

Parent.prototype = new ClassCore();
Parent.prototype.constuctor = Parent;
Parent.prototype.parent = ClassCore.prototype;

Parent.prototype.init = function(){
	console.log("Parent.prototype.init()")

  var c = new Child();


  c.addEventListener("SET_SCENE_EVENT", this.testfunc.bind(this));




   c.init()

}

Parent.prototype.testfunc = function(){
  console.log("Parent.prototype.testfunc()");

   this.dispatchEvent(new CoreEvent("SET_SCENE_EVENT", {sceneNameToSet:"baaaa"}));

}
