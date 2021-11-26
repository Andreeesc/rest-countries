import { SelectStyle } from "./styles"

export const FilterRegion = ({getUpdateRegion, getRegion}) => {
  return (
    <SelectStyle onChange={getUpdateRegion} value={getRegion} >
      <option value="">Filter by Region</option>
      <option value="Africa">Africa</option>
      <option value="Americas">Americas</option>
      <option value="Antarctic">Antarctic</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </SelectStyle>
  )
}