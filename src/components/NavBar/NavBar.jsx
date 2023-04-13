import { NavLink } from 'react-router-dom';
import { Button, Stack, Box } from '@mui/material';

const NavBar = () => {
  return (
    <Box sx={{display: "flex", justifyContent: "center"}}>
    <Stack direction="row" sx={{ justifyContent: 'center' }}>
      <Button
        variant="outlined"
        component={NavLink}
        to="/constructor-standings"
        sx={{
          color: '#001D3D',
          backgroundColor: '#FFC300',
          borderColor: '#001D3D',
          fontWeight: 'bold',
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
          color: '#001D3D',
          backgroundColor: '#FFC300',
          borderColor: '#001D3D',
          fontWeight: 'bold',
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
