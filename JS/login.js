document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    
    var users = [
        {
            "username":"admin",
            "password":"admin",
            "role": "admin",
            "email": "admin@admin.com"
        },
        {
            "username":"user",
            "password":"user",
            "role":"user",
            "email":"user@user.com"
        }
    ];

    var authenticatedUser = users.find(function(user) {
        return user.username === username && user.password === password;
    });

    if (authenticatedUser) {
        localStorage.setItem('currentUser', JSON.stringify(authenticatedUser));
        if (authenticatedUser.role === 'admin') {
            window.location.href = './/home.html';
        } else {
            window.location.href = './/homeE.html';
        }
    } else {
        document.getElementById('errorMessage').innerText = 'Invalid username or password';
    }
});