import React from 'react';

export class AccountPage extends React.Component {
    render() {
        const nutrients  = [
            {nutrient: "Calories"},
            {nutrient: "Fat"},
            {nutrient: "Cholesterol"},
            {nutrient: "Sodium"},
            {nutrient: "Carbohydrate"},
            {nutrient: "Dietary Fiber"},
            {nutrient: "Protein"},
            {nutrient: "Calcium"},
            {nutrient: "Iron"},
            {nutrient: "Potasium"},
        ]
        //const [option] = useState(nutrients);
        return (
            <body>
                <div>
                <h1>Welcome</h1>
                </div>

                <div>
                    <label for="restrictions">Change your dietary restrictions here:</label>
                </div>

                <div>
                    <input className="shadow appearance-none border rounded w-30% py-10 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                     type="text" id="restrictions" name="restrictions" placeholder="previous restrictions"></input>
                </div>
                <div>
                    <label htmlFor="dropdown">Select Diet</label>
                </div>
                <div>
                    <select>
                    <option>Keto</option>
                    <option>Mediterranean</option>
                    <option>Paleo</option>
                    <option>Vegan</option>
                    <option>Carnivore</option>
                    <option>Vegetarian</option>
                    </select>
                </div>

                <div>
                    <form>
                    <label>Select Nutrients to Track</label>

                        <div>
                            <input type = "checkbox" id = "calories" value = "Calories"></input>
                            <label for = "calories">Calories</label>
                            <input type = "checkbox" id = "Fat" value = "Fat"></input>
                            <label for = "Fat">Fat</label>
                            <input type = "checkbox" id = "Cholestrol" value = "Cholestrol"></input>
                            <label for = "Cholestrol">Cholestrol</label> <br></br>
                            <input type = "checkbox" id = "Sodium" value = "Sodium"></input>
                            <label for = "Sodium">Sodium</label>
                            <input type = "checkbox" id = "Carbohydrates" value = "Carbohydrates"></input>
                            <label for = "Carbohydrates">Carbohydrates</label>
                            <input type = "checkbox" id = "Dietary Fiber" value = "Dietary Fiber"></input>
                            <label for = "Dietary Fiber">Dietary Fiber</label> <br></br>
                            <input type = "checkbox" id = "Protein" value = "Protein"></input>
                            <label for = "Protein">Protein</label>
                            <input type = "checkbox" id = "Calcium" value = "Calcium"></input>
                            <label for = "Calcium">Calcium</label>
                            <input type = "checkbox" id = "Iron" value = "Iron"></input>
                            <label for = "Iron">Iron</label>
                        </div>
                        
                    <input type = "submit" formaction = "#" value = "Enter" class = "border border-3 mt-5"></input>

                    </form>
                </div>
            </body>
        );
    }
}