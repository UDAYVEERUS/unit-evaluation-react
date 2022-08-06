import { LOGIN } from "./actionTypes";

const initialState = {
    token:""
}
export const reducer = (state = initialState , action) => {
    switch (action.type){
        case LOGIN : return{
            ...state,
            token: action.payload
        }
        default : return state
    }
}