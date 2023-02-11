import { CircularProgress } from '@mui/material';
import axios from 'axios';
import { useEffect } from 'react';
import { useContext } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import  { ResumeDataContext } from './context/resumeContext';
import Portfolio from './pages/Portfolio/Portfolio';
import Resume from './pages/Resume/Resume';

function App() {
  const { setData, setLoading, loading } = useContext(ResumeDataContext);

  const fetchData = async () => {
    setLoading(true)
    let { data } = await axios.get("https://resume-data-f7790-default-rtdb.europe-west1.firebasedatabase.app/data.json");
    setData(data);
    setLoading(false);
  }

  useEffect(() => {
    try {
      fetchData();
    } catch (error) {
      setLoading(false)
    }

  }, [])

  return (


    <div className="container">

      {
        loading ? <div className='d-flex justify-content-center align-items-center vh-100'>
          <CircularProgress size={80} />
        </div> : <div className="row py-5">
          <div className="col-lg-3">
            <div className="item">
              <Profile />
            </div>
          </div>
          <div className="col-lg-9">
            <Header />
            <Switch>
              <Route path="/resume"><Resume /></Route>
              <Route path="/portfolio"><Portfolio /></Route>
              <Redirect from="/" exact to="/portfolio"></Redirect>
            </Switch>
            <Footer />
          </div>
        </div>
      }


    </div>

  );
}

export default App;
