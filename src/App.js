import react, {useState} from "react";
import Covid20 from "./Components/Covid19/Covid19";
import WeatherApp from "./Components/WeatherApp/Weather";
import "./index.css";



function App() {

  const [countryCode, setCountryCode] = useState('')

  return (
    <div className="app" style={{display: 'flex', flexDirection: 'row'}}>
      <WeatherApp setCountryCode={setCountryCode}/>
      {countryCode && <Covid20 countryCode={countryCode} />}
    </div>
  );
}

export default App;
