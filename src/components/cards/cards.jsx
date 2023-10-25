import React from 'react'
import "./cards.css"
import Card from "../card/card"

const Cards = ({allCountries}) => {

  const countriesList = allCountries

  return (
    <div className="countries__wrapper">
      {countriesList?.map(country=>
        <Card key={country.id} country={country} className="countries__country"/>)}
    </div>
  )
}

export default Cards