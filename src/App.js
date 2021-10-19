import logo from './logo.svg';
import './App.css';
import Header from './components/Home/Header/Header';
import Banner from './components/Home/Banner/Banner';
import Emargency from './components/Home/Emargency/Emargency';
import Services from './components/Home/Services/Services';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AuthProvider from './Contexts/AuthProvider';
import Login from './components/Home/Login/Login';
import Detailes from './components/Home/Detailes/Detailes';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Footer from './components/Home/Footer/Footer';
import NotFound from './components/Home/NotFound/NotFound'
import Home from './components/Home/Home/Home';
import Register from './components/Home/Ragister/Register';

function App() {
  return (
    <div >
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <PrivateRoute path="/detailes/:serviceId">
              <Detailes></Detailes>
            </PrivateRoute>
            <PrivateRoute path="/service">
              <Services></Services>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>

    </div >
  );
}

export default App;
