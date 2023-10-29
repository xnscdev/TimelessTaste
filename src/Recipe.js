export default class Recipe {
    constructor(text) {
        const json = JSON.parse(text);
        this.name = json['name'];
        this.nutrients = json['nutrients'];
        this.ingredients = json['ingredients'];
        this.instructions = json['instructions'];
    }

    getJSON() {
        return JSON.stringify({
            name: this.name,
            nutrients: this.nutrients,
            ingredients: this.ingredients,
            instructions: this.instructions
        });
    }
}