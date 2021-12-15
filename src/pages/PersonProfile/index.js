import { useState } from "react"
import HireForm from "./components/HireForm"
import EditForm from "./components/EditForm"

import { useEffect } from "react";
import { useLocation } from "react-router";

function PersonProfile(props) {
  const [person, setPerson] = useState(null)
  const location = useLocation();

  const { hiredPeople, setHiredPeople } = props

  useEffect(() => {
    if (location.state) {
      const Person = location.state.person;
      setPerson(Person);
    }
  }, [location]);

  if (!person) return <p>Loading...</p>

  return (
    <article>
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      {!person.wage && <HireForm person={person} hiredPeople={hiredPeople} setHiredPeople={setHiredPeople} />}
      {person.wage && <EditForm person={person} hiredPeople={hiredPeople} setHiredPeople={setHiredPeople} />}
    </article>
  )
}

export default PersonProfile
