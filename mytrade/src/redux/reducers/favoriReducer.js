import React from 'react'
import { ADD_FAVORI_PRODUCT } from '../actions/favoriActions';
import {favori} from "../initials/favoriItems"
const values={
    favori
}
export default function favoriReducer(state=values,{type,payload}) {
    switch (type) {
        case ADD_FAVORI_PRODUCT:
           return{
            ...state,
            favori:[...state.favori,payload]
           }
    
        default:
            return{
                ...state
            }
    }

}
