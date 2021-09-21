import '@fontsource/roboto';
import theme from './theme';
import useStyles from './style';
import { useEffect, useState } from 'react';
import { Container, CssBaseline, ThemeProvider } from '@material-ui/core';
import ResultsList from './components/ResultsList';
import SearchBar from './components/SearchBar';

const App = () => {
  const classes = useStyles();

  const [ repositories, setRepositories ] = useState([]);
  const [ repository, setRepository ] = useState({});
  const [ error, setError ] = useState('');

  const resetError = () => setError('');

  useEffect(() => {
    if (Object.keys(repository).length > 0) {
      fetch(`https://api.github.com/repos/${ repository.owner }/${ repository.repo }`)
        .then(response => response.json())
        .then(json => {
          if (json.message === 'Not Found') {
            setError('Repositório inexistente');
          } else if (json.message) {
            setError(json.message);
          } else {
            if (repositories.some(currentRepository => currentRepository.id === json.id)) {
              setError('Repositório já adicionado');
            } else {
              setRepositories([...repositories, json]);
            }
          }
        })
        .catch(caughtError => setError(caughtError));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [repository]);

  return (
    <ThemeProvider theme={ theme }>
      <CssBaseline />

      <Container className={ classes.container } maxWidth='sm'>
        <SearchBar setRepository={ setRepository } caughtError={ error } resetError={ resetError } />
        <ResultsList repositories={ repositories } />
      </Container>

    </ThemeProvider>
  );
};

export default App;