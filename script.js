const apiKey = "2a614d17c8ba5ff342fffcc438527034"
const weatherDataEle = document.querySelector("#weather-data")
const cityNameEle = document.querySelector("#city-name")
const formEle = document.querySelector("form")
const imgIcon = document.querySelector(".icon")

formEle.addEventListener("sumbit", (e)=>{
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
        const data = response.json()
        console.log(data); 
    }catch(err){

    }
}