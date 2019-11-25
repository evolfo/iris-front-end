import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import LuneTribeThanksModal from '../modals/LuneTribeThanksModal'

import { connect } from 'react-redux'
import { thanksModalOpen, thanksModalClose, thanksHide, saveMessage } from '../Redux/actions'

import { withRouter } from "react-router"

class AlmostThere extends Component {

  componentDidMount() {
      this.props.history.push('/lean-its')
  }

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
  }
}

const mapStateToProps = state => {
    return state
}

export default withRouter(connect(mapStateToProps, { thanksModalOpen, thanksModalClose, thanksHide, saveMessage })(AlmostThere))