/*const url = 'https://air-quality-by-api-ninjas.p.rapidapi.com/v1/airquality?city=Delhi';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '3eace2c159mshb72cef5ffbd11aep1964e0jsn7ca048db3fd4',
        'X-RapidAPI-Host': 'air-quality-by-api-ninjas.p.rapidapi.com'
    }
};

//try {
    async function()
    const response = await fetch(url,options);
    const result = await response.json();
    console.log(result);
} catch (error) {
    console.error(error);
}
*/
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "--------",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

async function getWeather(city) {
    try{
  cityName.innerHTML = city;
  const response =await fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    const weatherData = await response.json()

   
      cloud_pct.innerHTML = weatherData.cloud_pct;
      // cloud_pct2.innerHTML = response.cloud_pct;
      temp.innerHTML = weatherData.temp;
      temp2.innerHTML = weatherData.temp;
      feels_like.innerHTML = weatherData.feels_like;
      humidity.innerHTML = weatherData.humidity;
      min_temp.innerHTML = weatherData.min_temp;
      max_temp.innerHTML = weatherData.max_temp;
      wind_speed.innerHTML = weatherData.wind_speed;
      wind_speed2.innerHTML = weatherData.wind_speed;
      wind_degrees.innerHTML = weatherData.wind_degrees;
      sunrise.innerHTML = new Date(
        weatherData.sunrise * 1000
      ).toLocaleTimeString();
      sunrise2.innerHTML = new Date(
        weatherData.sunrise * 1000
      ).toLocaleTimeString();
      sunset.innerHTML = new Date(weatherData.sunset * 1000).toLocaleTimeString();
    }

    catch(err)
     { console.error(err);}
}

submit.addEventListener("click", (e) => {
  e.preventDefault(); //Prevent the default form submission behaviors
  getWeather(city.value);
});

getWeather("Delhi");

delhiWeather.addEventListener("click", () => getWeather("Delhi"));
Seattleweather.addEventListener("click", () => getWeather("Seattle"));
Bangloreweather.addEventListener("click", () => getWeather("Bangalore"));
japanweather.addEventListener("click", () => getWeather("Japan"));

/*
const options = {
    method: "GET",
    headers: {
        "X-RapidAPI-Key": "3eace2c159mshb72cef5ffbd11aep1964e0jsn7ca048db3fd4",
        "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
    },
};
*/

//Weather for :  shanghai;
async function featchShangaiWeather(city) {
    try {
      const response = await fetch(
        "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Shangai",
        options
      );
        const weatherData = await response.json();


    sh_cloud_pct.innerHTML = weatherData.cloud_pct;
    sh_temp.innerHTML = weatherData.temp;
    sh_feels_like.innerHTML = weatherData.feels_like;
    sh_humidity.innerHTML = weatherData.humidity;
    sh_max_temp.innerHTML = weatherData.max_temp;
    sh_min_temp.innerHTML = weatherData.min_temp;
    sh_wind_speed.innerHTML = weatherData.wind_speed;
    sh_wind_degrees.innerHTML = weatherData.wind_degrees;
    sh_sunrise.innerHTML = new Date(
      weatherData.sunrise * 1000
    ).toLocaleTimeString();
    sh_sunset.innerHTML = new Date(weatherData.sunset * 1000).toLocaleTimeString();
    //  */
  }
  catch{
    (err) => console.error(err);

  }
}
//Weather for :  Boston;
async function featchLondonWeather(city) {
    try {
      const response = await fetch(
        "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=London",
        options
      );
        const weatherData = await response.json();


    bst_cloud_pct.innerHTML = weatherData.cloud_pct;
    bst_temp.innerHTML = weatherData.temp;
    bst_feels_like.innerHTML = weatherData.feels_like;
    bst_humidity.innerHTML = weatherData.humidity;
    bst_min_temp.innerHTML = weatherData.min_temp;
    bst_max_temp.innerHTML = weatherData.max_temp;
    bst_sunrise.innerHTML = new Date(
      weatherData.sunrise * 1000
    ).toLocaleTimeString();
    bst_sunset.innerHTML = new Date(
      weatherData.sunset * 1000
    ).toLocaleTimeString();
    bst_wind_degrees.innerHTML = weatherData.wind_degrees;
    bst_wind_speed.innerHTML = weatherData.wind_speed;
    //  */
  
    } catch(err) {
        
  console.error(err);
    }
}

//Weather for :  Lucknow;
async function featchLckWeather(city) {
  try {
    const response = await fetch(
      "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Lucknow",
      options
    );
    const weatherData = await response.json();

    luck_cloud_pct.innerHTML = weatherData.cloud_pct;
    luck_temp.innerHTML = weatherData.temp;
    luck_feels_like.innerHTML = weatherData.feels_like;
    luck_humidity.innerHTML = weatherData.humidity;
    luck_min_temp.innerHTML = weatherData.min_temp;
    luck_max_temp.innerHTML = weatherData.max_temp;
    luck_wind_speed.innerHTML = weatherData.wind_speed;
    luck_wind_degrees.innerHTML = weatherData.wind_degrees;
    luck_sunrise.innerHTML = new Date(weatherData.sunrise * 1000    ).toLocaleTimeString();
    luck_sunset.innerHTML = new Date(weatherData.sunset * 1000    ).toLocaleTimeString();
  } catch (err) {
    console.error(err);
  }
}

//Weather for :Kolkata  ;
async function featchDataWeather(city) {
  try {
    const response = await fetch(
      "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Kolkata",
      options
    );
    const weatherData = await response.json();

    kkt_cloud_pct.innerHTML = weatherData.cloud_pct;
    kkt_temp.innerHTML = weatherData.temp;
    kkt_feels_like.innerHTML = weatherData.feels_like;
    kkt_humidity.innerHTML = weatherData.humidity;
    kkt_min_temp.innerHTML = weatherData.min_temp;
    kkt_max_temp.innerHTML = weatherData.max_temp;
    kkt_wind_speed.innerHTML = weatherData.wind_speed;
    kkt_wind_degrees.innerHTML = weatherData.wind_degrees;
    kkt_sunrise.innerHTML = new Date(
      weatherData.sunrise * 1000
    ).toLocaleTimeString();
    kkt_sunset.innerHTML = new Date(
      weatherData.sunset * 1000
    ).toLocaleTimeString();
    //  */
  } catch (err) {
    console.error(err);
  }
}
featchDataWeather("kolkata");
featchLckWeather("Lucknow");
featchLondonWeather("London");
featchShangaiWeather("Shangai")
