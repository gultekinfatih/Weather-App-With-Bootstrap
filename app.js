let searchDOM = document.getElementById("search");
let buttonDOM = document.getElementById("searchBtn");
let contentDOM = document.querySelector("#content");

const url = "https://api.openweathermap.org/data/2.5/";
const apiKey = "5a1aa74dcb1d5653de402a705d16659b";
//Event Listeners / for enter
searchDOM.addEventListener("keypress", (e) => {
  if (e.key == "Enter") {
    // eğer bir e(event) gerçekleşir ve bu enter key'i olursa.. ==> if (e.keyCode == "13") /same
    let currentValue = searchDOM.value;
    searchValue(currentValue); // searchValue fonksiyonunun içinden yukarıda elde edilen currentValue ya ulaşabilmesi için..
  }
});
//For button / Get the input value
buttonDOM.addEventListener("click", () => {
  let currentValue = searchDOM.value;
  searchValue(currentValue);
});

// İnputa göre bilgi getirecek API
function searchValue(cityName) {
  //    console.log(cityName)
  let api = `${url}weather?q=${cityName}&appid=${apiKey}&units=metric`;
  //    console.log(api)
  fetch(api)
    .then((response) => response.json())
    .then((data) => {
      //    console.log(data)
      createContent(data);
    });
}
//Content creator
function createContent(data) {
  contentDOM.innerHTML = `
<div class="card mx-auto" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title text-center">${data.name}, ${data.sys.country}</h5>
    <p class="card-title text-center fst-italic">${data.weather[0].main}</p>
    <p class="card-text fs-1 text-center">${Math.round(data.main.temp)}°C</p>
    <p class="card-text text-center fst-italic">Max:${Math.round(
      data.main.temp_max
    )}°C/Min:${Math.round(data.main.temp_min)}°C</p>
  </div>
</div>
    `;
}
