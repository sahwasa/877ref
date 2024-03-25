import React,{Component} from "react";
export default class AddNumber extends Component{
  state={
    size:1
  }
  render(){
    return(
      <div>
        <h3>AddNumber</h3>
        <input type="button" value='+' onClick={function(e){
          this.props.onClick(this.state.size);
        }.bind(this)}></input>
        <input type="text" value={this.state.size} onChange={function(e){
          var ipt = e.target.value;
          this.setState({size:Number(ipt)})          
        }.bind(this)}></input>
      </div>
    )
  }
}