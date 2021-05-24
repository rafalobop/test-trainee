import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from './components/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import R2 from './pages/R2';
import R3 from './pages/R3';
// import Videos from './components/Videos';

const App = () => {
  return (
    <>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={R2} />
            <Route exact path="/R3" component={R3} />
          </Switch>
        </Layout>
      </Router>
    </>
  );
};

export default App;
