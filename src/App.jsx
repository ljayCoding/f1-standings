import './app.css';
import NavBar from './components/NavBar/NavBar';
import ConstructorList from './components/ConstructorList/ConstructorList';
import DriverList from './components/DriverList/DriverList';
import Home from './components/Home/Home';
import { Route, Routes } from 'react-router';
import { BrowserRouter, Link } from 'react-router-dom';
import {
  createTheme,
  ThemeProvider,
  CssBaseline,
  useTheme,
  useMediaQuery,
  Typography,
} from '@mui/material';

const baseTheme = createTheme({
  palette: {
    primary: {
      main: '#003566',
    },
    background: {
      default: '#001D3D',
    },
    text: {
      primary: '#ffffff',
    },
  },
  typography: {
    fontFamily: ['Roboto Condensed'].join(','),
  },
});

function App() {
  const theme = useTheme();
  const desktop = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <div
      style={{
        backgroundImage: `url(https://images.pexels.com/photos/1571882/pexels-photo-1571882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '100vh',
        width: '100vw',
      }}
    >
      <BrowserRouter>
        <ThemeProvider theme={baseTheme}>
          <CssBaseline />
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Typography
              variant="h2"
              className="main-heading"
              fontWeight="Bold"
              sx={{
                fontSize: desktop ? '36px' : '24px',
                marginBottom: desktop ? '9px' : '6px',
                fontFamily: 'Bruno Ace SC',
                paddingTop: '12px',
              }}
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
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
