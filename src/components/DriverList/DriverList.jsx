import './driverlist.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Loader from '../Loader/Loader';
import { Box, Typography } from '@mui/material';

const url = 'https://ergast.com/api/f1/current/driverStandings.json';

const DriverList = () => {
  const [driverStandings, setDriverStandings] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        const data = await response.data;
        setDriverStandings(
          data?.MRData?.StandingsTable?.StandingsLists[0]?.DriverStandings
        );
        setIsLoading(false);
      } catch (error) {
        setIsError(error);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
    return (
      <Box
        sx={{ display: 'block', textAlign: 'center', marginTop: '15px' }}
      >
        <Typography sx={{ textShadow: '0px 0px 2px black' }}>
          {isError}
        </Typography>
        <Typography sx={{ textShadow: '0px 0px 2px black' }}>
          This is most likely an error on the side of the database we use.
          Please try again later.
        </Typography>
      </Box>
    );
  }
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Position</th>
            <th>Points</th>
            <th>Name</th>
            <th>Team</th>
          </tr>
        </thead>
        <tbody>
          {driverStandings &&
            driverStandings.map((driverStanding) => (
              <tr key={driverStanding?.Driver?.permanentNumber}>
                <td>{driverStanding?.position}</td>
                <td>{driverStanding?.points.toUpperCase()}</td>
                <td className="tdName">
                  {driverStanding?.Driver?.givenName.toUpperCase()}{' '}
                  {driverStanding?.Driver?.familyName.toUpperCase()}
                </td>
                <td>
                  {driverStanding?.Constructors[0]?.name.toUpperCase()}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};
export default DriverList;
