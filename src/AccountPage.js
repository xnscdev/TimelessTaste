import React, {useState, useEffect} from "react";
import {doc, getDoc, setDoc} from 'firebase/firestore';
import {auth, db} from "./firebase";

function AccountPage() {
    const [loading, setLoading] = useState(true);
    const [confirmation, setConfirmation] = useState('');
    const [dietaryRestrictions, setDietaryRestrictions] = useState('');
    const [diet, setDiet] = useState('None');
    const [trackCalories, setTrackCalories] = useState(false);
    const [trackFat, setTrackFat] = useState(false);
    const [trackCholesterol, setTrackCholesterol] = useState(false);
    const [trackSodium, setTrackSodium] = useState(false);
    const [trackCarbohydrates, setTrackCarbohydrates] = useState(false);
    const [trackDietaryFiber, setTrackDietaryFiber] = useState(false);
    const [trackProtein, setTrackProtein] = useState(false);
    const [trackCalcium, setTrackCalcium] = useState(false);
    const [trackIron, setTrackIron] = useState(false);
    const [trackVitamins, setTrackVitamins] = useState(false);

    useEffect(() => {
        (async () => {
            const uid = auth.currentUser.uid;
            const userDoc = await getDoc(doc(db, 'users', uid));
            setLoading(false);
            if (!userDoc.exists())
                return;
            const userData = userDoc.data();
            setDietaryRestrictions(userData['dietaryRestrictions']);
            setDiet(userData['diet']);
            setTrackCalories(userData['trackCalories']);
            setTrackFat(userData['trackFat']);
            setTrackCholesterol(userData['trackCholesterol']);
            setTrackSodium(userData['trackSodium']);
            setTrackCarbohydrates(userData['trackCarbohydrates']);
            setTrackDietaryFiber(userData['trackDietaryFiber']);
            setTrackProtein(userData['trackProtein']);
            setTrackCalcium(userData['trackCalcium']);
            setTrackIron(userData['trackIron']);
            setTrackVitamins(userData['trackVitamins']);
        })();
    }, []);

    const saveProfile = async () => {
        const uid = auth.currentUser.uid;
        try {
            await setDoc(doc(db, 'users', uid), {
                dietaryRestrictions,
                diet,
                trackCalories,
                trackFat,
                trackCholesterol,
                trackSodium,
                trackCarbohydrates,
                trackDietaryFiber,
                trackProtein,
                trackCalcium,
                trackIron,
                trackVitamins
            });
            setConfirmation("Successfully saved profile!");
        } catch (e) {
            setConfirmation(`Error saving profile: {e}`);
        }
    };

    if (loading)
        return <h1 className="font-bold text-center text-7xl text-blue-900">Loading...</h1>

    return (
        <>
            <div>
                <div>
                    <h1 className="font-bold text-center text-7xl mb-5 text-blue-900">
                        Welcome
                    </h1>
                </div>
                <div className="flex flex-col justify-center content-center text-center text-blue-900">
                    <div>
                        <label
                            htmlFor="restrictions"
                            className="font-semibold text-5xl"
                        >
                            Specify Your Dietary Restrictions
                        </label>
                    </div>
                    <div>
                        <input
                            className="shadow appearance-none border rounded w-1/2 py-3 px-3 text-gray-700 text-2xl leading-tight focus:outline-none focus:shadow-outline mt-5"
                            type="text"
                            id="restrictions"
                            name="restrictions"
                            placeholder="Enter allergies, restrictions, etc..."
                            value={dietaryRestrictions}
                            onChange={e => setDietaryRestrictions(e.target.value)}
                        />
                    </div>
                    <div className="mt-12">
                        <label
                            htmlFor="dropdown"
                            className="font-semibold text-5xl"
                        >
                            Select Diet
                        </label>
                    </div>
                    <div className="mt-6">
                        <select
                            className="w-1/3 text-xl shadow appearance-none border rounded w-1/2 py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            value={diet}
                            onChange={e => setDiet(e.target.value)}
                        >
                            <option>None</option>
                            <option>Keto</option>
                            <option>Mediterranean</option>
                            <option>Paleo</option>
                            <option>Vegan</option>
                            <option>Carnivore</option>
                            <option>Vegetarian</option>
                        </select>
                    </div>

                    <div className="mt-12">
                        <form>
                            <label className="font-semibold text-5xl">
                                Select Nutrients to Track
                            </label>
                            <div className="mt-4 mx-auto">
                                <div className="flex">
                                    <div className="flex-1 flex flex-col items-end">
                                        <div className="flex">
                                            <input
                                                type="checkbox"
                                                id="calories"
                                                name="Calories"
                                                className="w-6 h-6 mx-4"
                                                checked={trackCalories}
                                                onChange={e => setTrackCalories(e.target.checked)}
                                            />
                                            <label
                                                htmlFor="calories"
                                                className="font-bold text-3xl "
                                            >
                                                Calories
                                            </label>
                                        </div>
                                        <div className="flex">
                                            <input
                                                type="checkbox"
                                                id="Fat"
                                                name="Fat"
                                                className="w-6 h-6 mx-4"
                                                checked={trackFat}
                                                onChange={e => setTrackFat(e.target.checked)}
                                            />
                                            <label
                                                htmlFor="Fat"
                                                className="font-bold text-3xl "
                                            >
                                                Fat
                                            </label>
                                        </div>
                                        <div className="flex">
                                            <input
                                                type="checkbox"
                                                id="Cholesterol"
                                                name="Cholesterol"
                                                className="w-6 h-6 mx-4"
                                                checked={trackCholesterol}
                                                onChange={e => setTrackCholesterol(e.target.checked)}
                                            />
                                            <label
                                                htmlFor="Cholesterol"
                                                className="font-bold text-3xl "
                                            >
                                                Cholesterol
                                            </label>
                                        </div>
                                        <div className="flex">
                                            <input
                                                type="checkbox"
                                                id="Sodium"
                                                name="Sodium"
                                                className="w-6 h-6 mx-4"
                                                checked={trackSodium}
                                                onChange={e => setTrackSodium(e.target.checked)}
                                            />
                                            <label
                                                htmlFor="Sodium"
                                                className="font-bold text-3xl "
                                            >
                                                Sodium
                                            </label>
                                        </div>
                                        <div className="flex">
                                            <input
                                                type="checkbox"
                                                id="Carbohydrates"
                                                name="Carbohydrates"
                                                className="w-6 h-6 mx-4"checked={trackCarbohydrates}
                                                onChange={e => setTrackCarbohydrates(e.target.checked)}
                                            />
                                            <label
                                                htmlFor="Carbohydrates"
                                                className="font-bold text-3xl "
                                            >
                                                Carbohydrates
                                            </label>
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex">
                                            <input
                                                type="checkbox"
                                                id="Dietary Fiber"
                                                name="Dietary Fiber"
                                                className="w-6 h-6 mx-4"
                                                checked={trackDietaryFiber}
                                                onChange={e => setTrackDietaryFiber(e.target.checked)}
                                            />
                                            <label
                                                htmlFor="Dietary Fiber"
                                                className="font-bold text-3xl text-left"
                                            >
                                                Dietary Fiber
                                            </label>
                                        </div>
                                        <div className="flex">
                                            <input
                                                type="checkbox"
                                                id="Protein"
                                                name="Protein"
                                                className="w-6 h-6 mx-4"
                                                checked={trackProtein}
                                                onChange={e => setTrackProtein(e.target.checked)}
                                            />
                                            <label
                                                htmlFor="Protein"
                                                className="font-bold text-3xl "
                                            >
                                                Protein
                                            </label>
                                        </div>
                                        <div className="flex">
                                            <input
                                                type="checkbox"
                                                id="Calcium"
                                                name="Calcium"
                                                className="w-6 h-6 mx-4"
                                                checked={trackCalcium}
                                                onChange={e => setTrackCalcium(e.target.checked)}
                                            />
                                            <label
                                                htmlFor="Calcium"
                                                className="font-bold text-3xl "
                                            >
                                                Calcium
                                            </label>
                                        </div>
                                        <div className="flex">
                                            <input
                                                type="checkbox"
                                                id="Iron"
                                                name="Iron"
                                                className="w-6 h-6 mx-4"
                                                checked={trackIron}
                                                onChange={e => setTrackIron(e.target.checked)}
                                            />
                                            <label
                                                htmlFor="Iron"
                                                className="font-bold text-3xl "
                                            >
                                                Iron
                                            </label>
                                        </div>
                                        <div className="flex">
                                            <input
                                                type="checkbox"
                                                id="Vitamins"
                                                name="Vitamins"
                                                className="w-6 h-6 mx-4"
                                                checked={trackVitamins}
                                                onChange={e => setTrackVitamins(e.target.checked)}
                                            />
                                            <label
                                                htmlFor="Vitamins"
                                                className="font-bold text-3xl "
                                            >
                                                Vitamins
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <button
                                type="button"
                                className="text-xl bg-blue-900 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300 mt-4"
                                onClick={saveProfile}
                            >Save Profile</button>
                            <div className={"mt-6 text-lg" + (confirmation.includes("Error") ? " text-red-500" : "")}>{confirmation}</div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AccountPage;
