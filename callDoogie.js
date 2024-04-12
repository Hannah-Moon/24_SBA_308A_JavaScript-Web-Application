export async function callDoggie() {
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
