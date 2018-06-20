import React, { Component } from 'react';
import './App.css';

class People extends Component {
  constructor(props) {
    super(props);
    this.state = {
      celebrity: { name: '', achievement: '' },
      celebrityList: []
    }
  }


  handleChangeFor = (propertyName) => (event) => {
    console.log(propertyName);
    this.setState({
      celebrity: {
        ...this.state.celebrity,
        [propertyName]: event.target.value
      }
    })
  }

  handleSubmit = () => {
    event.preventDefault();
    console.log('The celebrity is:', this.state.celebrity);
    this.setState({ celebrityList: [...this.state.celebrityList]})
    this.setState({ celebrity: { name: '', acheivement: ''}})
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          
          <h1 className="App-title">Famous People</h1>
        </header>

        <h2>Acheivements</h2>
        <label>Celebrity:</label>
        <input onChange={this.handleChangeFor('name')} 
            value={this.state.celebrity.name}
            placeholder="Name" />
        <label>Acheivements:</label>
        <input onChange={this.handleChangeFor('achievement')} 
            value={this.state.celebrity.achievement} 
            placeholder="Acheivements" />
        <button onClick={this.handleSubmit}>Add</button>
        <p> Name: {this.state.celebrity.name} </p>
        <p> Achievement: {this.state.celebrity.achievement} </p>
        <p> Celebrity List: {this.state.celebrity.celebrityList}</p>
        
      </div>
    );
  };
};


export default People;
