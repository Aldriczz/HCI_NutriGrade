var botResponse;

function fetchOutput(userInput) {
    
    var payload = { message: userInput };
    
    fetch( `http://localhost:8000/api/generate`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    })
    .then(response => {
        
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
    
        return response.json();
    })
    .then(data => {
      
        console.log("Generated text:", data.answer);
        botResponse = data.answer;

        var chatMessages = document.getElementById("chat-messages");
        var botMessage = document.createElement("div");
        botMessage.className = "message bot-message";
        botMessage.innerHTML = "<span class='user'>Chat Bot:</span> <span class='text'>" + botResponse + "</span>";
        chatMessages.appendChild(botMessage);

        chatMessages.scrollTop = chatMessages.scrollHeight;
    })
    .catch(error => {
        console.error("Error fetching output:", error);
    });
}

function sendMessage() {
    var userInput = document.getElementById("user-input").value;
    if (userInput.trim() === "") return;

    var chatMessages = document.getElementById("chat-messages");
    var userMessage = document.createElement("div");
    userMessage.className = "message user-message";
    userMessage.innerHTML = "<span class='text'>" + userInput + "</span>";
    chatMessages.appendChild(userMessage);

    fetchOutput(userInput);

    document.getElementById("user-input").value = "";
}
