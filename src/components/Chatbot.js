const express = require('express'); 
const axios = require('axios');     
const app = express();              
app.use(express.json());           

// OpenAI API Key
const OPENAI_API_KEY = 'your_openai_api_key_here';

// Dialogflow Webhook endpoint
app.post('/webhook', async (req, res) => {
    // Extract the intent name from Dialogflow request
    const intentName = req.body.queryResult.intent.displayName;

    // Handle 'Coffee Recommendation' Intent
    if (intentName === 'Coffee Recommendation') {
        // Extract the coffee preference (fruity, dark roast, etc.) from the user's input
        const coffeePreference = req.body.queryResult.parameters.coffee_preference;

        // Call OpenAI API to get a recommendation based on coffee preference
        try {
            const openAiResponse = await axios.post('https://api.openai.com/v1/completions', {
                model: "text-davinci-003",
                prompt: `Recommend a coffee brand and flavor for someone who likes ${coffeePreference} coffee.`,
                max_tokens: 100,
                temperature: 0.7
            }, {
                headers: {
                    'Authorization': `Bearer ${OPENAI_API_KEY}`
                }
            });

            // Get the AI-generated recommendation text from OpenAI's response
            const recommendation = openAiResponse.data.choices[0].text.trim();

            // Send the recommendation back to Dialogflow as a response
            return res.json({
                fulfillmentText: `Based on your preference for ${coffeePreference}, I recommend trying ${recommendation}.`
            });
        } catch (error) {
            // Error handling
            console.error("Error calling OpenAI API:", error);
            return res.json({
                fulfillmentText: "Sorry, I couldn't fetch a coffee recommendation right now."
            });
        }
    }

    // Handle 'Customer Service' Intent
    else if (intentName === 'Customer Service') {
        // Extract the page request parameter (bookings, contact, gallery, etc.)
        const pageRequest = req.body.queryResult.parameters.page_request.toLowerCase();
        let responseText = '';

        // Map the user's request to appropriate links on your website
        switch (pageRequest) {
            case 'bookings':
                responseText = 'You can book your coffee experience [here](https://yourwebsite.com/bookings).';
                break;
            case 'contact':
                responseText = 'You can reach us through our contact page [here](https://yourwebsite.com/contact).';
                break;
            case 'gallery':
                responseText = 'View our coffee experience gallery [here](https://yourwebsite.com/gallery).';
                break;
            case 'signup':
                responseText = 'Sign up for our latest updates [here](https://yourwebsite.com/signup).';
                break;
            case 'coffee basics':
                responseText = 'Learn the basics of coffee [here](https://yourwebsite.com/coffee-basics).';
                break;
            default:
                responseText = 'I’m not sure which page you’re looking for. Can you try again?';
        }

        // Send the appropriate response back to Dialogflow
        return res.json({
            fulfillmentText: responseText
        });
    }

    // If no matching intent, return a fallback response
    else {
        return res.json({
            fulfillmentText: "I'm not sure how to help with that."
        });
    }
});

// Start the server and listen on a specific port (e.g., 3000)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
