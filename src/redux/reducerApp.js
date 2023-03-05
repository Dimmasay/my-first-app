//Action Type
import {getAuthMeTC} from "./reducerAuth";

const INITIALIZATION_IS_SUCCESS = '/reducerApp/INITIALIZATION_IS_SUCCESS'

let initialState = {
    initialized: false,
}

let reducerApp = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZATION_IS_SUCCESS: {
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
export const initializationSuccessAC = () => ({type: INITIALIZATION_IS_SUCCESS})


//Thunk Create
export const initializedAppTC = () => async (dispatch) => {
    await dispatch(getAuthMeTC())
    dispatch(initializationSuccessAC())
}


export default reducerApp