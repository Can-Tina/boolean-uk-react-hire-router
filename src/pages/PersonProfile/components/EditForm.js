import { useState } from "react"
import { useNavigate } from "react-router-dom";

function EditForm(props) {
  const [wage, setWage] = useState(0)

  const { person, hiredPeople, setHiredPeople } = props

  let navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault()
    console.log(event.target.wage.value)
    const newHire = {}
    newHire.wage = event.target.wage.value
    let alreadyHiredPeople = JSON.parse(JSON.stringify(hiredPeople))
    let index = alreadyHiredPeople.findIndex(x => x.login.uuid === person.login.uuid);
    alreadyHiredPeople[index].wage = newHire.wage
    setHiredPeople(alreadyHiredPeople)
    navigate("/", {replace: true})
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="wage">Wage Offer</label>
      <input
        type="text"
        id="wage"
        name="wage"
        onChange={e => setWage(e.target.value)}
        value={wage}
      />
      <button type="submit">Edit</button>
    </form>
  )
}

export default EditForm
