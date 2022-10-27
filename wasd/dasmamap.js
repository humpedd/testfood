//DASMA
var map = L.map('map').setView([14.311207193373807, 120.9490347391459], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var ramenMarker = L.marker([14.3227158018517, 120.9385024389168],{

})
.addTo(map)
.bindPopup("<h3>Ramenishi</h3> <img src='https://scontent.fmnl18-1.fna.fbcdn.net/v/t39.30808-6/294816639_439854601489639_6829314094610501787_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFjSddjN16epOD5iN6Dl-NXtcrnkXX_VCK1yueRdf9UIiDX_J6vpqQ9hfV3trrPfs0&_nc_ohc=fV1XaGEZPHEAX8vlTPY&_nc_ht=scontent.fmnl18-1.fna&oh=00_AT8a-fgTi36u6tOdlTfgpqZyDWb3HTtBCSLu4dStS_LSbg&oe=635C863C'/>")
.bindTooltip("Ramenishi",{
  permanent:true,
  direction:"left",
  offset:[-25,0]
  })

var datuMarker = L.marker([14.328756406351271, 120.93997386880464],{
})
.addTo(map)
.bindPopup("<h4>Datu Balangay</h4> <img src='images/datu.jpg'/>")
.bindTooltip("Datu Balangay",{
  permanent:true,
  direction:"left",
  offset:[-25,0]
  })

var cripsyMarker = L.marker([14.327497373377247, 120.9490762129805],{
})
.addTo(map)
.bindPopup("<h3>Crispy Basket</h3> <img src='images/crispy3.jpg'/>")
.bindTooltip("Crispy Basket",{
  permanent:true,
  direction:"right",
  })
