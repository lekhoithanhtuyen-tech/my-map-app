import * as maptilersdk from '@maptiler/sdk';
import '@maptiler/sdk/dist/maptiler-sdk.css';
import './style.css';

// Key được đọc từ biến môi trường, không viết thẳng trong code
maptilersdk.config.apiKey = import.meta.env.VITE_SUBSCRIPTION_KEY;

// Một vài điểm GPS mẫu (kinh độ, vĩ độ)
const gpsPoints = [
  [-122.335, 47.608],
  [-122.330, 47.612],
  [-122.322, 47.615],
];

const map = new maptilersdk.Map({
  container: 'map',
  style: maptilersdk.MapStyle.STREETS,
  center: gpsPoints[1],
  zoom: 13,
});

gpsPoints.forEach((point) => {
  new maptilersdk.Marker().setLngLat(point).addTo(map);
});