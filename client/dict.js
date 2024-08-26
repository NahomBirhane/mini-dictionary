document.getElementById('lookup').addEventListener('click', function() {
    const word = document.getElementById('word').value;

    fetch(`http://localhost:3000/lookup?word=${word}`)  // Updated to point to the correct port
        .then(response => response.json())
        .then(data => {
            const definitionDiv = document.getElementById('definition');
            definitionDiv.innerHTML = '';

            if (data.length > 0) {
                data.forEach(entry => {
                    definitionDiv.innerHTML += `<p><strong>${entry.word}</strong> (${entry.wordtype}): ${entry.definition}</p>`;
                });
            } else {
                definitionDiv.innerHTML = '<p>No definition found for the entered word.</p>';
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
});
