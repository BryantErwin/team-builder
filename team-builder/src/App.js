import React, { useState } from 'react';
import Form from './Components/Form';
import TeamData from './Components/TeamData';
import teamData from "./Components/Data";
function App() {
  const [members, setCards] = useState(teamData);

  const addNewPerson = person => {
  setCards([...members, person])
  }

  return(
      <div>
          <h1>My team card builder</h1>
          <TeamData teamData={members}/>
          <Form addNewPerson={addNewPerson}/>
      </div>
  )

}

export default App;
