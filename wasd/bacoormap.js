var map = L.map('map').setView([14.41335154020407, 120.97332308352276], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var tironaMarker = L.marker([14.449166485660587, 120.93443893182452],{

})
.addTo(map)
.bindPopup("<h5>Tirona's Grill and Restaurant</h5> <img src='images/tir.jpg'/>")
.bindTooltip("Tirona's Grill and Restaurant",{
  permanent:true,
  direction:"auto",
  offset:[0, -15]
  })

var meatsumoMarker = L.marker([14.445911610364009, 120.95121242543314],{
})
.addTo(map)
.bindPopup("<h3>Meatsumo</h3> <img src='images/sumo.jpg'/>")
.bindTooltip("Meatsumo",{
  permanent:true,
  direction:"auto",
  offset:[0, 15]
  })

var funnsideMarker = L.marker([14.415977346196204, 120.96686031652335],{})
.addTo(map)
.bindPopup("<h5>Funnside Ningnangan</h5> <img src='images/ning.jpg'/>")
.bindTooltip("Funnside Ningnangan",{
  permanent:true,
  direction:"auto",
  offset:[0, 15]
  })
