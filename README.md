# Modern Developer Portfolio & Git Workflow Experiment

This project is a comprehensive academic submission demonstrating the creation of a responsive personal portfolio website and the implementation of essential Git version control operations.

## 🚀 Project Overview
The "Modern Developer Portfolio" is a multi-page website built using pure HTML5, CSS3, and Vanilla JavaScript. It serves as a professional showcase for a developer's skills, education, and projects, while the underlying development process follows a strict Git workflow.

## 📁 Folder Structure
```text
GIT 7/
├── index.html          # Home Page with Hero section and typing effect
├── about.html          # About Page with education timeline and skills
├── projects.html       # Projects Page with category filtering
├── contact.html        # Contact Page with form validation
├── css/
│   └── style.css       # Core styling and design system
├── js/
│   └── script.js       # Interactive logic and DOM manipulation
├── assets/
│   └── images/         # Project images and profile photo
└── README.md           # Project documentation (this file)
```

## ✨ Key Features
- **Responsive Navigation**: Sticky navbar with mobile-friendly hamburger menu.
- **Dynamic UI**: Animated typing effect on the landing page.
- **Theme Support**: Dark/Light mode toggle with local storage persistence.
- **Interactive Skills**: Progress bars that animate when scrolled into view.
- **Project Filtering**: Sort projects by category without page reload.
- **Robust Validation**: Client-side form validation using Regular Expressions.
- **Smooth UX**: Back-to-top button and smooth scrolling.

---

## 🛠️ Git Operations Demonstrated

The following Git commands were used to manage this project:

### 1. Initializing the Repository
```bash
git init
```
*Creates a new local Git repository in the project folder.*

### 2. Staging Files
```bash
git add .
```
*Adds all new and modified files to the staging area.*

### 3. First Commit
```bash
git commit -m "Initial portfolio structure"
```
*Records the project state in the repository history.*

### 4. Branching for Features
```bash
git checkout -b feature-contact-form
```
*Creates and switches to a new branch for isolated feature development.*

### 5. Managing Changes
```bash
git commit -m "Added contact form validation"
```
*Saves progress specifically related to the contact form on the feature branch.*

### 6. Merging to Main
```bash
git checkout main
git merge feature-contact-form
```
*Integrates completed feature work back into the main stable branch.*

### 7. Remote Synchronization
```bash
git remote add origin <repository-url>
git push -u origin main
```
*Connects the local repository to GitHub and uploads the code.*

### 8. Handling Collaboration (Pull)
```bash
git pull origin main
```
*Fetches and merges changes from the remote repository to the local machine.*

---

## ⚠️ Merge Conflict Example & Resolution
During development, if two branches modify the same line in `style.css`:
1. **The Conflict**: Git pauses the merge and marks the conflict in the file.
2. **The Markers**:
   ```css
   <<<<<<< HEAD
   --primary-color: #2563eb;
   =======
   --primary-color: #4f46e5;
   >>>>>>> feature-new-theme
   ```
3. **The Resolution**: Edit the file to choose the preferred color, remove markers, then:
   ```bash
   git add style.css
   git commit -m "Resolved merge conflict in primary color"
   ```

## 🎓 Conclusion
This experiment successfully demonstrates the integration of modern web development practices with professional version control workflows, essential for any academic or industry-level project.
