import React, { Component } from 'react'
import { connect } from 'react-redux'

class ThankYou extends Component {

  componentDidMount() {
	window.scrollTo(0, 0);
  }

  render() {
    console.log(this.props.mainReducer)
  	return (
  	  <React.Fragment>
  	    <section id="thank-you" className="App-header">
		      <div className="container main">
		        <h1>Thank you! Your Order Has Been Received</h1>
		        <p>Please check your email for info about what you've purchased.</p>
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