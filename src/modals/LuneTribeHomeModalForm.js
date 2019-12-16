import React, { Component } from 'react'
import { withRouter } from "react-router";
import compose from 'recompose/compose'

import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { withStyles } from '@material-ui/core/styles';

import { connect } from 'react-redux'
import { formModalOpen, formModalClose, saveMessage, createUser, almostThereDisplay } from '../Redux/actions'

const style = {
  	backdrop: {
  	  backgroundColor: '#00000112'
  	},
  	action: {
  	  justifyContent: 'inherit'
  	},
  	paper: {
  	  width: '70vw',
  	  maxWidth: '70vw',
  	  background: '#020202fc',
  	  marginTop: '-3rem',
  	  padding: '1rem',
  	  paddingRight: '.5rem',
  	  paddingLeft: '.5rem'
  	}
 }

class LuneTribeHomeModalForm extends Component {

  state = {
	firstName: '',
	lastName: '',
  	zipCode: '',
  	email: ''
  }

  handleTextInput = (e) => {
  	this.setState({
  	  [e.target.id]: e.target.value
  	})
  }

  handleSubmit = (e) => {
  	e.preventDefault()

  	const userObj = {...this.state, fanLvl: this.props.mainRefanLvl}

  	this.props.createUser(userObj)
  		.then(this.props.formModalClose())
  		.then(this.props.almostThereDisplay())
  }

  render () {
  	const { classes } = this.props

	return (
		<Dialog
	      open={this.props.mainReducer.formModalIsOpen}
	      onClose={this.props.mainReducer.formModalClose}
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
	        	<h2>Enter Your Info Below To Join The Lunetribe!</h2>
	        </DialogContentText>
	        <div className="">
	        	<form>
	        		<DialogContent>
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
					      id="email"
					      autoFocus
					      margin="dense"
					      label="Email"
					      type="email"
					      fullWidth
					      value={this.state.email}
					      onChange={this.handleTextInput}
					    />
					</DialogContent>	  
	        	</form>
	        	<button className="modal-button submit-button" onClick={this.handleSubmit} color="primary">
			      Submit
			    </button>
			    <button className="modal-button right-button" style={style.rightButton} onClick={this.props.formModalClose} color="primary">
	              X
	            </button>
		    </div>
	          
	      </DialogContent>
	    </Dialog>
	)
  }
}

const mapStateToProps = state => {
  return state
}

export default compose(
	withStyles(style),
	connect(mapStateToProps, { formModalOpen, formModalClose, saveMessage, createUser, almostThereDisplay })
)(withRouter(LuneTribeHomeModalForm))