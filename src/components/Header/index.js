import { Link } from 'react-router-dom';
import { Container } from './styles';

export const Header = () => {
  return (
    <Container>
      <div>
        <h1 onClick={() => window.location.reload(false)}>
          <Link to="/">
            Where in the world?
          </Link>
        </h1>
      </div>
    </Container>
  );
};
