// REACT
import React, { Component } from 'react';

// REDUX
  import { connect } from 'react-redux';

// IMPORT ACTION CREATORS
  import { get_smurfs } from '../actions/a_getSmurfs' 

// COMPONENTS
  import EntryForm from './EntryForm'
  import SmurfList from './SmurfList'

// CSS
  import './App.css';

// -- *** START CODE *** -- //
// -- *** START CODE *** -- //

/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  
  componentDidMount() {
    console.log('inside COMPONENT DID MOUNT')
    // INVOKE ACTION CREATOR
    this.props.get_smurfs()
  }
  
  render() {
    return (
      <div className="App">
        <div>
          <h1>SMURFS! 2.0 W/ Redux</h1>
          <div>Welcome to your Redux version of Smurfs!</div>
          <div>Start inside of your `src/index.js` file!</div>
          <div>Have fun!</div>
        </div>
        <EntryForm />
        <SmurfList />
      </div>
    );
  }
}

// START -> MAP STATE TO PROPS

// end -> map state to props

// START -> CONNECT
  export default connect(null, { get_smurfs })(App)


