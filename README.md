# JSL Portfolio Piece: Kanban App Deployment & Features Implementation

## Overview

This project involves **deploying a Kanban app to Netlify**, ensuring the app's functionality and persistence through local storage, and implementing dynamic features such as task editing, deletion, sidebar interaction, and a theme toggle. The goal is to deliver a fully functional, deployable application that is responsive across devices and maintains data consistency. Students will also focus on **clean, modular code** that is well-documented for future development.

## Figma Reference Link

**Check out the [Figma Reference File](https://www.figma.com/design/y7bFCUYL5ZHfPeojACBXg2/Challenges-%7C-JSL?node-id=6033-11092&t=XbQhBWPYxXDAqp3x-1)

## Key Objectives

### Deployment & Hosting

-  I have deployed the Kanban app to Netlify, to access the app click on this link: <a href="philakanban-board.netlify.app">philakanban-board.netlify.app</a>

### Initial Data Fetching & Loading State

- The tasks on this Kanban board have been fetched dynamically from this API: https://jsl-kanban-api.vercel.app/
- While the tasks are being fetched, a message is displayed on the screen so that users are informed that the data is loading.

### Data Persistence

- Fetched tasks are stored in local storage to ensure data persists across page reloads.
- On startup, tasks are loaded from the local storage and are displayed in their respective columns (To Do, Doing, Done) to maintain an organized task board.

### Task Editing & Deletion

- Users can **edit task details** (title, description, status) in a modal. Upon saving, the task reflects the updated data on the board and in local storage.
- The **delete button** within the modal allows users to remove tasks. A confirmation message appears before deleting a task, if confirmed, the task will be removed from both the task board and local storage.

### Sidebar Interaction

- The sidebar is **toggleable**, so that users can hide or show it based on their preferences.
- A mobile version of the sidebar that can be **accessed from the app logo**.

### Mobile Sidebar (Menu) Functionality

- On mobile, the sidebar functions as a **menu** accessible from the top of the screen.
- The mobile menu is **closable**, allowing users to dismiss it for an unobstructed view of the tasks.

### Theme Toggle (Dark/Light Mode)

- There is a **theme toggle switch** to allow users to switch between dark mode and light mode.

## Expected Outcome

This is a fully functional Kanban app that:

- Dynamically fetches and displays tasks.
- Supports task editing, deletion, and persistent storage through local storage.
- Has a responsive, mobile-friendly sidebar with a theme toggle switch.
- App deployed to **Netlify** with a custom, readable URL.
- Uses modular, well-documented code that is easy to maintain and scale.
