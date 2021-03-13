import { GET_DATA, GET_DATA_FAILURE, GET_DATA_SUCCESS } from "./actionType";
import axios from "axios";

export const getData = () => ({
    type: GET_DATA
})

export const getDataSuccess = (payload) => ({
    type: GET_DATA_SUCCESS,
    payload
})

export const getDataFailure = () => ({
    type: GET_DATA_FAILURE
})

export const getEmployeesData = () => (dispatch) => {
    dispatch(getData());
    axios({
        method:'GET',
        url:"http://localhost:3001/data"
    })
    .then((res) => {
        dispatch(getDataSuccess(res.data))
        console.log(res)
    })
    .catch((err) => {
        console.log(err)
    })
} 