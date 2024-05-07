
import { useState } from 'react';
import './Country.css'

const Country = ({ country, handleVisitedCountry }) => {

      const [visited, setVisited] = useState(false);

      return (
            <div className='country'>
                  <img src={country?.flags?.png} alt="" />
                  <h3>Name: {country?.name?.common}</h3>
                  <p style={{ color: visited && 'red' }}>{visited ? 'I have visited this country' : 'I wanna visit this country'}</p>
                  <div>
                        <button onClick={() => { setVisited(!visited);handleVisitedCountry(country) }}>{visited ? 'Visited' : 'Visit'}</button>
                  </div>
            </div>
      );
};

export default Country;