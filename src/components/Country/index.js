import * as S from './styles'

export const Country = ({ flags, name:{common}, population, region, capital }) => {
  return (
    <S.Container>
      <figure>
        <img src={flags.svg} alt={common} title={common} />
      </figure>
      <div className="card-info">
        <h2>{common}</h2>
        <p>
          <strong>Population:</strong> {population}
        </p>
        <p>
          <strong>Region:</strong> {region}
        </p>
        <p>
          <strong>Capital:</strong> {capital}
        </p>
      </div>
    </S.Container>
  );
};
