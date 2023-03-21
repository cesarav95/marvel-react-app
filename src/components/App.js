import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Heroes from '../pages/Heroes';
import NewHeroe from '../pages/NewHeroe';
import DetailHeroe from '../pages/DetailHeroe';
import Layout from './Layout';
import NotFound from './html/NotFound';
import Componente from '../examples/hooks/useContext/Componente';
import UserApplicationContext from '../context/UserContext';

function App() {
  const [update, setUpdate] = useState(false);
  const handleUpdateContext = () => {
    
    setUpdate(!update);
  };
  return (
    <React.Fragment>
      <BrowserRouter> 
        <Layout>
          <UserApplicationContext.Provider value="useContext">
            <Switch>
              <Route exact path="/" component={Heroes} />
              <Route exact path="/heroe/new" component={NewHeroe} />
              <Route
                exact
                path="/heroe/:heroeId/detail"
                component={DetailHeroe}
              />
              <Route exact path="/hooks" component={Componente} />
              <Route component={NotFound} />
            </Switch>
          </UserApplicationContext.Provider>
          
        </Layout>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
