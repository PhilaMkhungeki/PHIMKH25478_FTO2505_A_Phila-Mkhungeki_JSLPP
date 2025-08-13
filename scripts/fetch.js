//Get tasks from an API

const API_URL = 'https://jsl-kanban-api.vercel.app/';

export async function fetchTasksFromAPI() {
    try {
        console.log("🌐 Fetching from API...");
        const response = await fetch(API_URL);
        console.log("📦 Response status:", response.status);
        const tasks = await response.json();
        console.log("📋 API returned:", tasks);
        if (!Array.isArray(tasks)){
            throw new Error("Invalid data format from API");
        }
        return tasks;
    } catch (error) {
        console.error('Error fetching tasks:', error);
    }
}