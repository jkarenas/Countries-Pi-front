import React, { useEffect } from 'react';
import "./detail.css";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'; // Importa el hook useParams
import { getById } from '../../redux/actions';
import GoBackButton from "../../components/goBack/goBack"

const Detail = () => {
  const dispatch = useDispatch();
  const { id } = useParams(); // Usa el hook useParams para acceder al parámetro de la ruta
  console.log(id);
  const country = useSelector((state) => state.detail);

  useEffect(() => {
    dispatch(getById(id));
  }, [dispatch, id]);

  return (
    <div className='with__button'>
      <GoBackButton/>
      {country ? (
        <div className='detail-container'>
          
          <h5>{country.id}</h5>
          <h2>{country.name}</h2>
          <img src={country.image} alt={country.name} />
          <h4>{country.continent}</h4>
          <h3>{country.capital}</h3>
          <h5>{country.subregion}</h5>
          <h5>area{country.area}</h5>
          <h5>population{country.population}</h5>
          {/* Aquí muestra otros detalles del país si es necesario */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Detail;
