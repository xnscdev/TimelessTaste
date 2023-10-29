export default class Recipe {
    constructor(text) {
        const json = JSON.parse(text);
        this.name = json['name'];
        this.nutrients = json['nutrients'];
        this.ingredients = json['ingredients'];
        this.instructions = json['instructions'];
    }

    getNutrients() {
        const nutrients = Object.keys(this.nutrients).map(k => <p key={k}>{k}: {this.nutrients[k]}</p>);
        return (
            <>
                <h3 className="font-semibold">Nutrients</h3>
                {nutrients}
            </>
        );
    }
}