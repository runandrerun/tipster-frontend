// import React from 'react';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import Typography from '@material-ui/core/Typography';
//
// const styles = theme => ({
//   root: {
//     ...theme.mixins.gutters(),
//     paddingTop: theme.spacing.unit * 2,
//     paddingBottom: theme.spacing.unit * 2,
//   },
// });
//
// function CurrencyCard(props) {
//   const { classes } = props;
//
//   return (
//     <div>
//       <Paper className={classes.root} elevation={1}>
//         <Typography variant="headline" component="h3">
//
//         </Typography>
//         <Typography component="p">
//           Paper can be used to build surface or other elements for your application.
//         </Typography>
//       </Paper>
//     </div>
//   );
// }
//
// CurrencyCard.propTypes = {
//   classes: PropTypes.object.isRequired,
// };
//
// export default withStyles(styles)(CurrencyCard);

import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import '../styles/nav.css';

class CurrencyCard extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="currency-card">
          <Paper elevation={1}>
            <Typography variant="headline" component="h3">
              { this.props.currency }
            </Typography>
            <Typography component="p">
              { this.props.value }
            </Typography>
          </Paper>
        </div>
      </React.Fragment>
    );
  }
}

export default CurrencyCard;
