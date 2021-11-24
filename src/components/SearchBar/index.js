import { Form } from "./styles"

export const SearchBar = (search, getUpdateSearch) => {
  return(
    // <Form onSubmit={getSearch}>
    <Form>
      <input type='text' placeholder="Search for a country..." onChange={getUpdateSearch} />
      <button type='submit'>Search</button>
    </Form>
  )
}