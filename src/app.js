document.querySelector('#github-user-ghusr-5f6c9').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.querySelector('#username').value;
    const token = document.querySelector('#token').value;
    const url = `https://api.github.com/users/${username}` + (token ? `?token=${token}` : '');

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const createdAt = new Date(data.created_at);
            document.querySelector('#github-created-at').textContent = createdAt.toISOString().split('T')[0];
        })
        .catch(error => {
            document.querySelector('#github-created-at').textContent = 'Error fetching data';
            console.error('There was a problem with the fetch operation:', error);
        });
});