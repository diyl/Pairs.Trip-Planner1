const mapboxgl = require('mapbox-gl');

const markerMaker = (markerType, coordinates) => {
  const url = '';
  const marker = document.createElement('div');
  marker.style.width = '32px';
  marker.style.height = '39px';
  switch (markerType) {
    case 'activity':
      url = 'http://i.imgur.com/WbMOfMl.png';
      break;
    case 'restaurant':
      url = 'http://i.imgur.com/cqR6pUI.png';
      break;
    case 'hotel':
      url = 'http://i.imgur.com/D9574Cu.png';
      break;
    default:
      break;
  }
  marker.style.backgroundImage = url;
  new mapboxgl.Marker(marker).setLngLat(coordinates);
};

module.exports = markerMaker;
