import { BrowserRouter as Router, Link } from 'react-router-dom';
import './app.css';

function App() {
  return (
    <Router>
      <div>
        <h1 className="main-heading">F1 Standings</h1>
        <Link to="/constructor-standings">
          <button
            id="standings-button"
            className="standings-button"
            type="button"
          >
            Constructor Standings
          </button>
        </Link>
        <Link to="/driver-standings">
          <button
            id="standings-button"
            className="standings-button"
            type="button"
          >
            Driver Standings
          </button>
        </Link>
      </div>
    </Router>
  );
}

export default App;
