import { useEffect, useState } from "react"
import PeopleList from "./components/PeopleList"

function Dashboard(props) {
  const { hiredPeople } = props

  const [people, setPeople] = useState([])
  console.log("people:", people)
  let peopleThere = false

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=50')
      .then(response => response.json())
      .then(data => {
        setPeople(data.results)
        peopleThere = true
      });
  }, [])



  return (
    <main className="dashboard-layout">
        <section>
          <h2>People</h2>
          <PeopleList people={people} />
        </section>
        <section>
          <h2>Hired People</h2>
          <PeopleList people={hiredPeople} />
        </section>
    </main>

  )
}

export default Dashboard
