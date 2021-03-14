import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getEmployeesData } from '../Redux/actionCreator'
import EmployeesTable from './EmployeesTable'

function Employees() {
    const dispatch = useDispatch()
    const employees = useSelector((state) => state.data)

    useEffect(() => {
       dispatch(getEmployeesData())
    },[])
    
    return (
        <div>
            {employees && (<EmployeesTable employees={employees}/>)}
        </div>
    )
}

export default Employees
