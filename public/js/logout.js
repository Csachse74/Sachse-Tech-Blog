const logout = async function() {
    const data = await fetch('/api/user/logout', {
        method: 'POST'
        , headers: { 'Content-Type': 'application/json' }
    });
  
    if (data.ok) {
        document.location.replace('/');
    } else {
        alert('Failed to log out');
    }
};
document.querySelector('#logout-link').addEventListener('click', logout);