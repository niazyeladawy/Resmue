import { Redirect, Route, Switch } from 'react-router';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Portfolio from './pages/Portfolio/Portfolio';
import Resume from './pages/Resume/Resume';

function App() {
  return (
    <div className="container">
      <div className="row py-5">
        <div className="col-lg-3">
          <div className="item">
            <Profile />
          </div>
        </div>
        <div className="col-lg-9">
          <Header/>
          <Switch>
            <Route path="/resume"><Resume/></Route>
            <Route path="/portfolio"><Portfolio/></Route>
            <Redirect from="/" exact to="/resume"></Redirect>
          </Switch>
          <Footer/>
        </div>
      </div>
    </div>
  );
}

export default App;
