
import './App.css';
import Inputs from './components/Inputs';
import UilReact from "@iconscout/react-unicons/icons/uil-react";
import TopButtons from './components/TopButtons';
import TimeAndLocation from './components/TimeAndLocation';
import TempretureAndDetails from './components/TempretureAndDetails';
function App() {
  return (
    // <div className="App">
    //   {/* <h1 className="text-2xl font-bold text-red-500">Weather-App</h1>
    // <UilReact size={50} /> */}
    // </div>
    <div className="max-w-screen-md px-32 py-5 mx-auto mt-4 shadow-xl bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-gray-400 ">
<TopButtons />
<Inputs />

<TimeAndLocation />
<TempretureAndDetails />
    </div>
  );
}

export default App;
