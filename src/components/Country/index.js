import { Container } from "./styles"

export const Country = ({flags, name, population, region, capital}) => {
  return (
    <Container>
      <figure>
        <img src={flags.svg} alt={name.common} title={name.common} />
      </figure>
      <div className="card-info">
        <h2>{name.common}</h2>
        <p><strong>Population:</strong> {population}</p>
        <p><strong>Region:</strong> {region}</p>
        <p><strong>Capital:</strong> {capital}</p>
      </div>
    </Container>
  )
}