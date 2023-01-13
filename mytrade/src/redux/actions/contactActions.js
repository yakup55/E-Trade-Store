import ContactService from "../../services/contactService"
export  const GET_ONE_CONTACT="GET_ONE_CONTACT"
export const ADD_CONTACT="ADD_CONTACT"
export const UPDATE_CONTACT="UPDATE_CONTACT"
export const DELETE_CONTACT="DELETE_CONTACT"
export const GET_LIST_CONTACT="GET_LIST_CONTACT"



const contactService=new ContactService();

export function getContactList(){
    return function(dispatch){
    contactService.getContactList().then((resp)=>dispatch({type:GET_LIST_CONTACT,payload:resp}))
    }
}
export function getOneContact(id){
    return function(dispacth){
        contactService.getOneContact(id).then((resp)=>dispacth({type:GET_ONE_CONTACT,payload:resp}))
    }
}
export function addContact(contact){
    return function(dispacth){
        contactService.addContact(contact).then((resp)=>dispacth({type:ADD_CONTACT,payload:resp}))
    }
}
export function updateContact(contact,id){
    return function(dispacth){
        contactService.updateContact(id,contact).then((resp)=>dispacth({type:UPDATE_CONTACT,payload:resp}))
    }
}
export function deleteContact(id){
    return function(dispacth){
        contactService.deleteContact(id).then((resp)=>dispacth({type:DELETE_CONTACT,payload:id}))
    }
}