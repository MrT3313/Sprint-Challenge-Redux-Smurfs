// AXIOS
    import axios from 'axios'

// -- *** START CODE *** -- //
// -- *** START CODE *** -- //

// START -> ACTION TYPES -> GET FRIENDS
    export const SMURF_ADD_START = "SMURF_ADD_START"
    export const SMURF_ADD_SUCCESS = "SMURF_ADD_SUCCESS"
    export const SMURF_ADD_FAILURE = "SMURF_ADD_FAILURE" 

// START -> ACTION CREATOR
export const add_smurf = newSmurf => {
    console.log('insdie a_addSmurf action creator')
    console.log(newSmurf)

    // START -> THUNK 
    return (dispatch) => {
        dispatch({ type: SMURF_ADD_START })

        // START -> API CALL
        axios
            .post(`http://localhost:3333/smurfs`, newSmurf)
            .then( res => {
            console.log( res )

            dispatch({
                type: SMURF_ADD_SUCCESS,
                payload: res.data
            })
            })
            .catch( err => {
            console.log( err )

            dispatch({
                type: SMURF_ADD_FAILURE,
            })
            })
    }
}
