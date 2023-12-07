// FilterStatus.js
import React from 'react';
import "./filter.css";
const FilterStatus = ({ setFilterStatus }) => {
  return (
    <div className='wrap'>
        <h2>My ToDos</h2>
      <label className='filtername'>
        Filter Status:   
        <select onChange={(e) => setFilterStatus(e.target.value)}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="not-completed">Not Completed</option>
        </select>
        </label> 
    </div>
  );
};

export default FilterStatus;
