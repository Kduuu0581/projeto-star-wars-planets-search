import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';
import Order from './Order';

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
    selectFilter,
    setSelectFilter,
    isOrder,
  } = useContext(PlanetContext);

  const filteredPlanets = planets.filter((planet) => planet.name.includes(searchName));
  const optionComparisonFilter = ['maior que', 'menor que', 'igual a'];

  const handleNumericFilter = () => {
    const resultNumericFilter = planets.filter((planet) => {
      if (searchComparison === 'maior que') {
        setSelectFilter([...selectFilter, searchColumn]);
        return Number(planet[searchColumn]) > searchValue;
      }
      if (searchComparison === 'menor que') {
        setSelectFilter([...selectFilter, searchColumn]);
        return Number(planet[searchColumn]) < searchValue;
      }
      if (searchComparison === 'igual a') {
        setSelectFilter([...selectFilter, searchColumn]);
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
        setSelectFilter([...selectFilter, searchColumn]);
        return Number(planet[searchColumn]) > searchValue;
      }
      if (searchComparison === 'menor que') {
        setSelectFilter([...selectFilter, searchColumn]);
        return Number(planet[searchColumn]) < searchValue;
      }
      if (searchComparison === 'igual a') {
        setSelectFilter([...selectFilter, searchColumn]);
        return Number(planet[searchColumn]) === Number(searchValue);
      }
      return planet;
    });
    setNumericFilters(resultIsNumericFilter);
    setOptionColumnsFilter(optionColumnsFilter
      .filter((option) => option !== searchColumn));
    setSearchColumn(optionColumnsFilter
      .filter((option) => option !== searchColumn)[0]);
  };

  const handleDelete = (element) => {
    setOptionColumnsFilter([...optionColumnsFilter, element.target.name]);
  };

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
      <Order />
      <div>
        <ul>
          {
            selectFilter.map((filter, index) => (
              <li key={ index } data-testid="filter">
                {filter}
                <button
                  data-testid="filter"
                  name={ filter }
                  onClick={ (element) => handleDelete(element) }
                >
                  Excluir
                </button>
              </li>
            ))
          }
        </ul>
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
        { !isOrder && (
          <tbody>
            {renderPlanets.map((planet, index) => (
              <tr key={ index }>
                <td data-testid="planet-name">{planet.name}</td>
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
        )}
        { isOrder && (
          <tbody>
            {planets.map((planet, index) => (
              <tr key={ index }>
                <td data-testid="planet-name">{planet.name}</td>
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
        )}
      </table>
    </div>
  );
}

export default Table;
