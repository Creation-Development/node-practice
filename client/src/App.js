import './App.css';
import ClippedDrawer from './components/Appbar';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import SimplePaper from './components/Formui';
import DenseTable from './components/HomePage';
import UpdatePage from './components/UpdatePage';

function App() {
  return (
    <>
      <Router>
        <ClippedDrawer />
        <Switch>
          <Route exact path="/users">
            <div style={{marginLeft:"18%", marginTop:"8%"}}>
            <DenseTable/>
            </div>
          </Route>
          <Route exact path="/form">
            <div style={{marginLeft:"30%", marginTop:"8%"}}>
            <SimplePaper/>
            </div>
          </Route>
          <Route exact path="/user/update/:id">
            <div style={{marginLeft:"30%", marginTop:"8%"}}>
            <UpdatePage/>
            </div>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
