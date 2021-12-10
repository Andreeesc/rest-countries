import * as S from './styles'

export const Header = ({changeTheme, theme}) => {
  return (
    <S.Container>
      <div>
        <h1 onClick={() => window.location.reload(false)}>
          Where in the world?
        </h1>

        {
          theme !== 'lightTheme' ? (
            <button onClick={changeTheme}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20px" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
              Light theme
            </button>
          ) : (
            <button onClick={changeTheme}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20px" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
              Dark theme
            </button>
          )
        }
        
      </div>
    </S.Container>
  );
};
