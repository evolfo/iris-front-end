import React, { Component } from 'react'
import { withRouter } from "react-router";
import compose from 'recompose/compose'

import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { withStyles } from '@material-ui/core/styles';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

import { connect } from 'react-redux'
import { thanksModalOpen, thanksModalClose, addPhoneToUser, almostThereHide, thanksDisplay } from '../Redux/actions'

import LuneTribeHomeModalForm from '../modals/LuneTribeHomeModalForm'

const style = {
  	backdrop: {
  	  backgroundColor: '#00000112'
  	},
  	action: {
  	  justifyContent: 'inherit'
  	},
  	paper: {
  	  width: '50vw',
  	  maxWidth: '50vw',
  	  background: '#020202fc',
  	  marginTop: '-3rem',
  	  padding: '2rem',
  	  paddingRight: '.5rem',
  	  paddingLeft: '.5rem'
  	}
 }

class LuneTribeHomeModal extends Component {

  state = {
  	phone: ''
  }

  handleSubmit = (e) => {
	this.props.thanksModalClose()
	this.props.addPhoneToUser(this.state.phone, this.props.mainReducer.user.user.id)
	this.props.almostThereHide()
	this.props.thanksDisplay()
  }

  handleTextInput = (e) => {
  	this.setState({
  	  phone: e
  	})
  }

  render () {

  	const { classes } = this.props

	return (
	  <React.Fragment>
		<Dialog
	      open={this.props.mainReducer.thanksModalOpen}
	      onClose={this.props.mainReducer.thanksModalClose}
	      aria-labelledby="alert-dialog-title"
	      aria-describedby="alert-dialog-description"
	      className='modal-container'
	      BackdropProps={{
	      	classes: {
	      	  root: classes.backdrop
	      	}
	      }}
	      PaperProps ={{
	        classes: {
	         root: classes.paper
	        }
	      }}
	    >
	      <DialogTitle id="alert-dialog-title"></DialogTitle>
	      <DialogContent className="title">
	        <DialogContentText id="alert-dialog-description">
	        	<h1>Thank You!</h1>
	        </DialogContentText>
	        <div className="button-qs">
		        <h2>I really appreciate you taking the time to tell me more about your situation.</h2>
						<h4>Lastly, I may wish to follow up with a few people personally on the phone so that I can better understand your situation. Would you be open to speaking on the phone for a few mins if we find a time that works for both of us? If so, would you please leave your number below? Thank you! (Optional) </h4>
		    </div>
		    <form className="thanks-form">
        		<DialogContent>
        		    <PhoneInput
        		    	placeholder="Enter your phone number"
	                    name="phone"
	                    id="phone"
	                    label="Phone Number"
	                    data-cy="user-phone"
	                    defaultCountry={"us"}
	                    value={this.state.phone}
	                    onChange={this.handleTextInput}
                  	/>
				</DialogContent>	  
        	</form>
        	<button className="modal-button submit-button" onClick={this.handleSubmit} color="primary">
		      Submit
		    </button>

	        <button className="modal-button right-button" style={style.rightButton} onClick={this.props.thanksModalClose} color="primary">
	          X
	        </button>
	      </DialogContent>
	    </Dialog>
	    <LuneTribeHomeModalForm />
	  </React.Fragment>
	)
  }
}

const mapStateToProps = state => {
  return state
}

export default compose(
	withStyles(style),
	connect(mapStateToProps, { thanksModalOpen, thanksModalClose, addPhoneToUser, almostThereHide, thanksDisplay })
)(withRouter(LuneTribeHomeModal))