import React from 'react'
import {Route} from "react-router-dom"
import Employees from '../components/Employees'

export default function Routes() {
    return (
        <>
        <Route exact path="/" component={Employees} />
        </>
    )
}
