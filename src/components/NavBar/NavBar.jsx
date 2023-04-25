import { NavLink } from 'react-router-dom';
import {
  Button,
  Stack,
  Box,
  useMediaQuery,
  useTheme,
} from '@mui/material';

const NavBar = () => {
  const theme = useTheme();
  const desktop = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <Stack direction="row" sx={{ justifyContent: 'center' }}>
        <Button
          variant="outlined"
          component={NavLink}
          to="/constructor-standings"
          sx={{
            color: '#003566',
            backgroundColor: '#FFC300',
            borderColor: '#001D3D',
            fontWeight: 'bold',
            boxShadow: '0px 0px 2px black',
            marginRight: '5px',
            '&:hover': {
              color: 'black',
            },
            '&:focus': {
              color: 'white',
              backgroundColor: '#003566',
            },
            fontSize: desktop ? '16px' : '12px',
          }}
          className="Button"
        >
          Constructor Standings
        </Button>
        <Button
          variant="outlined"
          component={NavLink}
          to="/driver-standings"
          sx={{
            color: '#003566',
            backgroundColor: '#FFC300',
            borderColor: '#001D3D',
            fontWeight: 'bold',
            boxShadow: '0px 0px 2px black',
            '&:hover': {
              color: 'white',
            },
            '&:focus': {
              color: 'white',
              backgroundColor: '#003566',
            },
            fontSize: desktop ? '16px' : '12px',
          }}
          className="Button"
        >
          Driver Standings
        </Button>
      </Stack>
    </Box>
  );
};
export default NavBar;
