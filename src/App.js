import { useEffect, useState } from 'react';

import { ThemeProvider } from 'styled-components';

import { Country } from './components/Country';
import { FilterRegion } from './components/FilterRegion';
import { Header } from './components/Header';
import { SearchBar } from './components/SearchBar';

import * as S from './global.styles'
import { darkTheme, lightTheme } from './theme';

function App() {
  const [theme, setTheme] = useState('darkTheme');
  function toggleTheme() {
    if (theme === 'darkTheme') {
      setTheme('lightTheme');
    } else {
      setTheme('darkTheme');
    }
  }

  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState('');
  const [region, setRegion] = useState('');

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
  }, [region]);
  // Todos os países

  // Países pesquisados
  function updateSearch(e) {
    setSearch(e.target.value);
  }
  // Países pesquisados


  // Filtragem de continente
  function updateRegion(e){
    setRegion(e.target.value)
  }

  // Filtragem de continente

  return (
    <ThemeProvider theme={theme === 'darkTheme' ? darkTheme : lightTheme}>
      <>
        <S.GlobalStyles />
        <div className="App">
          <Header changeTheme={toggleTheme} theme={theme} />

          <S.ContainerApp>
            <S.FilterCountry>
              <SearchBar getSearch={search} getUpdateSearch={updateSearch} />

              <FilterRegion continent={region} getUpdateRegion={updateRegion} />
            </S.FilterCountry>

            <S.ContainerGrid>

              {
                region === '' ? (
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
                ) : (
                  [...countries]
                  ?.filter(country => {
                    const regionFilter = country.region.includes(region);
                    if (region === '' || regionFilter) {
                      return country;
                    }
                  })
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
                )
              }

            </S.ContainerGrid>
          </S.ContainerApp>
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;