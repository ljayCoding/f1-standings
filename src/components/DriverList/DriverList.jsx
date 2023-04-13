import './driverlist.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

const url = 'http://ergast.com/api/f1/current/driverStandings.json';

const DriverList = () => {
  const [drivers, setDrivers] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        const data = await response.data;
        setDrivers(
          data?.MRData?.StandingsTable?.StandingsLists[0]?.DriverStandings
        );
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => console.log('drivers', drivers), [drivers]);

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
          {drivers &&
            drivers.map((driver) => (
              <tr key={driver.Driver.permanentNumber}>
                <td>1</td>
                <td>58</td>
                <td className="tdName">Lewis Hamilton</td>
                <td>Mercedes</td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};
export default DriverList;
