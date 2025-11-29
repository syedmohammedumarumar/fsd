Experiment2: Initialize a Git repository and push a static web project to GitHub
Aim
To learn how to initialize a Git repository locally, connect it to a GitHub repository, and push a static web project (containing HTML, CSS, and JS files) to GitHub. Optionally, host the website using GitHub Pages.
Tools Required
•	Git (Installed from https://git-scm.com)
•	GitHub account (https://github.com)
•	Code Editor (e.g., VS Code, Sublime Text)
•	Basic static website files (index.html, style.css)
•	Internet connection
Folder Structure Example
personal_portfolio/
├── index.html
└── style.css


Procedure
Step 1: Create or Prepare Your Static Website: Create a folder called personal_portfolio and add index.html and style.css.
Step 2: Initialize Git in Local Folder: Open Terminal / Git Bash / Command Prompt and navigate to your project directory:
cd path/to/personal_portfolio
git init
Step 3: Configure Git (First-time only)
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
Step 4: Add Files and Commit
git add .
git commit -m "Initial commit with static web files"
Step 5: Create a New Repository on GitHub
1)	Go to https://github.com
2)	Click ➕ → New repository
3)	Name it personal_portfolio
4)	Do not initialize with README, .gitignore, or license
5)	Click Create repository
Step 6: Connect GitHub Remote Repository: Copy the GitHub repository link, then in your terminal:
git remote add origin https://github.com/your-username/personal_portfolio.git
git branch -M main
git push -u origin main
Step 7: Verify Upload: Visit your repository on GitHub to see the files.
https://github.com/udayameister/personal_portfolio
Step 8: (Optional) Enable GitHub Pages Hosting
1.	Go to the Settings tab of your repository
2.	Click Pages (left sidebar)
3.	Under "Source", choose:
o	Branch: main
o	Folder: / (root)
4.	Click Save
Your site will be hosted at: https://udayameister.github.io/Udaya_portfolio/
Step 9: (Optional) Workflow to Reflect Code Updates Online (GitHub Pages)
If you make any changes locally (in your HTML, CSS, JS files), follow these steps to update the online (GitHub Pages) version:
1)	Edit your code locally (e.g., update index.html)
2)	Stage and commit your changes:
git add .
git commit -m "Updated portfolio content"
3)	Push changes to GitHub:
git push origin main
4)	Wait 30–60 seconds, then refresh your GitHub Pages URL:
Your Updated site will be hosted at: https://udayameister.github.io/Udaya_portfolio/
