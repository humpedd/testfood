var map = L.map('map').setView([14.283439783617263, 120.86833698037864], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var paresMarker = L.marker([14.273491231009755, 120.871875555],{

})
.addTo(map)
.bindPopup("<h3>Pares ni Peso</h3> <img src='https://scontent.fmnl18-1.fna.fbcdn.net/v/t39.30808-6/294213096_342514081419047_6091497035033201825_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeFUrU5tztVJE8iUgdxHj4TFvjwJ-oLWWNG-PAn6gtZY0Qi3t-vv5RIk4IPn29iMpDc&_nc_ohc=iCK_TVCmGYgAX8VGC39&_nc_ht=scontent.fmnl18-1.fna&oh=00_AT-I1PrjIS_k7XnuwILK7NkJct33Ic1CWWUAn7OwFxyPyg&oe=635C6F68'/>")
.bindTooltip("Pares ni Peso",{
  permanent:true,
  direction:"right",
  })

var vietMarker = L.marker([14.300303835957237, 120.864181840765315],{
})
.addTo(map)
.bindPopup("<h3>Hidden Vietnam</h3> <img src='images/hidden.jpg'/>")
.bindTooltip("Hidden Vietnam",{
  permanent:true,
  direction:"right",
  })


var mikaysMarker = L.marker([14.283798121934066, 120.8530771812452],{
})
.addTo(map)
.bindPopup("<h4>Mikay's Restaurant</h4> <img src='https://scontent.fmnl18-1.fna.fbcdn.net/v/t39.30808-6/241383525_106388545120841_2894420032775500756_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGSjSAYLq9XV9s8V2BUmtaGulROlOCFLyS6VE6U4IUvJBS9sT1DSR3W8FPdVtJ7nZg&_nc_ohc=2eOBBzlr5XUAX8uIG1L&_nc_oc=AQnlmaO8bmuzHDkRubnWv1cVRQ5ggcW6JTjbcqzj30xBYpUp7T7t9HUhtHGnqaT0-x8&_nc_ht=scontent.fmnl18-1.fna&oh=00_AT_ekFunOuHoebkBwCQsojGEoXu-2AQsZhn2rYtDP_Vh7g&oe=635C4552'/>")
.bindTooltip("Mikay's Restaurant",{
  permanent:true,
  direction:"right",
  })
