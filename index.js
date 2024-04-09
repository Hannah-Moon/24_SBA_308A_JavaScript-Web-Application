// --------------- { Ajax Trial } -------------- // 

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

// Select the button element by its ID
const seeMoreBtn = document.getElementById('seeMoreBtn');

// Add event listener to the button
seeMoreBtn.addEventListener('click', function() {
    callDoggie();
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
