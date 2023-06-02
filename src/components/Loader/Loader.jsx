import './loader.css';
import BallTriangle from 'react-loading-icons/dist/esm/components/ball-triangle';
import { Box, Typography } from '@mui/material';

const Loader = () => {
  return (
    <Box sx={{ display: 'block', textAlign: 'center', marginTop: '15px' }}>
      <BallTriangle stroke="#FFC300"></BallTriangle>
      <Typography
        sx={{
          textAlign: 'center',
          fontSize: '24px',
          color: '#FFC300',
          textShadow: '0px 0px 1px black',
        }}
      >
        loading...
      </Typography>
    </Box>
  );
};
export default Loader;
