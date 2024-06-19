var botResponses = {
    "what is nutrigrade": "NutriGrade is a nutrition labeling system introduced by the Ministry of Health Singapore. It provides information about the sugar content in beverages, helping consumers make healthier choices. NutriGrade “grades” your drinks based on their sugar and saturated fat levels. Think of this as a combined score. Drinks graded “A” have the lowest sugar and saturated fat content, while drinks graded “D” have the highest.",
    "what does the nutrigrade mark indicate" : "The NutriGrade mark appears on packaged drinks and foods. NutriGrade displays the sugar percentage, allowing consumers to quickly assess the drink’s and food's nutritional quality.",
    "how to measure a nutrigrade of a food/drinks" : "NutriGrade “grades” your drinks based on their sugar and saturated fat levels. Think of this as a combined score. Drinks graded “A” have the lowest sugar and saturated fat content, while drinks graded “D” have the highest.",
    "which beverages are covered by nutrigrade" : "NutriGrade initially applied to packaged beverages and non-customizable automated beverage dispensers. NutriGrade includes freshly prepared drinks like coffee, tea, coconut water, shakes, biscuit, and smoothies",
    "how does the nutrigrade calculator works" : "The calculator prompts user to input the fat and sugar contents of a drink or food with the measure of grams per 100ml, then the calculator will output either the NutriGrade A,B,C, or D based on sugar and fat composition",
    "why nutrigrade": "NutriGrade aims to promote healthier beverage consumption and reduce the prevalence of diet-related diseases.",
    "how does nutrigrade work": "NutriGrade assigns grades from A to D to beverages based on their nutritional content. Grade A is the healthiest choice.",
    "why nutrigrade important": "NutriGrade is important because it helps consumers make informed choices about the beverages they consume, leading to better health outcomes.",
    "how can nutrigrade help": "NutriGrade helps you choose healthier beverages by providing clear nutritional information and grading them from A to D.",
    "who created nutrigrade": "NutriGrade was developed by a team of nutritionists and health experts to promote healthier beverage consumption.",
    "price": "The price of our NutriGrade products varies depending on the type and quantity. Please visit our website for more details.",
    "ingredients": "Our NutriGrade products contain natural and organic ingredients. For a detailed list, please check the product page on our website.",
    "shipping": "We offer free shipping on orders over $50. Standard shipping takes 3-5 business days.",
    "discount": "We offer seasonal discounts and promotions. Sign up for our newsletter to stay updated.",
    "grading system": "NutriGrade uses a simple A to D grading system. Grade A means the healthiest choice, while Grade D indicates the highest sugar and fat content.",
    "grade a": "NutriGrade A drinks are the healthiest, with the lowest sugar and fat content. Try to choose these whenever possible!",
    "grade b": "Beverages labeled NutriGrade B have slightly higher levels of sugar and fats compared to Grade A, but are still good choices.",
    "grade c": "NutriGrade C drinks have moderate levels of sugar and fats. It's better to choose A or B when you can.",
    "grade d": "NutriGrade D drinks have the highest levels of sugar and fats. It's best to consume these sparingly.",
    "label requirements": "Always check the front of the beverage for the NutriGrade label to quickly know its healthiness.",
    "objectives": "NutriGrade aims to reduce the prevalence of diet-related diseases by guiding consumers to healthier choices.",
    "consumer tips": "Check the NutriGrade label on beverages to identify healthier options quickly.",
    "future outlook": "The NutriGrade system may expand to other food categories in the future, providing more comprehensive nutritional guidance.",
    "general info": "NutriGrade helps you make healthier beverage choices by providing clear, easy-to-understand nutritional information.",
    "grade": "NutriGrade uses a simple grading system to help consumers quickly identify the healthiness of beverages.",
    "website": "You can find more information about NutriGrade on our website.",
    "how does it work": "NutriGrade assigns grades from A to D to beverages based on their nutritional content. Grade A is the healthiest choice.",
    "who created": "NutriGrade was developed by a team of nutritionists and health experts to promote healthier beverage consumption.",
    "contact": "You can contact us through the contact form on our website. We'll be happy to assist you with any questions or concerns.",
    "help": "I'm here to help you learn more about NutriGrade. Feel free to ask me any questions you have!",
    "hello": "Hello! How can I help you today?",
    "hi": "Hi! How can I assist you today?",
    "hey": "Hey! What can I do for you today?",
    "bye": "Goodbye! Have a great day!",
    "goodbye": "Goodbye! Take care!",
    "thanks": "You're welcome! If you have any more questions, feel free to ask.",
    "thank you": "You're welcome! If you need further assistance, don't hesitate to reach out.",
    "label requirements": "Always check the front of the beverage for the NutriGrade label to quickly know its healthiness. Higher sugar drinks (Grade C and D) include a health warning.",
    "objectives": "NutriGrade aims to reduce diet-related diseases by guiding consumers to healthier choices and encouraging manufacturers to improve their products.",
    "benefits": "NutriGrade simplifies understanding nutritional content, promotes healthier choices, and encourages industry transparency and accountability.",
    "singapore": "Singapore's NutriGrade system grades beverages from A to D based on sugar and saturated fat content. As of December 2022, labels are mandatory on all pre-packaged beverages.",
    "consumer tips": "Check the NutriGrade label on beverages to identify healthier options quickly. Opt for Grade A or B beverages to reduce sugar and fat intake.",
    "future outlook": "The NutriGrade system may expand to other food categories and be adopted globally to improve public health through better dietary choices.",
    "general info": "NutriGrade helps you make healthier beverage choices by providing clear, easy-to-understand nutritional information.",
    "grade": "NutriGrade uses a simple grading system to help consumers quickly identify the healthiness of beverages.",
    "nutrigrade": "NutriGrade is a nutritional grading system that helps consumers make healthier beverage choices.",
   

    
};

var fallbackResponses = [
    "I'm sorry, I didn't understand that. Can you please rephrase?",
    "Could you provide more details or ask your question differently?",
    "I didn't catch that. Could you try asking in another way?",
    "I'm here to help! Can you ask your question in a different manner?",
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
    // botMessage.innerHTML = "<span class='user'>Chat Bot:</span> <span class='text'>" + botResponse + "</span>";
    botMessage.innerHTML = "<span class='text'>" + botResponse + "</span>";
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

document.addEventListener("DOMContentLoaded", ()=>{
    const questions = document.querySelectorAll('.questions')
    const input = document.querySelector('.input-box')

    questions.forEach(question =>{
        question.addEventListener('click', function(){
            input.value = question.textContent
        })
    })
})