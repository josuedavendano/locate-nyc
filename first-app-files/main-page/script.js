// Initialize and add the map
var button = document.querySelector("#mainButton");
var wrapper = document.querySelector("#wrapper");
var input = document.querySelector("#input");
var types_select = document.querySelector("#type")

console.log(button)

button.addEventListener("click", e => {
  var search = types_select.value
  var search2 = input.value
  console.log(search)
  sendApiRequest(search, search2);
})

function sendApiRequest(value, value2) {
  fetch("https://maps.googleapis.com/maps/api/place/findplacefromtext/json?key=AIzaSyDVNVgetxdEac1Nv1SUZaFbgpVQa5YB8hQ&input=" + value2 + "&inputtype=textquery&types=" + value)
    .then(function(data) {
      if (data.status === 'ZERO_RESULTS') {
        alert('no results')
      } else {
        return data.json();
      }
    })
// radar search insread of place search https://developers.google.com/places/web-service/search#nearby-search-and-text-search-responses


//https://maps.googleapis.com/maps/api/place/findplacefromtext/json?key=AIzaSyDVNVgetxdEac1Nv1SUZaFbgpVQa5YB8hQ&input='11377'&inputtype=textquery&types='museum'

.then(function(json) {
  console.log(json);
  // Pass the JSON on to the next function.
  //displayContent(json)
});
};

// function displayContent(json){
//     display.innerHTML = ''
//     json.forEach( product => {
//         var name = product.name
//         var price = product.price
//         var image = product.api_featured_image

//         var html = `
//             <div class="product">
//                 <h1>${name}</h1>
//                 <img src="${image}"> 
//                 <h3>${price}</h3>
//             </div>
//         `

//         display.innerHTML+=html
//     })
// }


// function initMap() {
//   // The locations of museums
//   var MoMA = { lat: 40.761433, lng: -73.977622 };
//   var MuseumofNaturalHistory = { lat: 40.781324, lng: -73.973988 };
//   var MetropolitanMuseumofArt = { lat: 40.779437, lng: -73.963244 };
//   var SolomonRGuggenheimMuseum = { lat: 40.782980, lng: -73.958971 };
//   var WhitneyMuseum = { lat: 40.739588, lng: -74.008863 };
//   var TheCloisters = { lat: 40.864863, lng: -73.931727 };
//   var BronxMuseum = { lat: 40.831012, lng: -73.919724 };
//   var NewYorkHallofScience = { lat: 40.747151, lng: -73.851666 };
//   var MuseumofSex = { lat: 40.744106, lng: -73.987411 };
//   var QueensMuseum = { lat: 40.745789, lng: -73.846708 };
//   var MoMAPS1 = { lat: 40.745490, lng: -73.947357 };
//   var ChildrensMuseum = { lat: 37.340379, lng: -95.263003 };
//   var BrooklynMuseum = { lat: 40.671206, lng: -73.963631 };
//   var MuseumofMovingImage = { lat: 40.756345, lng: -73.923950 };
//   var museumLocations = [MoMA, MuseumofNaturalHistory, MuseumofSex, MetropolitanMuseumofArt, SolomonRGuggenheimMuseum, WhitneyMuseum, TheCloisters, BronxMuseum, NewYorkHallofScience, QueensMuseum, MoMAPS1, ChildrensMuseum]

//   //The locations of zoo's and aquariums
//   var bronxZoo = { lat: 40.850595, lng: -73.876998 };
//   var manhattanZoo = { lat: 40.767778, lng: -73.971834 };
//   var queensZoo = { lat: 40.743968, lng: -73.849246 };
//   var statenislandZoo = { lat: 40.625124, lng: -74.115370 };
//   var prospectParkZoo = { lat: 40.665375, lng: -73.965414 };
//   var nyAquarium = { lat: 40.574264, lng: -73.974874 };

//   var zooLocations = [bronxZoo, manhattanZoo, queensZoo, statenislandZoo, prospectParkZoo, nyAquarium]

//   // The map, centered at Uluru
//   var map = new google.maps.Map(
//     document.getElementById('map'), { zoom: 11, center: WhitneyMuseum });
//   // The marker, positioned at Uluru
//   museumLocations.forEach(place => {
//     var marker = new google.maps.Marker({ position: place, map: map })
//   })

//   zooLocations.forEach(place => {
//     var marker = new google.maps.Marker({ position: place, map: map })
//   })

// }

 // Note: This example requires that you consent to location sharing when
      // prompted by your browser. If you see the error "The Geolocation service
      // failed.", it means you probably did not give permission for the browser to
      // locate you.
      var map, infoWindow, service;
      var mapStyle = document.mapStyle
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 10,
          styles:  [
  {
    "elementType": "geometry.fill",
    "stylers": [
      {
        "weight": 0.5
      }
    ]
  },
  {
    "elementType": "labels.text",
    "stylers": [
      {
        "color": "#1a1a1a"
      },
      {
        "lightness": -5
      },
      {
        "visibility": "simplified"
      }
    ]
  },
  {
    "featureType": "administrative",
    "stylers": [
      {
        "color": "#505050"
      },
      {
        "visibility": "simplified"
      }
    ]
  },
  {
    "featureType": "administrative.neighborhood",
    "stylers": [
      {
        "color": "#ce00f9"
      },
      {
        "visibility": "on"
      }
    ]
  },
  {
    "featureType": "administrative.neighborhood",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#000000"
      },
      {
        "weight": 1
      }
    ]
  },
  {
    "featureType": "landscape.man_made",
    "stylers": [
      {
        "color": "#e8d1f2"
      },
      {
        "lightness": -5
      }
    ]
  },
  {
    "featureType": "poi",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.attraction",
    "stylers": [
      {
        "visibility": "simplified"
      }
    ]
  },
  {
    "featureType": "poi.attraction",
    "elementType": "labels.text",
    "stylers": [
      {
        "color": "#153ff1"
      },
      {
        "lightness": 15
      },
      {
        "visibility": "simplified"
      },
      {
        "weight": 0.5
      }
    ]
  },
  {
    "featureType": "poi.park",
    "stylers": [
      {
        "color": "#e2f1a6"
      },
      {
        "lightness": 30
      },
      {
        "visibility": "simplified"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text",
    "stylers": [
      {
        "color": "#5364f1"
      },
      {
        "visibility": "simplified"
      }
    ]
  },
  {
    "featureType": "road",
    "stylers": [
      {
        "color": "#eff1f0"
      },
      {
        "lightness": 30
      },
      {
        "visibility": "simplified"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text",
    "stylers": [
      {
        "color": "#f1ee7d"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#161616"
      },
      {
        "visibility": "on"
      },
      {
        "weight": 0.5
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#9fabb6"
      },
      {
        "visibility": "simplified"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#d4e3f2"
      },
      {
        "visibility": "simplified"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  }
]
        });
        // find places and location bias https://developers.google.com/maps/documentation/javascript/places
//           var request = {
//     query: 'Museum of Contemporary Art Australia',
//     fields: ['photos', 'formatted_address', 'name', 'rating', 'opening_hours', 'geometry'],

//   service = new google.maps.places.PlacesService(map);
//   service.findPlaceFromQuery(request, callback);
// }

// function callback(results, status) {
//   if (status == google.maps.places.PlacesServiceStatus.OK) {
//     for (var i = 0; i < results.length; i++) {
//       var place = results[i];
//       createMarker(results[i]);
//     }
//   }
// }

        infoWindow = new google.maps.InfoWindow;

        // Try HTML5 geolocation.
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

            infoWindow.setPosition(pos);
            infoWindow.setContent('Location found.');
            infoWindow.open(map);
            map.setCenter(pos);
          }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
          });
        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.getCenter());
        }
      }

      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');
        infoWindow.open(map);
      }

