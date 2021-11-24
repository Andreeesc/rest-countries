import { Form } from "./styles"

export const SearchBar = (search, getUpdateSearch) => {
  return(
    <Form>
      <input type='text' placeholder="Search for a country..." value={search} onChange={getUpdateSearch} />
      <button type='submit'>Search</button>
    </Form>
  )
}