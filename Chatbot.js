var botResponses = {
    "what is nutrigrade": "Nutri-Grade is a nutritional grading system that helps consumers make healthier beverage choices.",
    "why nutrigrade": "Nutri-Grade aims to promote healthier beverage consumption and reduce the prevalence of diet-related diseases.",
    "how does nutrigrade work": "Nutri-Grade assigns grades from A to D to beverages based on their nutritional content. Grade A is the healthiest choice.",
    "why nutrigrade important": "Nutri-Grade is important because it helps consumers make informed choices about the beverages they consume, leading to better health outcomes.",
    "how can nutrigrade help": "Nutri-Grade helps you choose healthier beverages by providing clear nutritional information and grading them from A to D.",
    "who created nutrigrade": "Nutri-Grade was developed by a team of nutritionists and health experts to promote healthier beverage consumption.",
    "price": "The price of our NutriGrade products varies depending on the type and quantity. Please visit our website for more details.",
    "ingredients": "Our NutriGrade products contain natural and organic ingredients. For a detailed list, please check the product page on our website.",
    "shipping": "We offer free shipping on orders over $50. Standard shipping takes 3-5 business days.",
    "discount": "We offer seasonal discounts and promotions. Sign up for our newsletter to stay updated.",
    "grading system": "Nutri-Grade uses a simple A to D grading system. Grade A means the healthiest choice, while Grade D indicates the highest sugar and fat content.",
    "grade a": "Nutri-Grade A drinks are the healthiest, with the lowest sugar and fat content. Try to choose these whenever possible!",
    "grade b": "Beverages labeled Nutri-Grade B have slightly higher levels of sugar and fats compared to Grade A, but are still good choices.",
    "grade c": "Nutri-Grade C drinks have moderate levels of sugar and fats. It's better to choose A or B when you can.",
    "grade d": "Nutri-Grade D drinks have the highest levels of sugar and fats. It's best to consume these sparingly.",
    "label requirements": "Always check the front of the beverage for the Nutri-Grade label to quickly know its healthiness.",
    "objectives": "Nutri-Grade aims to reduce the prevalence of diet-related diseases by guiding consumers to healthier choices.",
    "consumer tips": "Check the Nutri-Grade label on beverages to identify healthier options quickly.",
    "future outlook": "The Nutri-Grade system may expand to other food categories in the future, providing more comprehensive nutritional guidance.",
    "general info": "Nutri-Grade helps you make healthier beverage choices by providing clear, easy-to-understand nutritional information.",
    "grade": "Nutri-Grade uses a simple grading system to help consumers quickly identify the healthiness of beverages.",
    "website": "You can find more information about Nutri-Grade on our website.",
    "what is nutri-grade": "Nutri-Grade is a nutritional grading system that helps consumers make healthier beverage choices.",
    "how does it work": "Nutri-Grade assigns grades from A to D to beverages based on their nutritional content. Grade A is the healthiest choice.",
    "who created": "Nutri-Grade was developed by a team of nutritionists and health experts to promote healthier beverage consumption.",
    "contact": "You can contact us through the contact form on our website. We'll be happy to assist you with any questions or concerns.",
    "help": "I'm here to help you learn more about Nutri-Grade. Feel free to ask me any questions you have!",
    "hello": "Hello! How can I help you today?",
    "hi": "Hi! How can I assist you today?",
    "hey": "Hey! What can I do for you today?",
    "bye": "Goodbye! Have a great day!",
    "goodbye": "Goodbye! Take care!",
    "thanks": "You're welcome! If you have any more questions, feel free to ask.",
    "thank you": "You're welcome! If you need further assistance, don't hesitate to reach out.",
    "label requirements": "Always check the front of the beverage for the Nutri-Grade label to quickly know its healthiness. Higher sugar drinks (Grade C and D) include a health warning.",
    "objectives": "Nutri-Grade aims to reduce diet-related diseases by guiding consumers to healthier choices and encouraging manufacturers to improve their products.",
    "benefits": "Nutri-Grade simplifies understanding nutritional content, promotes healthier choices, and encourages industry transparency and accountability.",
    "singapore": "Singapore's Nutri-Grade system grades beverages from A to D based on sugar and saturated fat content. As of December 2022, labels are mandatory on all pre-packaged beverages.",
    "consumer tips": "Check the Nutri-Grade label on beverages to identify healthier options quickly. Opt for Grade A or B beverages to reduce sugar and fat intake.",
    "future outlook": "The Nutri-Grade system may expand to other food categories and be adopted globally to improve public health through better dietary choices.",
    "general info": "Nutri-Grade helps you make healthier beverage choices by providing clear, easy-to-understand nutritional information.",
    "grade": "Nutri-Grade uses a simple grading system to help consumers quickly identify the healthiness of beverages.",
    "nutrigrade": "Nutri-Grade is a nutritional grading system that helps consumers make healthier beverage choices.",
   

    
};

var fallbackResponses = [
    "I'm sorry, I didn't understand that. Can you please rephrase?",
    "Could you provide more details or ask your question differently?",
    "I didn't catch that. Could you try asking in another way?",
    "I'm here to help! Can you ask your question in a different manner?"
];

function getBotResponse(message) {
    message = message.toLowerCase();
    for (var keyword in botResponses) {
        if (message.includes(keyword)) {
            return botResponses[keyword];
        }
    }
    return fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)];
}

async function fetchOutput(userInput) {
    var botResponse = getBotResponse(userInput);
    console.log("Generated text:", botResponse);

    var chatMessages = document.getElementById("chat-messages");
    var botMessage = document.createElement("div");
    botMessage.className = "message bot-message";
    botMessage.innerHTML = "<span class='user'>Chat Bot:</span> <span class='text'>" + botResponse + "</span>";
    chatMessages.appendChild(botMessage);

    chatMessages.scrollTop = chatMessages.scrollHeight;
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