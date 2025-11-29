# FSD (Full Stack Development) - Complete Programs Repository

This README contains all the programs and exercises from Unit-1 through Unit-5.

---

## 📚 Table of Contents

- [Unit-1: Web Fundamentals](#unit-1-web-fundamentals)
- [Unit-2: JavaScript & Interactive Web](#unit-2-javascript--interactive-web)
- [Unit-3: React & Modern Frontend](#unit-3-react--modern-frontend)
- [Unit-5: Database & Deployment](#unit-5-database--deployment)

---

## **UNIT-1: Web Fundamentals**

### **Unit-1 a: Portfolio Website**

**File:** `unit-1/a/index.html`

A professional portfolio website for Udayakumar P showcasing education, skills, projects, and contact information.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Udayakumar P | Portfolio</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <header>
    <h1>Udayakumar P</h1>
    <p>PhD Research Scholar | AI in Neuroimaging</p>
  </header>

  <section id="about">
    <h2>About Me</h2>
    <p>I am a PhD scholar at VIT, working on brain connectome mapping using deep learning. I specialize in AI, neuroimaging, and graph-based modeling.</p>
  </section>

  <section id="education">
    <h2>Education</h2>
    <ul>
      <li>PhD in Computer Science and Engineering, VIT</li>
      <li>M.E. in Computer Science, Anna University</li>
      <li>B.E. in Computer Science, Anna University</li>
    </ul>
  </section>

  <section id="skills">
    <h2>Skills</h2>
    <ul>
      <li>Python, MATLAB, R</li>
      <li>TensorFlow, PyTorch</li>
      <li>Git, HTML, CSS</li>
      <li>FSL, FreeSurfer, SPM12, ANTs</li>
    </ul>
  </section>

  <section id="projects">
    <h2>Projects</h2>
    <ul>
      <li>Connectome-based Schizophrenia Prediction using GNN</li>
      <li>Multimodal Brain Classification with Graph Attention Network</li>
      <li>fMRI Functional Connectivity Matrix Generator</li>
    </ul>
  </section>

  <section id="contact">
    <h2>Contact</h2>
    <p>Email: udaya@example.com</p>
    <p>LinkedIn: <a href="https://linkedin.com/in/udayakumar-palanivelu-934bb941">Profile</a></p>
    <p>GitHub: <a href="https://github.com/udayameister">Profile</a></p>
  </section>

  <footer>
    <p>&copy; 2025 Udayakumar P. All rights reserved.</p>
  </footer>

</body>
</html>
```

---

### **Unit-1 b: Git & GitHub Basics**

**File:** `unit-1/b/learn.md`

**Aim:** To learn how to initialize a Git repository locally, connect it to a GitHub repository, and push a static web project to GitHub.

**Key Steps:**

1. **Initialize Git Repository**
   ```bash
   git init
   ```

2. **Configure Git (First-time only)**
   ```bash
   git config --global user.name "Your Name"
   git config --global user.email "your.email@example.com"
   ```

3. **Add Files and Commit**
   ```bash
   git add .
   git commit -m "Initial commit with static web files"
   ```

4. **Create Repository on GitHub**
   - Go to https://github.com
   - Click ➕ → New repository
   - Name it and click Create

5. **Connect Remote Repository**
   ```bash
   git remote add origin https://github.com/your-username/repository.git
   git branch -M main
   git push -u origin main
   ```

6. **Enable GitHub Pages (Optional)**
   - Go to Settings → Pages
   - Choose Branch: main, Folder: /
   - Your site will be hosted at: `https://username.github.io/repo-name/`

---

### **Unit-1 c: Linux/Unix & Git Commands**

**File:** `unit-1/c/learn.md`

**Basic Linux/Unix Terminal Commands:**

| Command | Description |
|---------|-------------|
| `pwd` | Prints current working directory |
| `ls` | Lists files and directories |
| `cd [directory]` | Changes directory |
| `mkdir [dir_name]` | Creates new directory |
| `rmdir [dir_name]` | Deletes an empty directory |
| `touch [file_name]` | Creates an empty file |
| `rm [file_name]` | Deletes a file |
| `cp [source] [destination]` | Copies a file or directory |
| `mv [source] [destination]` | Moves or renames file/directory |
| `cat [file_name]` | Displays file content |
| `nano [file_name]` | Opens file in nano editor |
| `echo "text" > file` | Writes text into a file |
| `man [command]` | Shows manual/help for command |

---

### **Unit-1 d: MITS Institute Website**

**File:** `unit-1/d/index.html`

A multi-page website for Madanapalle Institute of Technology and Science with navigation to Home, About, Departments, and Contact pages.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>MITS | Home</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <header>
    <h1>Madanapalle Institute of Technology and Science</h1>
    <nav>
      <a href="index.html">Home</a>
      <a href="about.html">About</a>
      <a href="departments.html">Departments</a>
      <a href="contact.html">Contact</a>
    </nav>
  </header>
  <main>
    <section>
      <h2>Welcome to MITS</h2>
      <p>MITS is an autonomous institution and Deemed University located in Madanapalle, Andhra Pradesh, offering a wide range of undergraduate, postgraduate, and doctoral programs in engineering and sciences.</p>
    </section>
  </main>
  <footer>
    <p>&copy; 2025 MITS. All rights reserved.</p>
  </footer>
</body>
</html>
```

---

## **UNIT-2: JavaScript & Interactive Web**

### **Unit-2 a: JavaScript Basics - Variables, Functions, Objects**

**File:** `unit-2/a/index.html`

Demonstrates JavaScript fundamentals including variables (var, let, const), functions, and objects.

```html
<!DOCTYPE html>
<html>
<head>
  <title>JavaScript Basics</title>
</head>
<body>
  <h2>JavaScript Basics: Variables, Functions, Objects</h2>
  <p id="output"></p>

  <script>
    // 1. Variables
    var name = "Uday";      // var function scoped
    let age = 25;           // let block scoped
    const pi = 3.14159;     // const fixed value

    // 2. Functions
    function greet(user) {
      return "Hello, " + user + "!";
    }

    function addNumbers(a, b) {
      return a + b;
    }

    // 3. Object with properties & method
    let student = {
      firstName: "John",
      lastName: "Doe",
      age: 20,
      fullName: function() {
        return this.firstName + " " + this.lastName;
      }
    };

    // Display outputs
    let outputText = "";
    outputText += "Name: " + name + "<br>";
    outputText += "Age: " + age + "<br>";
    outputText += "Value of PI: " + pi + "<br><br>";

    outputText += greet(name) + "<br>";
    outputText += "Sum of 5 and 10 is: " + addNumbers(5, 10) + "<br><br>";

    outputText += "Student Name: " + student.fullName() + "<br>";
    outputText += "Student Age: " + student.age + "<br>";

    // Print to browser
    document.getElementById("output").innerHTML = outputText;
  </script>
</body>
</html>
```

---

### **Unit-2 b: AJAX Form Submission**

**File:** `unit-2/b/index.html`

Demonstrates AJAX form submission using the Fetch API to send data to a server without page reload.

```html
<!DOCTYPE html>
<html>
<head>
  <title>AJAX Form Example</title>
  <style>
    body { font-family: Arial, sans-serif; margin: 20px; }
    form { margin-bottom: 20px; }
    input, button { padding: 8px; margin: 5px; }
    #response { border: 1px solid #ccc; padding: 10px; margin-top: 15px; }
  </style>
</head>
<body>
  <h2>AJAX-based Form Submission</h2>
  
  <!-- Form -->
  <form id="userForm">
    <label>Name: </label>
    <input type="text" id="name" required><br>
    <label>Email:</label>
    <input type="email" id="email" required><br>
    <button type="submit">Submit</button>
  </form>
  
  <!-- Response -->
  <div id="response">Server response will appear here...</div>
  
  <script>
    // Select form and response area
    const form = document.getElementById("userForm");
    const responseDiv = document.getElementById("response");

    // Add submit event
    form.addEventListener("submit", function(event) {
      event.preventDefault(); // prevent page reload

      // Collect data
      const userData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value
      };

      // AJAX using fetch API
      fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
      })
      .then(response => response.json())
      .then(data => {
        responseDiv.innerHTML = `
          <h3>Form Submitted Successfully!</h3>
          <p><strong>ID (mock server response):</strong> ${data.id}</p>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
        `;
      })
      .catch(error => {
        responseDiv.innerHTML = `<p style="color: red;">Error: ${error}</p>`;
      });
    });
  </script>
</body>
</html>
```

---

### **Unit-2 c: Dynamic Form with jQuery Validation**

**File:** `unit-2/c/index.html`

Demonstrates dynamic form generation and jQuery-based validation for multiple input fields.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dynamic Form + jQuery Validation</title>

    <!-- jQuery CDN -->
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

    <style>
        body { font-family: Arial; padding: 20px; }
        .error { color: red; font-size: 14px; }
        .input-group { margin-bottom: 10px; }
        input { padding: 6px; margin: 5px; }
        button { padding: 6px 12px; }
    </style>
</head>
<body>

    <h2>Dynamic Form with jQuery Validation</h2>

    <form id="myForm">

        <div id="inputContainer">
            <div class="input-group">
                <input type="text" class="nameField" placeholder="Enter Name">
                <input type="text" class="emailField" placeholder="Enter Email">
                <span class="error"></span>
            </div>
        </div>

        <button type="button" id="addField">+ Add More</button>
        <br><br>

        <button type="submit">Submit</button>
    </form>

    <div id="result"></div>

    <script>
        // Add new input fields dynamically
        $("#addField").click(function () {
            $("#inputContainer").append(`
                <div class="input-group">
                    <input type="text" class="nameField" placeholder="Enter Name">
                    <input type="text" class="emailField" placeholder="Enter Email">
                    <span class="error"></span>
                </div>
            `);
        });

        // Form submit validation
        $("#myForm").submit(function (event) {
            event.preventDefault();

            let isValid = true;

            $(".input-group").each(function () {
                let name = $(this).find(".nameField").val().trim();
                let email = $(this).find(".emailField").val().trim();
                let errorBox = $(this).find(".error");

                errorBox.text(""); // clear previous errors

                if (name === "" || email === "") {
                    errorBox.text("All fields are required");
                    isValid = false;
                } 
                else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                    errorBox.text("Invalid email format");
                    isValid = false;
                }
            });

            if (isValid) {
                $("#result").html("<h3>Form Submitted Successfully ✔️</h3>");
            }
        });
    </script>

</body>
</html>
```

---

### **Unit-2 d: jQuery UI Elements**

**File:** `unit-2/d/index.html`

Demonstrates jQuery UI components including Slider, Modal Dialog, and Tabs.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>jQuery UI Elements</title>

    <!-- jQuery + jQuery UI -->
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <link rel="stylesheet" href="https://code.jquery.com/ui/1.13.2/themes/base/jquery-ui.css">
    <script src="https://code.jquery.com/ui/1.13.2/jquery-ui.js"></script>

    <style>
        body { font-family: Arial; padding: 20px; }
        #sliderValue { font-weight: bold; color: green; }
        .modal-content { padding: 20px; }
        #tabs { margin-top: 20px; }
        .ui-dialog-titlebar-close { display: none; }
    </style>
</head>

<body>

    <h2>Interactive UI Elements with jQuery</h2>

    <!-- Slider -->
    <h3>Slider</h3>
    <div id="slider"></div>
    <p>Value: <span id="sliderValue">50</span></p>

    <hr>

    <!-- Modal -->
    <h3>Modal Popup</h3>
    <button id="openModal">Open Modal</button>

    <div id="myModal" title="Simple Modal">
        <div class="modal-content">
            <p>This is a jQuery UI modal dialog!</p>
            <button id="closeModal">Close</button>
        </div>
    </div>

    <hr>

    <!-- Tabs -->
    <h3>Tabs</h3>
    <div id="tabs">
        <ul>
            <li><a href="#tab1">Home</a></li>
            <li><a href="#tab2">Profile</a></li>
            <li><a href="#tab3">Settings</a></li>
        </ul>

        <div id="tab1">
            <p>Welcome to Home tab.</p>
        </div>
        <div id="tab2">
            <p>This is Profile tab.</p>
        </div>
        <div id="tab3">
            <p>Customize your Settings here.</p>
        </div>
    </div>

    <script>

        // Slider
        $("#slider").slider({
            value: 50,
            min: 0,
            max: 100,
            slide: function(event, ui) {
                $("#sliderValue").text(ui.value);
            }
        });

        // Modal
        $("#myModal").dialog({
            autoOpen: false,
            modal: true,
            width: 300
        });

        $("#openModal").click(function () {
            $("#myModal").dialog("open");
        });

        $("#closeModal").click(function () {
            $("#myModal").dialog("close");
        });

        // Tabs
        $("#tabs").tabs();
        
    </script>

</body>
</html>
```

---

### **Unit-2 e: JSON Dynamic Rendering**

**File:** `unit-2/e/index.html`

Demonstrates dynamic HTML generation from JSON data using JavaScript.

```html
<!DOCTYPE html>
<html>
<head>
  <title>JSON Dynamic Rendering</title>
  <style>
    body { font-family: Arial; padding: 20px; }
    .card { 
      border: 1px solid #ccc; 
      padding: 10px; 
      margin: 10px; 
      width: 200px;
      border-radius: 5px;
    }
  </style>
</head>
<body>

  <h2>Dynamic Content Rendering using JSON</h2>

  <!-- Container where content will be added -->
  <div id="container"></div>

  <script>
    // Sample JSON data
    const students = [
      { name: "Umar", age: 21, course: "CSE" },
      { name: "Aisha", age: 20, course: "ECE" },
      { name: "Rahul", age: 22, course: "IT" }
    ];

    // Select the container
    const container = document.getElementById("container");

    // Loop through JSON and generate HTML
    students.forEach(student => {
      const card = `
        <div class="card">
          <h3>${student.name}</h3>
          <p>Age: ${student.age}</p>
          <p>Course: ${student.course}</p>
        </div>
      `;
      container.innerHTML += card;  // Add the card to page
    });
  </script>

</body>
</html>
```

---

## **UNIT-3: React & Modern Frontend**

### **Unit-3 b: React Router Basics**

**File:** `unit-3/b/learn.md`

**Minimal React Router Example - 2 Components Only**

**index.js:**
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

**App.js:**
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

### **Unit-3 c: Simple React Form**

**File:** `unit-3/c/learn.js`

A React component demonstrating form handling with state management using hooks.

```jsx
import { useState } from "react";

export default function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name: ${name}\nEmail: ${email}`);
  };

  return (
    <div>
      <h2>Simple React Form</h2>

      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <br /><br />

        <input 
          type="text" 
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <br /><br />

        <button type="submit">Submit</button>
      </form>

      <h3>Live Preview</h3>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
    </div>
  );
}
```

---

### **Unit-3 d: Redux Counter App**

**File:** `unit-3/d/learn.md`

**Simplest Redux Example using Redux Toolkit**

**Step 1: Install Redux Toolkit + React Redux**
```bash
npm install @reduxjs/toolkit react-redux
```

**Step 2: Create store.js**
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

**Step 3: index.js - Wrap App with Provider**
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

**Step 4: App.js - Use Redux in Component**
```jsx
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./store";

export default function App() {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}
```

---

### **Unit-3 e: Axios API Data Fetching**

**File:** `unit-3/e/learn.md`

**Simple API Data Fetching using Axios**

**Step 1: Install Axios**
```bash
npm install axios
```

**Step 2: App.js - Fetch and Display Data**
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

## **UNIT-5: Database & Deployment**

### **Unit-5 a: Database Design & Normalization (up to 3NF)**

**File:** `unit-5/a.learn.md` & `unit-5/learn.md`

**Example: Student - Course - Enrollment**

#### **Step 1: Unnormalized Table (UNF)**

| student_id | student_name | course_name | instructor | instructor_phone |
|----------|--------------|-----------|-----------|-----------------|
| 1 | Flash | DBMS | Prof. A | 9876543210 |
| 1 | Flash | OS | Prof. B | 9123456789 |
| 2 | Barry | DBMS | Prof. A | 9876543210 |

**Problems:** Repeated data, redundancy, update & deletion anomalies

---

#### **Step 2: First Normal Form (1NF)**

**Rule:** Each field contains atomic (single) values. No repeating groups.

✅ The table satisfies 1NF (all values are single, no multi-valued columns)

---

#### **Step 3: Second Normal Form (2NF)**

**Rule:** Must be in 1NF and no partial dependency.

**Primary Key:** (student_id, course_name)

**Partial Dependencies Found:**
- `student_name` depends only on `student_id`
- `instructor` depends only on `course_name`

**Split into 3 tables:**

**1. STUDENTS Table**
```sql
students(student_id, student_name)
```

| student_id | student_name |
|----------|--------------|
| 1 | Flash |
| 2 | Barry |

**2. COURSES Table**
```sql
courses(course_name, instructor, instructor_phone)
```

| course_name | instructor | instructor_phone |
|-----------|-----------|-----------------|
| DBMS | Prof. A | 9876543210 |
| OS | Prof. B | 9123456789 |

**3. ENROLLMENT Table**
```sql
enrollments(student_id, course_name)
```

| student_id | course_name |
|----------|-----------|
| 1 | DBMS |
| 1 | OS |
| 2 | DBMS |

✅ Now in **2NF**

---

#### **Step 4: Third Normal Form (3NF)**

**Rule:** Must be in 2NF and no transitive dependency.

The current design already satisfies 3NF because no non-key attributes depend on other non-key attributes.

---

### **Unit-5 b: SQL CRUD Operations**

**File:** `unit-5/learn.md`

**Simple SQL Operations on MySQL/PostgreSQL**

#### **Create Table**
```sql
CREATE TABLE students (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50),
    email VARCHAR(100)
);
```

#### **INSERT (Create)**
```sql
INSERT INTO students(name, email)
VALUES ('Flash', 'flash@gmail.com');
```

#### **SELECT (Read)**
```sql
SELECT * FROM students;
```

#### **UPDATE (Update)**
```sql
UPDATE students
SET email = 'newmail@gmail.com'
WHERE id = 1;
```

#### **DELETE (Delete)**
```sql
DELETE FROM students WHERE id = 1;
```

---

## **Summary of All Programs**

| Unit | Section | Topic | File |
|------|---------|-------|------|
| 1 | a | Portfolio Website | unit-1/a/index.html |
| 1 | b | Git & GitHub Basics | unit-1/b/learn.md |
| 1 | c | Linux/Unix Commands | unit-1/c/learn.md |
| 1 | d | MITS Institute Website | unit-1/d/index.html |
| 2 | a | JavaScript Basics | unit-2/a/index.html |
| 2 | b | AJAX Form Submission | unit-2/b/index.html |
| 2 | c | Dynamic Form + jQuery | unit-2/c/index.html |
| 2 | d | jQuery UI Elements | unit-2/d/index.html |
| 2 | e | JSON Dynamic Rendering | unit-2/e/index.html |
| 3 | b | React Router | unit-3/b/learn.md |
| 3 | c | React Form | unit-3/c/learn.js |
| 3 | d | Redux Counter | unit-3/d/learn.md |
| 3 | e | Axios API Fetching | unit-3/e/learn.md |
| 5 | a | Database Normalization | unit-5/a.learn.md |
| 5 | b | SQL CRUD | unit-5/learn.md |

---

## **How to Use This Repository**

1. **Navigation:** Each section contains the complete code with explanations.
2. **Learning Path:** Follow Unit-1 → Unit-2 → Unit-3 → Unit-5 sequentially.
3. **Execution:** Copy code into appropriate files and run in your environment.
4. **Lab Practicals:** Use these programs for lab assignments and practicals.

---

**Last Updated:** November 29, 2025

**Status:** Complete with all programs from Unit-1, Unit-2, Unit-3, and Unit-5
#   f s d  
 