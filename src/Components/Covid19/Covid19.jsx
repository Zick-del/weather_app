import react, { useState, useEffect } from "react";
import './covid19.css';


const Covid19 = ({ countryCode }) => {

    const [countryData, setCountryData] = useState(null)


    useEffect(() => {
        fetch('https://api.covid19api.com/summary')
            .then(res => res.json())
            .then(result => {
                const country = result.Countries.filter(c => c.CountryCode.includes(countryCode));
                setCountryData(country)
                console.log(country)
            })
    }, [countryCode])


    const formatNumbers = (n) => {
        let i = n;
        let re = /(?=\B(?:\d{3})+(?!\d))/g;
        let j = n.toString().replace(re, ' ')
        return j
    }

    return (

        countryData && countryData.length ? <div className="main-box">
            <div className="container">
                <h1 style={{ textTransform: 'uppercase', fontSize: '40px' }} className="item item-country">{countryData[0].Country}</h1>

                <div className="item item-confirmed">
                    <div className="new-grid">
                        <span style={{ color: '#fff' }}>{formatNumbers(countryData[0].NewConfirmed)}</span>
                        <br />New confirmed
                    </div>
                    <div className="total-grid"><span style={{ color: '#fff' }}>{formatNumbers(countryData[0].TotalConfirmed)}</span>
                        <br />Total confirmed
                    </div>
                </div>

                <div className="item item-deaths">
                    <div className="new-grid"><span style={{ color: '#fff' }}>{formatNumbers(countryData[0].NewDeaths)}</span>
                        <br />New deaths
                    </div>
                    <div className="total-grid"><span style={{ color: '#fff' }}>{formatNumbers(countryData[0].TotalDeaths)}</span>
                        <br />Total deaths
                    </div>
                </div>

                <div className="item item-recovered"><span>{formatNumbers(countryData[0].TotalRecovered)}</span>
                    <br />Recovered
                </div>
            </div>
        </div> : <div className="no-data">Sorry, currently no information is available :(</div>

    )
}


export default Covid19;