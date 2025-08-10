// Async function to fetch and display user data
async function fetchUserData() {
    // Step 1: Define API URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    // Step 2: Select the data container
    const dataContainer = document.getElementById('api-data');

    try {
        // Step 3: Fetch data from the API
        const response = await fetch(apiUrl);

        // Step 4: Convert to JSON
        const users = await response.json();

        // Step 5: Clear loading message
        dataContainer.innerHTML = '';

        // Step 6: Create a user list
        const userList = document.createElement('ul');

        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });

        // Step 7: Append user list to the container
        dataContainer.appendChild(userList);

    } catch (error) {
        // Step 8: Handle errors
        dataContainer.innerHTML = '';
        dataContainer.textContent = 'Failed to load user data.';
        console.error("Error fetching user data:", error);
    }
}

// Step 9: Run fetchUserData after the DOM has loaded
document.addEventListener('DOMContentLoaded', fetchUserData);
