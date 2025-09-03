// Loader Fix for Kilitek Website
// Ensures loader works properly and hides after page load

document.addEventListener('DOMContentLoaded', function() {
    const loader = document.getElementById('loader');
    const countText = document.querySelector('.count__text');
    
    if (!loader) return;
    
    let progress = 0;
    const interval = setInterval(() => {
        progress += Math.random() * 15;
        if (progress >= 100) {
            progress = 100;
            clearInterval(interval);
            
            // Update final count
            if (countText) {
                countText.textContent = '100';
            }
            
            // Hide loader after a brief delay
            setTimeout(() => {
                loader.style.opacity = '0';
                loader.style.transition = 'opacity 0.5s ease-out';
                
                setTimeout(() => {
                    loader.style.display = 'none';
                    // Trigger any loading animations
                    document.body.classList.add('loaded');
                }, 500);
            }, 300);
        } else {
            // Update progress count
            if (countText) {
                countText.textContent = Math.floor(progress);
            }
        }
    }, 50);
});

// Fallback: Hide loader after maximum time
setTimeout(() => {
    const loader = document.getElementById('loader');
    if (loader && loader.style.display !== 'none') {
        loader.style.opacity = '0';
        loader.style.transition = 'opacity 0.5s ease-out';
        setTimeout(() => {
            loader.style.display = 'none';
            document.body.classList.add('loaded');
        }, 500);
    }
}, 5000); // 5 second maximum
