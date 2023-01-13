
export const SET_THEME="SET_THEME"
export const OPEN_SNACBAR="OPEN_SNACBAR"
export const CLOSE_SNACBAR="CLOSE_SNACBAR"
export const SET_LOADING="SET_LOADING"
 
export function setLoading(key){
    return function(dispacth){
        return dispacth({type:SET_LOADING,payload:key})
    }
}
export function setTheme(theme){
    return function(dispacth){
        return dispacth({type:SET_THEME,payload:theme})
    }
}
export function openSnacbar(snacbar){
    return function(dispacth){
        return dispacth({type:OPEN_SNACBAR,payload:snacbar})
    }
}
export function closeSnacbar(){
    return function(dispacth){
        return dispacth({typ:CLOSE_SNACBAR})
    }
}