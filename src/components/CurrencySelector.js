import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { startBase, selectPrimaryCurrency, selectSecondaryCurrency } from '../actions';
import { connect } from 'react-redux';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});


class SimpleSelect extends React.Component {
  state = {
    primaryCurrency: '',
    secondaryCurrency: '',
  };

  handlePrimaryChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    let primary = {name: e.target.value, rate: this.props.currencies[`${e.target.value}`]}
    startBase(e.target.value)
  }

  handleSecondaryChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    let secondary = {name: e.target.value, rate: this.props.currencies[`${e.target.value}`]}
    selectSecondaryCurrency(secondary)
  }

  createMenuItems = () => {
    return Object.keys(this.props.currencies).map(currency => {
      return <MenuItem value={currency} key={currency}>{`${currency}`}</MenuItem>
    })
  }

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.root} autoComplete="off">

        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="age-helper">Currency</InputLabel>
          <Select
            value={this.state.primaryCurrency}
            onChange={this.handlePrimaryChange}
            input={<Input name="primaryCurrency" id="currency-helper" />}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            { this.createMenuItems() }
          </Select>
          <FormHelperText>Select Starting Currency</FormHelperText>
        </FormControl>

        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="age-helper">Currency</InputLabel>
          <Select
            value={this.state.secondaryCurrency}
            onChange={this.handleSecondaryChange}
            input={<Input name="secondaryCurrency" id="currency-helper" />}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            { this.createMenuItems() }
          </Select>
          <FormHelperText>Select Conversion Currency</FormHelperText>
        </FormControl>



      </form>
    );
  }
}

SimpleSelect.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect(null, { startBase, selectPrimaryCurrency, selectSecondaryCurrency })(withStyles(styles)(SimpleSelect));
