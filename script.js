const apiKey = "2a614d17c8ba5ff342fffcc438527034"
const weatherDataEle = document.querySelector(".weather-data")
const cityNameEle = document.querySelector("#city-name")
const formEle = document.querySelector("form")
const imgIcon = document.querySelector(".icon")

formEle.addEventListener("sumbit", ()=>{
    console.log(cityNameEle.value);
    // const cityValue = cityNameEle.value

    // getWeatherData(cityValue)
})


// function getWeatherData(){}