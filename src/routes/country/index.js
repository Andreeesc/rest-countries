import * as S from './styles'

import {Header} from '../../components/Header'

export const Country = () => {
  return (
    <>
      <Header />

      <S.Container>
        <div className="card-info">
          <h2>Country</h2>
          <p>
            <strong>Population:</strong>
          </p>
          <p>
            <strong>Region:</strong>
          </p>
          <p>
            <strong>Capital:</strong>
          </p>
        </div>
      </S.Container>
    </>
    
  );
};