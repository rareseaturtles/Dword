// Define a global variable to store the current word
let currentWord = "Hello";

// Function to retrieve the current word
function getCurrentWord() {
    return currentWord;
}

// Function to update the current word
exports.handler = async (event, context) => {
    try {
        if (event.httpMethod === 'GET') {
            // If it's a GET request, return the current word
            return {
                statusCode: 200,
                body: JSON.stringify({ currentWord: getCurrentWord() })
            };
        } else if (event.httpMethod === 'POST') {
            // If it's a POST request, update the current word
            const requestBody = JSON.parse(event.body);
            const newWord = requestBody.word;
            currentWord = newWord;
            return {
                statusCode: 200,
                body: JSON.stringify({ message: 'Word updated successfully' })
            };
        } else {
            // If it's neither GET nor POST, return a 405 Method Not Allowed error
            return {
                statusCode: 405,
                body: JSON.stringify({ error: 'Method Not Allowed' })
            };
        }
    } catch (error) {
        // If an error occurs, return a 500 Internal Server Error
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Internal Server Error' })
        };
    }
};
