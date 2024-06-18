const products = document.querySelectorAll(".product");

document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("searchInput");
    const tests = document.querySelectorAll(".title")
    const checkBoxes = document.querySelectorAll('input[type="checkbox"]:checked')

    products.forEach(product=>{
        product.addEventListener('click',function(){
            console.log("bijik")
            document.body.classList.add('blur-background')
            product.classList.add('expanded')
        })
    })

    document.addEventListener('click',function(event){
        const isExpanded = this.querySelector('.product.expanded')
        const isProduct = event.target.closest('.product');
        if(isExpanded && !isProduct){
            isExpanded.classList.remove('expanded')
            document.body.classList.remove('blur-background')
        }
        
    })

    searchInput.addEventListener("input", () => {
        const searchTerm = searchInput.value.trim().toLowerCase();

        products.forEach(product => {
            const productName = product.querySelector('div[class="name"]').textContent.trim().toLowerCase();
            var fillter = false
            if (productName.includes(searchTerm)) {
                checkBoxes.forEach(checkBox=>{
                    var type = checkBox.id
                    if(product.classList.contains(type)){
                        fillter = true
                    }
                })
                if(fillter === true){
                    product.classList.remove('hidden')
                }else{
                    product.classList.add('hidden');
                }
                
            } else {
                product.classList.add('hidden');
            }
        });
    });
    tests.forEach(test=>{
        test.addEventListener("click",()=>{
            var content = test.parentElement.parentElement.querySelector('.isi')
            if(content.classList.contains('active')){
                content.classList.remove('active')
            }else{
                content.classList.add('active')
            }
        });
    })
console.log(checkBoxes)
    checkBoxes.forEach(checkBox=>{
        const type = checkBox.id
            products.forEach(product=>{
                if(product.classList.contains(type)){
                    if(product.classList.contains('hidden')){
                        product.classList.remove('hidden')
                    }
                }
                
            })
    })
});

function fillter(){
    const companyBoxes = document.querySelectorAll('input[name="company"]:checked')
    const gradeBoxes = document.querySelectorAll('input[class="grade"]:checked')
    const beverageBoxes = document.querySelectorAll('input[class="beverage"]:checked')
    // console.log(gradeBoxes)
    if(gradeBoxes.length === 0 && companyBoxes.length === 0 && beverageBoxes.length === 0){
        products.forEach(product => {
            product.classList.add('hidden')
        });
        return;
    }

    if(gradeBoxes.length >0){
    products.forEach(product => {
        var fillter = false
        var flag = false
        var type
        gradeBoxes.forEach(gradeBox=>{
            type = gradeBox.id
            if(product.classList.contains(type)){
                fillter = true
            }
        })
            if(fillter === true){
                product.classList.remove('hidden')
            }else{
                product.classList.add('hidden');
            }
        beverageBoxes.forEach(beverageBox=>{
            type = beverageBox.id
            if(product.classList.contains(type) && fillter === true){
                product.classList.remove('hidden')
                flag = true
            }else{
                product.classList.add('hidden')
            }
        })
        if(beverageBoxes.length > 0){
        companyBoxes.forEach(companyBox=>{
            type = companyBox.id
            if(product.classList.contains(type) && fillter === true && flag === true){
                product.classList.remove('hidden')
            }else{
                product.classList.add('hidden')
            }
        })
        }else{
            companyBoxes.forEach(companyBox=>{
                type = companyBox.id
                if(product.classList.contains(type) && fillter === true){
                    product.classList.remove('hidden')
                }else{
                    product.classList.add('hidden')
                }
            })
        }
    });
    }else{
        
    products.forEach(product=>{
        var flag = false
        beverageBoxes.forEach(beverageBox=>{
            type = beverageBox.id
            if(product.classList.contains(type)){
                product.classList.remove('hidden')
                flag = true
            }else{
                product.classList.add('hidden')
            }
        })
        if(companyBoxes.length>0 && beverageBoxes.length >0){
        companyBoxes.forEach(companyBox=>{
            type = companyBox.id
            if(product.classList.contains(type) && flag === true){
                product.classList.remove('hidden')
            }else{
                product.classList.add('hidden')
            }
        })
        }else if(companyBoxes.length>0 && beverageBoxes.length ===0){
            companyBoxes.forEach(companyBox=>{
                type = companyBox.id
                if(product.classList.contains(type)){
                    product.classList.remove('hidden')
                }else{
                    product.classList.add('hidden')
                }
            })
        }
     })
     
    }
}



function clearFilters(filterType) {
        var producerRadios = document.querySelectorAll(`input[name="${filterType}"]`);
        producerRadios.forEach(function(radio) {
            radio.checked = false;
        });
    fillter()
}










// function toggleDropdown(dropdownId) {
//     const dropdown = document.getElementById(dropdownId);
//     const button = document.querySelector(`[data-dropdown="${dropdownId}"]`);

//     const allDropdowns = document.querySelectorAll(".content");
//     allDropdowns.forEach((dropdown) => {
//         if (dropdown.id !== dropdownId && dropdown.classList.contains("show")) {
//             dropdown.classList.remove("show");
//         }
//     });

//     dropdown.classList.toggle("show");

//     const buttonRect = button.getBoundingClientRect();
//     dropdown.style.left = buttonRect.left + "px";
//     dropdown.style.top = buttonRect.bottom + "px";
// }

// const originalButtonText = {};
// const originalArrowHTML = {};
// document.querySelectorAll('.button').forEach(button => {
//     const dropdownId = button.getAttribute('data-dropdown');
//     originalButtonText[dropdownId] = button.textContent;
//     originalArrowHTML[dropdownId] = button.innerHTML;
// });

// document.querySelectorAll('.content a').forEach(item => {
//     item.addEventListener('click', event => {
//         event.preventDefault(); 
//         const dropdownId = item.parentElement.id;
//         const button = document.querySelector(`[data-dropdown="${dropdownId}"]`);

//         const isSelected = item.classList.contains('selected');

//         document.querySelectorAll(`#${dropdownId} a`).forEach(selectedItem => {
//             selectedItem.classList.remove('selected');
//         });

//         if (!isSelected) {
//             item.classList.add('selected');
//             button.textContent = item.textContent.trim();
//             button.innerHTML = item.innerHTML;
//         } else {
//             button.textContent = originalButtonText[dropdownId];
//             button.innerHTML = originalArrowHTML[dropdownId];
//         }
//         const dropdown = document.getElementById(dropdownId);
//         dropdown.classList.remove("show");
//         filterProducts();
//     })
// });

// window.onclick = function(event) {
//     if (!event.target.matches('.button')) {
//         var dropdowns = document.getElementsByClassName("content");
//         for (var i = 0; i < dropdowns.length; i++) {
//             var openDropdown = dropdowns[i];
//             if (openDropdown.classList.contains('show')) {
//                 openDropdown.classList.remove('show');
//             }
//         }
//     }
// }

// document.querySelectorAll('.content').forEach(dropdown => {
//     dropdown.addEventListener('click', event => {
//         event.stopPropagation(); 
//     });
// });

//Filter

// document.addEventListener("DOMContentLoaded", () => {
//     const checkGroups = [
//         { selectAllId: "selectAllGrade", checkboxClass: "gradeCheckbox", name: "gradeCheckbox" },
//         { selectAllId: "selectAllType", checkboxClass: "typeCheckbox", name: "typeCheckbox" },
//         { selectAllId: "selectAllProducer", checkboxClass: "producerCheckbox", name: "producerCheckbox" },
//     ];

//     function updateSelectAllCheckbox(group) {
//         const checkboxes = document.querySelectorAll(`.${group.checkboxClass}`);
//         const selectAllCheckbox = document.getElementById(group.selectAllId);
//         const allChecked = Array.from(checkboxes).every(checkbox => checkbox.checked);
//         selectAllCheckbox.checked = allChecked;
//     }

//     function setVisibility() {
//         const checkedGrades = getChecked('gradeCheckbox');
//         const checkedTypes = getChecked('typeCheckbox');
//         const checkedProducers = getChecked('producerCheckbox');

//         allFoods.forEach(el => {
//             const gradeCheck = checkedGrades.length === 0 || checkedGrades.some(value => el.classList.contains(value));
//             const typeCheck = checkedTypes.length === 0 || checkedTypes.some(value => el.classList.contains(value));
//             const producerCheck = checkedProducers.length === 0 || checkedProducers.some(value => el.classList.contains(value));

//             // Hide all food elements if no filters are selected
//             if (checkedGrades.length === 0 && checkedTypes.length === 0 && checkedProducers.length === 0) {
//                 el.style.display = 'none';
//             } else {
//                 // Show the food element if it matches the selected filters
//                 el.style.display = (gradeCheck && typeCheck && producerCheck) ? 'inline-block' : 'none';
//             }
//         });
//     }

//     function getChecked(name) {
//         return Array.from(document.querySelectorAll(`input[name=${name}]:checked`)).map(el => el.value);
//     }

//     checkGroups.forEach(group => {
//         const selectAllCheckbox = document.getElementById(group.selectAllId);
//         const checkboxes = document.querySelectorAll(`.${group.checkboxClass}`);

//         checkboxes.forEach(checkbox => {
//             checkbox.addEventListener("change", () => {
//                 updateSelectAllCheckbox(group);
//                 setVisibility();
//             });
//         });

//         selectAllCheckbox.addEventListener("change", () => {
//             checkboxes.forEach(checkbox => {
//                 checkbox.checked = selectAllCheckbox.checked;
//             });
//             setVisibility();
//         });

//         updateSelectAllCheckbox(group);
//     });

//     const allFoods = Array.from(document.querySelectorAll('.food'));

//     // Initialize visibility on page load
//     setVisibility();

//     // Add event listener to all checkboxes
//     const allCheckboxes = document.querySelectorAll('input[type=checkbox]');
//     allCheckboxes.forEach(checkbox => {
//         checkbox.addEventListener('change', setVisibility);
//     });
// });

