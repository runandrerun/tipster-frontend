import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = {
  root: {
    flexGrow: 1,
  },
};

function SimpleAppBar(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <AppBar position="static" color="inherit">
        <Toolbar>
          <Typography variant="title" color="inherit">
            Travel Tipster
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

SimpleAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleAppBar);

// import React, { Component } from 'react';
// import '../styles/nav.css';
//
// class NavBar extends Component {
//   render() {
//     return (
//       <nav class="navbar" role="navigation" aria-label="main navigation">
//         <div class="navbar-brand">
//           <a class="brand-title" href="/">
//             Tipster
//           </a>
//
//           <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
//             <span aria-hidden="true"></span>
//             <span aria-hidden="true"></span>
//             <span aria-hidden="true"></span>
//           </a>
//         </div>
//       </nav>
//     );
//   }
// }
//
// export default NavBar;

// <img src={require("../icons/money.svg")} alt="Travel Tipster" width="112" height="28"/>
