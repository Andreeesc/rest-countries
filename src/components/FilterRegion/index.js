import { SelectStyle } from './styles';

export const FilterRegion = ({ continent, getUpdateRegion }) => {
  return (
    <SelectStyle value={continent} onChange={getUpdateRegion}>
      <option value="">Filter by Region</option>
      <option value="Africa">Africa</option>
      <option value="Americas">Americas</option>
      <option value="Antarctic">Antarctic</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </SelectStyle>
  );
};
