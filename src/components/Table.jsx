import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

function Table() {
  const { planets,
    searchName,
    setSearchName,
    searchColumn,
    setSearchColumn,
    searchComparison,
    setComparison,
    searchValue,
    setSearchValue,
    searchNumericFilters,
    setNumericFilters,
    filters,
    setFilters,
    optionColumnsFilter,
    setOptionColumnsFilter,
  } = useContext(PlanetContext);

  const filteredPlanets = planets.filter((planet) => planet.name.includes(searchName));
  const optionComparisonFilter = ['maior que', 'menor que', 'igual a'];

  const handleNumericFilter = () => {
    const resultNumericFilter = planets.filter((planet) => {
      if (searchComparison === 'maior que') {
        return Number(planet[searchColumn]) > searchValue;
      }
      if (searchComparison === 'menor que') {
        return Number(planet[searchColumn]) < searchValue;
      }
      if (searchComparison === 'igual a') {
        return Number(planet[searchColumn]) === Number(searchValue);
      }
      return planet;
    });
    setNumericFilters(resultNumericFilter);
    setFilters(true);
    setOptionColumnsFilter(optionColumnsFilter
      .filter((option) => option !== searchColumn));
    setSearchColumn(optionColumnsFilter
      .filter((option) => option !== searchColumn)[0]);
  };

  const handleIsNumericFilter = () => {
    const resultIsNumericFilter = searchNumericFilters.filter((planet) => {
      if (searchComparison === 'maior que') {
        return Number(planet[searchColumn]) > searchValue;
      }
      if (searchComparison === 'menor que') {
        return Number(planet[searchColumn]) < searchValue;
      }
      if (searchComparison === 'igual a') {
        return Number(planet[searchColumn]) === Number(searchValue);
      }
      return planet;
    });
    setNumericFilters(resultIsNumericFilter);
    setOptionColumnsFilter(optionColumnsFilter
      .filter((option) => option !== searchColumn));
    setSearchColumn(optionsColumnFilter
      .filter((option) => option !== searchColumn)[0]);
  };

  // const optionColumnFilter = ['population', 'orbital_period',
  //   'diameter', 'rotation_period', 'surface_water'];
  const renderPlanets = searchNumericFilters.length === 0
    ? filteredPlanets : searchNumericFilters;

  return (
    <div>
      <h1>Star Wars</h1>
      <div>
        <label htmlFor="name-filter">
          Filtrar por nome:
          <input
            type="text"
            name="name-filter"
            data-testid="name-filter"
            value={ searchName }
            onChange={ (element) => setSearchName(element.target.value) }
            placeholder="Digite o nome do planeta"
          />
        </label>
      </div>
      <div>
        <select
          name="column-filter"
          data-testid="column-filter"
          onChange={ (element) => setSearchColumn(element.target.value) }
        >
          {
            optionColumnsFilter.map((option) => (
              <option key={ option } value={ option }>{option}</option>
            ))
          }
        </select>
        <select
          name="comparison-filter"
          data-testid="comparison-filter"
          onChange={ (element) => setComparison(element.target.value) }
        >
          {
            optionComparisonFilter.map((option) => (
              <option key={ option } value={ option }>{option}</option>
            ))
          }
        </select>
        <label htmlFor="value-filter">
          <input
            type="number"
            name="value-filter"
            data-testid="value-filter"
            value={ searchValue }
            onChange={ (element) => setSearchValue(element.target.value) }
          />
        </label>
        <button
          type="button"
          data-testid="button-filter"
          onClick={ filters ? handleIsNumericFilter : handleNumericFilter }
        >
          Filtrar
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Rotation Period</th>
            <th>Orbital Period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface Water</th>
            <th>Population</th>
            <th>Films</th>
            <th>Created</th>
            <th>Edited</th>
            <th>URL</th>
          </tr>
        </thead>
        <tbody>
          {renderPlanets.map((planet, index) => (
            <tr key={ index }>
              <td>{planet.name}</td>
              <td>{planet.rotation_period}</td>
              <td>{planet.orbital_period}</td>
              <td>{planet.diameter}</td>
              <td>{planet.climate}</td>
              <td>{planet.gravity}</td>
              <td>{planet.terrain}</td>
              <td>{planet.surface_water}</td>
              <td>{planet.population}</td>
              <td>{planet.films}</td>
              <td>{planet.created}</td>
              <td>{planet.edited}</td>
              <td>{planet.url}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
