import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PlanetContext from './PlanetContext';

function PlanetProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [searchName, setSearchName] = useState('');
  const [searchColumn, setSearchColumn] = useState('population');
  const [searchComparison, setComparison] = useState('maior que');
  const [searchValue, setSearchValue] = useState(0);
  const [searchNumericFilters, setNumericFilters] = useState([]);
  const [filters, setFilters] = useState(false);
  const values = { planets,
    setPlanets,
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
  };
  return (
    <PlanetContext.Provider value={ values }>
      {children}
    </PlanetContext.Provider>
  );
}

PlanetProvider.propTypes = {
  children: PropTypes.object,
}.isRequired;

export default PlanetProvider;
