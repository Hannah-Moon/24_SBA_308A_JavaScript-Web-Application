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

  // As of February 21st, 2024, google.maps.Marker is deprecated. Please use google.maps.marker.AdvancedMarkerElement instead. At this time, google.maps.Marker is not scheduled to be discontinued, but google.maps.marker.AdvancedMarkerElement is recommended over google.maps.Marker. While google.maps.Marker will continue to receive bug fixes for any major regressions, existing bugs in google.maps.Marker will not be addressed. At least 12 months notice will be given before support is discontinued. Please see https://developers.google.com/maps/deprecations for additional details and https://developers.google.com/maps/documentation/javascript/advanced-markers/migration for the migration guide."));

  // restaurants.forEach(({ label, name, lat, lng }) => {
  //   const marker = new google.maps.marker.AdvancedMarkerElement({
  //     position: { lat, lng },
  //     label,
  //     map,
  //   });
  // });

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
