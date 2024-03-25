// import React,{Component} from "react";
import DisplayNumber from "../components/DisplayNumber";
import { connect } from "react-redux";

// import store from "../store";
// export default class extends Component{
//   state = {Number : store.getState().Number};
//   constructor(props){
//     super(props);
//     store.subscribe(function(){
//       this.setState({Number:store.getState().Number})
//     }.bind(this))
//   }
//   render(){
//     return <DisplayNumber Number={this.state.Number} unit={this.props.unit}></DisplayNumber>
//   }
// }

function mapReduxStateToReactProps(state){
  return {
    Number:state.Number
  };
}
function mapReduxDispatchToReactProps(){
  
}
export default connect()(DisplayNumber);