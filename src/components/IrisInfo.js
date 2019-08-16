import React from 'react'
import { connect } from 'react-redux'
import { modalOpen } from '../Redux/actions'

const IrisInfo = props => {
	return (
		<div className="container iris-info">
          <div className='ella-img'>
            <h2>Iris Lune</h2>
            <h5>Artist, Singer, Songwriter, Producer, Brooklyn, NY</h5>
            <h6>Through the vessel of Iris Lune, beguiling front woman Ella Joy Meir aims to extinguish the veil between art and life. Gripping, downcast, lucid, the volcanic talent’s soul-stirring alto penetrates deeply — leaving a gossamer sheen that fully envelops the senses. A bonafide triple threat, Meir is in constant flex as a lead vocalist, songwriter, multi-instrumentalist and producer, whose alluring Iris Lune cloak could rival any of her own art-pop heroines Florence Welch, Bjork, Mitski and Joni Mitchell. With two EPs — 2015’s Iris Lune and 2017’s Lost In Chatter — under her belt, the queer upstart has netted over a million streams across platforms to date, and has become a local live force, selling out shows in her newly minted home base of New York City.</h6>
            { props.sp ? <button> GET THE FREE STARTER PACK </button> : <button onClick={props.modalOpen}>Join the Lunetribe</button> }
          </div>
        </div>
	)
}

const mapStateToProps = state => {
  return state
}

export default connect(mapStateToProps, { modalOpen })(IrisInfo)