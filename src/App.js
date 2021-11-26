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
  const [region, setRegion] = useState('')

  // Todos os países
  async function getCountries(){
    try{
      const response = await fetch(`https://restcountries.com/v3.1/${query}`)
      if(response.status !== 200) throw 'Não possível realizar essa ação'
      const data = await response.json()
      setCountries(data)
    } catch (err){
      alert(err)
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

  function updateQueryRegion(e){
    setRegion(e.target.value)
    console.log(region)
    setQuery(`region/${region}`)
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
            <FilterRegion getRegion={region} getUpdateRegion={updateQueryRegion} />            
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
