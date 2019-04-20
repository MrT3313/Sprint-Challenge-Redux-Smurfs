// AXIOS
    import axios from 'axios'

// -- *** START CODE *** -- //
// -- *** START CODE *** -- //

// START -> ACTION TYPES -> DELETE SMURF
    export const DELETE_SMURF_START = 'DELETE_SMURF_START'
    export const DELETE_SMURF_SUCCESS = 'DELETE_SMURF_SUCCESS'
    export const DELETE_SMURF_FAILURE = 'DELETE_SMURF_FAILURE'

// START -> ACTION CREATOR

    export const delete_smurf = (id) => {
        //DEBUGGING
        console.log('Passed ID', id)

        // START -> THUNK 
        return (dispatch) => {
            dispatch({ type: DELETE_SMURF_START})

            // START -> API CALL
            axios
                .delete(`http://localhost:3333/smurfs/${id}`)
                .then( res => {
                    console.log('POST DELETE API result', res.data)

                    dispatch( {
                        type: DELETE_SMURF_SUCCESS,
                        payload: res.data
                    })
                })
                .catch( err => {
                    console.log(err)

                    dispatch( {
                        type: DELETE_SMURF_FAILURE,
                    })
                })
        }
    }