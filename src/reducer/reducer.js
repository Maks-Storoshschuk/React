const reducer=(state,action)=>{
    if(action.obj === '10' && action.dija === '+'){
        return {...state,state1: state.state1+10}
    }else if(action.obj === '2' && action.dija ==='-'){
        return {...state,state1: state.state1-2}
    }
    return {...state,state1: state.state1+10}
}
export default reducer