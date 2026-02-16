# EXPERIMENT REPORT: Git Version Control & Portfolio Development

**Experiment Title:** Create a Git repository, perform commit, push, pull, branch, and merge operations using GitHub.

---

## 1. AIM
To design and develop a responsive "Modern Developer Portfolio" website using pure HTML, CSS, and JavaScript, and to demonstrate professional version control workflows using Git and GitHub.

## 2. TOOLS USED
- **Code Editor:** Visual Studio Code
- **Language Stack:** HTML5, CSS3, Vanilla JavaScript
- **Version Control:** Git (CLI)
- **Hosting/Remote:** GitHub
- **Assets:** Font Awesome, Unsplash (Royalty-free images)

## 3. PROCEDURE (Step-by-Step)

### Phase 1: Repository Initialization
1. Open terminal in the project directory.
2. Initialize local repository:
   `git init`
3. Stage project files:
   `git add .`
4. Commit initial version:
   `git commit -m "Initial portfolio structure"`

### Phase 2: Feature Development with Branching
1. Create a dedicated branch for the contact form feature:
   `git checkout -b feature-contact-form`
2. Implement validation logic in `script.js` and structure in `contact.html`.
3. Commit changes to the feature branch:
   `git commit -m "Added contact form validation and regex checking"`

### Phase 3: Merging & Integration
1. Switch back to the master/main branch:
   `git checkout main`
2. Merge the completed feature:
   `git merge feature-contact-form`

### Phase 4: Remote Synchronization (GitHub Interface)
1. Create a new repository on GitHub.
2. Link the local repository to the remote:
   `git remote add origin https://github.com/username/portfolio-project.git`
3. Push the main branch:
   `git push -u origin main`

### Phase 5: Handling Collaborative Work
1. Simulate a remote update and pull the changes:
   `git pull origin main`

## 4. SCREENSHOT PLACEHOLDERS
*(Insert screenshots here in final PDF)*
1. **[Screenshot 01]:** Initial Project Structure and `git init` command.
2. **[Screenshot 02]:** Home Page (Desktop View) showing Typing Effect.
3. **[Screenshot 03]:** Projects Page with Active Category Filter.
4. **[Screenshot 04]:** Contact Form showing Validation Error Messages.
5. **[Screenshot 05]:** Terminal output of `git branch` and `git merge`.

## 5. OUTPUT
- A fully functional 4-page responsive website.
- Clean, semantic code adhering to modern web standards.
- A complete Git history log (visible via `git log`).
- A remote repository hosted on GitHub containing all project assets.

## 6. RESULT
The experiment was completed successfully. The website demonstrates responsiveness and interactive features (dark mode, validation, filtering). All Git operations including branching and merging were performed without errors, ensuring a robust development workflow.

## 7. CONCLUSION
This project illustrates the importance of Git in modern software development. By using branching strategies, developers can work on isolated features without affecting the main codebase. The integration of HTML/CSS/JS with Git provides a realistic experience of a full-stack developer's daily environment.

---
**Author:** [Your Name]
**Date:** February 16, 2026
**Course:** [Your Course Name]
