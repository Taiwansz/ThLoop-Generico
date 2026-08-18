// Interactive & Ultra-Responsive Mobile Scripts for ThLoop

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Lucide Icons
  if (window.lucide) {
    lucide.createIcons();
  }

  // 2. Mobile Drawer Navigation & Icon Toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isHidden = mobileMenu.classList.contains('hidden');
      if (isHidden) {
        mobileMenu.classList.remove('hidden');
        mobileMenuBtn.innerHTML = `<i data-lucide="x" class="w-6 h-6"></i>`;
      } else {
        mobileMenu.classList.add('hidden');
        mobileMenuBtn.innerHTML = `<i data-lucide="menu" class="w-6 h-6"></i>`;
      }
      if (window.lucide) lucide.createIcons();
    });

    // Close mobile menu when clicking outside or clicking any nav link
    document.addEventListener('click', (e) => {
      if (!mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
        if (!mobileMenu.classList.contains('hidden')) {
          mobileMenu.classList.add('hidden');
          mobileMenuBtn.innerHTML = `<i data-lucide="menu" class="w-6 h-6"></i>`;
          if (window.lucide) lucide.createIcons();
        }
      }
    });

    mobileMenu.querySelectorAll('a, button').forEach(item => {
      item.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        mobileMenuBtn.innerHTML = `<i data-lucide="menu" class="w-6 h-6"></i>`;
        if (window.lucide) lucide.createIcons();
      });
    });
  }

  // 3. Header background shadow on scroll
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      navbar.classList.add('shadow-2xl', 'bg-opacity-95');
    } else {
      navbar.classList.remove('shadow-2xl', 'bg-opacity-95');
    }
  });

  // 4. Theme Toggler (Dark / Light)
  const themeToggleBtn = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      document.body.classList.toggle('light-theme');
      const isLight = document.body.classList.contains('light-theme');
      if (themeIcon) {
        themeIcon.setAttribute('data-lucide', isLight ? 'moon' : 'sun');
        if (window.lucide) lucide.createIcons();
      }
    });
  }

  // 5. Animated Counter Stats
  const statElements = document.querySelectorAll('.counter-stat');
  let animated = false;

  const startCounters = () => {
    statElements.forEach(counter => {
      const target = parseFloat(counter.getAttribute('data-target'));
      const prefix = counter.getAttribute('data-prefix') || '';
      const suffix = counter.getAttribute('data-suffix') || '';
      const decimals = parseInt(counter.getAttribute('data-decimals') || '0', 10);
      let current = 0;
      const duration = 1800;
      const stepTime = 20;
      const totalSteps = duration / stepTime;
      const increment = target / totalSteps;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        counter.textContent = prefix + current.toFixed(decimals) + suffix;
      }, stepTime);
    });
  };

  const statsSection = document.getElementById('sobre');
  if (statsSection) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !animated) {
          animated = true;
          startCounters();
        }
      });
    }, { threshold: 0.15 });

    observer.observe(statsSection);
  }

  // 6. Interactive Services Filter
  const filterBtns = document.querySelectorAll('.filter-btn');
  const serviceCards = document.querySelectorAll('.service-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active', 'bg-cyan-500/20', 'text-cyan-400', 'border-cyan-500'));
      filterBtns.forEach(b => b.classList.add('bg-white/5', 'text-gray-300'));

      btn.classList.add('active', 'bg-cyan-500/20', 'text-cyan-400', 'border-cyan-500');
      btn.classList.remove('bg-white/5', 'text-gray-300');

      const filter = btn.getAttribute('data-filter');

      serviceCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'block';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'scale(1)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'scale(0.95)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 250);
        }
      });
    });
  });

  // 7. Interactive ROI & Efficiency Calculator
  const teamSizeInput = document.getElementById('calc-team-size');
  const teamSizeVal = document.getElementById('calc-team-val');
  const hoursInput = document.getElementById('calc-hours');
  const hoursVal = document.getElementById('calc-hours-val');
  const resHoursSaved = document.getElementById('calc-res-hours');
  const resCostSaved = document.getElementById('calc-res-cost');

  const calculateEfficiency = () => {
    if (!teamSizeInput || !hoursInput) return;
    const team = parseInt(teamSizeInput.value, 10);
    const hours = parseInt(hoursInput.value, 10);

    if (teamSizeVal) teamSizeVal.textContent = team + ' pessoas';
    if (hoursVal) hoursVal.textContent = hours + 'h / sem.';

    const totalWeeklyHours = team * hours;
    const monthlyHoursSaved = Math.round(totalWeeklyHours * 4.33 * 0.65);
    const monthlySavings = Math.round(monthlyHoursSaved * 75);

    if (resHoursSaved) resHoursSaved.textContent = monthlyHoursSaved.toLocaleString('pt-BR') + ' hrs';
    if (resCostSaved) resCostSaved.textContent = 'R$ ' + monthlySavings.toLocaleString('pt-BR');
  };

  if (teamSizeInput && hoursInput) {
    teamSizeInput.addEventListener('input', calculateEfficiency);
    hoursInput.addEventListener('input', calculateEfficiency);
    calculateEfficiency();
  }

  // 8. Modal Handler (Esc Key + Backdrop Click)
  const modalOverlay = document.getElementById('modal-demo');
  const modalOpenBtns = document.querySelectorAll('.open-modal-btn');
  const modalCloseBtn = document.getElementById('close-modal-btn');

  modalOpenBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (modalOverlay) {
        modalOverlay.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  const closeModal = () => {
    if (modalOverlay) {
      modalOverlay.classList.add('hidden');
      document.body.style.overflow = '';
    }
  };

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
  }

  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeModal();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !modalOverlay.classList.contains('hidden')) {
        closeModal();
      }
    });
  }

  // 9. Toast Notification System
  const contactForm = document.getElementById('contact-form');
  const modalForm = document.getElementById('modal-form');

  const showToast = (message) => {
    const toast = document.createElement('div');
    toast.className = 'fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-5 py-3.5 rounded-2xl shadow-2xl z-50 flex items-center space-x-3 transition-all transform translate-y-10 opacity-0 text-sm font-medium';
    toast.innerHTML = `
      <svg class="w-5 h-5 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
      </svg>
      <span>${message}</span>
    `;
    document.body.appendChild(toast);

    setTimeout(() => {
      toast.classList.remove('translate-y-10', 'opacity-0');
    }, 50);

    setTimeout(() => {
      toast.classList.add('translate-y-10', 'opacity-0');
      setTimeout(() => toast.remove(), 350);
    }, 4000);
  };

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      showToast('Obrigado! Sua mensagem foi enviada. A equipe ThLoop entrará em contato em breve.');
      contactForm.reset();
    });
  }

  if (modalForm) {
    modalForm.addEventListener('submit', (e) => {
      e.preventDefault();
      closeModal();
      showToast('Demonstração agendada com sucesso! Um especialista da ThLoop enviará o convite.');
      modalForm.reset();
    });
  }

  // 10. Responsive Canvas Particles in Hero
  const canvas = document.getElementById('hero-canvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let width = (canvas.width = canvas.parentElement.offsetWidth);
    let height = (canvas.height = canvas.parentElement.offsetHeight);

    const resizeCanvas = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
    };

    window.addEventListener('resize', resizeCanvas);

    const particles = [];
    const isMobile = window.innerWidth < 640;
    const numParticles = isMobile ? 25 : 45;

    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.7,
        vy: (Math.random() - 0.5) * 0.7,
        radius: Math.random() * 2 + 1,
        color: Math.random() > 0.5 ? 'rgba(0, 242, 254, ' : 'rgba(79, 172, 254, '
      });
    }

    const animateParticles = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < numParticles; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color + '0.6)';
        ctx.fill();

        for (let j = i + 1; j < numParticles; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          const maxDist = isMobile ? 80 : 120;
          if (dist < maxDist) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(0, 242, 254, ${0.15 * (1 - dist / maxDist)})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }
      requestAnimationFrame(animateParticles);
    };
    animateParticles();
  }
});
