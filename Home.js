function showGradeInfo(grade) {
    const buttons = document.querySelectorAll('.grade-btn')
    buttons.forEach(button=>{
        if(grade === button.textContent){
            button.classList.add('active')
        }else{
            button.classList.remove('active')
        }
    })
    
    const gradeInfo = {
        A: {
            class: 'grades',
            title: 'Nutri-Grade A',
            description: 'Products graded “A” contain minimal sugar, no sweetener, and minimal saturated fat content. Make these products your first choice whenever possible.',
            sugar: '≤ 1g',
            fat: '≤ 0.7g',
            examples: ['example-drink-1.jpg', 'example-drink-2.jpg']
        },
        B: {
            class: 'grades',
            title: 'Nutri-Grade B',
            description: 'Products graded “B” contain moderate amounts of sugar and/or sweeteners. Choose these products occasionally.',
            sugar: '1g - 5g',
            fat: '0.7g - 1.5g',
            examples: ['example-drink-3.jpg', 'example-drink-4.jpg']
        },
        C: {
            class: 'grades',
            title: 'Nutri-Grade C',
            description: 'Products graded “C” contain higher amounts of sugar and/or sweeteners. Limit your consumption of these products.',
            sugar: '5g - 10g',
            fat: '1.5g - 3g',
            examples: ['example-drink-5.jpg', 'example-drink-6.jpg']
        },
        D: {
            class: 'grades',
            title: 'Nutri-Grade D',
            description: 'Products graded “D” contain the highest amounts of sugar and/or sweeteners. Avoid these products whenever possible.',
            sugar: '> 10g',
            fat: '> 3g',
            examples: ['example-drink-7.jpg', 'example-drink-8.jpg']
        }
    };

    const info = gradeInfo[grade];
    const container = document.getElementById('nutri-grade-info');
    container.innerHTML = `
        <div class="grade">
            <div class="grade-circle ${info.class}">${grade}</div>
            <h3>${info.title}</h3>
            <p class="desc">${info.description}</p>
            <div class="grade-details">
                <div class="detail">
                    <span>${info.sugar}</span>
                    <p>Sugar and Sweetener</p>
                </div>
                <div class="detail">
                    <span>${info.fat}</span>
                    <p>Saturated Fat</p>
                </div>
            </div>
        </div>
    `;
}
showGradeInfo('A')
