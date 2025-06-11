        // Hamburger Menu Toggle
        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');

        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Close mobile menu when clicking a nav link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });

        // Header Scroll Effect
        const header = document.querySelector('header');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });

        // Testimonial Slider
        const testimonialsContainer = document.querySelector('.testimonials-container');
        const prevBtn = document.querySelector('.prev-btn');
        const nextBtn = document.querySelector('.next-btn');
        let currentSlide = 0;
        const totalSlides = document.querySelectorAll('.testimonial').length;

        function updateSlider() {
            testimonialsContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
        }

        prevBtn.addEventListener('click', () => {
            currentSlide = (currentSlide === 0) ? totalSlides - 1 : currentSlide - 1;
            updateSlider();
        });

        nextBtn.addEventListener('click', () => {
            currentSlide = (currentSlide === totalSlides - 1) ? 0 : currentSlide + 1;
            updateSlider();
        });

        // Auto-advance testimonials
        setInterval(() => {
            currentSlide = (currentSlide === totalSlides - 1) ? 0 : currentSlide + 1;
            updateSlider();
        }, 5000);

        // Newsletter Form Submission
        const newsletterForm = document.querySelector('.newsletter-form');
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = newsletterForm.querySelector('input').value;
            alert(`Thank you for subscribing with: ${email}`);
            newsletterForm.reset();
        });

        // Contact Form Submission
        const contactForm = document.querySelector('.contact-form form');
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value;
            alert(`Thank you, ${name}! Your message has been sent. We'll get back to you shortly.`);
            contactForm.reset();
        });

        // Scroll Animation for Elements
        const fadeElements = document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right, .section-title');

        const fadeInOptions = {
            threshold: 0.2,
            rootMargin: '0px 0px -100px 0px'
        };

        const fadeInObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, fadeInOptions);

        fadeElements.forEach(element => {
            fadeInObserver.observe(element);
        });