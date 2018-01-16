import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import './signup.css';
import Signup from './signup.js';
import Login from './login.js';
class App extends Component {
  constructor(props){
    super();
    this.state={
      loading:false
    }
  }
  onchangevalue(finalval){
    this.setState({
      loading:finalval
    })

  }
  render() {
    return (
      <div className="App">
        {
          this.state.loading?<Signup/>:<Login onChangeValue={this.onchangevalue.bind(this)}/>
        }
   
      </div>
      
    );
    
  }
}

export default App;
