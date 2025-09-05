// Optimized Loader for Kilitek Website
// Fast, efficient loader with minimal delays and better performance

document.addEventListener('DOMContentLoaded', function() {
    const loader = document.getElementById('loader');
    const countText = document.querySelector('.count__text');
    
    if (!loader) return;
    
    let progress = 0;
    const targetProgress = 100;
    const increment = 2; // Faster increment
    const interval = 16; // ~60fps for smooth animation
    
    // Start optimized progress animation
    const progressInterval = setInterval(() => {
        progress += increment;
        
        if (progress >= targetProgress) {
            progress = targetProgress;
            clearInterval(progressInterval);
            
            // Update final count
            if (countText) {
                countText.textContent = '100';
            }
            
            // Hide loader immediately after reaching 100%
            setTimeout(() => {
                hideLoader();
            }, 200); // Reduced delay
        } else {
            // Update progress count
            if (countText) {
                countText.textContent = Math.floor(progress);
            }
        }
    }, interval);
    
    // Function to hide loader with smooth transition
    function hideLoader() {
        loader.style.opacity = '0';
        loader.style.transition = 'opacity 0.3s ease-out'; // Faster transition
        
        setTimeout(() => {
            loader.style.display = 'none';
            loader.classList.add('loaded');
            document.body.classList.add('loaded');
            
            // Trigger page animations
            triggerPageAnimations();
        }, 300);
    }
    
    // Function to trigger page animations
    function triggerPageAnimations() {
        const loadingItems = document.querySelectorAll('.loading__item');
        const fadeItems = document.querySelectorAll('.loading__fade');
        
        // Animate loading items
        loadingItems.forEach((item, index) => {
            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }, index * 50); // Staggered animation
        });
        
        // Animate fade items
        fadeItems.forEach((item, index) => {
            setTimeout(() => {
                item.style.opacity = '1';
            }, index * 30);
        });
    }
});

// Preload critical resources for faster loading
function preloadCriticalResources() {
    const criticalImages = [
        'img/m/pixnova-17c359eb3251dffd9745adc1c7ecb4de.jpg', // Hero video poster
        'img/m/pixnova-0c43c64148b6668dca6e62e00bea1b08.jpg', // Hero image
        'img/m/pixnova-188fc416f6a4594d4d6542e31433b73c.jpg'  // Eye icon
    ];
    
    criticalImages.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

// Start preloading immediately
preloadCriticalResources();

// Fallback: Hide loader after maximum time (reduced from 5s to 2s)
setTimeout(() => {
    const loader = document.getElementById('loader');
    if (loader && loader.style.display !== 'none') {
        loader.style.opacity = '0';
        loader.style.transition = 'opacity 0.3s ease-out';
        setTimeout(() => {
            loader.style.display = 'none';
            loader.classList.add('loaded');
            document.body.classList.add('loaded');
        }, 300);
    }
}, 2000); // Reduced maximum wait time

