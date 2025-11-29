Here you go **Professor** — the **simplest and cleanest Redux example** for a **Counter App**.
Perfect for showing execution in lab/practicals.

⚡ **Very small code**
⚡ **Beginner friendly**
⚡ **No confusing boilerplate**
⚡ Works in **React + Redux Toolkit (modern method)**

---

# ✅ Step 1: Install Redux Toolkit + React Redux

```bash
npm install @reduxjs/toolkit react-redux
```

---

# ✅ Step 2: Create store.js (super small)

```jsx
import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    increment: (state) => { state.value += 1; },
    decrement: (state) => { state.value -= 1; }
  }
});

export const { increment, decrement } = counterSlice.actions;

export const store = configureStore({
  reducer: { counter: counterSlice.reducer }
});
```

---

# ✅ Step 3: index.js — Wrap App with Provider

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
```

---

# ✅ Step 4: App.js (super simple UI)

```jsx
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./store";

export default function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Redux Counter App</h2>

      <h3>Count: {count}</h3>

      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}
```

---

# 🎉 **Execution Result**

✔ Clicking **+** increases count
✔ Clicking **–** decreases count
✔ State is connected to Redux store
✔ UI updates instantly

---

# ⭐ Optional: To-Do App (If you want)

If you want, I can also give you:

* The simplest **Redux Todo App**
* Redux with localStorage
* Redux with API calls (RTK Query)

Just tell me!
