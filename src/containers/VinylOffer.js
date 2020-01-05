import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'

import { createPurchase, loadingStart, loadingEnd } from '../Redux/actions'

import { injectStripe } from 'react-stripe-elements'

const slack = require('slack-notify')(process.env.REACT_APP_SLACK_WEBHOOK_URL)
// const slack = require('slack-notify')('https://hooks.slack.com/services/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')

class VinylOffer extends Component {

  componentDidMount() {
    window.scrollTo(0,0)
  }

  handlePurchaseSubmit = async (e) => {
 	  e.preventDefault()

 	  this.props.loadingStart()

 	  // purchaseObj is being sent to my backend
      const purchaseObj = {
        amount: 15,
        bundleName: 'vinyl bundle',
        userId: this.props.mainReducer.user.user.id
	  }
	  
	  this.props.createPurchase(purchaseObj)

      // this is Stripe's API, slightly different info is being sent
  	//   let response = await fetch("http://localhost:3000/api/v1/charge", {
      let response = await fetch("https://api.irislune.com/api/v1/charge", {
    	method: "POST",
    	headers: {
    		'Content-Type': 'application/json',
    		"Accepts": "application/json"
    	},
		  body: JSON.stringify({ user_id: purchaseObj.userId, amount: (purchaseObj.amount * 100), email: this.props.mainReducer.user.user.email, bundle_name: purchaseObj.bundleName })
  	  })
  	    .then(stripeObj => {
  	    	console.log('purchase created')
  	    })
  	    .then(setTimeout(() => {
			this.props.loadingEnd()
			slack.success({
				text: 'Secondary offer purchase',
				fields: {
					amount: purchaseObj.amount,
					bundleName: purchaseObj.bundleName,
					name: this.props.mainReducer.user.user.first_name + " " + this.props.mainReducer.user.user.last_name,
					zip: this.props.mainReducer.user.user.zip_code,
					email: this.props.mainReducer.user.user.email
				}
			})  
  	    	this.props.history.push(`/thank-you#cd`)
  	    }, 1000 ))
	}

  render() {
  	return(
  	  <React.Fragment>
  	    <section id="second-offer" className="App-header">
		  <div className="container main">
		    <h1><span>WAIT!</span> Special <span>ONE TIME ONLY</span> Offer</h1>
		    <h4>Add a Limited Edition CD To Your Order For 50% Off!</h4>
		    <div className="flexing">
			    <div className="col-6">
			      <img src="/img/leestavall.jpg" alt="VIP Bundle"/>
			    </div>
			    <div className="col-6">
			      <h3>Yes, I Want The Three CD</h3>
			      <h4>(Save $15)</h4>
			      <p>Thank you so much for supporting my music! You're the reason that I get to keep making music, and I want to give you 50% off my latest special merch item to show my appreciation.</p>
			      <p>Limited Edition “Three” CD: Limited printing of all Iris Lune songs to date. Only 200 copies were made and once they’re gone, they’re gone! Grab yours now.</p>
			      <p>The song on the record will be a surprise!</p>
			      <button onClick={this.handlePurchaseSubmit}>Add for $15 and Confirm Order</button>
			    </div>
			</div>
			<div className="bottom-button">
			  <Link to="/thank-you#starter-pack"><button>No thanks, I don't need this now</button></Link>
			</div>
		  </div>
		</section>
  	  </React.Fragment>
  	)
  }
}

const mapStateToProps = state => {
  return state
}

export default connect(mapStateToProps, { createPurchase, loadingEnd, loadingStart })(injectStripe(VinylOffer))