import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { withRouter } from "react-router"

import LuneTribeHomeModal from '../modals/LuneTribeHomeModal'
import LuneTribeThanksModal from '../modals/LuneTribeThanksModal'
import IrisInfo from '../components/IrisInfo'
import AlmostThere from '../components/AlmostThere'

import { connect } from 'react-redux'
import { modalOpen, modalClose, thanksModalOpen, thanksModalClose, almostThereDisplay, thanksHide } from '../Redux/actions'

class LunetribeHome extends Component {
	handleAlmostThere = (e) => {
		this.props.history.push('/lean-its')
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
		} else if (this.props.mainReducer.almostThereDisplayed) {
		  return (
			  <AlmostThere onClick={this.handleAlmostThere} />
		  )
		} else if (this.props.mainReducer.thankYouDisplayed) {
			window.scrollTo(0, 0)
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

export default withRouter(connect(mapStateToProps, { modalOpen, modalClose, almostThereDisplay, thanksModalOpen, thanksModalClose, thanksHide })(LunetribeHome))