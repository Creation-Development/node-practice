import './App.css';
import ClippedDrawer from './components/Appbar';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import SimplePaper from './components/Formui';
import DenseTable from './components/HomePage';

function App() {
  return (
    <>
      <Router>
        <ClippedDrawer />
        <Switch>
          <Route exact path="/home">
            <div style={{marginLeft:"18%", marginTop:"8%"}}>
            <DenseTable/>
            </div>
          </Route>
          <Route exact path="/form">
            <div style={{marginLeft:"30%", marginTop:"8%"}}>
            <SimplePaper/>
            </div>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
