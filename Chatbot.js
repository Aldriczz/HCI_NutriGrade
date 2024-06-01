var botResponse;

async function getBotResponse(message) {
    const apiKey = window.API_KEY;
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}` 
        },
        body: JSON.stringify({
            model: 'gpt-3.5-turbo',
            messages: [{ role: 'user', content: message }]
        })
    });
    const data = await response.json();
    return data.choices[0].message.content.trim();
}



async function fetchOutput(userInput) {
    
    var payload = { message: userInput };
      botResponse = await getBotResponse(payload.message);
        console.log("Generated text:", botResponse);

        var chatMessages = document.getElementById("chat-messages");
        var botMessage = document.createElement("div");
        botMessage.className = "message bot-message";
        botMessage.innerHTML = "<span class='user'>Chat Bot:</span> <span class='text'>" + botResponse + "</span>";
        chatMessages.appendChild(botMessage);

        chatMessages.scrollTop = chatMessages.scrollHeight;
}
const apiKey = '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'; 
function sendMessage() {
    var userInput = document.getElementById("user-input").value;
    if (userInput.trim() === "") return;

    var chatMessages = document.getElementById("chat-messages");
    var userMessage = document.createElement("div");
    userMessage.className = "message user-message";
    userMessage.innerHTML = "<span class='text'>" + userInput + "</span>";
    chatMessages.appendChild(userMessage);

    fetchOutput("You are a customer service of NutriGrade website, your task is to answer any customer question. "+userInput);

    document.getElementById("user-input").value = "";
}

