import './constructorlist.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

const url = 'https://ergast.com/api/f1/current/constructorStandings.json';

const DriverList = () => {
  const [constructorStandings, setConstructorStandings] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        const data = await response.data;
        setConstructorStandings(
          data?.MRData?.StandingsTable.StandingsLists[0]
            .ConstructorStandings
        );
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <Typography>Loading...</Typography>;
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
