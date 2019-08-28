import React, { Component } from 'react'
import { withRouter } from "react-router";
import compose from 'recompose/compose'

import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { withStyles } from '@material-ui/core/styles';

import { connect } from 'react-redux'
import { modalOpen, modalClose, fanLevel, formModalOpen, formModalClose } from '../Redux/actions'

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
  handleButtonClick = (e) => {
  	console.log(e.target.id)
	this.props.fanLevel(e.target.id)
	this.props.formModalOpen()
	this.props.modalClose()
  }
  render () {

  	const { classes } = this.props
	return (
	  <React.Fragment>
		<Dialog
	      open={this.props.mainReducer.modalIsOpen}
	      onClose={this.props.mainReducer.modalClose}
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
	        	<h2>How big of a fan of Iris Lune are you?</h2>
	        </DialogContentText>
	        <div className="button-qs">
		        <button onClick={this.handleButtonClick} id="low" style={style.button}>I'm a new listener</button>
		        <button onClick={this.handleButtonClick} id="medium" style={style.button}>I've watched a few of her videos</button>
		        <button onClick={this.handleButtonClick} id="high" style={style.button}>I love everything she does!</button>
		    </div>
	        <div style={style.buttonContainer}>
	          <button className="modal-button right-button" style={style.rightButton} onClick={this.props.modalClose} color="primary">
	            X
	          </button>
	        </div>
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
	connect(mapStateToProps, { modalOpen, modalClose, fanLevel, formModalOpen, formModalClose })
)(withRouter(LuneTribeHomeModal))