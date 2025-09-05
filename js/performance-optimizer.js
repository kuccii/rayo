// Performance Optimizer for Kilitek Website
// Additional optimizations for faster loading and better user experience

(function() {
    'use strict';
    
    // Optimize images loading
    function optimizeImages() {
        const images = document.querySelectorAll('img[src*="img/m/"]');
        
        images.forEach(img => {
            // Add loading="lazy" for images below the fold
            if (!img.hasAttribute('loading')) {
                img.setAttribute('loading', 'lazy');
            }
            
            // Add decoding="async" for better performance
            if (!img.hasAttribute('decoding')) {
                img.setAttribute('decoding', 'async');
            }
        });
    }
    
    // Optimize video loading
    function optimizeVideos() {
        const videos = document.querySelectorAll('video');
        
        videos.forEach(video => {
            // Add preload="metadata" for better performance
            if (!video.hasAttribute('preload')) {
                video.setAttribute('preload', 'metadata');
            }
            
            // Add playsinline for mobile
            if (!video.hasAttribute('playsinline')) {
                video.setAttribute('playsinline', '');
            }
        });
    }
    
    // Optimize CSS loading
    function optimizeCSS() {
        // Add critical CSS inline for above-the-fold content
        const criticalCSS = `
            .loader { position: fixed; top: 0; right: 0; bottom: 0; left: 0; z-index: 1000; background: #FAF7F6; }
            .loader__wrapper { position: absolute; top: 0; width: 100%; height: 100%; display: flex; justify-content: center; align-items: center; }
            .loader__content { position: absolute; left: 50%; top: 50%; transform: translateX(-50%) translateY(-50%); }
            .loader__count { display: flex; justify-content: center; align-items: center; }
            .loader__count span { font-family: "Funnel Display", sans-serif; font-weight: 600; font-size: 4rem; color: #161616; }
        `;
        
        const style = document.createElement('style');
        style.textContent = criticalCSS;
        document.head.insertBefore(style, document.head.firstChild);
    }
    
    // Optimize JavaScript loading
    function optimizeJS() {
        // Defer non-critical JavaScript
        const scripts = document.querySelectorAll('script[src*="app.min.js"]');
        scripts.forEach(script => {
            if (!script.hasAttribute('defer')) {
                script.setAttribute('defer', '');
            }
        });
    }
    
    // Optimize fonts loading
    function optimizeFonts() {
        // Preload critical fonts
        const fontPreloads = [
            'https://fonts.googleapis.com/css2?family=Funnel+Display:wght@300;400;500;600;700;800&display=swap',
            'https://fonts.googleapis.com/css2?family=Funnel+Sans:wght@300;400;500;600;700;800&display=swap'
        ];
        
        fontPreloads.forEach(fontUrl => {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.href = fontUrl;
            link.as = 'style';
            link.onload = function() {
                this.rel = 'stylesheet';
            };
            document.head.appendChild(link);
        });
    }
    
    // Optimize animations for better performance
    function optimizeAnimations() {
        // Use requestAnimationFrame for smoother animations
        const animateElements = document.querySelectorAll('.loading__item, .loading__fade');
        
        animateElements.forEach(element => {
            element.style.willChange = 'transform, opacity';
        });
    }
    
    // Initialize optimizations
    function init() {
        // Run optimizations immediately
        optimizeImages();
        optimizeVideos();
        optimizeCSS();
        optimizeJS();
        optimizeFonts();
        optimizeAnimations();
        
        // Run additional optimizations after DOM is ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', function() {
                optimizeImages();
                optimizeVideos();
                optimizeAnimations();
            });
        }
    }
    
    // Start optimizations
    init();
    
    // Export for external use
    window.KilitekOptimizer = {
        optimizeImages,
        optimizeVideos,
        optimizeCSS,
        optimizeJS,
        optimizeFonts,
        optimizeAnimations
    };
})();

