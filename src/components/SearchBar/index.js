import { Form } from "./styles"

// export const SearchBar = (getSearch, getUpdateSearch, getUpdateQuery) => {
export const SearchBar = ({getUpdateQuery, getSearch, getUpdateSearch}) => {
  return(
    <Form onSubmit={getUpdateQuery}>
      <input type='text' placeholder="Search for a country..." 
        value={getSearch} 
        onChange={getUpdateSearch} 
      />
      <button type='submit'>Search</button>
    </Form>
  )
}