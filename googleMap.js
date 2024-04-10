// Initialize and add the map
let map;

export async function initMap() {
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

  ////////////////// Try more land marks //////////////  
  const restaurants = [
    { label: "A", name: "City Kitchen", lat: 40.45678537856137, lng: -79.91543446990863 },
    { label: "B", name: "Five Point Artisan Bakeshop", lat: 40.44590707521298, lng: -79.91514997959086 },
    { label: "C", name: "Point Brugge Cafe", lat: 40.45009080071883, lng: -79.91287533514829 },
  ];

  restaurants.forEach(({ label, name, lat, lng }) => {
    const marker = new google.maps.Marker({
      position: { lat, lng },
      label,
      map,
    });
  });


  ////////////////// Try more land marks //////////////  

  // Bouncing logo  
  let image = 'assets/doogieLogo.png';
  let beachMarker = new google.maps.Marker({
    position: {lat: 40.4412027129961, lng: -79.91779536531955},
    map: map,
    animation: google.maps.Animation.BOUNCE,
    icon: image
  });

  // The marker, positioned at Pittsburgh
  let marker = new AdvancedMarkerView({ // --> Keep causing issues. 
  // let marker = new google.maps.Marker({

    map: map,
    position: position,
    title: "Pittsburgh",
  });
}

initMap();



// --------------- { TRY WITH NEW WITH MANY MARKS}

// The following example creates a marker in Stockholm, Sweden using a DROP
// animation. Clicking on the marker will toggle the animation between a BOUNCE
// animation and no animation.
// let marker;

// let map;

// function initMap() {
//   const map = new google.maps.Map(document.getElementById("map"), {
//     zoom: 13,
//     center: { lat: 59.325, lng: 18.07 },
//   });

//   marker = new google.maps.Marker({
//     map,
//     draggable: true,
//     animation: google.maps.Animation.DROP,
//     position: { lat: 59.327, lng: 18.067 },
//   });
//   marker.addListener("click", toggleBounce);
// }

// function toggleBounce() {
//   if (marker.getAnimation() !== null) {
//     marker.setAnimation(null);
//   } else {
//     marker.setAnimation(google.maps.Animation.BOUNCE);
//   }
// }

// window.initMap = initMap;

// --------------- { TRY WITH Dale Seo's way}

// window.initMap = function () {
//   const map = new google.maps.Map(document.getElementById("map"), {
//     center: { lat: 37.5400456, lng: 126.9921017 },
//     zoom: 10,
//   });

//   const malls = [
//     { label: "C", name: "코엑스몰", lat: 37.5115557, lng: 127.0595261 },
//     { label: "G", name: "고투몰", lat: 37.5062379, lng: 127.0050378 },
//     { label: "D", name: "동대문시장", lat: 37.566596, lng: 127.007702 },
//     { label: "I", name: "IFC몰", lat: 37.5251644, lng: 126.9255491 },
//     { label: "L", name: "롯데월드타워몰", lat: 37.5125585, lng: 127.1025353 },
//     { label: "M", name: "명동지하상가", lat: 37.563692, lng: 126.9822107 },
//     { label: "T", name: "타임스퀘어", lat: 37.5173108, lng: 126.9033793 },
//   ];

//   const bounds = new google.maps.LatLngBounds();

//   malls.forEach(({ label, name, lat, lng }) => {
//     const marker = new google.maps.Marker({
//       position: { lat, lng },
//       label,
//       map,
//     });
//     bounds.extend(marker.position);
//   });

//   map.fitBounds(bounds);
// };