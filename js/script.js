/* 
  Project Name: Modern Developer Portfolio
  JS File: script.js
  Description: Interactive logic for the portfolio website.
*/

document.addEventListener('DOMContentLoaded', () => {
    // 1. Dark Mode Toggle
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const themeIcon = themeToggle.querySelector('i');

    const toggleTheme = () => {
        const isDark = body.getAttribute('data-theme') === 'dark';
        if (isDark) {
            body.removeAttribute('data-theme');
            themeIcon.className = 'fas fa-moon';
            localStorage.setItem('theme', 'light');
        } else {
            body.setAttribute('data-theme', 'dark');
            themeIcon.className = 'fas fa-sun';
            localStorage.setItem('theme', 'dark');
        }
    };

    themeToggle.addEventListener('click', toggleTheme);

    // Check Local Storage for Theme
    if (localStorage.getItem('theme') === 'dark') {
        body.setAttribute('data-theme', 'dark');
        themeIcon.className = 'fas fa-sun';
    }

    // 2. Mobile Navbar Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        // Animate hamburger
        const spans = hamburger.querySelectorAll('span');
        spans[0].style.transform = navLinks.classList.contains('active') ? 'rotate(45deg) translate(5px, 5px)' : 'none';
        spans[1].style.opacity = navLinks.classList.contains('active') ? '0' : '1';
        spans[2].style.transform = navLinks.classList.contains('active') ? 'rotate(-45deg) translate(7px, -6px)' : 'none';
    });

    // 3. Animated Typing Effect (Only on Home Page)
    const typingElement = document.querySelector('.typing-text');
    if (typingElement) {
        const textToType = typingElement.getAttribute('data-text');
        let index = 0;
        const type = () => {
            if (index < textToType.length) {
                typingElement.textContent += textToType.charAt(index);
                index++;
                setTimeout(type, 100);
            }
        };
        type();
    }

    // 4. Back-to-top Button
    const backToTopBtn = document.getElementById('back-to-top');
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // 5. Skills Progress Bar Animation (Only on About Page)
    const skillBars = document.querySelectorAll('.progress');
    if (skillBars.length > 0) {
        const animateSkills = () => {
            skillBars.forEach(bar => {
                const targetWidth = bar.getAttribute('data-width');
                bar.style.width = targetWidth + '%';
            });
        };

        // Trigger on scroll or immediate if visible
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                animateSkills();
            }
        }, { threshold: 0.5 });

        const skillsSection = document.querySelector('.skills-section');
        if (skillsSection) observer.observe(skillsSection);
    }

    // 6. Project Filtering (Only on Projects Page)
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    if (filterBtns.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active class from all buttons
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const filter = btn.getAttribute('data-filter');

                projectCards.forEach(card => {
                    if (filter === 'all' || card.getAttribute('data-category') === filter) {
                        card.style.display = 'block';
                        setTimeout(() => card.style.opacity = '1', 50);
                    } else {
                        card.style.opacity = '0';
                        setTimeout(() => card.style.display = 'none', 300);
                    }
                });
            });
        });
    }

    // 7. Contact Form Validation
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            let isValid = true;
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const message = document.getElementById('message');
            const successMsg = document.getElementById('success-message');

            // Email Regex
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            // Name Validation
            if (name.value.trim().length < 2) {
                name.parentElement.classList.add('invalid');
                isValid = false;
            } else {
                name.parentElement.classList.remove('invalid');
            }

            // Email Validation
            if (!emailRegex.test(email.value)) {
                email.parentElement.classList.add('invalid');
                isValid = false;
            } else {
                email.parentElement.classList.remove('invalid');
            }

            // Message Validation
            if (message.value.trim().length < 10) {
                message.parentElement.classList.add('invalid');
                isValid = false;
            } else {
                message.parentElement.classList.remove('invalid');
            }

            if (isValid) {
                // Show success message
                successMsg.style.display = 'block';
                contactForm.reset();
                setTimeout(() => {
                    successMsg.style.display = 'none';
                }, 5000);
            }
        });

        // Real-time validation feedback
        contactForm.querySelectorAll('input, textarea').forEach(input => {
            input.addEventListener('input', () => {
                if (input.parentElement.classList.contains('invalid')) {
                    input.parentElement.classList.remove('invalid');
                }
            });
        });
    }
});
