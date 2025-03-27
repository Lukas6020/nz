/*
Skript für die Neuseelandreise
*/
let lat = -38.14;
let lng = 176.25;
let zoom = 13;

let stop = {
    nr: 5,
    title: "Rotorua",
    user: "lukas6020",
    lat: -38.14,
    lng: 176.25,
    zoom: 13
};

// Karte initialisieren
let map = L.map('map').setView([stop.lat, stop.lng], stop.zoom);

// Hintergrundkarte definieren
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Marker zeichnen
let marker = L.marker([stop.lat, stop.lng]).addTo(map);


// Popup definieren und öffnen
marker.bindPopup(`
    <h2>${stop.title}</h2>
    <ul>
        <li>Geographische Länge: ${stop.lat.toFixed(2)}°</li>
        <li>Geographische Breite: ${stop.lng.toFixed(2)}°</li>
    </ul>
`).openPopup();

let course = {
    title: "Webmapping",
    semester: "25S",
    stunden: 3,
    typ: "VU"
};
console.log("title", course.title);
console.log("semester", course.semester);
console.log("stunden", course.stunden);
console.log("typ", course.typ);
