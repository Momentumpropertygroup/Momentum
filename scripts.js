//Search Bar Toggle
function toggleSearch(){
            const searchBar = document.querySelector('.search-bar');
            searchBar.classList.toggle('active');
            if (searchBar.classList.contains('active')){
                searchBar.focus();
            }
        }
//Collapse Search Bar on Outside Click
        document.addEventListener('click', function(event){
            const searchContainer = document.querySelector('.search-container');
            const searchBar = document.querySelector('.search-bar');
            const searchIcon = document.querySelector('search-icon');
            if (!searchContainer.contains(event.target) && searchBar.classList.contains('active')){
                searchBar.classList.remove('active');
            }
        });

//Filter Properties by Lifestyle
        document.getElementById('lifestyle-filter').addEventListener('change', function(){
            const filterValue = this.value;
            const propertyCards = document.querySelectorAll('.property-card');
            propertyCards.forEach(card => {
                if (filterValue === 'all' || card.dataset.lifestyle === filterValue) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });

//Clear form after submission
        document.getElementById('contact-form').addEventListener('submit', function(event){
            event.preventDefault();
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            console.log('Contact form submission', data);
            this.reset();
        });

// Dropdown Toggle Function for View Details
function toggleDetails(propertyId) {
    const dropdown = document.getElementById(`dropdown-${propertyId}`);
    const isOpen = dropdown.classList.contains('active');

    // Close all dropdowns
    document.querySelectorAll('.details-dropdown').forEach(d => {
        d.classList.remove('active');
        d.style.maxHeight = '0';
    });

    // Toggle the clicked dropdown
    if (!isOpen) {
        dropdown.classList.add('active');
        dropdown.style.maxHeight = '300px';
    }
}
// Collapse Search Bar on Outside Click
document.addEventListener('click', function(event) {
    const searchContainer = document.querySelector('.search-container');
    const searchBar = document.querySelector('.search-bar');
    if (!searchContainer.contains(event.target) && searchBar.classList.contains('active')) {
        searchBar.classList.remove('active');
    }
});




// Ensure modal is hidden on page load
        document.addEventListener('DOMContentLoaded', function() {
            const modal = document.getElementById('auth-modal');
            modal.classList.remove('active'); // Explicitly remove active class on load
        });

        function toggleSearch() {
            const searchBar = document.getElementById('search-input');
            searchBar.classList.toggle('active');
            if (searchBar.classList.contains('active')) {
                searchBar.focus();
            }
        }

        function toggleAuthModal() {
            const modal = document.getElementById('auth-modal');
            modal.classList.toggle('active');
        }

        function showTab(tabId) {
            document.querySelectorAll('.form-section').forEach(section => {
                section.classList.remove('active');
            });
            document.querySelectorAll('.tab-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            document.getElementById(tabId).classList.add('active');
            document.querySelector(`button[onclick="showTab('${tabId}')"]`).classList.add('active');
        }


// Carousel functionality for multiple images
function changeSlide(propertyId, direction) {
    const dropdown = document.getElementById(`dropdown-${propertyId}`);
    if (!dropdown) {
        console.error(`Dropdown with ID dropdown-${propertyId} not found`);
        return;
    }
    
    const images = dropdown.querySelectorAll('.carousel-image');
    if (images.length === 0) {
        console.error(`No images found in carousel for ${propertyId}`);
        return;
    }

    // Find current active image
    let currentIndex = -1;
    images.forEach((img, index) => {
        if (img.classList.contains('active')) {
            currentIndex = index;
        }
    });

    if (currentIndex === -1) {
        console.error(`No active image found in carousel for ${propertyId}`);
        images[0].classList.add('active'); // Fallback to first image
        currentIndex = 0;
    }

    // Remove active class from current image
    images[currentIndex].classList.remove('active');

    // Calculate new index
    let newIndex = (currentIndex + direction + images.length) % images.length;

    // Add active class to new image
    images[newIndex].classList.add('active');
}

// Toggle Details Dropdown
function toggleDetails(propertyId) {
    const dropdown = document.getElementById(`dropdown-${propertyId}`);
    if (dropdown.classList.contains('active')) {
        dropdown.classList.remove('active');
    } else {
        // Close all other dropdowns
        document.querySelectorAll('.details-dropdown.active').forEach(dd => {
            dd.classList.remove('active');
        });
        dropdown.classList.add('active');
        // Ensure the first image is active when opening
        const images = dropdown.querySelectorAll('.carousel-image');
        if (images.length > 0) {
            images.forEach(img => img.classList.remove('active'));
            images[0].classList.add('active');
        }
    }
}

// Toggle Apartments Section Visibility
function toggleApartments() {
    const section = document.getElementById('apartments-section');
    if (section.style.display === 'none' || section.style.display === '') {
        section.style.display = 'block';
        section.scrollIntoView({ behavior: 'smooth' });
    } else {
        section.style.display = 'none';
    }
}

// Filter Properties and Apartments
document.getElementById('lifestyle-filter').addEventListener('change', function() {
    const filterValue = this.value;
    const allPropertyCards = document.querySelectorAll('.property-card');
    allPropertyCards.forEach(card => {
        if (filterValue === 'all' || card.dataset.lifestyle === filterValue) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
    // Ensure apartments section is hidden when filtering
    const apartmentsSection = document.getElementById('apartments-section');
    apartmentsSection.style.display = 'none';
});

// Search Functionality
function toggleSearch() {
    const searchBar = document.getElementById('search-input');
    searchBar.classList.toggle('active');
    if (searchBar.classList.contains('active')) {
        searchBar.focus();
    }
}

document.getElementById('search-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const query = document.getElementById('search-input').value.toLowerCase();
    const allPropertyCards = document.querySelectorAll('.property-card');
    allPropertyCards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        const description = card.querySelector('p').textContent.toLowerCase();
        if (title.includes(query) || description.includes(query)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
    // Ensure apartments section is hidden when searching
    const apartmentsSection = document.getElementById('apartments-section');
    apartmentsSection.style.display = 'none';
});

// Authentication Modal
function toggleAuthModal() {
    const modal = document.getElementById('auth-modal');
    modal.classList.toggle('active');
}

function showTab(tabId) {
    document.querySelectorAll('.form-section').forEach(section => {
        section.classList.remove('active');
    });
    document.querySelectorAll('.auth-tabs button').forEach(button => {
        button.classList.remove('active');
    });
    document.getElementById(tabId).classList.add('active');
    document.querySelector(`button[onclick="showTab('${tabId}')"]`).classList.add('active');
}