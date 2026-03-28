# Blueprint: Dark & Light Mode Support

## Project Overview
A simple web application demonstrating modern web standards, now featuring dark and light mode support for enhanced user experience and accessibility.

## Features & Implementation
- **Theme Switching:** Users can toggle between dark and light modes.
- **Persistent Preference:** The user's theme choice is saved in `localStorage` and applied on subsequent visits.
- **Modern CSS:** Utilizes CSS variables (Custom Properties) and the `:has()` selector or class-based switching for theme management.
- **Visual Design:** Polished UI with smooth transitions and clear contrast.

## Current Task: Implement Dark/Light Mode
The goal is to add a theme toggle functionality that allows users to switch between light and dark themes.

### Plan & Steps
1.  **Define CSS Variables:**
    - In `style.css`, define root variables for colors (background, text, primary, etc.) for both light and dark themes using `@media (prefers-color-scheme: dark)` and a data attribute (e.g., `data-theme="dark"`).
2.  **Update UI:**
    - Add a theme toggle button to `index.html`.
3.  **Implement JavaScript Logic:**
    - Create a `ThemeToggle` component or simple logic in `main.js`.
    - Handle the click event on the toggle button.
    - Update the `data-theme` attribute on the `<html>` or `<body>` element.
    - Save the preference to `localStorage`.
    - Apply the saved preference on page load.
4.  **Verification:**
    - Test the toggle on different browsers/modes.
    - Check if the preference persists after refresh.
5.  **Deployment:**
    - Commit the changes and push to the remote repository.
