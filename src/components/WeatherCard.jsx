import React from "react";

const WeatherCard = ({ weatherData, country }) => {
  const { main, sys, weather, wind } = weatherData;

  return (
    <div className=" mx-4">
      <div className=" w-4/5 m-auto flex flex-col justify-between my-2 min-h-min px-14 py-2  drop-shadow-xl rounded-md bg-[#5f5fe5]  ">
        <h1 className="text-2xl font-bold text-pink-900"> {country}</h1>
        <hr className=" bg-blue-500 rounded-full my-2 -mr-10 " />
        <div className="flex justify-between items-center gap-1">
          <div>
            <h2 className="text-3xl font-bold   text-stone-300  ">
              {main.temp}&deg;C
            </h2>
            <div className="flex font-semibold gap-4 pt-6">
              <div className="flex flex-col">
                <span>Sunrise </span>
                <span>
                  {new Date(sys.sunrise * 1000).toLocaleTimeString("default", {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}{" "}
                </span>
              </div>
              <div className="flex flex-col">
                <span>Sunset </span>
                <span>
                  {new Date(sys.sunset * 1000).toLocaleTimeString("default", {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}{" "}
                </span>
              </div>
            </div>
          </div>
          <div className="">
            <img
              className=" w-20 h-20"
              src={`http://openweathermap.org/img/wn/${weather[0].icon}.png`}
              alt="icon"
            />
            <p className="text-2xl text-zinc-800 capitalize">
              {weather[0].description}
            </p>
          </div>
        </div>
        <div className="flex justify-between pt-4">
          <div className="flex flex-col ">
            <span className="text-xl py-0">{main.humidity}% </span>
            <span className="text-base font-semibold">Humidity</span>
          </div>
          <div className="flex flex-col ">
            <span className="text-xl py-0">{wind.speed} m/s </span>
            <span className="text-base font-semibold">Wind</span>
          </div>
          <div className="flex flex-col ">
            <span className="text-xl py-0">{main.pressure} hPa </span>
            <span className="text-base font-semibold">Pressure</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
