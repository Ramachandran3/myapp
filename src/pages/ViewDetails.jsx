import React, { useContext } from 'react'
import { FormContext } from '../Context/FormContext.jsx'

const ViewDetails = () => {
    const detail = useContext(FormContext)
  return (
    <div>
     
      <table>
        <thead>
          <th>FirstName</th>
          <th>LastName</th>
          <th>EmailAddress</th>
          <th>Phone Number</th>
        </thead>
        <tbody>
          {detail.personDetails && detail.personDetails.map((e) => {
            return (
              <div>
                <td>{e.firstName}</td>
                <td> {e.lastName}</td>
                <td> {e.emailAddress}</td>
                <td> {e.phoneNumber}</td>
                <td>{<button onClick={()=>  detail.clickDelete(e.firstName)} >Delete</button>} </td>
                <td>{ <button onClick={()=> detail.clickEdit(e)}>Edit</button> } </td>
             </div>
            );
          })}
        </tbody>
      </table>
    </div>
  )
}

export default ViewDetails