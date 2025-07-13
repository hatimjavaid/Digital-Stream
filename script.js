// ===== DIGITAL STREAM WEBSITE JAVASCRIPT =====

// Global variables
let chatbotOpen = false;
let chatHistory = [];

// ===== DOM CONTENT LOADED =====
document.addEventListener('DOMContentLoaded', function() {
    initializeWebsite();
});

// ===== MAIN INITIALIZATION =====
function initializeWebsite() {
    initMobileNavigation();
    initSmoothScrolling();
    initChatbot();
    initWhatsAppButton();
    initFilterTabs();
    initScrollAnimations();
    initFormHandling();
    initScrollToTop();
    updateLastModified();
}

// ===== MOBILE NAVIGATION =====
function initMobileNavigation() {
    const mobileToggle = document.querySelector('.mobile-toggle');
    const nav = document.querySelector('.nav');
    
    if (mobileToggle && nav) {
        mobileToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
            mobileToggle.classList.toggle('active');
            
            // Animate hamburger menu
            const spans = mobileToggle.querySelectorAll('span');
            spans.forEach((span, index) => {
                if (mobileToggle.classList.contains('active')) {
                    if (index === 0) span.style.transform = 'rotate(45deg) translate(5px, 5px)';
                    if (index === 1) span.style.opacity = '0';
                    if (index === 2) span.style.transform = 'rotate(-45deg) translate(7px, -6px)';
                } else {
                    span.style.transform = '';
                    span.style.opacity = '';
                }
            });
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!nav.contains(e.target) && !mobileToggle.contains(e.target)) {
                nav.classList.remove('active');
                mobileToggle.classList.remove('active');
                
                const spans = mobileToggle.querySelectorAll('span');
                spans.forEach(span => {
                    span.style.transform = '';
                    span.style.opacity = '';
                });
            }
        });
    }
}

// ===== SMOOTH SCROLLING =====
function initSmoothScrolling() {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ===== CHATBOT FUNCTIONALITY =====
function initChatbot() {
    const chatbotToggle = document.getElementById('chatbot-toggle');
    const chatbotPopup = document.getElementById('chatbot-popup');
    const chatbotClose = document.getElementById('chatbot-close');
    const chatbotSend = document.getElementById('chatbot-send');
    const chatbotInput = document.getElementById('chatbot-input');
    const chatbotMessages = document.getElementById('chatbot-messages');
    
    if (chatbotToggle && chatbotPopup) {
        // Toggle chatbot
        chatbotToggle.addEventListener('click', function() {
            toggleChatbot();
        });
        
        // Close chatbot
        if (chatbotClose) {
            chatbotClose.addEventListener('click', function() {
                closeChatbot();
            });
        }
        
        // Send message
        if (chatbotSend && chatbotInput) {
            chatbotSend.addEventListener('click', function() {
                sendChatMessage();
            });
            
            chatbotInput.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    sendChatMessage();
                }
            });
        }
    }
}

function toggleChatbot() {
    const chatbotPopup = document.getElementById('chatbot-popup');
    chatbotOpen = !chatbotOpen;
    
    if (chatbotOpen) {
        chatbotPopup.classList.add('active');
        chatbotPopup.style.display = 'flex';
    } else {
        chatbotPopup.classList.remove('active');
        setTimeout(() => {
            chatbotPopup.style.display = 'none';
        }, 300);
    }
}

function closeChatbot() {
    const chatbotPopup = document.getElementById('chatbot-popup');
    chatbotOpen = false;
    chatbotPopup.classList.remove('active');
    setTimeout(() => {
        chatbotPopup.style.display = 'none';
    }, 300);
}

function sendChatMessage() {
    const chatbotInput = document.getElementById('chatbot-input');
    const message = chatbotInput.value.trim();
    
    if (message) {
        addMessageToChat('user', message);
        chatbotInput.value = '';
        
        // Show typing indicator
        showTypingIndicator();
        
        // Send to OpenRouter API (simulated for now)
        setTimeout(() => {
            hideTypingIndicator();
            handleChatbotResponse(message);
        }, 1500);
    }
}

function addMessageToChat(sender, message) {
    const chatbotMessages = document.getElementById('chatbot-messages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}-message`;
    
    const messageP = document.createElement('p');
    messageP.textContent = message;
    messageDiv.appendChild(messageP);
    
    chatbotMessages.appendChild(messageDiv);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    
    // Add to chat history
    chatHistory.push({ sender, message, timestamp: new Date() });
}

function showTypingIndicator() {
    const chatbotMessages = document.getElementById('chatbot-messages');
    const typingDiv = document.createElement('div');
    typingDiv.className = 'message bot-message typing-indicator';
    typingDiv.innerHTML = '<p>Digital Stream Assistant is typing...</p>';
    chatbotMessages.appendChild(typingDiv);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

function hideTypingIndicator() {
    const typingIndicator = document.querySelector('.typing-indicator');
    if (typingIndicator) {
        typingIndicator.remove();
    }
}

function handleChatbotResponse(userMessage) {
    // Simulate OpenRouter Deepseek R1 API response
    // In a real implementation, you would make an API call here
    let response = generateChatbotResponse(userMessage);
    addMessageToChat('bot', response);
}

function generateChatbotResponse(userMessage) {
    const message = userMessage.toLowerCase();
    
    // Simple response logic (replace with actual API call)
    if (message.includes('hello') || message.includes('hi')) {
        return "Hello! Welcome to Digital Stream. How can I help you today?";
    } else if (message.includes('premium') || message.includes('account')) {
        return "We offer free access to premium accounts for Netflix, Spotify, Adobe, and more! Check out our Premium Accounts page for the latest offerings.";
    } else if (message.includes('ebook') || message.includes('book')) {
        return "Our ebooks section has premium programming, business, and design books available for free download. What topic are you interested in?";
    } else if (message.includes('game') || message.includes('gaming')) {
        return "We have a great collection of premium games for PC, mobile, and console. Visit our Games page to see what's available!";
    } else if (message.includes('course') || message.includes('learn')) {
        return "Our courses section offers premium programming, web development, and data science courses. Perfect for skill development!";
    } else if (message.includes('coupon') || message.includes('discount')) {
        return "Check out our Coupons page for the latest discount codes and promotional offers from various platforms.";
    } else if (message.includes('tool') || message.includes('software')) {
        return "We provide access to premium development tools, design software, and productivity applications. Visit our Tools page!";
    } else if (message.includes('hack') || message.includes('security')) {
        return "Our Ethical Hacking section has cybersecurity resources, penetration testing tools, and security tutorials.";
    } else if (message.includes('tip') || message.includes('trick')) {
        return "Our Tips & Tricks page has computer shortcuts, productivity hacks, and useful tech tips to boost your efficiency!";
    } else if (message.includes('contact') || message.includes('support')) {
        return "You can contact us through our Contact page, join our WhatsApp channel, or follow us on social media for support and updates.";
    } else if (message.includes('free') || message.includes('cost')) {
        return "Yes! Everything on Digital Stream is completely free. We believe in democratizing access to premium digital content and tools.";
    } else {
        return "Thanks for your message! I'm here to help you navigate Digital Stream and find the resources you need. Feel free to ask about our premium accounts, ebooks, games, courses, or any other content we offer.";
    }
}

// ===== WHATSAPP BUTTON =====
function initWhatsAppButton() {
    const whatsappLink = document.getElementById('whatsapp-link');
    
    if (whatsappLink) {
        // Set WhatsApp channel URL (replace with actual URL)
        const whatsappChannelURL = 'https://chat.whatsapp.com/YOUR_CHANNEL_INVITE_LINK';
        whatsappLink.href = whatsappChannelURL;
        
        // Add click tracking
        whatsappLink.addEventListener('click', function() {
            // Track WhatsApp button clicks (analytics)
            console.log('WhatsApp channel button clicked');
        });
    }
}

// ===== FILTER TABS =====
function initFilterTabs() {
    const filterTabs = document.querySelectorAll('.filter-tab');
    const contentCards = document.querySelectorAll('.content-card');
    
    if (filterTabs.length > 0) {
        filterTabs.forEach(tab => {
            tab.addEventListener('click', function() {
                const category = this.getAttribute('data-category') || this.getAttribute('data-platform');
                
                // Update active tab
                filterTabs.forEach(t => t.classList.remove('active'));
                this.classList.add('active');
                
                // Filter content
                filterContent(category, contentCards);
            });
        });
    }
}

function filterContent(category, cards) {
    cards.forEach(card => {
        const cardCategory = card.getAttribute('data-category') || card.getAttribute('data-platform');
        
        if (category === 'all' || cardCategory === category) {
            card.style.display = 'block';
            card.style.animation = 'fadeInUp 0.5s ease forwards';
        } else {
            card.style.display = 'none';
        }
    });
}

// ===== SCROLL ANIMATIONS =====
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            }
        });
    }, observerOptions);
    
    // Observe elements for scroll animations
    const animatedElements = document.querySelectorAll('.category-card, .content-card, .feature-item, .mission-card, .value-item');
    animatedElements.forEach(el => {
        el.classList.add('scroll-reveal');
        observer.observe(el);
    });
}

// ===== FORM HANDLING =====
function initFormHandling() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleContactForm();
        });
    }
    
    // Copy coupon codes
    const copyButtons = document.querySelectorAll('.btn[data-copy]');
    copyButtons.forEach(button => {
        button.addEventListener('click', function() {
            const code = this.getAttribute('data-copy');
            copyToClipboard(code);
            showNotification('Coupon code copied to clipboard!');
        });
    });
}

function handleContactForm() {
    const form = document.getElementById('contact-form');
    const formData = new FormData(form);
    
    // Show loading state
    const submitButton = form.querySelector('button[type="submit"]');
    const originalText = submitButton.innerHTML;
    submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitButton.disabled = true;
    
    // Simulate form submission (replace with actual form handling)
    setTimeout(() => {
        submitButton.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
        submitButton.style.background = '#10b981';
        
        setTimeout(() => {
            submitButton.innerHTML = originalText;
            submitButton.disabled = false;
            submitButton.style.background = '';
            form.reset();
            showNotification('Thank you for your message! We\'ll get back to you soon.');
        }, 2000);
    }, 2000);
}

function copyToClipboard(text) {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text);
    } else {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
    }
}

function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-check-circle"></i>
            <span>${message}</span>
        </div>
    `;
    
    // Add notification styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #10b981;
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 20px rgba(16, 185, 129, 0.3);
        z-index: 10000;
        animation: slideInRight 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// ===== SCROLL TO TOP =====
function initScrollToTop() {
    // Create scroll to top button
    const scrollTopButton = document.createElement('button');
    scrollTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollTopButton.className = 'scroll-top-button';
    scrollTopButton.style.cssText = `
        position: fixed;
        bottom: 100px;
        right: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        border: none;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 999;
        box-shadow: 0 4px 20px rgba(102, 126, 234, 0.3);
    `;
    
    document.body.appendChild(scrollTopButton);
    
    // Show/hide scroll to top button
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollTopButton.style.opacity = '1';
            scrollTopButton.style.visibility = 'visible';
        } else {
            scrollTopButton.style.opacity = '0';
            scrollTopButton.style.visibility = 'hidden';
        }
    });
    
    // Scroll to top functionality
    scrollTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ===== UTILITY FUNCTIONS =====
function updateLastModified() {
    const lastUpdatedElement = document.getElementById('last-updated');
    if (lastUpdatedElement) {
        const now = new Date();
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        lastUpdatedElement.textContent = now.toLocaleDateString('en-US', options);
    }
}

// ===== HEADER SCROLL EFFECT =====
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.pageYOffset > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = 'none';
    }
});

// ===== PERFORMANCE OPTIMIZATION =====
// Debounce function for scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for resize events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// ===== KEYBOARD NAVIGATION =====
document.addEventListener('keydown', function(e) {
    // ESC key closes chatbot
    if (e.key === 'Escape' && chatbotOpen) {
        closeChatbot();
    }
    
    // Enter key in search or input fields
    if (e.key === 'Enter' && e.target.matches('input[type="search"]')) {
        e.preventDefault();
        // Handle search functionality if needed
    }
});

// ===== ERROR HANDLING =====
window.addEventListener('error', function(e) {
    console.error('JavaScript error:', e.error);
    // You could send error reports to an analytics service here
});

// ===== ANALYTICS TRACKING =====
function trackEvent(category, action, label) {
    // Placeholder for analytics tracking
    console.log('Event tracked:', { category, action, label });
    
    // Example: Google Analytics 4
    // gtag('event', action, {
    //     event_category: category,
    //     event_label: label
    // });
}

// Track page views
function trackPageView() {
    const page = window.location.pathname;
    trackEvent('Navigation', 'page_view', page);
}

// Track downloads
document.addEventListener('click', function(e) {
    if (e.target.matches('.btn[href*="download"], .btn:contains("Download")')) {
        trackEvent('Content', 'download', e.target.textContent);
    }
});

// ===== SOCIAL MEDIA INTEGRATION =====
function shareOnSocial(platform, url, text) {
    const shareUrls = {
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
        twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`,
        linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
        whatsapp: `https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`
    };
    
    if (shareUrls[platform]) {
        window.open(shareUrls[platform], '_blank', 'width=600,height=400');
    }
}

// ===== LAZY LOADING =====
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// ===== DARK MODE TOGGLE (Optional) =====
function initDarkMode() {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    if (darkModeToggle) {
        const isDarkMode = localStorage.getItem('darkMode') === 'true';
        
        if (isDarkMode) {
            document.body.classList.add('dark-mode');
        }
        
        darkModeToggle.addEventListener('click', function() {
            document.body.classList.toggle('dark-mode');
            const isDark = document.body.classList.contains('dark-mode');
            localStorage.setItem('darkMode', isDark);
        });
    }
}

// ===== INITIALIZATION COMPLETE =====
console.log('Digital Stream website initialized successfully!');

// Track initial page load
trackPageView();

