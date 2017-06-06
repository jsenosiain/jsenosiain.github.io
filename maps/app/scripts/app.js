'use strict';

var initMap = () => {
  var pos = { lat: 39.50, lng: -98.35 };

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: pos
  });

  navigator.geolocation.watchPosition(position => {
    console.log('position', position);
    
    map.setCenter({ lat: position.coords.latitude, lng: position.coords.longitude });
    map.setZoom(18);

    var marker = new google.maps.Marker({
      position: { lat: position.coords.latitude, lng: position.coords.longitude }
    });
    marker.setMap(map);
  }, error => {
    console.log('error', error);
  }, {
    enableHighAccuracy: true
  });
};