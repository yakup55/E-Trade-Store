export const SET_USER="SET_USER"

export function setUser(user) {
    return function(dispacth){
        return dispacth({type:SET_USER,payload:user})
    }
    
    
}