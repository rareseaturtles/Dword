exports.handler = async (event, context) => {
    try {
        // Your function logic here
        const currentWord = "Hello"; // Example current word

        // Construct the response object with CORS headers
        const response = {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json' // Set appropriate content type
            },
            body: JSON.stringify({
                currentWord: currentWord
            })
        };

        // Return the response
        return response;
    } catch (error) {
        // Handle any errors and return an error response
        return {
            statusCode: 500,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json' // Set appropriate content type
            },
            body: JSON.stringify({
                error: 'Internal Server Error'
            })
        };
    }
};
