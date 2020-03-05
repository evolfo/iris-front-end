import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from "react-router"

import IrisInfo from '../components/IrisInfo'
import Loader from '../components/Loader'

import TextField from '@material-ui/core/TextField'
import MenuItem from "@material-ui/core/MenuItem"
import PhoneInput from 'react-phone-number-input'
import { CountryRegionData } from "react-country-region-selector"

import { createPurchase, loadingStart, loadingEnd, createUser, updateUser } from '../Redux/actions'

import { CardElement, injectStripe } from 'react-stripe-elements'

const slack = require('slack-notify')(process.env.REACT_APP_SLACK_WEBHOOK_URL)
// const slack = require('slack-notify')('https://hooks.slack.com/services/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')
const BUNDLE_NAME = 'starter pack bundle'
const AMOUNT = 8

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
		country: '',
		scrolled: false,
		errorMsg: '',
		submitButtonDisabled: false
	}
	
	componentDidMount() {
		document.querySelector('#country').type = ""
	}

	componentDidUpdate() {
		if(!this.state.scrolled) {
			window.scrollTo(0, 0);
			this.setState({
				scrolled: true
			})
		}
	}

	handleTextInput = (e) => {
	  if (e) {
		if (e.target && typeof(e.target.value) === "object") {
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
    }

    handlePurchaseSubmit = async (e) => {
 	  e.preventDefault()
	  this.setState({ submitButtonDisabled: true })
	  this.props.loadingStart()
	   
	  // sending this to updateUser()
	  const userObj = {
		firstName: this.state.firstName,
		lastName: this.state.lastName,
		emailAddress: this.state.emailAddress,
		phoneNumber: this.state.phoneNumber,
		zipCode: this.state.zipCode,
		address: this.state.address + ", " + this.state.cityName + ", " + this.state.province + ", " + this.state.country
	  }

	  if(this?.props?.mainReducer?.user?.user?.id) {
		// purchaseObj is being sent to my backend
		const purchaseObj = {
		  amount: AMOUNT,
		  bundleName: BUNDLE_NAME,
		  userId: this.props.mainReducer.user.user.id
		}

		this.props.createPurchase(purchaseObj)
		this.props.updateUser(userObj, this.props.mainReducer.user.user.id)
	  } else {
		const createUserObj = {
		  firstName: this.state.firstName, lastName: this.state.lastName, zipCode: this.state.zipCode, email: this.state.email, fanLvl: this.props.mainRefanLvl
		}

		this.props.createUser(createUserObj)
		  .then(() => {
			const purchaseObj = {
			  amount: AMOUNT,
			  bundleName: BUNDLE_NAME,
			  userId: this.props.mainReducer.user.user.id
			}

			this.props.createPurchase(purchaseObj)
			this.props.updateUser(userObj, this.props.mainReducer.user.user.id)
		  })
	  }

	//   this.props.createPurchase(purchaseObj)
	//   this.props.updateUser(userObj, this.props.mainReducer.user.user.id)

      let {token} = await this.props.stripe.createToken({name: this.state.firstName})

	  if (token) {
		// this is Stripe's API, slightly different info is being sent
		//   let response = await fetch("http://localhost:3000/api/v1/charge", {
		let response = await fetch("https://api.irislune.com/api/v1/charge", {
			method: "POST",
			headers: {
				'Content-Type': 'application/json',
				"Accepts": "application/json"
			},
			body: JSON.stringify({ user_id: this.props.mainReducer.user.user.id, amount: (AMOUNT * 100), stripeToken: token.id, email: userObj.emailAddress, bundle_name: BUNDLE_NAME })
		})
			.then(resp => {
				if (resp.status === 200 || resp.status === 201 || resp.status === 202) {
					setTimeout(() => {		
					slack.success({
						text: 'Starter pack purchase',
						fields: {
							amount: AMOUNT,
							bundleName: BUNDLE_NAME,
							name: userObj.firstName + " " + userObj.lastName,
							address: userObj.address,
							zip: userObj.zipCode,
							email: userObj.emailAddress
						}
					})
					this.props.loadingEnd()
					this.props.history.push(`/vip-offer`)
				}, 2000 )
				} else {
					this.props.loadingEnd()
					this.setState({
						errorMsg: "There was an error processing your payment, please try again.",
						submitButtonDisabled: false
					})
				}
		  })
		} else {
		  this.props.loadingEnd()
		  this.setState({
			  errorMsg: "There was an error processing your payment, please try again.",
			  submitButtonDisabled: false
		  })
		}
	}

	render() {
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
							<li>Signed Photo($12 value)</li>
			        	    <li>​"Lost in Chatter" + "Self Titled" Lossless Audio + Hi Res Art ($15 value)</li>
			        	    <li>​1x "Stories in Glass" Stickers ($2 value)</li>
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
					    <PhoneInput
					    	required
					    	placeholder="Enter your phone number"
		                    name="phone"
		                    id="phoneNumber"
		                    label="Phone Number"
		                    data-cy="user-phone"
		                    country="US"
							className="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-fullWidth MuiInput-fullWidth MuiInputBase-formControl MuiInput-formControl MuiInputBase-marginDense"
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
						  <h6>{this.state.errorMsg}</h6>
					      <CardElement style={{base: {iconColor: '#c4f0ff', color: '#fff', padding: '1rem' }}} />
						  <img src="/img/stripe-payments.png" alt="Stripe payments"></img>
					    </div>
					    <button className="submit-button" disabled={this.state.submitButtonDisabled ? 1 : 0} onClick={this.handlePurchaseSubmit} color="primary">Submit</button>
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

export default withRouter(connect(mapStateToProps, { createPurchase, loadingEnd, loadingStart, createUser, updateUser })(injectStripe(StarterPack)))