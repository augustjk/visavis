import React, { Component } from 'react';
import { connect } from 'react-redux';
import Home from '../components/Home'
import { fetchStuff } from '../actions/actions'

// Get menu prop from redux store
const mapStateToProps = state => ({
  stuff: state.app.stuff,
});


class App extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // Fetch menu data
    this.props.dispatch(fetchStuff());
  }


  render(props) {
    return (
        <Home />
      );
    }
  }

export default connect(mapStateToProps)(App);