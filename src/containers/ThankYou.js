import React, { Component } from 'react'
import { connect } from 'react-redux'

class ThankYou extends Component {
  render() {
    console.log(this.props.mainReducer)
  	return (
  	  <React.Fragment>
  	    <section id="thank-you" className="App-header">
		      <div className="container main">
		        <h1>Thank you! Your Order Has Been Received</h1>
		        <p>Thank you for your purchase, you can access your details below:</p>
		      </div>
		    </section>
  	  </React.Fragment>
  	)
  }
}

const mapStateToProps = state => {
  return state
}

export default connect(mapStateToProps)(ThankYou)