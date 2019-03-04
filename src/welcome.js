import React, { Component } from 'react';
import util from './util'
class Welcome extends Component {
  constructor(props){
    super(props);
    console.log(props);
    this.my = '123'
  }
  showName(my){
    var a = 'name'
    console.log(a);
  }
  componentDidMount() {
    console.log(util);
    console.log('元素挂载了');
    this.showName()
    console.log(this.props.name);
  }
  render() {
    return <h1>Hello, {this.my +', '+ this.props.name}</h1>;
  }
}

export default Welcome;
