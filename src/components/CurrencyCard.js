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


class CurrencyCard extends Component {
  render() {
    return (
      <div className="Currency-Card">
        { this.props.currency }
        { this.props.value }
      </div>
    );
  }
}

export default CurrencyCard;
