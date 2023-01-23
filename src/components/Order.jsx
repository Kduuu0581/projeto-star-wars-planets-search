import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

function Order() {
  const { planets,
    setPlanets,
    setIsOrder,
    orderFilter,
    setOrderFilter,
  } = useContext(PlanetContext);

  const handleRadio = (element) => {
    setOrderFilter({
      order: {
        ...orderFilter.order,
        sort: element.target.value,
      },
    });
  };

  const handleInput = (element) => {
    setOrderFilter({
      order: {
        ...orderFilter.order,
        column: element.target.value,
      },
    });
  };

  const handleButton = () => {
    const { column, sort } = orderFilter.order;
    const arrayUnknowed = planets
      .filter((planet) => planet[column] !== 'unknown');
    const arrayUnknow = planets
      .filter((planet) => planet[column] === 'unknown');
    const resultOrder = arrayUnknowed.sort((a, b) => {
      if (sort === 'ASC') {
        return a[column] - b[column];
      }
      return b[column] - a[column];
    });
    setIsOrder(true);
    setOrderFilter({
      order: {
        ...orderFilter.order,
        sort,
      },
    });
    setPlanets([...resultOrder, ...arrayUnknow]);
  };

  const dropFilter = ['population',
    'orbital_period', 'diameter', 'rotation_period', 'surface_water'];

  return (
    <div>
      <label htmlFor="column">
        <select
          name="column-sort"
          data-testid="column-sort"
          onChange={ handleInput }
        >
          {dropFilter.map((option) => (
            <option key={ option } value={ option }>
              {option}
            </option>
          ))}
        </select>
        <label htmlFor="column-sort-input-asc">
          Ascendente
          <input
            type="radio"
            value="ASC"
            id="column-sort-input-asc"
            name="column-sort-input"
            data-testid="column-sort-input-asc"
            onChange={ handleRadio }
          />
        </label>
        <label htmlFor="column-sort-input-desc">
          Descendente
          <input
            type="radio"
            value="DESC"
            id="column-sort-input-desc"
            name="column-sort-input"
            data-testid="column-sort-input-desc"
            onChange={ handleRadio }
          />
        </label>
        <button
          type="button"
          data-testid="column-sort-button"
          onClick={ handleButton }
        >
          Ordenar
        </button>
      </label>
    </div>
  );
}

export default Order;
