const apiKey = "8d4d47e3f3e41e9559fac12656d7a595"
const weatherDataEle = document.querySelector("#weather-data")
const cityNameEle = document.querySelector("#city-name")
const formEle = document.querySelector("form")
const imgIcon = document.querySelector(".icon")

formEle.addEventListener("submit", (e)=>{
    e.preventDefault()                            // (e)-> event To stop a form from submitting and reloading the page by default (behaviour of event)
    // console.log(cityNameEle.value);
    const cityValue = cityNameEle.value

    getWeatherData(cityValue)
})

async function getWeatherData(cityValue){
    try{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apiKey}&units=metric`)
        if(!response.ok){
            throw new Error("Network response is not ok!")
        }
        const data = await response.json()
        // console.log(data);

        const temperature = Math.floor(data.main.temp)         // all accessed from json object
        const description = data.weather[0].description
        const icon = data.weather[0].icon

        const details = [                                      // creating array to access all in place
            `Feels Like: ${Math.floor(data.main.feels_like)}°C`,
`Humidity: ${data.main.humidity}%`,
            `Wind Speed: ${data.wind.speed} m/s`
        ]

        weatherDataEle.querySelector(".temp").textContent = `${temperature}°C`
        weatherDataEle.querySelector(".desc").textContent = `${description}`

        imgIcon.innerHTML = `<img src="https://openweathermap.org/img/wn/${icon}.png" alt="">`

        weatherDataEle.querySelector(".details").innerHTML = details.map(()=>{
            return `<div>${detail}<div>`
        }).join("")

    }catch(err){
        weatherDataEle.querySelector(".temp").textContent = ""
        imgIcon.innerHTML = ""
        weatherDataEle.querySelector(".desc").textContent = "An Error Occured!"
    }
}
