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
  const [limit, setLimit] = useState(20)

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
  const updateSearch = e => {
    setSearch(e.target.value)
    console.log(search)
  }

  const updateQuery = e => {
    e.preventDefault()
    setQuery(search)
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
              countries.slice(0, limit ? limit : countries.length).map(({flags:{svg} ,name:{common}, population, region, capital}) => (
                <Country flags={svg} name={common} population={population} region={region} capital={capital} />
              ))
            }
          </ContainerGrid>
          <button onClick={() => setLimit(limit + 20)} className='show-more'>Show More</button>

        </ContainerApp>

      </div>
    </>
  );
}

export default App;
