
import React from 'react';
import "./filter.css"

const Filters = ({
  selectedContinent,
  setSelectedContinent,
  selectedSorting,
  setSelectedSorting,
  // selectedActivity,
  // setSelectedActivity,
  onFilteredCountriesChange,
  allContinents, // Receive allContinents as a prop
  activities

  
}) => {

  console.log('Activities in Filters:', activities);

  
  return (
    <div className='filters'>
      <div className='filter'>
        <label>Continent:</label>
        {/* the selected value and the setSelectedContinent comes from props */}
        <select value={selectedContinent} onChange={(e) => setSelectedContinent(e.target.value)}>
          <option value="">Filter by continent</option>
          {allContinents.map((continent) => (
            <option key={continent} value={continent}>{continent}</option>
          ))}
        </select>
      </div>
      <div className='filter'>
        <label>Sorting:</label>
        <select value={selectedSorting} onChange={(e) => setSelectedSorting(e.target.value)}>
          <option value="">Sort by</option>
          <option value="name-asc">Alphabetical (A-Z)</option>
          <option value="name-desc">Alphabetical (Z-A)</option>
          <option value="population-asc">Population (Low to High)</option>
          <option value="population-desc">Population (High to Low)</option>
        </select>
      </div>
      <div className='filter'>
        <label>Activity:</label>
        {/* <select value={selectedActivity} onChange={(e) => setSelectedActivity(e.target.value)}>
          <option value="">Select Activity</option>
          {activities && activities.map(activity => (
            <option key={activity.id} value={activity.name}>
              {activity.name}
            </option>
          ))}
        </select> */}
      </div>
    </div>
  );
};

export default Filters;






