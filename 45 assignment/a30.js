var un = ['admin', 'Alice', 'Bob', 'admin_user', 'John', 'admin123'];
if (un.length === 0) {
    console.log("We need to find some users!");
}
else {
    for (var i = 0; i < un.length; i++) {
        if (un[i] === 'admin') {
            console.log("Hello admin, would you like to see a status report?");
        }
        else {
            console.log("Hello ".concat(un[i], ", thank you for logging in again."));
        }
    }
}
// Empty the array of usernames
un = [];
// Check if the user list is empty after removing all usernames
if (un.length === 0) {
    console.log("We need to find some users!");
}
