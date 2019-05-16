import React, { Component } from 'react'
import './App.css'
import Timer from'./components/timer.js'

class App extends Component {
  constructor(props){
    super(props)
    this.state=({
      status: false,
      time:0,
      // controle:1,
     
    })
  }


  // resetTime = () => {
  //   clearInterval(this.myInterval) 
  // }

handleClick = () => {
    this.setState(state => {
      if (state.status) {
        clearInterval(this.myInterval);
        
      } else {
        const startTime = Date.now() - this.state.time;
        this.myInterval = setInterval(() => {
          this.setState({ time: Date.now() - startTime });
        },1000);
      }
      return { status: !state.status };
    });
  };

handleReset = () => {
    this.setState({ time: 0, status: false });
    clearInterval(this.myInterval);
  };


  render() {
    const { status, time } = this.state;
   
return ( 
      <div>
        
        <Timer time={time} className="App"/>
        <div className="butns">
        <button className="butn " onClick={this.handleClick}>{status ? 'Stop' : 'Start'}</button>
        <button className="butnReset" onClick={this.handleReset}>Reset</button>
        </div>

     </div>
     );
  }
  componentDidMount(){

  }
// componentDidMount(){


// if(this.state.controle===1){
//   this.myInterval=setInterval(()=>{
//  this.setState({time:this.state.time+1})
//  },1000)
// }

// if(this.state.controle===-1){
//   clearInterval(this.myInterval)
// }
// if(this.state.controle===0){
  
// }
 
// }
  
}
 
export default App;