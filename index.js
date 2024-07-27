document.addEventListener('DOMContentLoaded', () => {
    // Tabs
    const tabs = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = tab.dataset.tab;

            tabContents.forEach(content => {
                content.classList.remove('active');
                if (content.id === 'tab-' + target) {
                    content.classList.add('active');
                }
            });
        });
    });

    // Slider
    const slider = document.querySelector('.slider-range');
    const sliderValue = document.getElementById('slider-value');

    slider.addEventListener('input', () => {
        sliderValue.textContent = slider.value;
    });

    // Accordion
    const accordionButtons = document.querySelectorAll('.accordion-button');
    
    accordionButtons.forEach(button => {
        button.addEventListener('click', () => {
            const content = button.nextElementSibling;
            content.classList.toggle('active');
        });
    });

    // Form Validation
    const form = document.getElementById('example-form');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = form.name.value.trim();
        const email = form.email.value.trim();

        if (!name || !email) {
            alert('Please fill in all fields.');
        } else {
            alert('Form submitted successfully!');
        }
    });

    // Fetch Data
    const fetchDataButton = document.getElementById('fetch-data');
    const dataResult = document.getElementById('data-result');

    fetchDataButton.addEventListener('click', () => {
        fetch('https://api.example.com/data')
            .then(response => response.json())
            .then(data => {
                dataResult.textContent = JSON.stringify(data, null, 2);
            })
            .catch(error => {
                dataResult.textContent = 'An error occurred: ' + error;
            });
    });
});
