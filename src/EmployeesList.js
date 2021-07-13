import React from 'react'

function EmployeesList({employeesFiltered}) {
    //key should be generated by API
    return employeesFiltered.map((name) => <li className="container__item" key={name}>{name}</li>)
}

export default EmployeesList