import React from 'react';
import Layout from 'components/Layout';
import BurguerBuilder from 'containers/BurguerBuilder';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Welcome Burguer Eater</h1>
      <Layout>
        <BurguerBuilder />
      </Layout>
    </div>
  );
}

export default App;
