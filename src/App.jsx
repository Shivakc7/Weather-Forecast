import React from "react";
import { useState, useEffect } from "react";
import WeatherCard from "./components/WeatherCard";
import apiCall from "./components/apiCall";

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [country, setCountry] = useState(null);

  const getData = async () => {
    setWeatherData(null);
    try {
      if (city !== "") {
        const data = await apiCall(city);
        setWeatherData(data);
        setCountry(`${data.name} (${data.sys.country})`);
        setCity("");
        setErrorMsg("")
      }
    } catch (error) {
      setErrorMsg(error.response.data.message);
      setCity("");
    }
  };

  const onhandlePress = (e) => {
    if (e.key === "Enter") {
      getData();
    }
  };

  useEffect(() => {
    getData();
     // eslint-disable-next-line
  }, []);

  return (
    <div className="lg:bg-gray-700 w-full lg:py-10 p-2">
      <div className="lg:w-3/4 m-auto min-h-screen bg-gray-200 rounded-xl lg:rounded-3xl">
        <div className="flex flex-col ">
          <div className="pt-2 px-10 lg:w-1/3">
            <h1 className=" text-lg text-pink-800 font-bold shadow-md py-1 px-3 rounded-md bg-gray-500 bg-opacity-30 text-center">
              Weather forecast
            </h1>
          </div>

          {/* search container */}
          <div className="flex flex-col justify-center items-center my-10 ">
            <h2 className="text-xl font-bold">
              The Only Weather Forecast You Need
            </h2>
            <hr className="h-1 bg-blue-500 w-1/4 rounded-full my-4 " />

            <div className="lg:w-3/5 flex justify-center items-center bg-gray-600 bg-opacity-60 rounded-xl ">
              <input
                type="text"
                placeholder="Enter your city name ..."
                className="w-full bg-transparent  p-2 px-4    text-white placeholder-gray-200 focus:outline-none "
                value={city}
                onChange={(e) => setCity(e.target.value)}
                onKeyPress={onhandlePress}
                required
              />
              <button type="button" onClick={() => getData()} className="px-2 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-8 stroke-amber-50 cursor-pointer"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
            {/* Error Message */}
            {errorMsg !== undefined && (
              <p className="text-base text-red-700 capitalize lg:mt-2">
                {errorMsg}{" "}
              </p>
            )}
          </div>
        </div>

        {/* displaying weather data */}

        {weatherData !== null ? (
          <div className="flex flex-col">
            <WeatherCard weatherData={weatherData} country={country} />
          </div>
        ) : null}
      </div>
    </div>
  );
};
export default App;
