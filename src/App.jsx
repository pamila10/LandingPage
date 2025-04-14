import { useEffect, useState } from 'react'
import './App.scss'
import api from './api/apiUsers'
import UsersSection from './components/UsersSection'

function App() {

  const [users, setUsers] = useState([])
  const [ratio, setRatio] = useState('1')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get(`users?_limit=${10}`)
        setUsers(response.data)
      } catch (err) {
        console.error(`Error: ${err.message}`)
      }
    }

    fetchData()

    const calcRatio = () => {
      setRatio(`1 / ${window.innerHeight / window.innerWidth}`)

      window.addEventListener('resize', calcRatio)

      return () => {
        window.removeEventListener('resize', calcRatio)
      }
    }
    
    calcRatio()

  }, [])

  return (
    <div className='container' style={{aspectRatio: ratio}}>
      <header className='header'></header>

      <main className='main'>
        <UsersSection users={users}/>
        <aside className='aside'></aside>
      </main>

      <footer className='footer'></footer>
    </div>
  )
}

export default App
