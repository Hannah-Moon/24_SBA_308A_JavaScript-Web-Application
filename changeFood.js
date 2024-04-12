// --------------- { Food Picture: Working perfectly ꩜ ꩜ ꩜ } -------------- // 

export async function changeFood() {
    try {
        const response = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
        const data = await response.json();
        
        let imgUrl1 = data.meals[0].strMealThumb;

        document.getElementById('foody').src = imgUrl1;

    } catch (error) {
        alert("Oops! Something went wrong! It is on us! Please try again later.");
    }
}