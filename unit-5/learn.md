Understood **Professor** — I’ll give you **very simple, beginner-friendly, minimal codes** to demonstrate **UNIT–V Database & Deployment**.

These are **execution-only examples**, not full projects.
Perfect for practicals/lab exams.

---

# ✅ **UNIT–V (DATABASES & DEPLOYMENT)**

## **a. Design and normalize a database schema (up to 3NF)**

### Example: Student – Course – Enrollment

### **UNNORMALIZED TABLE (UNF)**

| student_id | student_name | course_list |
| ---------- | ------------ | ----------- |
| 1          | Flash        | C, Java     |

---

### **1NF (Remove repeating groups)**

**Student Table**

| student_id | student_name |
| ---------- | ------------ |
| 1          | Flash        |

**Course Table**

| course_id | course_name |
| --------- | ----------- |
| 101       | C           |
| 102       | Java        |

**Enrollment Table**

| student_id | course_id |
| ---------- | --------- |
| 1          | 101       |
| 1          | 102       |

---

### **2NF (Remove partial dependencies)**

Already satisfied because no composite primary key in Student or Course.

---

### **3NF (Remove transitive dependencies)**

Ensure no non-key depends on another non-key.
Example: move branch_name to separate table.

✔ Done.

---

# ✅ **b. SQL CRUD on MySQL/PostgreSQL (Very Simple)**

### **Create Table**

```sql
CREATE TABLE students (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50),
    email VARCHAR(100)
);
```

### **INSERT**

```sql
INSERT INTO students(name, email)
VALUES ('Flash', 'flash@gmail.com');
```

### **SELECT**

```sql
SELECT * FROM students;
```

### **UPDATE**

```sql
UPDATE students
SET email = 'newmail@gmail.com'
WHERE id = 1;
```

### **DELETE**

```sql
DELETE FROM students WHERE id = 1;
```

These 4 are enough for lab.

---

# ✅ **c. Spring Boot + MySQL (Spring JDBC) — SIMPLEST CODE**

### 1. **application.properties**

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/mydb
spring.datasource.username=root
spring.datasource.password=1234
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
```

---

### 2. **pom.xml dependency**

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-jdbc</artifactId>
</dependency>

<dependency>
    <groupId>mysql</groupId>
    <artifactId>mysql-connector-j</artifactId>
</dependency>
```

---

### 3. **Student Model**

```java
public class Student {
    private int id;
    private String name;
    private String email;
}
```

---

### 4. **DAO (Very Simple)**

```java
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class StudentDAO {

    private final JdbcTemplate jdbc;

    public StudentDAO(JdbcTemplate jdbc) {
        this.jdbc = jdbc;
    }

    public void save(String name, String email) {
        jdbc.update("INSERT INTO students(name, email) VALUES (?,?)", name, email);
    }

    public List<Map<String, Object>> list() {
        return jdbc.queryForList("SELECT * FROM students");
    }
}
```

---

### 5. **Controller**

```java
import org.springframework.web.bind.annotation.*;

@RestController
public class StudentController {

    private final StudentDAO dao;

    public StudentController(StudentDAO dao) {
        this.dao = dao;
    }

    @PostMapping("/add")
    public String add(@RequestBody Student s) {
        dao.save(s.getName(), s.getEmail());
        return "Saved";
    }

    @GetMapping("/all")
    public List getStudents() {
        return dao.list();
    }
}
```

✔ This is enough to show a Spring Boot + MySQL integration working.

---

# ✅ **d. Agile Tools (Trello / Jira) — Demonstration Script**

### **Trello Steps (for lab demo)**

1. Create board → name: *Student Management System*
2. Add 3 lists:

   * To Do
   * In Progress
   * Done
3. Add simple tasks:

   * “Create backend”
   * “Design UI”
   * “Connect database”
4. Drag and drop tasks into different lists.

✔ That’s enough to show Agile workflow.

---

### **Jira simple steps**

1. Create new project → *Kanban*
2. Create issues:

   * API Endpoint Issue
   * Database Issue
   * UI Issue
3. Move tasks from *To Do → In Progress → Done*

✔ Lab-ready demonstration.

---

# ✅ **e. Deploy a Full Stack App (Super Simple Ways)**

### **Option 1: Deploy Spring Boot on Heroku**

1. Add plugin in `pom.xml`:

```xml
<plugin>
    <groupId>com.heroku.sdk</groupId>
    <artifactId>heroku-maven-plugin</artifactId>
    <version>3.0.3</version>
</plugin>
```

2. Build JAR:

```bash
mvn clean package
```

3. Deploy:

```bash
heroku create
heroku deploy:jar target/demoapi-1.0.jar --app your-app-name
```

---

### **Option 2: Deploy React on GitHub Pages**

```bash
npm install gh-pages --save-dev
```

Add to `package.json`:

```json
"homepage": "https://username.github.io/project"
```

Then paste scripts:

```json
"predeploy": "npm run build",
"deploy": "gh-pages -d build"
```

Deploy:

```bash
npm run deploy
```

---

### **Option 3: Deploy both on Render (EASIEST)**

* Create Render account
* Upload Spring Boot Git repo → select "Web Service"
* Upload React → select "Static Site"
* Render deploys automatically

✔ Very easy for beginners
✔ Output visible instantly

---

# 🎉 **DONE — FULL UNIT-V COMPLETED**

You now have:

✔ Simple DB normalization
✔ Simple SQL CRUD
✔ Simplest Spring + MySQL JDBC
✔ Agile demo steps
✔ Cloud deployment basics

If you want, I can convert **Unit-4 + Unit-5 into PDF notes** or **PowerPoint for presentation**.
