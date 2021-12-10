import * as S from './styles'

export const SearchBar = ({ getSearch, getUpdateSearch }) => {
  return (
    <S.Form>
      <input
        type="text"
        placeholder="Search for a country..."
        value={getSearch}
        onChange={getUpdateSearch}
      />
    </S.Form>
  );
};
