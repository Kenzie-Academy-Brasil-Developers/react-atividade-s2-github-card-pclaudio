import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Grid, InputAdornment, Snackbar, TextField } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import SearchIcon from '@material-ui/icons/Search';
import { yupResolver } from '@hookform/resolvers/yup';
import schema from './schema';
import useStyles from './style';

const Alert = (props) => <MuiAlert elevation={6} variant='filled' {...props} />;

const SearchBar = ({ setRepository, caughtError, resetError }) => {
  const classes = useStyles();

  const [ open, setOpen ] = useState(false);
  const [ error, setError ] = useState('');

  const { register, handleSubmit, reset, formState: { errors } } = useForm({ 
    resolver: yupResolver(schema), 
  });

  const handleSearch = (data) => {
    const searchText = data.searchText.split('/');
    const parameters = {
      owner: searchText[0],
      repo: searchText[1],
    };

    setRepository(parameters);
    reset();
  };

  const handleCloseAlert = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
    resetError();
  };

  const showAlert = message => {
    if (message) {
      setError(message);
      setOpen(true);
    }
  };

  useEffect(() => {
    showAlert(errors.searchText?.message);
  }, [errors]);

  useEffect(() => {
    showAlert(caughtError);
  }, [caughtError]);

  return (
    <div className={ classes.root }>
      <form onSubmit={ handleSubmit(handleSearch) }>
        <Grid container spacing={ 0 }>
          <Grid item xs={ 8 } sm={ 9 }>
            <TextField
              autoFocus
              fullWidth
              className={ classes.textField }
              placeholder='Buscar repositório'
              error={ !!errors.searchText }
              variant='outlined'
              type='search'
              { ...register('searchText') } 
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <SearchIcon color='disabled' />
                  </InputAdornment>
                ),
              }} 
            />
          </Grid>

          <Grid item xs={ 4 } sm={ 3 }>
            <Button
              fullWidth
              className={ classes.button }
              type='submit'
              variant='contained'
              color='primary'
              size='large'
            >
              Pesquisar
            </Button>
          </Grid>
        </Grid>
      </form>

      <Snackbar open={ open } autoHideDuration={ 6000 } onClose={ handleCloseAlert }>
        <Alert onClose={ handleCloseAlert } severity='error'>
          { error }
        </Alert>
      </Snackbar>
    </div>
  );
};

export default SearchBar;