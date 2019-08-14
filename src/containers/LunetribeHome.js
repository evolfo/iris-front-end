import React, { Component } from 'react'
import LuneTribeHomeModal from '../modals/LuneTribeHomeModal'
import LuneTribeThanksModal from '../modals/LuneTribeThanksModal'

import { connect } from 'react-redux'
import { modalOpen, modalClose, thanksModalOpen, thanksModalClose, almostThereDisplay, saveMessage } from '../Redux/actions'

import TextField from '@material-ui/core/TextField';

class LunetribeHome extends Component {

	state = {
		message: ''
	}

	handleModalOpen = (e) => {
		this.props.modalOpen()
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
	  	  .then(console.log(this.props))
    }

	render() {
		console.log(this.props)

		if (!this.props.mainReducer.almostThereDisplayed && !this.props.mainReducer.thankYouDisplayed)
			return (
			  <React.Fragment>
				<section className="App-header">
			        <div className="container main">
			          <h1>IRIS LUNE LUNETRIBE</h1>
			          <h3>Get exclusive access to livestreams, Q&A's, merch giveaways, 
			          and special offers!</h3>
			          <h5><span>$25</span> - FREE today</h5>
			          <button onClick={this.handleModalOpen}>Join the Lunetribe</button>
			          <h6>Hello beautiful stranger and welcome to my world! I’d like to offer you a very special opportunity - to join my inner circle and become a part of the Lune fam.
			          Creating music has always been a huge part of my life, but I couldn’t do it without the love and support of the people around me, my community. Making music that is able to touch others, no matter their background or how they identify themselves, is something I feel very passionate about. Knowing that you are here because you heard a song of mine that struck a chord with you, or made your heart move in peculiar and new ways, makes me endlessly grateful.
			          So first of all, I want to acknowledge YOU. Thank you for listening and for keeping the music alive. I look forward to seeing you inside!</h6>
			        </div>
			        <div className="container iris-info">
			          <div className='ella-img'>
			            <h2>Iris Lune</h2>
			            <h5>Artist, Singer, Songwriter, Producer, Brooklyn, NY</h5>
			            <h6>Through the vessel of Iris Lune, beguiling front woman Ella Joy Meir aims to extinguish the veil between art and life. Gripping, downcast, lucid, the volcanic talent’s soul-stirring alto penetrates deeply — leaving a gossamer sheen that fully envelops the senses. A bonafide triple threat, Meir is in constant flex as a lead vocalist, songwriter, multi-instrumentalist and producer, whose alluring Iris Lune cloak could rival any of her own art-pop heroines Florence Welch, Bjork, Mitski and Joni Mitchell. With two EPs — 2015’s Iris Lune and 2017’s Lost In Chatter — under her belt, the queer upstart has netted over a million streams across platforms to date, and has become a local live force, selling out shows in her newly minted home base of New York City.</h6>
			            <button onClick={this.handleModalOpen}>Join the Lunetribe</button>
			          </div>
			        </div>
			    </section>
			    <LuneTribeHomeModal />
			  </React.Fragment> 
			)
		else if (this.props.mainReducer.almostThereDisplayed) {
		  return (
			<React.Fragment>
		 	  <section className="App-header">
			    <div className="container main almost-there">
			      <h1>Almost There!</h1>
			      <h5>Please Check Your E-Mail In A Few Minutes To Confirm Your Spot...</h5>
			      <p>In the meantime, can I ask for a favor?</p>
			      <p>I have a quick question for you so that I can better understand your specific situation and how I can serve you...</p>
			      <p>Can you let me know - <strong>what's your #1 reason for wanting to join the Inner Circle?</strong></p>
			      <p>How can I make it most exciting for you?<br /> (Please be as detailed and specific as possible.)</p>
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
				      <h1>Thank You!</h1>
				      <h5>I really appreciate you taking the time to tell me more. As a "thank you," I'd like to send you a special gift. :)
					  Just click the button below to get started:</h5>
				    </div>
				    <div className="">
					  <button className="modal-button submit-button" onClick={this.handleSubmit} color="primary">
					    Get a Free Starter Pack
					  </button>
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

export default connect(mapStateToProps, { modalOpen, modalClose, almostThereDisplay, saveMessage, thanksModalOpen, thanksModalClose })(LunetribeHome)