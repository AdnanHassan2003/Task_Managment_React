Task Management Application

This is a Task Management application built using React. The application allows users to register and manage tasks by categorizing them into different stages like Backlog, Pending, To Do, Doing, and Done. The application also uses local storage to persist user data and tasks across sessions.



Features
Task categorization into various stages.
Drag and drop functionality to move tasks between stages.
Tasks are saved in local storage for persistence.
Responsive and user-friendly interface.




Installation
Clone the repository:
Copy code
git clone https://github.com/AdnanHassan2003/Task_Managment_React





Navigate to the project directory:
Copy code
cd task-management-app
Install dependencies:



install dependence:
npm install
Run the application:



run appliacation
npm  run dev




File Structure
arduino
Copy code
task-management-app
├── public
│   ├── index.html
│   └── ...
├── src
│   ├── components
│   │   ├── AddModal.js
│   │   ├── Header.js
│   │   ├── Navbar.js
│   │   ├── Task.js
│   │   └── ...
│   ├── helpers
│   │   ├── getRandomColors.js
│   │   └── onDragEnd.js
│   ├── layout
│   │   ├── ...
│   ├── pages
│   │   ├── ...
│   ├── routers
│   │   ├── ...
│   ├── App.js
│   ├── index.js
│   └── ...
├── .gitignore
├── package.json
├── README.md
└── ...





Components
Main Components
MainComponent.js: The main component that manages the state of the task board and handles task addition.
AddModal.js: A modal component that allows users to add new tasks.


Helpers
getRandomColors.js: A helper function to generate random colors for tasks.
onDragEnd.js: A helper function to handle drag-and-drop functionality.


Others
Header.js: Component for the application header.
Navbar.js: Component for the navigation bar.
Task.js: Component representing an individual task.