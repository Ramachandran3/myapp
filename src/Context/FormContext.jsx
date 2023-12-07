import React, { createContext, useState } from "react";

export const FormContext = createContext(null);

const FormContextProvider = (props) => {
    const[firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [emailAddress, setEmailAddress] = useState("")
    const [phoneNumber, setPhoneNumber] = useState()
    const [personDetails, setPersonDetails] = useState([])
    const [formUnique, setFormUnique] = useState()
    
    const clickPersonValue = () => {
        console.log(clickPersonValue)
        let obj = {
            firstName: firstName,
            lastName: lastName,
            emailAddress: emailAddress,
            
            phoneNumber : phoneNumber
        }
        setPersonDetails([...personDetails, obj])
        setFirstName("")
        setLastName("")
        setEmailAddress("")
        setPhoneNumber("")
    }

    const clickDelete = (firstName) => {
        const deletee = personDetails.filter((e) => e.firstName !== firstName)
        setPersonDetails(deletee)
    }
    const updateEdit = () => {
        setFirstName("")
        setLastName("")
        setEmailAddress("")
        setPhoneNumber("")
        const upadteValue = personDetails.map((e) => (
            e.firstName === formUnique ? 
                {
                    ...e,
                    firstName: firstName,
                    lastName: lastName,
                    emailAddress: emailAddress,
                    phoneNumber: phoneNumber,
                

                }
                : e
        ))
        setPersonDetails(upadteValue)
    }
    const clickEdit = (editObj) => {
        setFormUnique(editObj.firstName)
        setFirstName(editObj.firstName)
        setLastName(editObj.lastName)
        setEmailAddress(editObj.emailAddress)
        setPhoneNumber(editObj.phoneNumber)
    
}

    return (
        <FormContext.Provider value={{setFirstName, personDetails, setLastName, setEmailAddress, setPhoneNumber, clickPersonValue, clickDelete, updateEdit, clickEdit , firstName, lastName, formUnique, emailAddress, phoneNumber }}>
            {props.children}
        </FormContext.Provider>
    )
}
export default FormContextProvider;