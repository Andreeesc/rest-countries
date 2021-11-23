import { Form } from "./styles"

export const SearchBar = () => {
  return(
    <Form>
      <input type='text' placeholder="Search for a country..."/>
      <button>Search</button>
    </Form>
  )
}