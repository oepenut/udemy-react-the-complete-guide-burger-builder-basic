import React from 'react';
import Layout from 'components/Layout';
import BurgerBuilder from 'containers/BurgerBuilder';
import Styles from './App.module.css';

function App() {
  return (
    <div className={Styles.App}>
      <h1 className={Styles.Centered}>Welcome Burguer Eater</h1>
      <Layout>
        <BurgerBuilder />
      </Layout>
    </div>
  );
}

export default App;
