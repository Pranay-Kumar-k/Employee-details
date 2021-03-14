import {DELETE_DATA, EDIT_DATA, GET_DATA,GET_DATA_FAILURE,GET_DATA_SUCCESS} from "./actionType"

const initState = {
    data:[],
    isErr:false
}

export const reducer = (state = initState, {type,payload}) => {
    switch(type) {
        case GET_DATA:
            return {
                ...state,
            }
        case GET_DATA_SUCCESS:
            return {
                ...state,
                data:payload,
                isErr:false
            }
        case GET_DATA_FAILURE:
            return {
                ...state,
                isErr:true
            }
        case DELETE_DATA:
            const newData = state.data.filter((item) => item.id !== payload);
            return {
                ...state,
                data: newData
            }
        case EDIT_DATA:
            return {
                ...state
            }
        default:
            return state;
    }
}