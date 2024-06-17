var check = true
document.addEventListener("DOMContentLoaded", () => {
    const sugarInput = document.getElementById("sugar-level");
    const fatInput = document.getElementById("fat-level");
    const radios = document.querySelectorAll('input[name="radio"]')

    sugarInput.addEventListener("input", () => {
        const input = sugarInput.value;
        var errorMessage = document.getElementById('error-sugar')

        if(parseInt(input) < 0){
            errorMessage.textContent = '*A positive value is required' 
            check = false
        }else if(parseInt(input) > 100){
            errorMessage.textContent = '*Value cannot be greater than 100g/100ml' 
            check = false
        }else{
            check = true
        }
        if(input.length === 0 || check === true){
            errorMessage.textContent = '' 
        }
    });

    fatInput.addEventListener("input", () => {
        const input = fatInput.value;
        var check = true
        var errorMessage = document.getElementById('error-fat')

        if(parseInt(input) < 0){
            errorMessage.textContent = '*A positive value is required' 
            check = false
        }else if(parseInt(input) > 100){
            errorMessage.textContent = '*Value cannot be greater than 100g/100ml' 
            check = false
        }else{
            check = true
        }
        if(input.length === 0 || check === true){
            errorMessage.textContent = '' 
        }
    });
    radios.forEach(radio => {
        radio.addEventListener("click", () => {
        const radios = document.querySelectorAll('input[name="radio"]:checked');
        if (radios.length > 0) {
            var errorMessage = document.getElementById('error-choose');
            errorMessage.textContent = '';
        } else {
            var errorMessage = document.getElementById('error-choose');
            errorMessage.textContent = '*Please choose a selection';
        }
     });
    });
});

var page = 0
function nextStep() {
    if(check === false){
        return;
    }
    const sugarInput = document.getElementById("sugar-level").value;
    const fatInput = document.getElementById("fat-level").value;
    if(sugarInput.length === 0 && page===1){
        var errorMessage = document.getElementById('error-sugar')
        errorMessage.textContent = '*This field is required' 
        return;
    }
    if(fatInput.length === 0 && page===2){
        var errorMessage = document.getElementById('error-fat')
        errorMessage.textContent = '*This field is required' 
        return;
    }
    
    const currentStep = document.querySelector('.form-step-active');
    const inputs = currentStep.querySelectorAll('input');

    for (let input of inputs) {
        if (input.type === 'radio') {
            const radioGroup = document.querySelectorAll(`input[id="${input.id}"]`);
            const isChecked = Array.from(radioGroup).some(radio => radio.checked);
            if (isChecked === false) {
                var errorMessage = document.getElementById('error-choose');
                errorMessage.textContent = '*Please choose a selection';
                return;
            } else {
                var errorMessage = document.getElementById('error-choose');
                errorMessage.textContent = '';
            }}
    }
    page++; 
    const nextStep = currentStep.nextElementSibling;
    if (nextStep && nextStep.classList.contains('form-step')) {
        currentStep.classList.remove('form-step-active');
        nextStep.classList.add('form-step-active');
        
        const currentStepIndex = Array.from(document.querySelectorAll('.form-step')).indexOf(nextStep);
        document.querySelectorAll('.step').forEach((step, index) => {
            if (index <= currentStepIndex) {
                step.classList.add('active');
            } else {
                step.classList.remove('active');
            }
        });
        if (currentStepIndex === 3) {
            calculate();
        }
    }
}

function prevStep() {
    page--;
    const currentStep = document.querySelector('.form-step-active');
    const prevStep = currentStep.previousElementSibling;

    if (prevStep && prevStep.classList.contains('form-step')) {
        currentStep.classList.remove('form-step-active');
        prevStep.classList.add('form-step-active');
        
        const currentStepIndex = Array.from(document.querySelectorAll('.form-step')).indexOf(prevStep);
        document.querySelectorAll('.step').forEach((step, index) => {
            if (index <= currentStepIndex) {
                step.classList.add('active');
            } else {
                step.classList.remove('active');
            }
        });
    }
}

function calculate() {
    var score = 0;
    const nss = document.querySelector('input[id="nss"]:checked').value;
    const sugar = parseFloat(document.getElementById("sugar-level").value);
    const fat = parseFloat(document.getElementById("fat-level").value);
    var resultText = "";
    var resultImage = "";

    if (sugar <= 1 && fat <= 1) {
        score = 4;
    }
    if ((sugar > 1 && sugar <= 5) || (fat > 0.7 && fat < 1.2)) {
        score = 3;
    }
    if ((sugar > 5 && sugar < 10) || (fat > 1.2 && fat < 2.8)) {
        score = 2;
    }
    if (sugar > 10 || fat > 2.8) {
        score = 1;
    }
    if (nss === "yes" && score > 1) {
        score--;
    }

    // switch (score) {
    //     case 1:
    //         resultText = "D";
    //         resultImage = "D.png";
    //         break;
    //     case 2:
    //         resultText = "C";
    //         resultImage = "C.png";
    //         break;
    //     case 3:
    //         resultText = "B";
    //         resultImage = "B.png";
    //         break;
    //     case 4:
    //         resultText = "A";
    //         resultImage = "A.png";
    //         break;
    // }
    
    switch (score) {
        case 1:
            resultText = "D";
            break;
        case 2:
            resultText = "C";
            break;
        case 3:
            resultText = "B";
            break;
        case 4:
            resultText = "A";
            break;
    }

    // document.getElementById("result-text").textContent = "Result: " + resultText;
    document.getElementById("result-text").textContent = resultText;
    // document.getElementById("result-image").src = resultImage;
}