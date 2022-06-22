let weather={
    "apikey": "0fbcfc513cf61557824460bd094e8fa7",
    fetchWeather: function(city){
        fetch("https://api.openweathermap.org/data/2.5/weather?q="
        +city+
        "&units=metric&appid="
        +this.apikey
        )
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data){
        const {name} =data;
        const {icon,description} = data.weather[0];
        const {temp,humidity} = data.main;
        const {speed} =data.wind;
        // console.log(name,icon,description,temp,humidity,speed);
        document.querySelector(".city").innerText= "Weather in " + name ;
        document.querySelector(".temp").innerText=temp + "°C";
        document.querySelector(".icon").src="https://openweathermap.org/img/wn/"+icon+".png";
        document.querySelector(".desc").innerText=description;
        document.querySelector(".humid").innerText="Humidity : " + humidity + "%";
        document.querySelector(".wind").innerText="Wind Speed : " + speed + "km/h";
        document.body.style.backgroundImage= "url('https://source.unsplash.com/random/1920x1080/? "+ name +"')";
    },
    search: function(){
        this.fetchWeather(document.querySelector(".s-bar").value);
    }
};
document.querySelector(".search button").addEventListener("click",function(){
    weather.search();
})
document.querySelector(".s-bar").addEventListener("keyup",function(event){
    if(event.key=="Enter"){
        weather.search();
    }
})
weather.fetchWeather("Kolkata");