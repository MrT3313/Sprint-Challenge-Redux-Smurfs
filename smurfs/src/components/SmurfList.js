// REACT 
    import React, { Component } from 'react'

// REDUX
    import { connect } from 'react-redux'

// STYLED COMPONENTS
    import styled from 'styled-components'

// -- *** START CODE *** -- //
// -- *** START CODE *** -- //

const Styled_div = styled.div`
    display: flex;
    justify-content: center
    margin: 15px 0px;


    .subDiv {
        border: 1px solid black
        width: 50%;
    }
`;

class SmurfList extends Component {
    
    render() {
        return (
            <div>
                {this.props.smurfs.map( smurf => {
                    return (
                        
                            <Styled_div>
                            
                                <div className='subDiv'>
                                    <h2>{smurf.name}</h2>
                                    <h4>Age: {smurf.age}</h4>
                                    <h4>Height: {smurf.height}</h4>
                                </div>
                            
                            </Styled_div>
                        
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