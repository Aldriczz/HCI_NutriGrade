document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("searchInput");

    searchInput.addEventListener("input", () => {
        const searchTerm = searchInput.value.trim().toLowerCase();
        const products = document.querySelectorAll("[id$='Original'], [id$='Water'], [id$='C'], [id$='Bottle']");

        products.forEach(product => {
            const productName = product.querySelector("div").textContent.trim().toLowerCase();
            if (productName.includes(searchTerm)) {
                product.style.display = 'inline-block';
            } else {
                product.style.display = 'none';
            }
        });
    });
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

function filterProducts() {
    const selectedGrade = document.querySelector('[data-dropdown="gradeDropdown"]').textContent.trim();
    const selectedType = document.querySelector('[data-dropdown="typeDropdown"]').textContent.trim();
    const selectedProdusen = document.querySelector('[data-dropdown="produsenDropdown"]').textContent.trim();

    if (selectedGrade === 'Grade A' && selectedType === 'Minuman Kemasan' && selectedProdusen === 'Nestle') {
        document.querySelector('#nescafeGoldOriginal').style.display = 'inline-block';
    } else {
        document.querySelector('#nescafeGoldOriginal').style.display = 'none';
    }

    if (selectedGrade === 'Grade B' && selectedType === 'Minuman Kemasan' && selectedProdusen === 'Orang Tua') {
        document.querySelector('#coconutWater').style.display = 'inline-block';
    } else {
        document.querySelector('#coconutWater').style.display = 'none';
    }

    if (selectedGrade === 'Grade C' && selectedType === 'Minuman Kemasan' && selectedProdusen === 'Unilever') {
        document.querySelector('#indocafeC').style.display = 'inline-block';
    } else {
        document.querySelector('#indocafeC').style.display = 'none';
    }

    if (selectedGrade === 'Grade D' && selectedType === 'Minuman Kemasan' && selectedProdusen === 'Wings') {
        document.querySelector('#youC').style.display = 'inline-block';
    } else {
        document.querySelector('#youC').style.display = 'none';
    }
}
