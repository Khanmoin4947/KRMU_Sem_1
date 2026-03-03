
---

```markdown
# Simple Python Calculator – Project Overview

## 1. Introduction

This document provides a detailed overview of the **Simple Python Calculator** mini project created for **Assignment 4 – Tools for Programming, Learning, and Collaboration** under the course **Computer Science Fundamentals & Career Pathways (ETCCCP105)**.

The purpose of this project is to:

- Build a small but complete software application.
- Learn how to use **Visual Studio Code**, **Git**, and **GitHub** together.
- Follow basic software development practices like version control and documentation.
- Connect classroom concepts with practical, real-world tools used by developers.

---

## 2. Problem Statement

The task is to create a **mini project** in one of the given formats. The chosen option is a:

> **Console-based Calculator in Python** supporting addition, subtraction, multiplication, and division.

The calculator should:

- Run in the terminal/command prompt.
- Accept user inputs for numbers and operations.
- Handle invalid inputs and divide-by-zero cases.
- Continue until the user chooses to exit.

---

## 3. Tools and Technologies

### 3.1 Visual Studio Code

Visual Studio Code (VS Code) was used as the main **code editor** because it provides:

- Syntax highlighting for Python
- Integrated terminal
- Extensions for Python support
- Easy file and folder management

### 3.2 Python

Python was chosen because:

- It is beginner-friendly.
- It has simple syntax for arithmetic operations.
- It is widely used in both academics and industry.

### 3.3 Git and GitHub

- **Git** was used for version control:
  - Tracking changes in source code
  - Creating meaningful commits
- **GitHub** was used to host the repository online:
  - To store the project in the cloud
  - To access the code from anywhere
  - To showcase the project as part of a portfolio

---

## 4. Development Process

### 4.1 Project Setup

1. Created a new folder for the project.
2. Opened the folder in **VS Code**.
3. Created the main file: `main.py`.
4. Wrote a simple version of the calculator and tested it.

### 4.2 Implementing Core Functionality

- Defined separate functions for:
  - `add(a, b)`
  - `subtract(a, b)`
  - `multiply(a, b)`
  - `divide(a, b)` (with divide-by-zero handling)
- Created a `main()` function that:
  - Displays a menu
  - Takes user choices
  - Calls the correct function based on the option
  - Loops until the user selects "Exit"
- Added input validation using `try-except` to prevent errors when user enters non-numeric values.

### 4.3 Version Control with Git

The following Git commands were used during development:

- `git init` – to initialize a local Git repository.
- `git status` – to check the status of files.
- `git add .` – to stage all changes.
- `git commit -m "<message>"` – to commit changes with meaningful messages.
- `git remote add origin <repo-url>` – to link local repo to GitHub.
- `git push -u origin main` – to push commits to GitHub.

Examples of commit messages:

- "Initial project structure and main.py created"
- "Added calculator functions and menu system"
- "Improved input validation and error handling"
- "Added README with project description"
- "Created docs folder and project overview documentation"

### 4.4 Creating Documentation

- **`README.md`**:
  - Added project title and short description
  - Added features list
  - Instructions to run the project
  - Repository structure
  - Future improvements

- **`docs/project_overview.md`** (this file):
  - Detailed explanation of tools
  - Step-by-step development process
  - Connection to real-world software development

---

## 5. Real-world Relevance

Although this is a small project, it reflects **real-world software development** practices:

- Using an IDE (VS Code) for editing and debugging.
- Using version control (Git) to manage code changes.
- Hosting code on GitHub to share and collaborate.
- Writing documentation in Markdown so others can understand and use the project.

These skills are directly useful in:

- Industry projects
- Open-source contributions
- Academic projects and internships

---

## 6. Challenges and Learnings

### Challenges Faced

- Handling invalid numeric input from the user.
- Managing divide-by-zero conditions.
- Learning the correct order of Git commands (init → add → commit → push).
- Organizing the repository in a clean and readable way.

### Key Learnings

- How to break a problem into smaller functions.
- How to structure a simple console application.
- How Git tracks changes and why meaningful commit messages matter.
- The importance of documentation for others to understand the project.

---

## 7. Future Improvements

Some possible future enhancements to the calculator:

1. **Advanced Operations**
   - Square root, exponent, modulus, trigonometric functions.
2. **Expression Evaluation**
   - Allow the user to type expressions directly like `2 + 3 * 4`.
3. **Graphical User Interface (GUI)**
   - Create a GUI using Python’s Tkinter or a web-based interface.
4. **Input History**
   - Show history of all operations performed in a session.
5. **Unit Testing**
   - Write automated tests for each function to ensure correctness.

---

## 8. Conclusion

This mini project successfully meets the assignment requirements:

- A working calculator built using Python.
- Code written and tested in Visual Studio Code.
- Version control maintained with Git.
- Repository hosted on GitHub with proper structure and documentation.

It also provides a strong foundation for understanding how real software projects are built, managed, and documented.
