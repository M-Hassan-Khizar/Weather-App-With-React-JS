
import './App.css';
import getWeatherData from './services/WeatherServices';
import UilReact from "@iconscout/react-unicons/icons/uil-react";
import TopButtons from './components/TopButtons';
import Inputs from './components/Inputs';
import TimeAndLocation from './components/TimeAndLocation';
import TempretureAndDetails from './components/TempretureAndDetails';
import Forcast from './components/Forcast';

import getFormattedWeatherData from './services/WeatherServices';
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

function App() {
  const [query, setQuery] = useState({ q: "multan" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const message = query.q ? query.q : "current location.";

      toast.info("Fetching weather for " + message);

      await getFormattedWeatherData({ ...query, units }).then((data) => {
        toast.success(
          `Successfully fetched weather for ${data.name}, ${data.country}.`
        );

        setWeather(data);
      });
    };

    fetchWeather();
  }, [query, units]);

  const formatBackground = () => {
    if (!weather) return "from-cyan-700 to-blue-700";
    const threshold = units === "metric" ? 20 : 60;
    if (weather.temp <= threshold) return "from-cyan-700 to-blue-700";

    return "from-yellow-700 to-orange-700";
  };
  return (
  
    <div className={`max-w-screen-md px-32 py-5 mx-auto mt-4 shadow-xl bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-gray-400 ${formatBackground()}`}>
      
<TopButtons setQuery={setQuery}/>
<Inputs setQuery={setQuery} units={units} setUnits={setUnits}  />
{weather && (
        <div>
<TimeAndLocation weather={weather}/>
<TempretureAndDetails weather={weather} />
<Forcast title={"hourly Forecast"}items={weather.hourly} />

<Forcast title={"Daily Forecast"}items={weather.daily} />
    </div>
  )}
<ToastContainer autoClose={5000} theme="colored" newestOnTop={true} />
</div>

);}
export default App;
