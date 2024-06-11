function nextStep() {
    
    const currentStep = document.querySelector('.form-step-active');
    const inputs = currentStep.querySelectorAll('input');

    for (let input of inputs) {
        if (input.type === 'radio') {
            const radioGroup = document.querySelectorAll(`input[id="${input.id}"]`);
            const isChecked = Array.from(radioGroup).some(radio => radio.checked);
            if (!isChecked) {
                input.setCustomValidity('Please select an option.');
                input.reportValidity();
                return;
            } else {
                input.setCustomValidity('');
            }}
        else if (!input.checkValidity()) {
            input.reportValidity();
            return;
        }
    }
    
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