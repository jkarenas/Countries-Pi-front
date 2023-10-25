import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCountries, postActivities } from "../../redux/actions";
import GoBackButton from "../../components/goBack/goBack";
import './create.css'


//verifies 
function validate(input) {
  let errors = {};
  let dif = Number(input.difficulty);
  let dur = Number(input.duration);

  if (!input.name) errors.name = "Campo Necesario";
  else if (/[^A-Za-z0-9 ]+/g.test(input.name))
    errors.name = "Nombre no puede tener caracteres especiales o tildes";

  if (!input.difficulty) errors.difficulty = "Campo Necesario";
  else if (dif <= 0 || dif > 5)
    errors.difficulty = "Debe ser entre 1 y 5";

  if (!input.duration) errors.duration = "Campo Necesario";
  else if (dur <= 0 || dur > 24) errors.duration = "Debe ser entre 1 y 24";

  if (!input.season || input.season === "vacio")
    errors.season = "Campo Necesario";

  if (!input.countries || input.countries.length === 0)
    errors.countries = "Campo Necesario";
  //if found an error returns the matched error
  return errors;
}

export default function CreateActivity() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const countries = useSelector((state) => state.allCountries);
  const [errors, setErrors] = useState({});

  const [input, setInput] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    countries: [],
  });

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
    console.log(input);
  }

  const handleSelect = (e) => {
    setInput((estado) => {
      if (e.target.name === "countries") {
        return {
          ...estado,
          countries: [...estado.countries, e.target.value],
        };
      } else {
        return {
          ...estado,
          [e.target.name]: e.target.value,
        };
      }
    });
  };

  function handleSubmit(e) {
    e.preventDefault();
    console.log("data to be sent",input);
    if (
      !input.name ||
      !input.difficulty ||
      !input.duration ||
      !input.season ||
      !input.countries
    ) {
      return alert("Complete correctamente el formulario antes de enviarlo");
    }

    dispatch(postActivities(input));
    alert("Actividad Creada Exitosamente");
    setInput({
      name: "",
      difficulty: "",
      duration: "",
      season: "",
      countries: [],
    });
    navigate("/home");
  }

  function handleDelete(e) {
    setInput({
      ...input,
      countries: input.countries.filter((con) => con !== e),
    });
  }

  function handleClick(e) {
    e.preventDefault();
    navigate("/home");
  }

  useEffect(() => {
    dispatch(getCountries());
  }, []);

  return ( 
  <div className="button__create">
    <GoBackButton/>
    <div className="create__counter">
     
      <div>
        <Link to="/home">
         <p>home</p>
        </Link>
      </div>
      <div>
        <h2>Create your activity</h2>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div>
            <label>Name </label>
            <input
              type="text"
              value={input.name}
              name="name"
              onChange={(e) => handleChange(e)}
            />
            {errors.name && <p>{errors.name}</p>}
          </div>
          <div>
            <label>Choose The Country </label>
            <select
              name="countries"
              id="countries"
              onChange={(e) => handleSelect(e)}
            >
              <option> </option>
              {countries.map((con) => (
                <option value={con.id}>{con.name}</option>
              ))}
            </select>
            {errors.countries && <p>{errors.countries}</p>}
          </div>
          <div>
            <label>Season</label>
            <select
              name="season"
              id="season"
              onChange={(e) => handleSelect(e)}
            >
              <option value="vacio"> </option>
              <option value={"Verano"}>Verano</option>
              <option value={"Invierno"}>Invierno</option>
              <option value={"Primavera"}>Primavera</option>
              <option value={"Otoño"}>Otoño</option>
            </select>
            {errors.season && <p>{errors.season}</p>}
          </div>
          <div>
            <label>Difficulty</label>
            <input
              type="number"
              value={input.difficulty}
              name="difficulty"
              onChange={(e) => handleChange(e)}
            />
            {errors.difficulty && <p>{errors.difficulty}</p>}
          </div>
          <div>
            <label>Duration </label>
            <input
              type="number"
              value={input.duration}
              name="duration"
              onChange={(e) => handleChange(e)}
            />
            <label>hours</label>
            {errors.duration && <p>{errors.duration}</p>}
          </div>
          <div>
            <button
              type="submit"
              disabled={Object.keys(errors).length === 0 ? false : true}
            >
              Añadir Actividad
            </button>
          </div>
        </form>
        {input.countries.map((e) => (
          <div key={e}>
            <p>{e}</p>
            <button onClick={() => handleDelete(e)}>X</button>
          </div>
        ))}
      </div>
      
    </div>
  </div>
  
  );
}


