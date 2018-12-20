import Cat from "./Cat";
import Dog from "./Dog";

window.onload = function() {
	const cat = new Cat();
	cat.talk();

	const dog = new Dog();
	dog.talk();
	
	const hello = document.createElement("p");
	hello.innerHTML = "Hello world!";
	document.body.appendChild(hello);
};
