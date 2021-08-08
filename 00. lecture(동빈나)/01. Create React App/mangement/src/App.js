import React, { Component } from 'react';
import Customer from './components/Customer'
import './App.css';

const customers = [
  {
    'id': 1,
    'image': 'https://placeimg.com/64/64/1',
    'name': '이혜은1',
    'birthday': '9806121',
    'gender': '여자1',
    'job': '백수1'
  },
  {
    'id': 2,
    'image': 'https://placeimg.com/64/64/2',
    'name': '이혜은2',
    'birthday': '9806122',
    'gender': '여자2',
    'job': '백수2'
  },
  {
    'id': 3,
    'image': 'https://placeimg.com/64/64/3',
    'name': '이혜은3',
    'birthday': '9806123',
    'gender': '여자3',
    'job': '백수3'
  },
]

class App extends Component {
  // function App() {
  render() {
    return (
      <div>
      {
        customers.map(c => {
          return (
            <Customer
              key={c.id}
              id={c.id}
              img={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
            />
          )
        })
      }
      </div>
    );
  }
}

export default App;
