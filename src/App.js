import { useEffect, useState } from 'react';

import { Country } from './components/Country';
import { FilterRegion } from './components/FilterRegion';
import { Header } from './components/Header';
import { SearchBar } from './components/SearchBar';
import {
  ContainerApp,
  ContainerGrid,
  FilterCountry,
  GlobalStyles,
} from './global.styles';

function App() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState('');
  const [region, setRegion] = useState([]);

  // Todos os países
  async function getCountries() {
    try {
      const response = await fetch(`https://restcountries.com/v3.1/all`);
      if (response.status !== 200) throw 'Não possível realizar essa ação';
      const data = await response.json();
      setCountries(data);
    } catch (err) {
      alert(err);
    }
  }

  useEffect(() => {
    getCountries();
  }, []);
  // Todos os países

  // Países pesquisados
  function updateSearch(e) {
    setSearch(e.target.value);
  }
  // Países pesquisados


  // Filtragem de continente
  function updateRegion(e){
    console.log(e.target.value)
    setRegion(e.target.value)
  }
  // Filtragem de continente

  return (
    <>
      <GlobalStyles />
      <div className="App">
        <Header />

        <ContainerApp>
          <FilterCountry>
            <SearchBar getSearch={search} getUpdateSearch={updateSearch} />

            <FilterRegion continent={region} getUpdateRegion={updateRegion} />
          </FilterCountry>

          <ContainerGrid>
            {
              [...countries]
              ?.filter(country => {
                const countryFilter = country.name.common
                  .toLowerCase()
                  .includes(search.toLowerCase());
                if (search === '' || countryFilter) {
                  return country;
                }
              })
              ?.map((country, index) => (
                <Country key={index} {...country} />
              ))
            }
          </ContainerGrid>
        </ContainerApp>
      </div>
    </>
  );
}

export default App;
