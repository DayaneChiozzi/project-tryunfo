import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import './components/input.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1 className="h1">Tryunfo</h1>
        <Form />
        <Card />
      </div>
    );
  }
}

export default App;
