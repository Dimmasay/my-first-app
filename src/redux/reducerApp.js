//Action Type
import {getAuthMeTC} from "./reducerAuth";

const SET_INITIALIZED_SUCCESS = 'SET_INITIALIZED_SUCCESS'

let initialState = {
    initialized: false,

}

let reducerApp = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZED_SUCCESS: {
            return {
                ...state,
                initialized: true,
            }
        }
        default:
            return state
    }
}


//Action Create
export const initializedSuccessAC = () => ({type: SET_INITIALIZED_SUCCESS})


//Thunk Create
export const initializedAppTC = () => {
    return (dispatch) => {
        dispatch(getAuthMeTC())
            .then(() => {    //this code will be executed, when the promise is 'resolve'
                dispatch(initializedSuccessAC())
            })

        // let dispatchResult = dispatch(getAuthMeTC())
        // Promise.all([dispatchResult]).then(() => {
        //         dispatch(initializedSuccessAC())
        //     })
    }
}

export default reducerApp