const mapboxgl = require('mapbox-gl');

mapboxgl.accessToken = 'pk.eyJ1IjoiYW5uYW1haSIsImEiOiJjanQ0aXNoaWIwMXo0NDRvM2NsanN6bjdtIn0.Q_czlTiRsCRtGmBwQKcd-g';

const map = new mapboxgl.Map({
  container: 'map',
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: 'mapbox://styles/mapbox/streets-v10' // mapbox has lots of different map styles available.
});

// const marker = document.createElement('div');
// marker.classList.add('fs-marker');

new mapboxgl.Marker().setLngLat([-74.009151, 40.705086]).addTo(map);
