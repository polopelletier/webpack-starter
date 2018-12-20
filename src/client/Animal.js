export default class Animal {
	constructor(name, say) {
		this.name = name;
		this.say = say;
	}

	talk() {
		console.log(`${this.name} says ${this.say}`);
	}
}