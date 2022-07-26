import React from "react";

const WeatherCard = ({ weatherData, country }) => {
  const { main, sys, weather, wind } = weatherData;

  return (
    <div className="mx-4 max-h-screen">
      <div className="lg:w-4/5 m-auto flex flex-col lg:my-2 h-4/5 lg:min-h-min lg:px-14 px-2 py-2  drop-shadow-xl rounded-md bg-[#7171db]  ">
        <h1 className="text-2xl font-bold  "> {country}</h1>
        <hr className=" bg-blue-500 rounded-full my-2 lg:-mr-10 " />
        <div className="flex flex-col lg:flex-row justify-between items-center gap-1 my-3 lg:my-1">
          <div className="">
            <h2 className="text-4xl font-bold text-stone-300  ">
              {main.temp}&deg;C
            </h2>
            <div className="invisible lg:visible flex font-semibold -0 lg:gap-4 lg:pt-6">
              <div className="flex  flex-col">
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
          <div className="flex flex-col justify-center items-center gap-2">
            <img
              className="w-20 h-20 bg-slate-800 rounded-full"
              src={`http://openweathermap.org/img/wn/${weather[0].icon}.png`}
              alt="icon"
            />
            <p className="text-2xl text-zinc-800 capitalize pb-4 lg:pb-0">
              {weather[0].description}
            </p>
          </div>
        </div>
        <div className="flex justify-between pt-4 px-4 lg:px-0">
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
