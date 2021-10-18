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

function App() {
  return (
    <div >
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Header></Header>
              <Banner></Banner>
              <Emargency></Emargency>
              <Services></Services>
              <Footer></Footer>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/detailes/:serviceId">
              <Detailes></Detailes>
            </PrivateRoute>
          </Switch>
        </BrowserRouter>
      </AuthProvider>

    </div>
  );
}

export default App;
