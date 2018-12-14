import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import StripeCheckout from 'react-stripe-checkout';

class Payments extends Component {
  render() {
    return (
      <div>

          <StripeCheckout 
            name="Survey App"
            description="$5 for 5 credits"
            amount={500}
            token={token => this.props.handleToken(token)}
            stripeKey={process.env.REACT_APP_STRIPE_KEY}
          >
          <button className="btn pink">Add Credits</button>
          </StripeCheckout>
        
      </div>
    )
  }
}

export default connect(null, actions)(Payments)
