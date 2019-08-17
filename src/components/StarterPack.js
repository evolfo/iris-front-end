import React, { Component } from 'react'
import { connect } from 'react-redux'

import IrisInfo from '../components/IrisInfo'

import TextField from '@material-ui/core/TextField';
import MenuItem from "@material-ui/core/MenuItem";
import MuiPhoneNumber from 'material-ui-phone-number';
import { CountryRegionData } from "react-country-region-selector";

class StarterPack extends Component {

	state = {
		lastName: '',
		address: '',
		cityName: '',
		province: '',
		country: ''
	}

	handleTextInput = (e) => {
	  if (typeof(e.target.value === "object")) {
	  	this.setState({
	  		country: e.target.value[0]
	  	})
	  } else {
	  	  this.setState({
	  	    [e.target.id]: e.target.value
	  	  })
	  	}
    }

	render() {
		console.log(this.state.country)
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
			            <TextField
					      required
					      id="firstName"
					      autoFocus
					      margin="dense"
					      label="First name"
					      type="text"
					      fullWidth
					      value={this.props.mainReducer.user.user.first_name}
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
					      value={this.props.mainReducer.user.user.email}
					      onChange={this.handleTextInput}
					    />
					    <MuiPhoneNumber
		                    name="phone"
		                    id="phoneNumber"
		                    label="Phone Number"
		                    data-cy="user-phone"
		                    fullWidth
		                    margin="dense"
		                    defaultCountry={"us"}
		                    value={this.props.mainReducer.user.user.phone}
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
					      id="city"
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
					      value={this.props.mainReducer.user.user.zip_code}
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

export default connect(mapStateToProps)(StarterPack)