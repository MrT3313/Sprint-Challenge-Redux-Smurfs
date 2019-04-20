// REACT 
import React, { Component } from 'react'

// REDUX
    import { connect } from 'react-redux'

// IMPORT ACTION CREATORS
    import { delete_smurf } from '../actions/a_deleteSmurf' 

// STYLED COMPONENTS
    import styled from 'styled-components'

// -- *** START CODE *** -- //
// -- *** START CODE *** -- //

const Styled_div = styled.div`

    display: flex;
    justify-content: center;
    margin: 15px 0px;


    .subDiv {
        position: relative;

        border: 1px solid black;
        width: 50%;
    }
`;

const Styled_fontAwesome_Icon = styled.div`
    position: absolute;
    display: flex;

    right: 20px;
    bottom: 20px;

    font-size: 50px;
`;


class Smurf extends Component {
    
    deleteSmurf = e => {
        e.preventDefault() 
        console.log(this.props.smurf.id)
        this.props.delete_smurf(this.props.smurf.id)
    }

    render() {
        return (
                <Styled_div>
                    <div className='subDiv'>
                        <Styled_fontAwesome_Icon onClick={this.deleteSmurf}>
                            <i class="fas fa-bomb"></i>
                        </Styled_fontAwesome_Icon>

                        <h2>{this.props.smurf.name}</h2>
                        <h4>Age: {this.props.smurf.age}</h4>
                        <h4>Height: {this.props.smurf.height}</h4>
                    </div>
                </Styled_div>
            
        )
    }
}

// START -> CONNECT
    export default connect(null, { delete_smurf })(Smurf)
// end -> connect