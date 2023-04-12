import { Typography } from '@mui/material';
import './app.css';
import NavBar from './components/NavBar/NavBar';
import ConstructorList from './components/ConstructorList/ConstructorList';
import DriverList from './components/DriverList/DriverList';
import Home from './components/Home/Home';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Typography
            variant="h2"
            className="main-heading"
            fontSize="26px"
            fontWeight="Bold"
          >
            F1 Standings
          </Typography>
        </Link>
        <NavBar />
        <Routes>
          <Route
            path="/constructor-standings"
            element={<ConstructorList />}
          />
          <Route path="/driver-standings" element={<DriverList />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
