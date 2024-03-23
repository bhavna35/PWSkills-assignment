// Q2. Write a JavaScript program to make an AJAX request using the XMLHttpRequest object to fetch data from a remote API (https://jsonplaceholder.typicode.com/users) and log a list of user names from the response to the browser console and output.


// Create a new XMLHttpRequest object
let xhr = new XMLHttpRequest();

// Configure the AJAX request
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users', true);

// Set up event handler to process the response
xhr.onload = function() {
    if (xhr.status === 200) {
        // Parse the JSON response into an array of user objects
        const users = JSON.parse(xhr.responseText);

        // Log the list of user names to the browser console
        console.log('List of User Names:');
        users.forEach(user => console.log(user.username || user.name));

        // Output the list of user names to the HTML element with id "output"
        const outputElement = document.getElementById('output');
        if (outputElement) {
            outputElement.innerHTML = '<h3>List of User Names:</h3>';
            users.forEach(user => {
                const listItem = document.createElement('p');
                listItem.textContent = user.username || user.name;
                outputElement.appendChild(listItem);
            });
        } else {
            console.error('Output element not found in the HTML.');
        }
    } else {
        console.error('Request failed with status:', xhr.status);
    }
};

// Handle errors during the AJAX request
xhr.onerror = function() {
    console.error('Error occurred while making the request.');
};

// Send the AJAX request
xhr.send();
