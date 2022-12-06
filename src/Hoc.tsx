import React,{Component} from "react";
const initialState = {
    name: 'this is my text',
    message: 'ggggg'
  }
  type State = Readonly<typeof initialState>;

  const messageHoc =(WrappedComponent:any)=>{
      class HOC extends Component<{},State>{
        readonly state:State= initialState;
        render() {
            return(
                <WrappedComponent 
                prop1={this.state.name} 
                prop2={this.state.message} 
                />
            )
        }
      }
      return HOC;
  }
  export default messageHoc;