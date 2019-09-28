import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import LuneTribeHomeModal from '../modals/LuneTribeHomeModal'
import LuneTribeThanksModal from '../modals/LuneTribeThanksModal'
import IrisInfo from '../components/IrisInfo'

import { connect } from 'react-redux'
import { modalOpen, modalClose, thanksModalOpen, thanksModalClose, almostThereDisplay, saveMessage, thanksHide } from '../Redux/actions'

import TextField from '@material-ui/core/TextField';

class LunetribeHome extends Component {

	state = {
		message: ''
	}

	handleTextInput = (e) => {
		this.setState({
			[e.target.id]: e.target.value
		})
	}

	handleSubmit = (e) => {
	  	e.preventDefault()

	  	this.props.saveMessage(this.state.message, this.props.mainReducer.user.user.id)
	  	  .then(this.props.thanksModalOpen())
    }

	render() {

		if (!this.props.mainReducer.almostThereDisplayed && !this.props.mainReducer.thankYouDisplayed) {
			return (
			  <React.Fragment>
				<section className="App-header">
			        <div className="container main">
			          <h1>IRIS LUNE LUNETRIBE</h1>
			          <h3>Get exclusive access to livestreams, <br /> Q&A's, merch giveaways, 
			          and special offers!</h3>
			          <h5><span>$25</span> - FREE today</h5>
			          <button onClick={this.props.modalOpen}>Join the Lunetribe</button>
			          <h6>Hello beautiful stranger and welcome to my world! I’d like to offer you a very special opportunity - to join my inner circle and become a part of the Lune fam.
			          Creating music has always been a huge part of my life, but I couldn’t do it without the love and support of the people around me, my community. Making music that is able to touch others, no matter their background or how they identify themselves, is something I feel very passionate about. Knowing that you are here because you heard a song of mine that struck a chord with you, or made your heart move in peculiar and new ways, makes me endlessly grateful.
			          So first of all, I want to acknowledge YOU. Thank you for listening and for keeping the music alive. I look forward to seeing you inside!</h6>
			        </div>
			        <IrisInfo />
			    </section>
			    <LuneTribeHomeModal />
			  </React.Fragment> 
			)
		}else if (this.props.mainReducer.almostThereDisplayed) {
		  return (
			<React.Fragment>
		 	  <section className="App-header">
			    <div className="container main almost-there">
			      <h1>Almost There!</h1>
			      <h5>Please Check Your E-Mail In A Few Minutes To Confirm Your Spot...</h5>
			      <p>In the meantime, can I ask for a favor?</p>
			      <p>I have a quick question for you so that I can better understand your specific situation and how I can serve you...</p>
			      <p>Can you let me know - <strong><span>what's your #1 reason for wanting to join the Inner Circle?</span></strong></p>
			      <p>How can I make it <span>most exciting for you?</span><br /> (Please be as detailed and specific as possible.)</p>
			      <TextField
			        required
				    id="message"
				    autoFocus
				    margin="dense"
				    label="Enter your answer here..."
				    fullWidth
				    value={this.state.message}
				    onChange={this.handleTextInput}
				    multiline={true}
  				    rows={10}
  				    rowsMax={20}
			      />
			    </div>
			    <div className="">
				  <button className="modal-button submit-button" onClick={this.handleSubmit} color="primary">
				    Submit
				  </button>
				</div>
			  </section>
			  <LuneTribeThanksModal />
			</React.Fragment>
		  )
		} else if (this.props.mainReducer.thankYouDisplayed) {
			return (
				<React.Fragment>
			 	  <section className="App-header">
				    <div className="container main almost-there">
				      <h1>You're the best!</h1>
				      <h5>I really appreciate you taking the time to tell me more. As a "thank you", I'd like to send you a special gift. 🙂 Just click the button below to get started:</h5>
				    </div>
				    <div className="">
				      <Link to='/starter-pack' onClick={this.props.thanksHide}>
					    <button className="modal-button submit-button" color="primary">
					      Get a Free Starter Pack
					    </button>
					  </Link>
					</div>
				  </section>
				  <LuneTribeThanksModal />
				</React.Fragment>
			)
		}
	}
}

const mapStateToProps = state => {
  return state
}

export default connect(mapStateToProps, { modalOpen, modalClose, almostThereDisplay, saveMessage, thanksModalOpen, thanksModalClose, thanksHide })(LunetribeHome)