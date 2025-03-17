"use strict";

async function fetchData() {
    const url = "https://httpstat.us/500";  
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        console.log(json);
    } catch (error) {
        console.error("Error:", error.message); 
    } finally {
        console.log("Fetch attempt finished.");  
    }
}

 
fetchData();
