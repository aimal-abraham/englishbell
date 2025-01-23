 // JavaScript for toggling the FAQ answer visibility
 document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const parent = question.parentElement;
        const allItems = document.querySelectorAll('.faq-item');

        // Close all other items
        allItems.forEach(item => {
        if (item !== parent) {
            item.classList.remove('active');
        }
        });

        // Toggle the current item
        parent.classList.toggle('active');
    });
    });