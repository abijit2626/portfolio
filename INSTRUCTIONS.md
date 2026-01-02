# Cybersecurity Portfolio: Usage Instructions

This portfolio is designed to be **minimalist, technical, and human-authored**. All content is currently structured with placeholders for you to fill in.

## 🛠 Project Management

### Running the Project
1. Open a terminal in the project directory.
2. Run `npm install` (if you haven't already).
3. Run `npm run dev` to start the development server.
4. Run `npm run build` to create a production-ready static site in the `dist/` folder.

---

## 📝 How to Edit Content

### 1. Home Page
- **File**: `src/pages/Home.jsx`
- **Fields**: Fill in your identity statement, cybersecurity philosophy, and focus areas. Look for `{/* comments */}` and text in `[]` brackets.

### 2. About Page
- **File**: `src/pages/About.jsx`
- **Fields**: Explain your background, why you chose cybersecurity, and your learning methodology. Update the "Focus Areas" cards with your specific interests.

### 3. Skills
- **File**: `src/pages/Skills.jsx`
- **Fields**: Modify the `skillGroups` array at the top of the file to list your technical skills. Group them logically (OS, Languages, Tools, etc.).

### 4. Contact
- **File**: `src/pages/Contact.jsx`
- **Fields**: Update the `socialLinks` array with your email, GitHub, and LinkedIn handles.

---

## 📁 Projects & Writeups

### How to Add a New Project
1. **Prepare the Data**:
   - Go to `src/pages/Projects.jsx`.
   - Add a new object to the `projects` array with a unique `id`, `title`, and `description`.
2. **Create the Detail Page (Optional for simple lists)**:
   - The site uses a template in `src/pages/ProjectDetail.jsx`.
   - Currently, all projects share this template dynamically based on their ID.
   - **To customize a specific project**: Create a new file like `src/pages/projects/[YourProjectID].jsx` and update `App.jsx` to route to it.

### How to Add a New Writeup (Blog Post)
1. **Prepare the Data**:
   - Go to `src/pages/Writeups.jsx`.
   - Add a new object to the `posts` array.
2. **Write Content**:
   - Similar to projects, writeups use the `src/pages/WriteupDetail.jsx` template.
   - Edit the template to structure your technical explanation.

---

## 🛡 Rules for Human-Authored Content

To maintain the "Senior Cybersecurity Engineer" feel and avoid "AI polish":
1. **Be Specific**: instead of saying "I have strong problem-solving skills", describe a specific lab where you spent 4 hours troubleshooting a single log source.
2. **Focus on Behavior**: When describing projects, explain the *threat* you were defending against and the *behavior* of the system.
3. **Keep it Minimal**: Only list skills you can actually explain in an interview. No buzzword-only lists.
4. **Admit Limitations**: In project pages, the "Limitations" section is the most important for credibility. Use it to show you understand where your research ends.

---

## 🚀 Deployment
This is a static React site. You can deploy it easily to:
- **GitHub Pages**: Use the `gh-pages` npm package.
- **Vercel / Netlify**: Connect your GitHub repository for automatic builds.
- **Self-Hosted**: Run `npm run build` and upload the contents of the `dist/` folder to your server.
