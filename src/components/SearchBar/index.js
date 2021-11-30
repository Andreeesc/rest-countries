import { Form } from "./styles"

export const SearchBar = ({getSearch, getUpdateSearch}) => {
  return(
    <Form>
      <input type='text' placeholder="Search for a country..." 
        value={getSearch} 
        onChange={getUpdateSearch} 
      />
    </Form>
  )
}