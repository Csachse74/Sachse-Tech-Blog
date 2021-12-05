const commentFormHandler = async function(e) {
    e.preventDefault();
  
    const Id = document.querySelector('input[name="post-id"]').value;
    const data = document.querySelector('textarea[name="comment-body"]').value;
  
    if (body) {
        await fetch('/api/comment', {
            method: 'POST'
            , body: JSON.stringify({
                Id
                , data
            })
            , headers: {
                'Content-Type': 'application/json'
            }
        });
        document.location.reload();
    }
};
  
document.querySelector('#new-comment-form').addEventListener('submit', commentFormHandler);