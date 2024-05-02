async function changeWord() {
    const newWord = prompt("Enter the new word:");
    try {
        const response = await fetch('https://Dword.netlify.app/.netlify/functions/updateWord', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ newWord: newWord })
        });
        const data = await response.json();
        console.log(data.message);
        getCurrentWord(); // Update displayed word after changing
    } catch (error) {
        console.error('Error changing word:', error);
    }
}
