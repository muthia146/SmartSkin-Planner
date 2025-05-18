// Login authentication logic
document.addEventListener('DOMContentLoaded', function() {
    // Check if user is already logged in
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    
    // If this is not the login page and user is not logged in, redirect to login page
    if (!window.location.href.includes('login.html') && !isLoggedIn) {
        window.location.href = 'login.html';
        return;
    }
    
    // Handle login form submission
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const username = document.getElementById('username').value.trim();
            const password = document.getElementById('password').value.trim();
            const errorMessage = document.getElementById('login-error');
            
            // Check if username and password match the expected values
            if (username === 'nabila' && password === 'nabila') {
                // Set login status in localStorage
                localStorage.setItem('isLoggedIn', 'true');
                localStorage.setItem('username', username);
                
                // Redirect to index page
                window.location.href = 'index.html';
            } else {
                // Show error message
                errorMessage.style.display = 'block';
                
                // Clear password field
                document.getElementById('password').value = '';
                
                // Focus on username field
                document.getElementById('username').focus();
            }
        });
    }
  
      
});
