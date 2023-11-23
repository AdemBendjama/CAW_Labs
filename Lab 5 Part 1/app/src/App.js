import ButtonUI from './components/Exo1/ButtonUI';
import CounterUI from './components/Exo1/CounterUI';
import DisplayTab from './components/Exo2/DisplayTab';
import FormSubmit from './components/Exo3/FormSubmit';
import UserList from './components/Exo3/UserList';
import { useState } from 'react'
import './App.css'

const tab1 = ["hello", "world", "from", "react"]
const tab2 = ["hi", "universe", "from", "javascript"]
const users = [
  { id: 1, username: 'adam', password: "adam" },
  { id: 2, username: 'rick', password: "rick" },
  { id: 3, username: 'John Doe', password: "john" },
  { id: 4, username: 'Steven James', password: "steven" },
]

function App() {

  const [userAthenticated, setUserAthenticated] = useState(null)

  const handleSubmit = (event) => {
    event.preventDefault()
    let username = event.target.username.value.trim()
    let password = event.target.password.value.trim()
    let userFound = users.find(user => {
      return user.username === username && user.password === password
    })
    if (userFound) {
      setUserAthenticated(true)
    } else {
      setUserAthenticated(false)
    }
  }

  return (
    <div className='container'>
      <section>
        <h1>Exo 1 :</h1>
        <ButtonUI id={1} />
        <ButtonUI id={2} />
        <ButtonUI id={3} />
        <CounterUI />
      </section>

      <section>
        <h1>Exo 2 :</h1>
        <DisplayTab tab={tab1} />
        <DisplayTab tab={tab2} />
      </section>

      <section>
        <h1>Exo 3 :</h1>

        <FormSubmit onSubmit={handleSubmit} />
        {userAthenticated &&
          <>
            <p>User Athenticated ! </p> <UserList users={users} />
          </>
        }
        {!userAthenticated && userAthenticated != null && <p>Wrong Credentials</p>}


      </section>

      <section>
        <h1>Exo 4 :</h1>

      </section>
    </div>
  );
}

export default App;
