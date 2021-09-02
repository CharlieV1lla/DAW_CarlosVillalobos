var cityName;
var result;

function getWeather() {
  var textElement1 = document.getElementById("lat");
  var textElement2 = document.getElementById("lon");
  var resultElement =  document.getElementById("resultado");

  lat = textElement1.value;
  lon = textElement2.value;
  $.getJSON("https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&appid=7b402d34f50cc82a9fee3b7a73cf91bd",
    function(json) {
      console.log(json);
      $('#resultado').text(JSON.stringify(json));
    }
  );
  result = JSON.parse(resultElement.innerHTML);
}
