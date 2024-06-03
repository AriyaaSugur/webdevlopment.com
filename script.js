document.addEventListener('DOMContentLoaded', function() {
    // Open the contact form modal when the 'Contact Us' button is clicked
    document.getElementById('contactUsBtn').addEventListener('click', function() {
        $('#contactUsModal').modal('show');
    });

    // Change the project image when a project item is clicked
    const projectList = document.getElementById('projectList');
    const projectImage = document.getElementById('projectImage');

    projectList.addEventListener('click', function(e) {
        if (e.target && e.target.matches('a.list-group-item')) {
            e.preventDefault();
            // Remove 'active' class from all project items
            const items = projectList.querySelectorAll('.list-group-item');
            items.forEach(function(item) {
                item.classList.remove('active');
            });
            // Add 'active' class to the clicked item
            e.target.classList.add('active');
            // Change the project image
            projectImage.src = e.target.getAttribute('data-image');
        }
    });

    // Open 'fylehq.com' in a new tab when 'Read More' button is clicked
    const readMoreBtns = document.querySelectorAll('.readMoreBtn');
    readMoreBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            window.open('https://fylehq.com', '_blank');
        });
    });

    // Form submission
    document.getElementById('contactForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(this);
        
        fetch('https://getform.io/f/zazkjozb', {
            method: 'POST',
            body: formData,
        })
        .then(response => response.json())
        .then(data => {
            alert('Form submitted successfully!');
            $('#contactUsModal').modal('hide');
            this.reset();
        })
        .catch(error => {
            console.error('Error:', error);
            alert('There was an error submitting the form.');
        });
    });
});
