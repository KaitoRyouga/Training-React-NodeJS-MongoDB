import logo from './logo.svg';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="header">
        <ul>
          <li>
            <Link to="/Home">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/content">content</Link>
          </li>
        </ul>
      </div>
      <Switch>
          <Route path="/:id" children={<Child />} />
        </Switch>
    </Router>
  );
}
function Child() {
    let { id } = useParams();
  
    return (
      <div>
        <h3 className="content">Đây là trang: {id}</h3>
      </div>
    );
  }
export default App;
