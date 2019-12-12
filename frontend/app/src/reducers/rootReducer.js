import { AUTH_SUCCESS, LOG_OUT } from "../constants/ACTION_TYPES"

const initialState = {
    isLoggedIn:false,
    isLoggedInUserIsAdmin:false,
    emailOfUserLoggedIn:"",
}

const rootReducer = (state=initialState, action) => {
    switch(action.type){
        case AUTH_SUCCESS:
            return{
                ...state,
                isLoggedIn:action.object.isLoggedIn,
                isLoggedInUserIsAdmin:action.object.isSuperUser,
                emailOfUserLoggedIn:action.object.emailOfUserLoggedIn
            }

        case LOG_OUT:
            return{
                ...state,
                isLoggedIn:action.object.isLoggedIn,
                isLoggedInUserIsAdmin:action.object.isSuperUser,
                emailOfUserLoggedIn:action.object.emptyEmailString
            }

        default:
            return state
    }
}

export default rootReducer;