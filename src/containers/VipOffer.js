import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class VipOffer extends Component {
	render() {
		return (
		  <React.Fragment>
			<section id="vip-offer" className="App-header">
			  <div className="container main">
			    <h1><span>WAIT!</span> Special <span>ONE TIME ONLY</span> Offer</h1>
			    <h4>Add a VIP Merch Bundle To Your Order For 50% Off!</h4>
			    <div className="flexing">
				    <div className="col-6">
				      <img src="/img/vip-bundle.jpg" alt="VIP Bundle"/>
				    </div>
				    <div className="col-6">
				      <h3>Yes, I Want The VIP Merch Bundle</h3>
				      <h4>(Save $75)</h4>
				      <p>Thank you so much for supporting my music! You're the reason that I get to keep making music, and I want to give you 50% off my latest VIP merch bundle to show my appreciation.</p>
				      <p>This is also my way of sharing a different part of me with you. All of the items in the VIP bundle are dear to my heart, and are extremely unique. From my very own Iris Lune hot sauce, to a one-of-a-kind vinyl recording and a surprise Lunebag, this collection is both practical and inspiring.</p>
				      <p>Here's what I'll send straight to your door...</p>
				      <ul>
				        <li><strong>Eclipse 5 oz Hot Sauce</strong> ($25 value)</li>
				        <li><strong>Audio Polaroid 7" Record*</strong> ($50 value)</li>
				        <li><strong>Tote Bag </strong>($40 value)</li>
				        <li><strong>Eclipse 1 oz Hot Sauce</strong> ($8 value)</li>
				        <li><strong>Lunebag** </strong> ($25 value)</li>
				        <li><strong>"Stories in Glass" Sticker </strong> ($2 value)</li>
				      </ul>
				      <button onClick={this.props.modalOpen}>Add for $75 and Confirm Order</button>
				      <p>*Audio Polaroid 7" Record: a one-of-a-kind performance of me and my band playing one of our songs live. Each recording is done in a single take directly to vinyl in one of Brooklyn's top recording studios.</p>
				      <p>**Lunebag: A collection of small items that inspire me. No two bags are the same; every bag is unique!</p>
				    </div>
				</div>
				<div className="bottom-button">
				  <Link to="/second-offer"><button>No thanks, I don't need this now</button></Link>
				</div>
			  </div>
			</section>
		  </React.Fragment>
		)
	}
}

export default VipOffer