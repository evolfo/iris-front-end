import React from 'react'
import StarterPack from '../components/StarterPack'
import LunetribeHome from './LunetribeHome'
import VipOffer from './VipOffer'
import SecondOffer from './SecondOffer'
import ThankYou from './ThankYou'
import Patreon from '../components/Patreon'

import { Route, Switch } from 'react-router-dom'

import { Elements } from 'react-stripe-elements';

const Routes = props => {
  return (
    <Switch>
      <Route exact path='/' component={LunetribeHome} />
      <Elements>
        <React.Fragment>
          <Route path='/starter-pack' component={StarterPack} />
          <Route path='/vip-offer' component={VipOffer} />
          <Route path='/second-offer' component={SecondOffer} />
          <Route path='/thank-you' component={ThankYou} />
          <Route path='/inner-circle' component={Patreon} />
        </React.Fragment>
      </Elements>
    </Switch>
  )
}

export default Routes