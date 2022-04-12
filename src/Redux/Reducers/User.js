import { ALL_USERS, NEW_USER } from "../Actions/ActionsTypes";

const initialState = {
    users:[]
} 

export default function root(state= initialState, action){
    switch (action.type){
        case ALL_USERS:
            return{ 
                ...state,
               users: action.payload.data
            }
        case NEW_USER:
            return{
                ...state
            }
        default:
            return state
    }
}