


import React, { useEffect, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountries, getByName, getActivitiesInCountries } from '../../redux/actions';
import Pagination from '../../components/pagination/pagination';
import SearchBar from '../../components/searchBar/searchBar';
import Cards from '../../components/cards/cards';
import Filters from '../../components/filters/filters';
import {BiFlag} from 'react-icons/bi'
import './home.css';



const Home = () => {
  const dispatch = useDispatch();

  //esto me lo estoy trayendo de redux, all countries representa todas los countries y
  //get activities son todas las actividades creadas
  const allCountries = useSelector((state) => state.allCountries);
  const getActivities = useSelector((state) => state.getActivitiesInCountries);
  //doublecheck at the moment when i am bringing all the activities
  console.log('estas son los getActivities',getActivities)


  //uses different hooks to work
  const [searchString, setSearchString] = useState('');
  const [selectedContinent, setSelectedContinent] = useState('');
  const [selectedSorting, setSelectedSorting] = useState('');
  // const [selectedActivity, setSelectedActivity] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [countriesPerPage] = useState(20);
  const [orderedCountries, setOrderedCountries] = useState(allCountries);

  
  




//handle the shipment
  const handleSearchSubmit = (e) => {
    // if(searchString==''){'no es un pais'}
    e.preventDefault();
    
    dispatch(getByName(searchString));
    //to reset filters


    setSelectedContinent('');
    setSelectedSorting('');
    // setSelectedActivity('');
  
  };



  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    dispatch(getActivitiesInCountries());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getCountries());
  }, []);

  useEffect(() => {
    if (!searchString) {
      setOrderedCountries(allCountries);
    }
  }, [allCountries, searchString]);


  //this one filters, order and updates the countries's list
  //when some states are triggered
  useEffect(() => {
    let filtered = [...allCountries];

    if (selectedContinent) {
      filtered = filtered.filter(country => country.continent === selectedContinent);
    }

  //   if (selectedActivity) {
  //     filtered = filtered.filter(country => country.Activities.some(activity => activity.name === selectedActivity));
  //   console.log("filtered selectedActivity",filtered)
  // }
    if (selectedSorting) {
      const [sortBy, sortOrder] = selectedSorting.split('-');
      const sortByFunctions = {
        name: (a, b) => sortOrder === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name),
        population: (a, b) => sortOrder === 'asc' ? a.population - b.population : b.population - a.population,
      };

      filtered = filtered.sort(sortByFunctions[sortBy]);
    }
    
    setOrderedCountries(filtered);
  }, [selectedContinent, selectedSorting, allCountries]);  // luego incluir selectedActivity


  //optimizes, stores the list of cureent countries, so avoids recalculations in everey render,
  //then we can use it in cards
  const currentCountries = useMemo(() => {
    const indexOfLastCountry = currentPage * countriesPerPage;
    const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
    return orderedCountries.slice(indexOfFirstCountry, indexOfLastCountry);
  }, [currentPage, countriesPerPage, orderedCountries]);

  const allContinents = [...new Set(allCountries.map(country => country.continent))];

 console.log(allCountries)
  return (
  <section className="countries">
            <SearchBar
        searchString={searchString}
        setSearchString={setSearchString}
        handleSearchSubmit={handleSearchSubmit}
      />
        <Filters
    selectedContinent={selectedContinent}
    setSelectedContinent={setSelectedContinent}
    selectedSorting={selectedSorting}
    setSelectedSorting={setSelectedSorting}
    // selectedActivity={selectedActivity}
    // setSelectedActivity={setSelectedActivity}
    allContinents={allContinents}  // Pass allContinents as a prop
    activities={getActivities}
  />
      <div className="container countries__container">
        <span>{<BiFlag/>}</span>
        <h2>Countries</h2>

        <div>
          
          <Cards allCountries={currentCountries} />
        </div>

      </div >

      
      
      <Pagination countriesPerPage={countriesPerPage} totalCountries={orderedCountries.length} paginate={paginate} />

  </section>

  );
};

export default Home;

