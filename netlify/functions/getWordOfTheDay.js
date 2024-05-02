exports.handler = async (event, context) => {
    if (event.httpMethod === 'GET') {
        // Handle GET request to retrieve the current word
        return {
            statusCode: 200,
            body: JSON.stringify({ currentWord: 'Hello' }) // Default word is 'Hello'
        };
    } else if (event.httpMethod === 'POST') {
        // Handle POST request to update the word
        try {
            const requestBody = JSON.parse(event.body);
            const newWord = requestBody.word;
            // Here, you can store the new word in a database or any other storage mechanism
            // For simplicity, we'll just return the updated word in the response
            return {
                statusCode: 200,
                body: JSON.stringify({ message: `Word updated to: ${newWord}` })
            };
        } catch (error) {
            return {
                statusCode: 400,
                body: JSON.stringify({ error: 'Invalid request body' })
            };
        }
    } else {
        // Handle unsupported HTTP methods
        return {
            statusCode: 405,
            body: JSON.stringify({ error: 'Method Not Allowed' })
        };
    }
};
