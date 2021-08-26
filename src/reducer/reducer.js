export default function reducer(state,action){
    if (action.obj === '1' && action.dija ==='+'){
        return{...state,a: state.a++}
    } else if (action.obj === '1' && action.dija ==='-') {
        return {...state, a: state.a--}
    } else if (action.obj === '2' && action.dija ==='+'){
        return{...state,b: state.b++}
    } else if (action.obj === '2' && action.dija ==='-') {
        return {...state, b: state.b--}
    }else if (action.obj === '3' && action.dija ==='+'){
        return{...state,c: state.c++}
    } else if (action.obj === '3' && action.dija ==='-') {
        return {...state, c: state.c--}
    }
    return {...state}
}