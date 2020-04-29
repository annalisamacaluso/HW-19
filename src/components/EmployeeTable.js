import React from "react";

function EmployeeTable(props){
    console.log("employee arr: ", props.employees)
    return (
        <table>
            <thead>
                <tr>
                    <th>Picture</th>
                    <th>Name</th>
                    <th>SSN</th>
                </tr>
            </thead>
            <tbody>
                {props.employees.map(employee => (
                    <tr key={employee.id.value}>
                        <td><img src={employee.picture.thumbnail}/></td>
                        <td>{employee.name.first} {employee.name.last}</td>
                        <td>{employee.id.value}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default EmployeeTable;