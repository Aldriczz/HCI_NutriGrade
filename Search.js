document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("searchInput");
    const tests = document.querySelectorAll(".test")

    searchInput.addEventListener("input", () => {
        const searchTerm = searchInput.value.trim().toLowerCase();
        const products = document.querySelectorAll(".product");

        products.forEach(product => {
            const productName = product.querySelector('div[class="name"]').textContent.trim().toLowerCase();
            if (productName.includes(searchTerm)) {
                product.style.display = 'inline-block';
            } else {
                product.style.display = 'none';
            }
        });
    });
    tests.forEach(test=>{
        test.addEventListener("click",()=>{
            var content = test.querySelector(".isi")
            if(content.classList.contains('active')){
                content.classList.remove('active')
            }else{
                content.classList.add('active')
            }
        });
    })
});

function toggleDropdown(dropdownId) {
    const dropdown = document.getElementById(dropdownId);
    const button = document.querySelector(`[data-dropdown="${dropdownId}"]`);

    const allDropdowns = document.querySelectorAll(".content");
    allDropdowns.forEach((dropdown) => {
        if (dropdown.id !== dropdownId && dropdown.classList.contains("show")) {
            dropdown.classList.remove("show");
        }
    });

    dropdown.classList.toggle("show");

    const buttonRect = button.getBoundingClientRect();
    dropdown.style.left = buttonRect.left + "px";
    dropdown.style.top = buttonRect.bottom + "px";
}

const originalButtonText = {};
const originalArrowHTML = {};
document.querySelectorAll('.button').forEach(button => {
    const dropdownId = button.getAttribute('data-dropdown');
    originalButtonText[dropdownId] = button.textContent;
    originalArrowHTML[dropdownId] = button.innerHTML;
});

document.querySelectorAll('.content a').forEach(item => {
    item.addEventListener('click', event => {
        event.preventDefault(); 
        const dropdownId = item.parentElement.id;
        const button = document.querySelector(`[data-dropdown="${dropdownId}"]`);

        const isSelected = item.classList.contains('selected');

        document.querySelectorAll(`#${dropdownId} a`).forEach(selectedItem => {
            selectedItem.classList.remove('selected');
        });

        if (!isSelected) {
            item.classList.add('selected');
            button.textContent = item.textContent.trim();
            button.innerHTML = item.innerHTML;
        } else {
            button.textContent = originalButtonText[dropdownId];
            button.innerHTML = originalArrowHTML[dropdownId];
        }
        const dropdown = document.getElementById(dropdownId);
        dropdown.classList.remove("show");
        filterProducts();
    })
});

window.onclick = function(event) {
    if (!event.target.matches('.button')) {
        var dropdowns = document.getElementsByClassName("content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

document.querySelectorAll('.content').forEach(dropdown => {
    dropdown.addEventListener('click', event => {
        event.stopPropagation(); 
    });
});

//Filter

document.addEventListener("DOMContentLoaded", () => {
    const checkGroups = [
        { selectAllId: "selectAllGrade", checkboxClass: "gradeCheckbox", name: "gradeCheckbox" },
        { selectAllId: "selectAllType", checkboxClass: "typeCheckbox", name: "typeCheckbox" },
        { selectAllId: "selectAllProducer", checkboxClass: "producerCheckbox", name: "producerCheckbox" },
    ];

    function updateSelectAllCheckbox(group) {
        const checkboxes = document.querySelectorAll(`.${group.checkboxClass}`);
        const selectAllCheckbox = document.getElementById(group.selectAllId);
        const allChecked = Array.from(checkboxes).every(checkbox => checkbox.checked);
        selectAllCheckbox.checked = allChecked;
    }

    function setVisibility() {
        const checkedGrades = getChecked('gradeCheckbox');
        const checkedTypes = getChecked('typeCheckbox');
        const checkedProducers = getChecked('producerCheckbox');

        allFoods.forEach(el => {
            const gradeCheck = checkedGrades.length === 0 || checkedGrades.some(value => el.classList.contains(value));
            const typeCheck = checkedTypes.length === 0 || checkedTypes.some(value => el.classList.contains(value));
            const producerCheck = checkedProducers.length === 0 || checkedProducers.some(value => el.classList.contains(value));

            // Hide all food elements if no filters are selected
            if (checkedGrades.length === 0 && checkedTypes.length === 0 && checkedProducers.length === 0) {
                el.style.display = 'none';
            } else {
                // Show the food element if it matches the selected filters
                el.style.display = (gradeCheck && typeCheck && producerCheck) ? 'inline-block' : 'none';
            }
        });
    }

    function getChecked(name) {
        return Array.from(document.querySelectorAll(`input[name=${name}]:checked`)).map(el => el.value);
    }

    checkGroups.forEach(group => {
        const selectAllCheckbox = document.getElementById(group.selectAllId);
        const checkboxes = document.querySelectorAll(`.${group.checkboxClass}`);

        checkboxes.forEach(checkbox => {
            checkbox.addEventListener("change", () => {
                updateSelectAllCheckbox(group);
                setVisibility();
            });
        });

        selectAllCheckbox.addEventListener("change", () => {
            checkboxes.forEach(checkbox => {
                checkbox.checked = selectAllCheckbox.checked;
            });
            setVisibility();
        });

        updateSelectAllCheckbox(group);
    });

    const allFoods = Array.from(document.querySelectorAll('.food'));

    // Initialize visibility on page load
    setVisibility();

    // Add event listener to all checkboxes
    const allCheckboxes = document.querySelectorAll('input[type=checkbox]');
    allCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', setVisibility);
    });
});

