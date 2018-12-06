import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import '../styles/nav.css';

const styles = {
  root: {
    flexGrow: 1,
  },
};

function SimpleAppBar(props) {
  const { classes } = props;

  return (
    <div className="navbar-space">
      <div className={classes.root}>
        <AppBar position="static" style={{ backgroundColor: "#2096F3" }}>
          <Toolbar>
            <Typography variant="title" color="inherit">
              Travel Tipster
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    </div>
  );
};

SimpleAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleAppBar);
