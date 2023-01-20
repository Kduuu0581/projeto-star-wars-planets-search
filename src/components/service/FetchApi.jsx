import { useEffect, useContext } from 'react';
import PlanetContext from '../../context/PlanetContext';
import Table from '../Table';

function FetchApi() {
  const { setPlanets } = useContext(PlanetContext);

  useEffect(() => {
    const FetchPlanets = async () => {
      const response = await fetch('https://swapi.dev/api/planets');
      const json = await response.json();
      const data = json.results;
      data.forEach((planet) => delete planet.residents);
      setPlanets(data);
    };
    FetchPlanets();
  }, []);
  return (
    <div>
      <Table />
    </div>
  );
}

export default FetchApi;
