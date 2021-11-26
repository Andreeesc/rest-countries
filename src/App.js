import { useEffect, useState } from "react";

import { Country } from './components/Country'
import { FilterRegion } from "./components/FilterRegion";
import { Header } from "./components/Header";
import { SearchBar } from "./components/SearchBar";
import { ContainerApp, ContainerGrid, FilterCountry, GlobalStyles } from "./global.styles";

function App() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('all');

  // Todos os países
  const getCountries = async () => {
    try{
      const response = await fetch(`https://restcountries.com/v3.1/${query}`)
      const data = await response.json()
      setCountries(data)
    } catch (err){
      console.error(err)
    }
  }

  useEffect(() => {
    getCountries()
  }, [query])
  // Todos os países


  // Países pesquisados
  function updateSearch(e){
    setSearch(e.target.value)
  }

  function updateQuery(e){
    e.preventDefault()
    setQuery(`name/${search}`)
    setSearch('')
  }
  // Países pesquisados

  return (
    <>
      <GlobalStyles />
      <div className="App">

        <Header />

        <ContainerApp>

          <FilterCountry>
            <SearchBar getSearch={search} getUpdateSearch={updateSearch} getUpdateQuery={updateQuery} />
            <FilterRegion />            
          </FilterCountry>

          <ContainerGrid>
            {
              countries.map(({flags:{svg} ,name:{common}, population, region, capital}, index) => (
                <Country key={index} flags={svg} name={common} population={population} region={region} capital={capital} />
              ))
            }
          </ContainerGrid>

        </ContainerApp>

      </div>
    </>
  );
}

export default App;
