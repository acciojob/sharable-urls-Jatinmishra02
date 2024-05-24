// your code here
        document.getElementById('button').addEventListener('click', function() {
            // Get the values from the input fields
            const name = document.getElementById('name').value;
            const year = document.getElementById('year').value;

            // Construct the new URL with query parameters
            const baseUrl = 'https://localhost:8080/';
            const newUrl = `${baseUrl}?name=${encodeURIComponent(name)}&year=${encodeURIComponent(year)}`;

            // Update the h3 element with the new URL
            document.getElementById('url').innerText = newUrl;
        });
