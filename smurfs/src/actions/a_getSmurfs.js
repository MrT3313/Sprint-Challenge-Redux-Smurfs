// AXIOS
    import axios from 'axios'

// -- *** START CODE *** -- //
// -- *** START CODE *** -- //

// START -> ACTION TYPES -> GET FRIENDS
    export const SMURF_FETCH_START = "SMURF_FETCH_START"
    export const SMURF_FETCH_SUCCESS = "SMURF_FETCH_SUCCESS"
    export const SMURF_FETCH_FAILURE = "SMURF_FETCH_FAILURE" 

// START -> ACTION CREATOR 
    export const get_smurfs = () => {
        console.log('inside a_getSmurfs action creator')

// START -> THUNK 
    return (dispatch) => {
    dispatch({ type: SMURF_FETCH_START})
    
    // START -> API CALL
        axios
        .get(`http://localhost:3333/smurfs`)
        .then( res => {
            console.log( res )

            dispatch({
            type: SMURF_FETCH_SUCCESS,
            payload: res.data
            })
        })
        .catch( error => {
            console.log( error )

            dispatch({
            type: SMURF_FETCH_FAILURE,
            payload: error
            })
        })
    }
}