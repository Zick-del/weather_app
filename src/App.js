import react, { useState } from "react";
import Covid19 from "./Components/Covid19/Covid19";
import WeatherApp from "./Components/WeatherApp/Weather";
import "./index.css";



function App() {

  const [countryCode, setCountryCode] = useState('')

  return (

    <div className="app" style={{ display: 'flex', flexDirection: 'row' }}>
      <WeatherApp setCountryCode={setCountryCode} />
      {countryCode && <Covid19 countryCode={countryCode} />}
      <div className="landing">Enter the city and you will get some information</div>
    </div>
  );
}

export default App;
