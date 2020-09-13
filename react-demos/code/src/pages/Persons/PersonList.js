import React from 'react'
import FilterPerson from "../../components/FilterPerson";
import {personArr} from "../../datas/persons.js";

export default function PersonList() {
  return (
    <div>
      <FilterPerson personArr={personArr} />
    </div>
  )
}
