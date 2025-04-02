import { useState } from "react"
import s from './UsersSection.module.scss'

const User = ({user}) => {

  const [isActive, setActive] = useState(false)

  const handleToggleInfo = () => setActive(current => !current)

  return (
    <div className={s.users_wrap}>
      <div className={s.users_bl}>
        <p className='p'>{user.name}</p>
         <button className='btn btnToggleDetails' onClick={handleToggleInfo}
        >{isActive ? 'Hide Details' : 'Show Details'}</button>
      </div>

      {isActive && (
        <div>
          <span>{user.email}</span>
          <span>{user.phone}</span>
        </div>
      )}
    </div>
  )
}

export default User