// REACT
import React, { Component } from 'react';

// REDUX
    import { connect } from 'react-redux';

// IMPORT ACTION CREATORS
    import { add_smurf } from '../actions/a_addSmurf' 

// CSS
    import './App.css';

// -- *** START CODE *** -- //
// -- *** START CODE *** -- //

class EntryForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            age: undefined,
            height: '',
        }
    }

    onChange_handler = e => {
        e.preventDefault()
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    onClick_handler = e => {
        e.preventDefault()
        console.log('button clicked in EntryForm')

        this.props.add_smurf(this.state)
    }

    render() {
        return (
            <form>
                <input 
                    type='text'
                    name='name'
                    placeholder='Enter Name'
                    onChange={this.onChange_handler}
                />
                <input 
                    type='number'
                    name='age'
                    placeholder='Enter Age'
                    onChange={this.onChange_handler}
                />
                <input 
                    type='text'
                    name='height'
                    placeholder='Enter height'
                    onChange={this.onChange_handler}
                />
                <button
                    onClick={this.onClick_handler}
                >Enter New Smurf</button>
            </form>
        )
    }
}

// START -> MAP STATE TO PROPS

// end -> map state to props

// START -> CONNECT
    export default connect(null, { add_smurf })(EntryForm)
