import { Link } from 'react-router-dom';
import { Button, Stack } from '@mui/material';

const NavBar = () => {
  return (
    <Stack direction="row" sx={{ justifyContent: 'center' }}>
      <Button
        variant="outlined"
        component={Link}
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
        component={Link}
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
  );
};
export default NavBar;
