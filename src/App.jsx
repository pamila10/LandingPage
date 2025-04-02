import { useEffect, useState } from 'react'
import './App.scss'
import api from './api/apiUsers'
import UsersSection from './components/UsersSection'

function App() {

  const [users, setUsers] = useState([])

  useEffect(() => {
    try {
      api.get(`users?_limit=${10}`).then((data) => {
        setUsers(data?.data)
      })
    } catch (err) {
      console.log(`Error: ${err.message}`)
    }
  }, [])

  return (
    <div className='container'>
      <header className='header'>

      </header>

      <main className='main'>
        <UsersSection users={users}/>
        <aside className='aside'>

        </aside>
      </main>

      <footer className='footer'>

      </footer>
    </div>
  )
}

export default App
