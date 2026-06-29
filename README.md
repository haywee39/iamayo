# 💻 Personal Web Portfolio

Welcome to the source code repository for my personal web portfolio. This is a high-performance, single-page application built completely from scratch to showcase my digital engineering projects, technical skill sets, and professional experience.

Live Demo: *(Insert your GitHub Pages or deployment link here)*

## 🛠️ Architecture & Tech Stack

The architecture of this repository prioritizes clean separation of concerns, high performance, and rapid asset loading without heavy framework overhead.

*   **Frontend:** Semantic HTML5, Vanilla JavaScript (ES6+), and Modular CSS3.
*   **Animations:** [GSAP (GreenSock Animation Platform)](https://greensock.com/gsap/) for smooth hero transitions and timeline sequencing.
*   **Scroll Interactions:** [AOS (Animate On Scroll)](https://michalsnik.github.io/aos/) for smooth element entries on viewport scroll.
*   **Typography & Vector Graphic Icons:** Inter & Fira Code (Google Fonts), FontAwesome 6.5.2.

## 🗂️ Project Directory Structure

```text
├── pro pic/            # Compressed graphics and corporate logos for projects
├── style.css           # Core styling and layout architecture
├── general-style.css   # Global variables, typography overrides, and utility classes
├── nav.css             # Responsive navigation and hamburger menu overlays
├── hero.css            # Interactive slider panels and viewport code-box container
├── about.css           # Terminal-style profile components and trophy showcases
├── project.css         # Grid layouts and dynamic card hover state interactions
├── contact.css         # Contact card matrices and split-panel interactive portals
├── index.html          # Main application structural entry point
├── app.js              # Global site coordination, slider mechanics, and nav actions
└── contact.js          # Independent logic for contact validation and animation handlers