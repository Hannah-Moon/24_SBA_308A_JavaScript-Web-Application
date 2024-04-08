
// Initialize and add the map
let map;

async function initMap() {
  // The location of Uluru
  // const position = { lat: -25.344, lng: 131.031 }; 
  const position = { lat: 40.4412, lng: -79.91779536531955 };
  
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerView } = await google.maps.importLibrary("marker");

  // The map, centered at Uluru
  map = new Map(document.getElementById("map"), {
    zoom: 13,
    center: new google.maps.LatLng(40.4412027129961, -79.91779536531955),
    mapId: "DEMO_MAP_ID",
    mapTypeId: "roadmap",

  });

  // Bouncing logo
  let image = '/assets/doogieLogo.png';
  let beachMarker = new google.maps.Marker({
    position: {lat: 40.4412027129961, lng: -79.91779536531955},
    map: map,
    animation: google.maps.Animation.BOUNCE,
    icon: image
  });

  // The marker, positioned at Uluru
  let marker = new AdvancedMarkerView({
    map: map,
    position: position,
    title: "Uluru",
  });
}



initMap();



