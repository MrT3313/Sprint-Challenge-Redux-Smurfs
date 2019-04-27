// REACT 
    import React, { Component } from 'react'

// REDUX
    import { connect } from 'react-redux'

// COMPONENTS
    import Smurf from './Smurf'
// STYLED COMPONENTS
    // import styled from 'styled-components'

// -- *** START CODE *** -- //
// -- *** START CODE *** -- //

class SmurfList extends Component {
    
    render() {
        return (
            <div>
                {this.props.smurfs.map( smurf => {
                    return (
                        <Smurf smurf={smurf} />
                    )
                })}
            </div>
        )
    }
}

// START -> MAP STATE TO PROPS
    const mapStateToProps = state => {
        return {
        smurfs: state.smurfs_reducer.smurfs,
        error: state.smurfs_reducer.error
        }
    }
// end -> map state to props

// START -> CONNECT
    export default connect(mapStateToProps, null)(SmurfList)
// end -> connect