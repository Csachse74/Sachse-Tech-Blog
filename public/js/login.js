const loginFormHandler = async function(e) {
    e.preventDefault();
    const username = document.querySelector('#username');
    const password = document.querySelector('#password');
    const data = await fetch('/api/user/login', {
        method: 'POST'
        , body: JSON.stringify({
            username: username.value
            , password: password.value
        })
        , headers: { 'Content-Type': 'application/json' }
    });
  
    if (data.ok) {
        document.location.replace('/dashboard');
    } else {
        alert('Failed to log user in');
    }
};
document.querySelector('#login-form').addEventListener('submit', loginFormHandler);