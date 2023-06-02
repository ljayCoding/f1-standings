import './constructorlist.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Loader from '../Loader/Loader';

const url = 'https://ergast.com/api/f1/current/constructorStandings.json';

const DriverList = () => {
  const [constructorStandings, setConstructorStandings] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        const data = await response.data;
        setConstructorStandings(
          data?.MRData?.StandingsTable.StandingsLists[0]
            .ConstructorStandings
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
        <thead style={{ fontWeight: 'bold' }}>
          <tr>
            <th>Position</th>
            <th>Points</th>
            <th>Constructor</th>
          </tr>
        </thead>
        <tbody>
          {constructorStandings &&
            constructorStandings.map((constructor) => (
              <tr key={constructor?.Constructor?.constructorId}>
                <td>{constructor?.position}</td>
                <td>{constructor?.points.toUpperCase()}</td>
                <td>{constructor?.Constructor?.name.toUpperCase()}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};
export default DriverList;
