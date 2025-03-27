/*
Skript für die Neuseelandreise
*/
let lat = -38.14;
let lng = 176.25;
let zoom = 13;

// Karte initialisieren
let map = L.map('map').setView([lat , lng], zoom);

// Hintergrundkarte definieren
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Marker zeichnen
let marker = L.marker([lat, lng]).addTo(map);


// Popup definieren und öffnen
marker.bindPopup(`
    <b>Hello world!</b>
    <br>
    I am a popup.
    `).openPopup();