
function addBotMessage(message) {
    const chatBox = document.getElementById('chat-box');
    const botMessage = document.createElement('div');
    botMessage.className = 'bot-message';

    // Check if the message is for contact information
    if (message.toLowerCase().includes('https')) {
        // Create a link element
        const linkElement = document.createElement('a');
        linkElement.href = message;
        linkElement.textContent = message;

        // Append the link element to the bot message container
        botMessage.appendChild(linkElement);
    } else {
        // If not contact information, display as regular text
        botMessage.textContent = message;
    }

    // Append the bot message container to the chat box
    chatBox.appendChild(botMessage);

    // Scroll to the bottom of the chat box
    chatBox.scrollTop = chatBox.scrollHeight;
}


// Function to handle user input
function handleUserInput() {
    const userInput = document.getElementById('user-input').value.trim();
    if (userInput) {
        // Add user message to the chat box
        const chatBox = document.getElementById('chat-box');
        const userMessage = document.createElement('div');
        userMessage.className = 'user-message';
        userMessage.textContent = userInput;
        chatBox.appendChild(userMessage);
        // Scroll to the bottom of the chat box
        chatBox.scrollTop = chatBox.scrollHeight;
        // Clear user input field
        document.getElementById('user-input').value = '';
        // Get bot response based on user input keyword
        const botResponse = getBotResponse(userInput);
    
        // Add bot message to the chat box
        setTimeout(() => addBotMessage(botResponse), 500);
    }
}

// Function to get bot response based on user input keyword
function getBotResponse(userInput) {
    // Convert user input to lowercase for case-insensitive comparison
    userInput = userInput.toLowerCase();

    // Keywords and their corresponding responses
    const responses = {
        

            'hello': "Hi there! How can I help you?",
            'product': "Sure, what kind of product are you looking for?",
            'about': "Our company specializes in providing high-quality handmade products sourced directly from artisans around the world.",
            'contact': "You can contact us at support@example.com or call us at +1-123-456-7890.",
            'help': "How can I assist you today? You can ask about products, our company, or contact information.",
            'return':"to know about the return policy click the link",
            'category':"on our site,we selling three categories of products ",
            // Add more keywords and responses as needed
   
        // Add more keywords and responses as needed
    };

    // Check if any keyword is present in the user input
    for (const keyword in responses) {
        if (userInput.includes(keyword)) {
            return responses[keyword];
        }
    }

    // If no keyword is found, return a default response
    return "I'm sorry, I didn't understand that.";
}

// Event listener for send button click
document.getElementById('send-btn').addEventListener('click', handleUserInput);

// Event listener for Enter key press in user input field
document.getElementById('user-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        handleUserInput();
    }
});
