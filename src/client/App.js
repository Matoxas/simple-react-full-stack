import React, { Component } from 'react';
import './style/app.scss';
import Axios from 'axios';

Axios.baseURL = 'http://localhost:5000/api';

export default class App extends Component {
  componentDidMount() {
    Axios.get('http://localhost:5000/api/items').then((res) => {
      console.log(res);
    });
  }

  render() {
    return (
      <div>
        <h2>hi</h2>
      </div>
    );
  }
}
