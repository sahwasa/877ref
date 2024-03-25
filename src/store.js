import { legacy_createStore } from "redux";
export default legacy_createStore(function(state, action){
  if(state === undefined){
    return {Number:0}
  }
  if(action.type === 'INCREMENT'){
    return {...state, Number:state.Number + action.size}
  }
  return state;
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())