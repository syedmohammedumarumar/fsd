import React, { useState,useEffect, use } from 'react'
import axios from 'axios'

const App = () => {
  const [users,setUsers] = useState([])


  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => setUsers(res.data)).catch((err)=> console.log(err))
  },[])

  return (
    <div>
      <h2>fetch data using axio</h2>

    {
      users.map((user)=> (

        <div key={user.id}>
          <p>{user.name}</p>
          <p>{user.email}</p>
        </div>
      ))
    }
  
    </div>
  )
}

export default App
