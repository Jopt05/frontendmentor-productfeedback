import './App.css';
import { AppContext } from './hoc/Context';
import { HomeScreenRouter } from './routers/HomeScreenRouter';
import { PrivateRoute } from './routers/PrivateRouter';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import LoginScreen from './hoc/LoginScreen';


function App() {

  return (
    <AppContext.Provider>
      <div className="App">
        <Router>
          <Routes>
            <Route path='login/*' element={ <LoginScreen /> }/>
            <Route path='/*' element={
              <PrivateRoute child={
                <HomeScreenRouter />}
              />
            }/>
          </Routes>
        </Router>
      </div>
    </AppContext.Provider>
  );
}

export default App;
