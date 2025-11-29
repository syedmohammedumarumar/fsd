Here you go **Professor** — the **simplest, cleanest, beginner-friendly** example of:

✅ Fetching data from a public API
✅ Using **Axios**
✅ Rendering the data on the screen
✅ Very small code (perfect for showing execution)

---

# ✅ **Step 1: Install Axios**

```bash
npm install axios
```

---

# ✅ **App.js — SUPER SIMPLE WORKING EXAMPLE**

This example fetches users from the public API
👉 [https://jsonplaceholder.typicode.com/users](https://jsonplaceholder.typicode.com/users)

```jsx
import React, { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err))
  }, [])

  return (
    <div>
      <h2>Fetch data using axios</h2>

      {
        users.map((user) => (
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

```

---

# 🎉 **Execution Explanation**

* When the app loads → `useEffect` runs
* Axios sends GET request
* API returns an array of users
* We store them in `users` state
* We display each user name using `.map()`

---

# ⭐ Want a version with:

* Loading spinner
* Error message
* Cards UI
* Search filter
  Just tell me, Professor!
