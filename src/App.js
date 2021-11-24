import { useEffect, useState } from "react";

import { Country } from './components/Country'
import { FilterRegion } from "./components/FilterRegion";
import { Header } from "./components/Header";
import { SearchBar } from "./components/SearchBar";
import { ContainerApp, ContainerGrid, FilterCountry, GlobalStyles } from "./global.styles";

function App() {
  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState('')

  // Todos os países
  const getCountries = async () => {
    try{
      const response = await fetch(`https://restcountries.com/v3.1/all`)
      const data = await response.json()
      setCountries(data)
    } catch (err){
      console.error(err)
    }
  }

  useEffect(() => {
    getCountries()
  }, [])
  // Todos os países


  // Países pesquisados
  const updateSearch = (e) => {
     setSearch(e.target.value)
    console.log(search)
  }
   // Países pesquisados

  return (
    <>
      <GlobalStyles />
      <div className="App">

        <Header />

        <ContainerApp>

          <FilterCountry>
            <SearchBar search={search} getUpdateSearch={updateSearch} />
            <FilterRegion />            
          </FilterCountry>

          <ContainerGrid>
            {
              countries.map(({flags:{svg} ,name:{common}, population, region, capital}) => (
                <Country flags={svg} name={common} population={population} region={region} capital={capital} />
              ))
            }
          </ContainerGrid>

        </ContainerApp>

      </div>
    </>
  );
}

export default App;
