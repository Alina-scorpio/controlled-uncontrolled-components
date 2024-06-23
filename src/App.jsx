import React from 'react';
import ControlledForm from './components/ControlledForm';
import UncontrolledForm from './components/UncontrolledForm';
import DataFetcher from './components/DataFetcher';
import './index.css';

const App = () => {
  return (
    <div className="App">
      <h1>Controlled and Uncontrolled Components</h1>
      <ControlledForm />
      <UncontrolledForm />
      <DataFetcher />
    </div>
  );
};

export default App;
