// --------------- { Reference } -------------- // 
  
function changeImg() {
    $.ajax({
        type: "GET",
        url: "https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1",
        data: {},
        success: function (response){
            let imgurl = (response[0]['url'])
            $(`#bow`).attr('src',imgurl)
        }
    })
}

//    ----------- { Previos Code } 

//   const getDog = async () => {
//     const response = await fetch("https://dog.ceo/api/breeds/image/random");
//     const jsonData = await response.json();
//     const url = jsonData.message;
//     let dogImg = document.querySelector("#bow");
//     dogImg.setAttribute("src", url);
//   };
  
//   getAnotherDog = async () => {
//     let response = await fetch(
//       "https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=live_aI5LrRMrx5IyHNmecCqRIZWpO0dkM6Tle5485rhNiKHy7trxF7T3cvMMyjnELPfB"
//     );
  
//     const jsonData = await response.json();
//       // jsonData.forEach((cat)=>{
//       //   console.log(cat.url)
//       // })
//     console.log(jsonData);
//     // Look at the data type/ structure
//     let link = jsonData[0].url;
//     let catImg = document.querySelector("#bow");
//     catImg.setAttribute("src", link);
//     console.log("DogInfo: ", link);
//   };
  
// //   const startGame = () => {
// //     getCat();
// //     let pick = prompt("Which is the Cutest of the Two?");
// //     if (pick.toLowerCase() === "cat") {
// //       catScore++;
// //       catPoints.innerHTML = catScore;
// //     } else if (pick.toLowerCase() === "dog") {
// //       dogscore++;
// //       dogPoints.innerHTML = dogscore;
// //     } else {
// //       alert("Wrong Response!");
// //     }
// //   };
  
//   getAnotherDog();
//   getDog();