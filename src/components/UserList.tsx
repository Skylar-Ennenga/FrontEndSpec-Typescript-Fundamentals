import React from 'react'








type User = {
    name: string
    age: number
  };




  const UserList = () => {
  
    const users: User[] = [
      { name: 'Sarah', age: 20 },
      { name: 'Alex', age: 30 },
      { name: 'Michael', age: 40 }
    ]
  
  
    return (
    <div>
      {
        users.map((user, index) => (
          <div key={index}>
            <p>Name: {user.name}</p>
            <p>Age: {user.age}</p>
          </div>
        ))
      }
    </div>
  )
}

export default UserList
