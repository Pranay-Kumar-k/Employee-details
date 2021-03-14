import { DELETE_DATA, EDIT_DATA, GET_DATA, GET_DATA_FAILURE, GET_DATA_SUCCESS } from "./actionType";
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
        dispatch(getDataFailure())
    })
} 


export const deleteData = (payload) => ({
    type:DELETE_DATA
})

export const deleteEmployee = (payload) => (dispatch) => {
    dispatch(deleteData(payload))
    return axios({
        method:'DELETE',
        url:`http://localhost:3001/data/${Number(payload)}`
    })
    .then((res) => {
        console.log(res)
        dispatch(getEmployeesData())
    })
    .catch(err => console.log(err))
}

export const editData = () => ({
    type:EDIT_DATA
})

export const editEmployeeData = (payload) => (dispatch) => {
    dispatch(editData())
    console.log(payload)
    return axios({
        method:'PATCH',
        url:`http://localhost:3001/data/${Number(payload.id)}`,
        data: payload
    })
    .then((res) => {
        dispatch(getEmployeesData())
    })
    .catch((err) => console.log(err))
}