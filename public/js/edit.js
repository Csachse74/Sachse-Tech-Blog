const Id = document.querySelector('input[name="post-id"]').value;
const editFormHandler = async function(e) {
    e.preventDefault();
    const name = document.querySelector('input[name="post-title"]').value;
    const data = document.querySelector('textarea[name="post-body"]').value;

    await fetch(`/api/post/${Id}`, {
        method: 'PUT'
        , body: JSON.stringify({
            name
            , data
        })
        , headers: {
            'Content-Type': 'application/json'
        }
    });
    document.location.replace('/dashboard');
};

const deleteClickHandler = async function() {
    await fetch(`/api/post/${Id}`, {
        method: 'DELETE'
    });
    document.location.replace('/dashboard');
};

document.querySelector('#edit-post-form').addEventListener('submit', editFormHandler);
document.querySelector('#delete-btn').addEventListener('click', deleteClickHandler);