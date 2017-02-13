import React, { Component } from 'react';

class Output extends Component {
  // if you want to convert height to feet rather than
  toFeet(n) {
    let realFeet = ((n*0.393700)/12);
    let feet = Math.floor(realFeet);
    let inches = Math.round((realFeet - feet)*12);
    return feet + "'" + inches;
  }
  render() {
    let height = this.props.data.height;
    let weight = this.props.data.weight;
    let bmi = this.props.data.bmi;
    let bmiClass = this.props.data.bmiClass;

    return (
      <div className="output">
        <h3>{height} cm</h3>
        <h3>{weight} kg</h3>
        <h3>{bmi}</h3>
        <h3 className={(this.props.data.bmiClass === 'Obese' ? 'danger' : '')}>{bmiClass} {(this.props.data.bmiClass === 'Obese' ? <a href="https://upload.wikimedia.org/wikipedia/commons/b/b6/Gym_wiki.jpg" target="_blank">What Can I Do?</a> : '')}</h3>
      </div>
    );
  }
}

export default Output;
