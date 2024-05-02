// Define a global variable to store the current word
let currentWord = "Hello";

// Function to handle requests to retrieve the current word
exports.handler = async (event, context) => {
    try {
        // Return the current word as a response
        return {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                currentWord: currentWord
            })
        };
    } catch (error) {
        // Handle any errors and return an error response
        return {
            statusCode: 500,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                error: 'Internal Server Error'
            })
        };
    }
};

// Function to handle requests to update the current word
exports.updateWord = async (event, context) => {
    try {
        // Parse the request body to extract the new word
        const requestBody = JSON.parse(event.body);
        const newWord = requestBody.word;

        // Update the current word
        currentWord = newWord;

        // Return a success response
        return {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                message: 'Word updated successfully'
            })
        };
    } catch (error) {
        // Handle any errors and return an error response
        return {
            statusCode: 500,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                error: 'Internal Server Error'
            })
        };
    }
};
