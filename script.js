const queryString = window.location.search;
//console.log(queryString);
const urlParams = new URLSearchParams(queryString);

//variable declaration
var tag_id = queryString ? urlParams.get('tag_id') : "No ID"
var tag_name = queryString ? urlParams.get('tag_name') : "NO NAME"
var tag_phone = queryString ? urlParams.get('tag_phone') : "0000"
//endof variable declaration

var x = document.getElementById("demo");
document.getElementById("tag_name").innerHTML = tag_name
document.getElementById("tag_phone").innerHTML = "<a href='tel:" + tag_phone + "'>"+ tag_phone + "</a>";


function getLocation() {
  	if (navigator.geolocation) {
    	navigator.geolocation.getCurrentPosition(showPosition);
  	} else { 
    	x.innerHTML = "Geolocation is not supported by this browser.";
  	}
}

function showPosition(position) {
	console.log(position);
	x.innerHTML = "Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude;
  const headers = new Headers()

  headers.append("Content-Type", "application/json")

  const body = {
    "tag_id":tag_id,
    "tag_name":tag_name,
    "latitude": position.coords.latitude,
    "longitude": position.coords.longitude,
    "time": new Date().toUTCString()
  }

  const options = {
    method: "POST",
    headers,
    mode: "cors",
    body: JSON.stringify(body),
  }

  fetch("https://eozpmqi4hp2hqp.m.pipedream.net", options)
}