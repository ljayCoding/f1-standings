import './constructorlist.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

const url = 'http://ergast.com/api/f1/current/constructorStandings.json';

const DriverList = () => {
  const [constructorStandings, setConstructorStandings] = useState();

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
  }, []);

  useEffect(
    () => console.log('constructors', constructorStandings),
    [constructorStandings]
  );

  return (
    <>
      <table>
        <thead>
          <tr>
            <td>Position</td>
            <td>Points</td>
            <td>Constructor</td>
          </tr>
        </thead>
        <tbody>
          {constructorStandings &&
            constructorStandings.map((constructor) => (
              <tr key={constructor?.Constructor?.constructorId}>
                <td>{constructor?.position}</td>
                <td>{constructor?.points}</td>
                <td>{constructor?.Constructor?.name}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};
export default DriverList;
