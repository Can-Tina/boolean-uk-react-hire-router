import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

function PeopleListItem(props) {
  const { person, PersonProfile } = props

  console.log(person)

  return (
    <li>
      <h3>
        {person.name.first} {person.name.last}
      </h3>
      <Link to={`/view/${person.login.uuid}`} state={{ person }}>View their profile</Link>
      {person.wage && <p>Wage: £{person.wage}</p>}
    </li>

  )
}

export default PeopleListItem
