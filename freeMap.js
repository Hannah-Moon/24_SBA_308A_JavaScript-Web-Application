import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://google-maps-geocoding.p.rapidapi.com/geocode/json',
  params: {
    latlng: '40.714224,-73.96145',
    language: 'en'
  },
  headers: {
    'X-RapidAPI-Key': 'AIzaSyDdvA9WofIox6gT8UCLUSd_hKFS9GXuCKs',
    'X-RapidAPI-Host': 'google-maps-geocoding.p.rapidapi.com'
  }
};



try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}