# ✅ **index.js (tiny version)**

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
```

---

# ✅ **App.js — MINIMUM React Router EXAMPLE**

```jsx
import { Routes, Route, Link } from "react-router-dom";

function Home() {
  return <h2>Home Page</h2>;
}

function About() {
  return <h2>About Page</h2>;
}

export default function App() {
  return (
    <div>
      <h3>Simple React Router Demo</h3>

      <Link to="/">Home</Link> | <Link to="/about">About</Link>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}
```

---

# 🎉 **That’s it! Only 2 components. No extra files.**

### Output:

* Clicking **Home** → shows “Home Page”
* Clicking **About** → shows “About Page”

