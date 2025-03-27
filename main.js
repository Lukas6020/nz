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
    lat: lat,
    lng: lng,
    zoom: zoom
};

// Karte initialisieren
let map = L.map('map').setView([lat, lng], zoom);

// Hintergrundkarte definieren
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Marker zeichnen
let marker = L.marker([lat, lng]).addTo(map);


// Popup definieren und öffnen
marker.bindPopup(`
    <h2>Rotorua</h2>
    <ul>
        <li>Geographische Länge: ${lat.toFixed(2)}</li>
        <li>Geographische Breite: ${lng.toFixed(2)}</li>
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
