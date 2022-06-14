

const btn = document.querySelector('button');
const divData = document.getElementById('data');
const textCity = document.getElementById('city');
const image = document.querySelector('img');
let temp;

async function getData(city){
    try{
        let weatherData = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=da24bd075527e1ea20918f419cbd4c31`);
        if(weatherData.status == 200){
            let jsData = await weatherData.json();
            temp = parseInt(jsData.main["temp"]) - 273;
            if(temp > 20 && temp < 30){
                image.src = "./images/cool.jpeg";
            }else if(temp >= 30){
                image.src = "./images/hot.jpg"
            }else{
                image.src = "./images/cold.png";
            }
            
        }else{
            console.log("uh oh");
        }
    }catch(err){
        console.log("uh oh");
    }
}


btn.addEventListener('click', function(){
    getData(textCity.value)
})