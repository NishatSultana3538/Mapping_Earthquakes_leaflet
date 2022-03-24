// Create our initial map object
// Set the longitude, latitude, and the starting zoom level
let map = L.map('mapid').setView([34.0522, -118.2437], 14);
  //Add a marker to the map for Los Angeles, California.
let marker = L.marker([34.0522, -118.2437]).addTo(map);
  // Add a tile layer (the background map image) to our map
  // We use the addTo method to add objects to our map
  /*L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1,
      accessToken: API_KEY
  }).addTo(myMap);*/
  // We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}');
  // Create a new marker
  // Pass in some initial options, and then add it to the map using the addTo method
  /*var marker = L.marker([45.52, -122.67], {
    draggable: true,
    title: "My First Marker"
  }).addTo(myMap);

  var marker = L.circle([34.0522, -118.2437], {
    radius: 100,
    draggable: true,
    title: "My First circle Marker"
 }).addTo(myMap);*/
  
  // Binding a pop-up to our marker
  //marker.bindPopup("Hello There!")