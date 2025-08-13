//Get tasks from an API

const API_URL = 'https://jsl-kanban-api.vercel.app/';

export async function fetchTasksFromAPI() {
    try {
        const response = await fetch(API_URL);
        const tasks = await response.json();

        if (!Array.isArray(tasks)){
            throw new Error("Invalid data format from API");
        }
        //localStorage.setItem('tasks', JSON.stringify(tasks));       //save the tasks to local storage
        return tasks;
    } catch (error) {
        console.log('Error fetching tasks:', error);
    }
}