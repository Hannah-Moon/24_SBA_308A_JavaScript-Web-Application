// Base reference code

const getDog = async () => {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const jsonData = await response.json();
    const url = jsonData.message;
    let dogImg = document.querySelector("#woof");
    dogImg.setAttribute("src", url);
  };
  
  getAnotherCat = async () => {
    let response = await fetch(
      "https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=live_cpUvXtjvo8aqXosFx8FMq04zFnSQQTUl87DhQRzfIvQMgKnutC13vYL919bHVEaR"
    );
  
    const jsonData = await response.json();
      // jsonData.forEach((cat)=>{
      //   console.log(cat.url)
      // })
    console.log(jsonData);
    // Look at the data type/ structure
    let link = jsonData[0].url;
    let catImg = document.querySelector("#meow");
    catImg.setAttribute("src", link);
    console.log("CatInfo: ", link);
  };
  
  const startGame = () => {
    getCat();
    getDog();
    let pick = prompt("Which is the Cutest of the Two?");
    if (pick.toLowerCase() === "cat") {
      catScore++;
      catPoints.innerHTML = catScore;
    } else if (pick.toLowerCase() === "dog") {
      dogscore++;
      dogPoints.innerHTML = dogscore;
    } else {
      alert("Wrong Response!");
    }
  };
  
  getAnotherCat();
  getDog();