const btn = document.querySelector('button');
const divData = document.getElementById('data');
const textCity = document.getElementById('city');
const image = document.querySelector('img');
const circle = document.getElementById('circle');
const topMenuSelector = document.querySelectorAll('#topMenu > div');
const sideMenuSelector = document.querySelectorAll('#sideMenu > div:not(#ball)');
const ballMenu = document.getElementById("ball");
let temp;

function getData(city){
    
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=da24bd075527e1ea20918f419cbd4c31`)
    .then((resp) => {
        return resp.json();
    })
    .then(function(resp){
        circle.classList.remove("load");
        console.log(resp);
        divData.innerHTML = `<p>TEMP: ${parseInt(resp.main.temp)-273}ºC</p>
        <p>${resp.weather[0].description.toUpperCase()}</p>`;
    });
}

btn.addEventListener('click', function(){
    divData.innerHTML = "";
    circle.classList.add("load");
    setTimeout(function(){
        getData(textCity.value);
    }, 2000);
})


topMenuSelector.forEach((n) => dropDown(n, "topMenu"));

ballMenu.addEventListener("click", () => {
    sideMenuSelector.forEach((n) => {
        if(n.classList.contains("menuOpt")){
            n.classList.remove("menuOpt");
        }else{
            n.classList.add("menuOpt");
        }
    })
})

sideMenuSelector.forEach((n) => dropDown(n, "sideMenu"));

function dropDown(n, arg) {

    n.addEventListener("mouseover", () => {
        document.querySelector(`#${arg}`).childNodes.forEach((n) => {
            if(n.nodeName === 'DIV'){
                n.classList.remove('menuOpt');
            }
        })
    })
    n.addEventListener("mouseleave", () => {
        document.querySelectorAll(`#${arg} > div:not(.menuBanner)`).forEach((n) => {
            if(n.nodeName === 'DIV'){
                n.classList.add('menuOpt');
            }
        })
    })
    
}
