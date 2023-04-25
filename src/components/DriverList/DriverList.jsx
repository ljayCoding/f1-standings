import './driverlist.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

const url = 'https://ergast.com/api/f1/current/driverStandings.json';

const DriverList = () => {
  const [driverStandings, setDriverStandings] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        const data = await response.data;
        setDriverStandings(
          data?.MRData?.StandingsTable?.StandingsLists[0]?.DriverStandings
        );
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

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
                <td>{driverStanding?.Constructors[0]?.name.toUpperCase()}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};
export default DriverList;
