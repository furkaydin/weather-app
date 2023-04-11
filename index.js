const apiKey = "dd3c7e395b03777df088b5590bf12bd6";
const cityButtons = document.querySelectorAll(".city-btn");


cityButtons.forEach(function(button) {
  button.addEventListener("click", function() {
    const city = button.value;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
     document.getElementById("city").innerText = data.name;
     document.getElementById("temp").innerText = Math.round(data.main.temp) + "°";
     document.getElementById("humidity").innerText = data.main.humidity;
     document.getElementById("description").innerText = data.weather[0].description;
       
        switch(data.weather[0].description)
        {
          case "overcast clouds":
            document.getElementById("description").innerText = "Kapalı Bulutlu"
            break;
          case "broken clouds":
            document.getElementById("description").innerText = "Hafif Bulutlu"
            break;
          case "light intensity shower rain":
            document.getElementById("description").innerText = "Ara Ara Sağanak Yağmur"
        }
      })
      .catch(error => {
        console.error(error);
      });
  });
});