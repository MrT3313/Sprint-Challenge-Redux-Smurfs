// START -> IMPORT -> ACTION TYPES
    import {
        SMURF_FETCH_START,
        SMURF_FETCH_SUCCESS,
        SMURF_FETCH_FAILURE,
    } from '../actions/a_getSmurfs'

    import {
        SMURF_ADD_START,
        SMURF_ADD_SUCCESS,
        SMURF_ADD_FAILURE,
    } from '../actions/a_addSmurf'


// START -> INITIAL STATE
    const initialState = {
        smurfs: [],
        is_fetchingSmurfs: false,

        is_addingSmurfs: false,

        error: ''
    }

export const smurfs_reducer = (state = initialState, action ) => {
    switch(action.type) {

        // START -> FETCHING CASES
            case SMURF_FETCH_START:
                return {
                    ...state,
                    is_fetchingSmurfs: true,
                    error: ''
                }
            case SMURF_FETCH_SUCCESS:
                return {
                    ...state,
                    smurfs: action.payload,
                    is_fetchingSmurfs: false,
                    error: ''
                }
            case SMURF_FETCH_FAILURE:
                return {
                    ...state,
                    is_fetchingSmurfs: false,
                    error: 'Fetch Failure'
                } 



        // START -> ADDING CASES               
            case SMURF_ADD_START:
                return {
                    ...state,
                    is_addingSmurfs: true,
                    error: ''
                }
            case SMURF_ADD_SUCCESS:
                return {
                    ...state,
                    smurfs: action.payload,
                    is_addingSmurfs: false,
                    error: ''
                }
            case SMURF_ADD_FAILURE:
                return {
                    ...state,
                    is_addingSmurfs: false,
                    error: 'Add Failure'
                }

        // START -> DEFAULT CASE
            default:
                return state
    }
}

// end -> friends reducer