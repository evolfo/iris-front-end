import React from 'react'
import StarterPack from '../components/StarterPack'
// import Browse from '../containers/Browse'
// import Profile from '../containers/Profile'
// import CampaignPage from '../components/browse/CampaignPage'
// import CreateCampaignContainer from '../containers/CreateCampaignContainer'
// import CampaignPage from './browse/CampaignPage'
import { Route, Switch } from 'react-router-dom'

const Routes = props => {
  return (
    <Switch>
      <Route path='/starter-pack' component={StarterPack} />
    </Switch>
  )
}

export default Routes