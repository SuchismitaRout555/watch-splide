
// Fetch the JSON data first
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        initApp(data.watch); // Call initApp only after data is fetched
    })
    .catch(error => {
        console.error('Error loading watch data:', error);
        // Use fallback data if fetch fails
        const fallbackData = [
            {
                id: 1,
                title: "Smart Watch Pro",
                subtitle: "Luxury Edition",
                description: "Experience the future of wearable technology with our latest smartwatch model.",
                price: "$299",
                image: "https://via.placeholder.com/500x600?text=Watch+Pro",
                bgGradient: "linear-gradient(135deg, #f5f5f7 0%, #e0e0e2 100%)",
                accentColor: "#0066CC"
            }
        ];
        initApp(fallbackData);
    });


  
// Initialize App Function
function initApp(watch) {
    setupMobileMenu(); 
    setupResponsiveMenu(); 
    populateSlider(watch); 
    initializeSplide(watch); 
    setupPageLoadAnimation(); 
}

// Setup Mobile Menu Toggle
function setupMobileMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('mobile-visible');
        });
    }
}

// Handle Responsive Layout on Resize
function setupResponsiveMenu() {
    const navMenu = document.getElementById('navMenu');
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768 && navMenu) {
            navMenu.classList.remove('mobile-visible');
            navMenu.style.display = '';
        } else if (window.innerWidth <= 768 && navMenu) {
            navMenu.style.display = navMenu.classList.contains('mobile-visible') ? 'flex' : 'none';
        }
    });
}

// Splide Slider 
function populateSlider(watch) {
    const slidesContainer = document.getElementById('watch-slides');
    watch.forEach(watch => {
        const slide = document.createElement('li');
        slide.className = 'splide__slide';
        slide.dataset.watchId = watch.id;
        slide.innerHTML = `<img src="${watch.image}" alt="${watch.title}">`;
        slidesContainer.appendChild(slide);
    });
}
function initializeSplide(watch) {
    const splide = new Splide('.splide', {
        type: 'loop',
        perPage: 1,
        focus: 'center',
        autoplay: false,
        interval: 5000,
        pagination: true,
        arrows: true,
        speed: 800,
        easing: 'cubic-bezier(0.25, 1, 0.5, 1)',
        rewind: true,
        rewindSpeed: 800,
        waitForTransition: true
    }).mount();

    const carouselContent = document.querySelector('.carousel-content');

    // Set initial watch information
    updateWatchInfo(watch[0]);

    splide.on('move', function() {
        // Ensure animation resets properly
        carouselContent.classList.remove('fade-in');
        carouselContent.classList.add('fade-out');
    });

    splide.on('moved', function() {
        const activeSlideId = parseInt(splide.Components.Elements.slides[splide.index].dataset.watchId);
        const selectedWatch = watch.find(watch => watch.id === activeSlideId);

        setTimeout(() => {
            updateWatchInfo(selectedWatch);
            carouselContent.classList.remove('fade-out');
            void carouselContent.offsetWidth; // Force reflow for animation restart
            carouselContent.classList.add('fade-in');
        }, 300); // Small delay ensures smooth transition
    });

    window.addEventListener('resize', function() {
        splide.refresh();
    });
}


// Animate the header
function animateHeader() {
    const header = document.querySelector('.header');
    header.classList.remove('animate-header');
    void header.offsetWidth; // Force reflow
    header.classList.add('animate-header');
}

// Update Watch Information
function updateWatchInfo(watch) {
    document.getElementById('product-title').textContent = watch.title;

    let formattedSubtitle = watch.subtitle.includes("Choose Us") 
        ? watch.subtitle.replace("Choose Us", '<span class="title-highlight">Choose US</span>') 
        : watch.subtitle;

    document.getElementById('product-subtitle').innerHTML = formattedSubtitle;
    document.getElementById('product-description').textContent = watch.description;
    document.getElementById('product-price').textContent = watch.price;

    document.documentElement.style.setProperty('--background-gradient', watch.bgGradient);
    document.documentElement.style.setProperty('--accent-color', watch.accentColor);

    document.querySelectorAll('.navigation a, .product-info p, .product-price').forEach(el => {
        el.style.color = 'white';
    });

    updateSocialIconColors();

    // Subtle animation for price
    const priceElement = document.getElementById('product-price');
    priceElement.style.transform = 'scale(1.05)';
    setTimeout(() => priceElement.style.transform = 'scale(1)', 300);
}

// Update Social Icon Colors
function updateSocialIconColors() {
    document.querySelectorAll('.social-icon').forEach(icon => {
        icon.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
        icon.style.color = 'white';
    });
}

// Page Load Animation
function setupPageLoadAnimation() {
    window.addEventListener('load', function() {
        document.body.classList.add('page-loaded');
    });
}

document.getElementById('social-links-container').innerHTML = `
<div class="social-links">
    <button class="social-btn">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02z"/>
        </svg>
    </button>
    <button class="social-btn">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
        </svg>
    </button>
    <button class="social-btn">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z"/>
        </svg>
    </button>
</div>
`;
