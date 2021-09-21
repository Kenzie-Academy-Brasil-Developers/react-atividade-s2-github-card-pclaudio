import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: theme.spacing(1),
  },

  textField: {
    backgroundColor: 'white',
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,

    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: '#496A81',
    },

    '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: '#496A81',
    },

    '& .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.error.main,
    },
    
    '& .MuiOutlinedInput-notchedOutline': {
      borderWidth: 2,
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
      borderColor: '#496A81',
    },
  },

  button: {
    borderTopRightRadius: 4,
    borderTopLeftRadius: 0,
    borderBottomRightRadius: 4,
    borderBottomLeftRadius: 0,
    height: '100%',
    boxShadow: 'none',
    backgroundColor: '#496A81',

    '&:hover': {
      boxShadow: 'none',
      backgroundColor: '#3B5568',
    },
  },
}));

export default useStyles;