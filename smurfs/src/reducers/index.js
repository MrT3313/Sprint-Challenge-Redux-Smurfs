// REDUX
import { combineReducers } from 'redux'

// REDUCERS
  import { smurfs_reducer } from './r_smurfs'

// -- *** START CODE *** -- //
// -- *** START CODE *** -- //

export const rootReducer = combineReducers({
  smurfs_reducer
})

/*
  Be sure to import in all of the action types from `../actions`
*/

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
