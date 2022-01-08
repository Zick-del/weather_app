import react from 'react';
import './index.css';

const api = {
  key: "95a1ccd951918d20b68168c7f9058e20",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {

  const days = ['Sonntag', 'Montag', 'Dieanstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag',]
  const months = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember',]

  const dateBuilder = (d) => {
    let day = days[d.getDay()]
    let date = d.getDate()
    let month = months[d.getMonth()]
    let year = d.getFullYear()

    return `${day}, ${date}. ${month} ${year}`
  }

  return (
    <div className="app">
      <main>
        <div className='search-box'>
          <input
            type="text"
            className='search-bar'
            placeholder='Suchen...' />
        </div>

        <div className='temp'>-3 Grad</div>

        <div className='location'>Berlin</div>

        <div className='date'>{dateBuilder(new Date())}</div>

        <div className='weather'></div>
      </main>
    </div>
  );
}

export default App;
