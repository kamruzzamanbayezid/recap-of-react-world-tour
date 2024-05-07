import { useState, useEffect } from 'react'
import Country from './Country';
import './Countries.css'
import VisitedCountry from './VisitedCountry';

const Countries = () => {

      const [countries, setCountries] = useState([]);
      const [visitedCountry, setVisitedCountry] = useState([]);

      useEffect(() => {
            fetch('https://restcountries.com/v3.1/all')
                  .then(res => res.json())
                  .then(data => setCountries(data))
      }, [])

      const handleVisitedCountry = (country) => {
            setVisitedCountry([...visitedCountry, country])
      }

      const handleRemoveVisitedCountry = (uniqueId) => {
            const restCountry = visitedCountry?.filter(visited => visited?.cca3 !== uniqueId);
            setVisitedCountry(restCountry);
      }

      return (
            <div>
                  <h2>Total Countries: {countries.length}</h2>

                  <h3>Visited Countries: {visitedCountry.length}</h3>
                  <ul>
                        {
                              visitedCountry?.map((visited, idx) => <VisitedCountry
                                    key={idx}
                                    visitedCountry={visited}
                                    handleRemoveVisitedCountry={handleRemoveVisitedCountry}
                              ></VisitedCountry>)
                        }
                  </ul>
                  <div className='country-container'>
                        {
                              countries?.map((country, index) => <Country
                                    key={index}
                                    country={country}
                                    handleVisitedCountry={handleVisitedCountry}
                              ></Country>)
                        }
                  </div>
            </div>
      );
};

export default Countries;