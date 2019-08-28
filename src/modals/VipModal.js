import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from "react-router";

import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { withStyles } from '@material-ui/core/styles';

import compose from 'recompose/compose'

import { vipModalClose } from '../Redux/actions'

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
  	  padding: '1rem',
  	  paddingRight: '.5rem',
  	  paddingLeft: '.5rem'
  	}
}

class VipModal extends Component {
  render() {
  	const { classes } = this.props
  	console.log(this.props.mainReducer)
  	return (
  	  <React.Fragment>
  	    <Dialog
	      open={this.props.mainReducer.vipModalIsOpen}
	      onClose={this.props.vipModalClose}
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
	        	<h2>Hit the button below to confirm your purchase!</h2>
	        </DialogContentText>
	        <div className="">
	        	<button className="modal-button submit-button" onClick={this.props.handlePurchaseSubmit} color="primary">
			      Submit
			    </button>
			    <button className="modal-button right-button" style={style.rightButton} onClick={this.props.vipModalClose} color="primary">
	              X
	            </button>
		    </div>
	      </DialogContent>
	    </Dialog>
  	  </React.Fragment>
  	)
  }
}

const mapStateToProps = state => {
  return state
}

export default compose(
	withStyles(style),
	connect(mapStateToProps, { vipModalClose })
)(withRouter(VipModal))