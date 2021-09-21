import { Avatar, Fade, IconButton, Paper, Typography } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import useStyles from './style';

const ResultsList = ({ repositories }) => {
  const classes = useStyles();

  const handleOpenRepositoryInNewTab = (url) => {
    window.open(url, "_blank").focus();
  };

  return(
    <div className={ classes.reverseList }>
      { repositories.map(repository => (
        <Fade in={ true } timeout={ 1_000 }>
          <Paper
            className={ classes.paper }
            key={ repository.id }
            elevation={ 4 }
          >
            <div className={ classes.gridContainer }>
              <div className={ classes.gridAvatar }>
                <Avatar 
                  className={ classes.large }
                  src={ repository.owner.avatar_url }
                  alt={ repository.owner.login }
                />
              </div>

              <div className={ classes.gridFullName }>
                <Typography
                  className={ classes.fullName }
                  variant='h5'
                  component='h2'
                >
                  { repository.full_name }
                </Typography>
              </div>

              <div className={ classes.gridDescription }>
                <Typography
                  className={ classes.description }
                  variant='subtitle1'
                  component='p'
                >
                  { repository.description }
                </Typography>
              </div>

              <div className={ classes.gridHtmlUrl }>
                <IconButton
                  className={ classes.margin }
                  onClick={ () => handleOpenRepositoryInNewTab(repository.html_url) }
                >
                  <ArrowForwardIosIcon />
                </IconButton>
              </div>
            </div>
          </Paper>
        </Fade>
      )) }
    </div>
  );
};

export default ResultsList;