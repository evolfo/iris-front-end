import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from "react-router"

import IrisInfo from '../components/IrisInfo'
import Loader from '../components/Loader'

import TextField from '@material-ui/core/TextField'
import MenuItem from "@material-ui/core/MenuItem"
import MuiPhoneNumber from 'material-ui-phone-number'
import { CountryRegionData } from "react-country-region-selector"

import { createPurchase, loadingStart, loadingEnd, updateUser } from '../Redux/actions'

import { CardElement, injectStripe } from 'react-stripe-elements'

class StarterPack extends Component {

	state = {
		firstName: '',
		lastName: '',
		emailAddress: '',
		phoneNumber: '',
		zipCode: '',
		address: '',
		cityName: '',
		province: '',
		country: ''
	}

	handleTextInput = (e) => {
	  if (e.target && typeof(e.target.value) === "object") {
	  	console.log(e.target.value)
	  	this.setState({
	  		country: e.target.value[0]
	  	})
	  } else if (e.target) {
	  	  this.setState({
	  	    [e.target.id]: e.target.value
	  	  })
	  } else {
	  	  this.setState({
	  	  	phoneNumber: e
	  	  })
	  }
    }

    handlePurchaseSubmit = async (e) => {
 	  e.preventDefault()

 	  this.props.loadingStart()

 	  // purchaseObj is being sent to my backend
      const purchaseObj = {
        amount: 8,
        bundleName: 'starter pack',
        userId: this.props.mainReducer.user.user.id
      }

      // sending this to updateUser()
      const userObj = {
      	firstName: this.state.firstName,
      	lastName: this.state.lastName,
      	emailAddress: this.state.emailAddress,
      	phoneNumber: this.state.phoneNumber,
      	zipCode: this.state.zipCode,
      	address: this.state.address + ", " + this.state.cityName + ", " + this.state.province + ", " + this.state.country
      }

      let {token} = await this.props.stripe.createToken({name: this.state.firstName})

      // this is Stripe's API, slightly different info is being sent
  	  // let response = await fetch("http://localhost:3000/api/v1/charge", {
  	  let response = await fetch("https://api.irislune.com/api/v1/charge", {
    	method: "POST",
    	headers: {
    		'Content-Type': 'application/json',
    		"Accepts": "application/json"
    	},
    	body: JSON.stringify({user_id: purchaseObj.userId, amount: (purchaseObj.amount * 100), stripeToken: token.id, email: 'jelly@bean.com' })
  	  })
  	    .then(stripeObj => {
  	    	this.props.updateUser(userObj, this.props.mainReducer.user.user.id)
  	    })
  	    .then(setTimeout(() => {
  	    	this.props.createPurchase(purchaseObj)
  	    	this.props.loadingEnd()
  	    	this.props.history.push(`/vip-offer`)
  	    }, 2000 ))
	}

	render() {
		console.log(this.props.mainReducer)
		return (
			<React.Fragment>
				<section className="App-header">
			        <div className="container main">
			        	<h1>Get Your FREE Starter Pack Bundle</h1>
			        	<h4>Includes 7 Iris Lune items</h4>
			        	<h5><span>($40</span> - FREE today - just cover shipping & handling)</h5>
			        </div>
			        <div className="container sp-container">
			        	<div className="sp-content">
			        	  <h3>Here's What You'll Get...</h3>
			        	  <h1>Starter Pack Bundle™</h1>
			        	  <img src="/img/starter-pack.jpg" alt="Starter pack" />
			        	  <ul>
			        	    <li>Iris Lune Pop Socket ($15 value)</li>
			        	    <li>​"Lost in Chatter" + "Self Titled" Lossless Audio + Hi Res Art ($15 value)</li>
			        	    <li>​2x "Stories in Glass" Stickers ($4 value)</li>
			        	    <li>​Iris Lune Matchbook ($2 value)</li>
			        	    <li>​2x Iris Lune Guitar Picks ($4 value)</li>
			        	  </ul>
			        	</div>
			        </div>
			        <form>
			          <div className="container main-form">
			            <h5>Shipping Info</h5>
			            <TextField
					      required
					      id="firstName"
					      autoFocus
					      margin="dense"
					      label="First name"
					      type="text"
					      fullWidth
					      value={this.state.firstName}
					      onChange={this.handleTextInput}
					    />
			            <TextField
					      required
					      id="lastName"
					      autoFocus
					      margin="dense"
					      label="Last name"
					      type="text"
					      fullWidth
					      value={this.state.lastName}
					      onChange={this.handleTextInput}
					    />
					    <TextField
					      required
					      id="emailAddress"
					      autoFocus
					      margin="dense"
					      label="Email Address"
					      type="email"
					      fullWidth
					      value={this.state.email}
					      onChange={this.handleTextInput}
					    />
					    <MuiPhoneNumber
					    	required
		                    name="phone"
		                    id="phoneNumber"
		                    label="Phone Number"
		                    data-cy="user-phone"
		                    fullWidth
		                    margin="dense"
		                    defaultCountry={"us"}
		                    value={this.state.phone}
		                    onChange={this.handleTextInput}
	                  	/>
						<TextField
					      required
					      id="address"
					      autoFocus
					      margin="dense"
					      label="Full Address"
					      type="text"
					      fullWidth
					      value={this.state.address}
					      onChange={this.handleTextInput}
					    />
					    <TextField
					      required
					      id="cityName"
					      autoFocus
					      margin="dense"
					      label="City"
					      type="text"
					      fullWidth
					      value={this.state.city}
					      onChange={this.handleTextInput}
					    />
					    <TextField
					      required
					      id="zipCode"
					      autoFocus
					      margin="dense"
					      label="Zip Code"
					      type="number"
					      fullWidth
					      value={this.state.zipCode}
					      onChange={this.handleTextInput}
					    />
					    <TextField
					      required
					      id="province"
					      autoFocus
					      margin="dense"
					      label="State/Province"
					      type="text"
					      fullWidth
					      value={this.state.province}
					      onChange={this.handleTextInput}
					    />
					    <TextField
					    	required
					    	autoFocus
					    	margin="dense"
					    	id="country"
					        label="Country"
					        value={this.state.country}
					        onChange={this.handleTextInput}
					        select
					        fullWidth
					      >
					        {CountryRegionData.map((option, index) => (
					          <MenuItem type="text" onClick={this.handleTextInput} key={option[0]} value={option}>
					            {option[0]}
					          </MenuItem>
					        ))}
					      </TextField>
					    <h5>Billing Info</h5>
					    <div className="card-element">
					      <CardElement style={{base: {iconColor: '#c4f0ff', color: '#fff', padding: '1rem' }}} />
					    </div>
					    <button className="submit-button" onClick={this.handlePurchaseSubmit} color="primary">Submit</button>
					    {this.props.mainReducer.loading ? <Loader /> : null}
			          </div>
			        </form>
			        <IrisInfo sp="from-starter-pack" />
			    </section>
			</React.Fragment>
		)
	}
}

const mapStateToProps = state => {
  return state
}

export default withRouter(connect(mapStateToProps, { createPurchase, loadingEnd, loadingStart, updateUser })(injectStripe(StarterPack)))