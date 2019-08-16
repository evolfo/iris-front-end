import React, { Component } from 'react'
import IrisInfo from '../components/IrisInfo'

class StarterPack extends Component {
	render() {
		return (
			<React.Fragment>
				<section className="App-header">
			        <div className="container main">
			        	<h1>Get Your FREE Starter Pack Bundle</h1>
			        	<h4>Includes 7 Iris Lune items</h4>
			        	<h5><span>($40</span> - FREE today - just cover shipping & handling)</h5>
			        </div>
			        <div className="container sp-container">
			        	<div className="sp-content">
			        	  <h3>Here's What You'll Get...</h3>
			        	  <h1>Starter Pack Bundle™</h1>
			        	  <img src="/img/starter-pack.jpg" />
			        	  <ul>
			        	    <li>Iris Lune Pop Socket ($15 value)</li>
			        	    <li>​"Lost in Chatter" + "Self Titled" Lossless Audio + Hi Res Art ($15 value)</li>
			        	    <li>​2x "Stories in Glass" Stickers ($4 value)</li>
			        	    <li>​Iris Lune Matchbook ($2 value)</li>
			        	    <li>​2x Iris Lune Guitar Picks ($4 value)</li>
			        	  </ul>
			        	</div>
			        </div>
			        <IrisInfo sp="from-starter-pack" />
			    </section>
			</React.Fragment>
		)
	}
}

export default StarterPack