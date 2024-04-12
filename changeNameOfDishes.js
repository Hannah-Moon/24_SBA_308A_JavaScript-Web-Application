// --------------- { Name of dishes } -------------- // 

export async function changeNameOfDishes() {
    try {
        const response = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
        if (!response.ok) {
            throw new Error("Failed to fetch meal data");
        }
        const data = await response.json();
        const meals = data.meals;
        if (meals && meals.length > 0) {
            const strMeal = meals[0].strMeal;
            document.getElementById("foodName").innerText = strMeal;
        } else {
            throw new Error("No meals found in the response");
        }
    } catch (error) {
        console.error("Meal Data is not appearing!", error);
    }
}