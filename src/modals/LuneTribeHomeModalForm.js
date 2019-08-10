import React, { Component } from 'react'
import { withRouter } from "react-router";
import compose from 'recompose/compose'

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { withStyles } from '@material-ui/core/styles';

import { connect } from 'react-redux'
import { formModalOpen, formModalClose, fanLevel } from '../Redux/actions'

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

class LuneTribeHomeModalForm extends Component {

  render () {
  	const { classes } = this.props

  	console.log(this.props)

	return (
		<Dialog
	      open={this.props.formModalIsOpen}
	      onClose={this.props.formModalClose}
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
	        	<h2>Lol</h2>
	        </DialogContentText>
	        <div class="button-qs">
		    </div>
	        <div style={style.buttonContainer}>
	          <Button className="right-button" style={style.rightButton} onClick={this.props.formModalClose} color="primary">
	            X
	          </Button>
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
	connect(mapStateToProps, { formModalOpen, formModalClose, fanLevel })
)(withRouter(LuneTribeHomeModalForm))