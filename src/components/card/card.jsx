import React from 'react'
import { Link } from "react-router-dom";
import "./card.css"
import {AiOutlineFlag} from "react-icons/ai"

const Card = ({country}) => {
  
//console.log(country)-----------------------verify when I bring in all the countries to /home page
  const { image,name, continent,id} = country

  return (
    <div className="card">
        <span>{<AiOutlineFlag/>}</span>
        <img src={image} alt={image}></img>
        <h4>{name}</h4>
        <small>{id}</small>
        <small>{continent}</small>
        <Link to={`/home/${id}`} className="btn sm">Look Details
      </Link>

    </div>
  )
}

export default Card