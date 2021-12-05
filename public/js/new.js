const newFormHandler = async function(e) {
    e.preventDefault();
    const name = document.querySelector('input[name="post-title"]').value;
    const data = document.querySelector('textarea[name="post-body"]').value;
    await fetch(`/api/post`, {
        method: 'POST'
        , body: JSON.stringify({
            name
            , data
        })
        , headers: { 'Content-Type': 'application/json' }
    });
    document.location.replace('/dashboard');
};
document.querySelector('#new-post-form').addEventListener('submit', newFormHandler);