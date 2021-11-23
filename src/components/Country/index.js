import { Container } from "./styles"

export const Country = ({flags, name, population, region, capital}) => {
  return (
    <Container>
      <figure>
        <img src={flags} alt={name} title={name} />
      </figure>
      <div className="card-info">
        <h2>{name}</h2>
        <p><strong>Population:</strong> {population}</p>
        <p><strong>Region:</strong> {region}</p>
        <p><strong>Capital:</strong> {capital}</p>
      </div>
    </Container>
  )
}