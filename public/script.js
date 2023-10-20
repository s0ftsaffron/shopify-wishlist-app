document.addEventListener("DOMContentLoaded", function() {
    // This is where you'd fetch your logs data from the backend/API
    fetch('https://lb-dedotated-wam-7ee0c443df6c.herokuapp.com')
    .then(response => response.json())
    .then(data => {
        const logDataElem = document.getElementById('logData');
        
        // Loop through the logs data and append to the table
        data.forEach(log => {
            const row = document.createElement('tr');
            
            const timeCell = document.createElement('td');
            timeCell.textContent = log.time;
            row.appendChild(timeCell);
            
            const userCell = document.createElement('td');
            userCell.textContent = log.user;
            row.appendChild(userCell);
            
            const actionCell = document.createElement('td');
            actionCell.textContent = log.action;
            row.appendChild(actionCell);
            
            logDataElem.appendChild(row);
        });
    })
    .catch(error => {
        console.error('There was an error fetching the logs:', error);
    });
});
