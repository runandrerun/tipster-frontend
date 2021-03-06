import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import { conversion } from '../handlers/conversion';

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
    console.log(this.props.secondary['rate'])
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
          defaultValue={this.props.secondary ? `${this.props.secondary['rate']}` : ""}
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

  const mapStateToProps = (state) => {
    console.log(state.currencyState.rates.USD)
    return {
      rates: state.currencyState.rates,
      primary: state.currencyState.primaryCurrency,
      secondary: state.currencyState.secondaryCurrency,
    }
  }

export default connect(mapStateToProps, null )(withStyles(styles)(AmountField));
