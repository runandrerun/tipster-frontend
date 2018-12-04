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
