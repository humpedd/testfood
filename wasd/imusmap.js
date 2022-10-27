//DASMA
var map = L.map('map').setView([14.40672595570883, 120.94095373349765], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var bangkitoMarker = L.marker([14.430572587209403, 120.93589398414612],{
})
.addTo(map)
.bindPopup("<h2>Bangkito</h2> <img src='images/bangkito2.jpg'/>")
.bindTooltip("Bangkito",{
  permanent:true,
  direction:"left",
  offset:[-25,0]
  })

var marcelloMarker = L.marker([14.427862646093004, 120.93760867147881],{
})
.addTo(map)
.bindPopup("<h5>Cafe Marcello Bar and Resto</h5> <img src='images/casa.jpg'/>")
.bindTooltip("Cafe Marcello Bar and Resto",{
  permanent:true,
  direction:"right",
  })

var kokMarker = L.marker([14.401446609250975, 120.9588717411783],{
})
.addTo(map)
.bindPopup("<h3>Mang Kok's</h3> <img src='images/kok.jpg'/>")
.bindTooltip("Mang Kok's",{
  permanent:true,
  direction:"right",
  })
