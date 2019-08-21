import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class SecondOffer extends Component {
  render() {
  	return(
  	  <React.Fragment>
  	    <section id="second-offer" className="App-header">
		  <div className="container main">
		    <h1><span>WAIT!</span> Special <span>ONE TIME ONLY</span> Offer</h1>
		    <h4>Add an exclusive vinyl, recorded personally for you To Your Order For 50% Off!</h4>
		    <div className="flexing">
			    <div className="col-6">
			      <img src="/img/leestavall.jpg" alt="VIP Bundle"/>
			    </div>
			    <div className="col-6">
			      <h3>Yes, I Want The Live-to-Vinyl Audio Polaroid </h3>
			      <h4>(Save $25)</h4>
			      <p>Thank you so much for supporting my music! You're the reason that I get to keep making music, and I want to give you 50% off my latest special merch item to show my appreciation.</p>
			      <p>Audio Polaroid 7" Record: This is a one-of-a-kind performance of me and my band playing one of our songs live. Each recording is done in a single take directly to vinyl in one of Brooklyn's top recording studios. I'll give you a shoutout in the beginning before I play the song, and you'll own a recording of a live performance that was created just for you, no other one like it in the world, just like a Polaroid picture.</p>
			      <p>The song on the record will be a surprise!</p>
			      <button onClick={this.props.modalOpen}>Add for $25 and Confirm Order</button>
			    </div>
			</div>
			<div className="bottom-button">
			  <Link to="/thank-you"><button>No thanks, I don't need this now</button></Link>
			</div>
		  </div>
		</section>
  	  </React.Fragment>
  	)
  }
}

export default SecondOffer