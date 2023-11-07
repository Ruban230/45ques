let current_users: string[] = ['John', 'Alice', 'Bob', 'Eve', 'Charlie'];
let new_users: string[] = ['Alice', 'Frank', 'Sarah', 'Eve', 'MIKE'];

// Convert all current usernames to lowercase for a case-insensitive comparison
let lower_current_users: string[] = current_users.map(user => user.toLowerCase());

for (let i = 0; i < new_users.length; i++) {
    let lowercase_new_user = new_users[i].toLowerCase(); // Convert new username to lowercase for comparison

    if (lower_current_users.includes(lowercase_new_user)) {
        console.log(`Username '${new_users[i]}' is not available. Please enter a new username.`);
    } else {
        console.log(`Username '${new_users[i]}' is available.`);
        lower_current_users.push(lowercase_new_user); // Update the list of current users with the new username
    }
}
