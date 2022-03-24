// Create our initial map object
// Set the longitude, latitude, and the starting zoom level
var myMap = L.map("map", {
    center: [45.52, -122.67],
    zoom: 13
  });
  
  // Add a tile layer (the background map image) to our map
  // We use the addTo method to add objects to our map
  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1,
      accessToken: API_KEY
  }).addTo(myMap);
  
  // Create a new marker
  // Pass in some initial options, and then add it to the map using the addTo method
  var marker = L.marker([45.52, -122.67], {
    draggable: true,
    title: "My First Marker"
  }).addTo(myMap);
  
  // Binding a pop-up to our marker
  marker.bindPopup("Hello There!");