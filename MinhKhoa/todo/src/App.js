
import './App.css';
import ReactDOM from "react-dom";
//su dung history dr chuyen trang
import { useHistory } from "react-router-dom";
import {Home} from "/component/Home";
import {About} from "/component/About";
/////////////
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

//useLocation
function usePageViews() {
  let location = useLocation();
  React.useEffect(() => {
    ga.send(["pageview", location.pathname]);
  }, [location]);
}

function App() {
  usePageViews();
  return <Switch>...</Switch>;
}

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  node
);
/////
function App() {
  return (
    <div className="App">

<Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/Home">Home</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
            <li>
              <Link to="/Users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/About">
            <About />
          </Route>
          <Route path="/Users">
            <Users />
          </Route>
          <Route path="/Home">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>

    </div>
  );
}


//su dung history dr chuyen trang
function HomeButton() {
  let history = useHistory();

  function handleClick() {
    history.push("/home");
  }

  return (
    <button type="button" onClick={handleClick}>
      Go home
    </button>
  );
}



export default App;

function Home() {
  return <h2>HomeHome</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>UsersUsersUsers</h2>;
}
