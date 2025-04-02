import User from './User'
import s from './UsersSection.module.scss'

const UsersSection = ({users}) => {

  return (
    <section className='section'>
      <div className={s.users}>
        {users.map(user => (
          <User
            key={user.id}
            user={user}
          />
        ))}
      </div>
    </section>
  )
}

export default UsersSection