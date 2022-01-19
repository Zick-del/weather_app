import react, { useState, useEffect } from "react";
import './covid19.css';


const Covid20 = ({ countryCode }) => {

    const [countryData, setCountryData] = useState(null)


    useEffect(() => {
        fetch('https://api.covid19api.com/summary')
            .then(res => res.json())
            .then(result => {
                const country = result.Countries.filter(c => c.CountryCode.includes(countryCode));
                setCountryData(country)
                console.log(result)
            })
    }, [countryCode])

    return (

        countryData && countryData.length ? <div className="main-box">
            <span className="country">Country: {countryData[0].Country}</span>
            <span className="confirmed">Total confirmed: {countryData[0].TotalConfirmed}</span>
            <span className="deaths">Total deaths: {countryData[0].TotalDeaths}</span>
            <span className="recovered">Total recovered: {countryData[0].TotalRecovered}</span>

        </div> : <div>No data componentyn</div>

    )
}


export default Covid20;