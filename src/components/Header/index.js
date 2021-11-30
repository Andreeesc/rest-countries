import { Container } from './styles';

export const Header = () => {
  return (
    <Container>
      <div>
        <h1 onClick={() => window.location.reload(false)}>
          Where in the world?
        </h1>
      </div>
    </Container>
  );
};
