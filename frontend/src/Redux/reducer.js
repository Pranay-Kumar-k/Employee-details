import {GET_DATA,GET_DATA_FAILURE,GET_DATA_SUCCESS,GET_ITEMS_FAILURE} from "./actionType"

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
        default:
            return state;
    }
}