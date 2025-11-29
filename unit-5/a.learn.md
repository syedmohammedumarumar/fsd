Here is a **simple, beginner-friendly explanation of designing and normalizing a database up to 3NF** that you can **write directly in your assignment/exam** ✅

---

## ✅ a. Design and Normalize a Database Schema up to 3NF (Beginner Friendly)

### 📌 Step 1: Start with an Un-normalized Table (UNF)

Suppose we store student and course details like this:

| student_id | student_name | course_name | instructor | instructor_phone |
| ---------- | ------------ | ----------- | ---------- | ---------------- |
| 1          | Flash        | DBMS        | Prof. A    | 9876543210       |
| 1          | Flash        | OS          | Prof. B    | 9123456789       |
| 2          | Barry        | DBMS        | Prof. A    | 9876543210       |

❌ Problems:

* Repeated data
* Redundancy
* Update & deletion problems

---

## 🔹 Step 2: First Normal Form (1NF)

**Rule:**

* Each field contains **atomic (single) values**
* No repeating groups

✅ The table already satisfies 1NF because:

* All values are single
* No multi-valued columns

So, this table is now in **1NF**.

---

## 🔹 Step 3: Second Normal Form (2NF)

**Rule:**

* Must be in 1NF
* **No partial dependency** (non-key columns must depend on the whole primary key)

Here, the **primary key = (student_id, course_name)**

But:

* `student_name` depends only on `student_id`
* `instructor` depends only on `course_name`

❌ Partial dependency exists → Not in 2NF

### ✅ Convert to 2NF by splitting tables:

### 1. STUDENTS Table

```sql
students(student_id, student_name)
```

| student_id | student_name |
| ---------- | ------------ |
| 1          | Flash        |
| 2          | Barry        |

---

### 2. COURSES Table

```sql
courses(course_name, instructor, instructor_phone)
```

| course_name | instructor | instructor_phone |
| ----------- | ---------- | ---------------- |
| DBMS        | Prof. A    | 9876543210       |
| OS          | Prof. B    | 9123456789       |

---

### 3. ENROLLMENT Table

```sql
enrollments(student_id, course_name)
```

| student_id | course_name |
| ---------- | ----------- |
| 1          | DBMS        |
| 1          | OS          |
| 2          | DBMS        |

✅ Now the design is in **2NF**.

---

## 🔹 Step 4: Third Normal Form (3NF)

**Rule:**

* Must be in 2NF
* **No transitive dependency**
  (Non-key attributes should not depend on other non-key attributes)

In the `courses` table:

* `instructor_phone` depends on `instructor`, not directly on `course_name`

❌ Transitive dependency exists → Not in 3NF

---

## ✅ Convert to 3NF by splitting again:

### 1. INSTRUCTORS Table

```sql
instructors(instructor_id, instructor_name, instructor_phone)
```

| instructor_id | instructor_name | instructor_phone |
| ------------- | --------------- | ---------------- |
| 1             | Prof. A         | 9876543210       |
| 2             | Prof. B         | 9123456789       |

---

### 2. COURSES Table (Updated)

```sql
courses(course_name, instructor_id)
```

| course_name | instructor_id |
| ----------- | ------------- |
| DBMS        | 1             |
| OS          | 2             |

---

### 3. STUDENTS Table

```sql
students(student_id, student_name)
```

---

### 4. ENROLLMENTS Table

```sql
enrollments(student_id, course_name)
```

✅ Now there is:

* No partial dependency ✅
* No transitive dependency ✅
* No redundancy ✅

🎉 The database is fully **normalized up to Third Normal Form (3NF)**.

---

## ✅ Final 3NF Schema (Simple)

```sql
STUDENTS(student_id, student_name)

INSTRUCTORS(instructor_id, instructor_name, instructor_phone)

COURSES(course_name, instructor_id)

ENROLLMENTS(student_id, course_name)
```

---

## ✅ Key Benefits of 3NF

* Removes data duplication
* Avoids update anomalies
* Improves data integrity
* Saves storage space

---

If you want, I can also:

* Draw an **ER diagram**
* Convert this into **MySQL CREATE TABLE statements**
* Or prepare it in **lab record format with outputs**

Just tell me 👍
