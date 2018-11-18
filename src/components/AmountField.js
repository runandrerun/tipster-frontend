import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
});


class AmountField extends React.Component {

  render() {

    const { classes } = this.props;

    return (
      <React.Fragment>
      <TextField
        id="standard-dense"
        label="Enter Amount"
        className={classNames(classes.textField, classes.dense)}
        margin="dense"
      />
      <TextField
          id="standard-read-only-input"
          label="Conversion Amount"
          defaultValue=""
          className={classes.textField}
          margin="normal"
          InputProps={{
            readOnly: true,
          }}
      />
      </React.Fragment>

    )};
  };

AmountField.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AmountField);
