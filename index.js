import { changeFood } from './changeFood.js';
import { callDoggie } from './callDoogie.js';
import { changeNameOfDishes } from './changeNameOfDishes.js';

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