import { useState } from "react"
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

import "./styles.css"

import Dashboard from "./pages/Dashboard"
import PersonProfile from "./pages/PersonProfile/index"

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([])

  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <ul>
            <Link to="/">Dashboard</Link>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route
          path="/"
          element={<Dashboard hiredPeople={hiredPeople} PersonProfile={PersonProfile} />} />
        <Route
          path="/view/:id"
          element={<PersonProfile hiredPeople={hiredPeople} setHiredPeople={setHiredPeople}/>} />
      </Routes>
    </>
  )
}
