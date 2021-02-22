import React from 'react';
import Layout from 'components/Layout';
import BurgerBuilder from 'containers/BurgerBuilder';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Welcome Burguer Eater</h1>
      <Layout>
        <BurgerBuilder />
      </Layout>
    </div>
  );
}

export default App;
