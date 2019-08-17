import React from 'react'
import StarterPack from '../components/StarterPack'
import LunetribeHome from './LunetribeHome'
// import Browse from '../containers/Browse'
// import Profile from '../containers/Profile'
// import CampaignPage from '../components/browse/CampaignPage'
// import CreateCampaignContainer from '../containers/CreateCampaignContainer'
// import CampaignPage from './browse/CampaignPage'
import { Route, Switch } from 'react-router-dom'

import { Elements } from 'react-stripe-elements';

const Routes = props => {
  return (
    <Switch>
      <Route exact path='/' component={LunetribeHome} />
      <Elements>
        <Route path='/starter-pack' component={StarterPack} />
      </Elements>
    </Switch>
  )
}

export default Routes