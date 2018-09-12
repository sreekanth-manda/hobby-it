import React, { Component } from 'react';
import Home from './Home/Home';

const hobbies = [
  {
    name: 'Swimming',
    id: 1,
    state: { 37: [1,0,1,0,1,1,1] }
  },
  {
    name: 'Running 5K',
    id: 2,
    state: { 37: [1,0,1,0,0,1,0] }
  },
  {
    name: 'Create an App',
    id: 3,
    state: { 37: [0,0,1,0,1,1,1] }
  },
  {
    name: 'Sleep early',
    id: 4,
    state: { 37: [1,0,1,0,0,1,0] }
  },
]

export default class App extends Component {
  render() {
    return (
      <Home hobbies={hobbies} />
    );
  }
}