import { Link } from 'react-router-dom';
import { Container } from './styles';

export const Country = ({ flags, name:{common}, population, region, capital }) => {
  return (
    <Container>
      <figure>
        <img src={flags.svg} alt={common} title={common} />
      </figure>
      <div className="card-info">
        <Link to="/country">
          <h2>{common}</h2>
        </Link>
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
    </Container>
  );
};
