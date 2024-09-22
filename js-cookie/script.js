// Set a cookie
function setCookie(name, value, days) {
    let expires = ""
    if (days) {
        const date = new Date()
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000))
        expires = "; expires=" + date.toUTCString()
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/"
}

// Get a cookie by name
function getCookie(name) {
    const cookieName = name + "="
    const cookieArray = document.cookie.split(';')
    for (let i = 0; i < cookieArray.length; i++) {
        let cookieField = ca[i]
        while (cookieField.charAt(0) === ' ') cookieField = cookieField.substring(1)
        if (cookieField.indexOf(cookieName) === 0) return cookieField.substring(cookieName.length, cookieField.length)
    }
    return null
}

// Delete a cookie by name
function deleteCookie(name) {
    setCookie(name, "", -1) // Set the cookie with an expired date
}

// Redirect to home page if user is logged in
function checkLoginStatus() {
    const username = getCookie("username")
    if (username) {
        window.location.href = "home.html" 
    }
}

// Handle login form submission
document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm")
    if (loginForm) {
        loginForm.addEventListener("submit", function(e) {
            e.preventDefault()
            
            const username = document.getElementById("username").value
            const password = document.getElementById("password").value

            if (username && password) {
                setCookie("username", username, 1) 
                setCookie("password", password, 1)
                window.location.href = "home.html"
            } else {
                document.getElementById("errorMessage").innerText = "Please fill out both fields!"
            }
        });
    }

    // Check if the logout button exists on the page
    const logoutButton = document.getElementById("logoutButton")
    if (logoutButton) {
        logoutButton.addEventListener("click", function() {
            deleteCookie("username")
            deleteCookie("password")
            window.location.href = "login.html"; // Redirect to login page after logout
        });
    }


})
