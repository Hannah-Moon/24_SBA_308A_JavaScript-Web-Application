import Axios from 'axios';

// --------------- { Ajax Trial } -------------- // 
// Did not work as I intended to... 

// function changeImg() {
//     $.ajax({
//         type: "GET",
//         url: "https://api.thecatapi.com/v1/images/search",
//         data: {},
//         success: function(response) {
//             let imgUrl1 = response[0].url;
//             let imgUrl2 = response[1].url;

//             $('#bow').attr('src', imgUrl1);
//             $('#wow').attr('src', imgUrl2);
//         },
//         error: function() {
//             alert("Oops! Something went wrong! It is on us! Please try again later.");
//         }
//     });
// }

// --------------- { Fetch Trial } -------------- // 
// --------------- { Doggie } -------------- // 

// Select the button element by its ID
const seeMoreBtn = document.getElementById('seeMoreBtn');

// Add event listener to the button
seeMoreBtn.addEventListener('click', function() {
    callDoggie();
    changeFood();
    changeNameOfDishes();
});

async function callDoggie() {
    try {
        const response = await fetch("https://api.thedogapi.com/v1/images/search?limit=20&api_key=live_aI5LrRMrx5IyHNmecCqRIZWpO0dkM6Tle5485rhNiKHy7trxF7T3cvMMyjnELPfB");
        const data = await response.json();
        
        let imgUrl1 = data[0].url;
        let imgUrl2 = data[1].url;

        document.getElementById('bow').src = imgUrl1;
        document.getElementById('wow').src = imgUrl2;
    } catch (error) {
        alert("Oops! Something went wrong! It is on us! Please try again later.");
    }
}


// --------------- { Food Picture: Working perfectly ꩜ ꩜ ꩜ } -------------- // 

async function changeFood() {
    try {
        const response = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
        const data = await response.json();
        
        let imgUrl1 = data.meals[0].strMealThumb;

        document.getElementById('foody').src = imgUrl1;

    } catch (error) {
        alert("Oops! Something went wrong! It is on us! Please try again later.");
    }
}


// --------------- { Name of dishes } -------------- // 

async function changeNameOfDishes() {
    try {
        const response = await Axios.get("https://www.themealdb.com/api/json/v1/1/random.php");
        const strMeal = response.data.meals[1].strMeal;
        document.getElementById("foodName").innerText = strMeal;
    } catch (error) {
        console.error("Meal Data is not appearing!", error);
    }
}

