import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    reverseList: {
      display: 'flex',
      flexDirection: 'column-reverse',
    },

    paper: {
      padding: theme.spacing(2),
      margin: [[theme.spacing(1), 0]],
    },

    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },

    fullName: {
      fontWeight: theme.typography.fontWeightBold,
      lineHeight: 1,
    },

    description: {
      color: theme.palette.text.secondary,
      lineHeight: 1,
    },

    gridContainer: {
      display: 'grid',
      gridTemplateColumns: [['1fr', '1fr']], 
      gridTemplateRows: [['1fr', '1fr', '1fr']],

      [theme.breakpoints.up('sm')]: {
        gridTemplateColumns: [[72, '1fr', 48]], 
        gridTemplateRows: [['1fr', '1fr']],
      },
    },

    gridAvatar: {
      gridColumnStart: 1,
      gridColumnEnd: 2,
      gridRowStart: 1,
      gridRowEnd: 2,
      justifySelf: 'center',
      
      [theme.breakpoints.up('sm')]: {
        gridColumnStart: 1,
        gridColumnEnd: 2,
        gridRowStart: 1,
        gridRowEnd: 3,
        alignSelf: 'center',
      },
    },

    gridFullName: {
      gridColumnStart: 1,
      gridColumnEnd: 3,
      gridRowStart: 2,
      gridRowEnd: 3,
      alignSelf: 'center',
      
      [theme.breakpoints.up('sm')]: {
        gridColumnStart: 2,
        gridColumnEnd: 3,
        gridRowStart: 1,
        gridRowEnd: 2,
      },
    },

    gridDescription: {
      gridColumnStart: 1,
      gridColumnEnd: 3,
      gridRowStart: 3,
      gridRowEnd: 4,

      [theme.breakpoints.up('sm')]: {
        gridColumnStart: 2,
        gridColumnEnd: 3,
        gridRowStart: 2,
        gridRowEnd: 3,
      },
    },

    gridHtmlUrl: {
      gridColumnStart: 2,
      gridColumnEnd: 3,
      gridRowStart: 1,
      gridRowEnd: 2,
      justifySelf: 'center',

      [theme.breakpoints.up('sm')]: {
        gridColumnStart: 3,
        gridColumnEnd: 4,
        gridRowStart: 1,
        gridRowEnd: 3,
        alignSelf: 'center',
      },
    },
  }));

  export default useStyles;