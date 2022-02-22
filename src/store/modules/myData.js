import { reactive } from "vue";

export class Passport {
	constructor() {
		this.user = {
			name: "Andrey",
		};
	}

	setName() {
		this.user.name = "Space Leg";
	}

	showName() {
		console.log(this.user.name);
	}
}

export default reactive(new Passport());
