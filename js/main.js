(function () {
  'use strict';

  var root = document.documentElement;
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function store(key, value) {
    try {
      if (value === undefined) return localStorage.getItem(key);
      localStorage.setItem(key, value);
    } catch (e) {
      return null;
    }
  }

  /* Theme toggle */
  var themeBtn = document.querySelector('.theme-toggle');
  function labelTheme() {
    var next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    themeBtn.setAttribute('aria-label', 'Switch to ' + next + ' theme');
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', root.dataset.theme === 'dark' ? '#0b0d12' : '#f7f7fb');
  }
  if (themeBtn) {
    labelTheme();
    themeBtn.addEventListener('click', function () {
      root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
      store('theme', root.dataset.theme);
      labelTheme();
    });
  }

  /* Mobile navigation */
  var navToggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');
  function setNav(open) {
    document.body.classList.toggle('nav-open', open);
    navToggle.setAttribute('aria-expanded', String(open));
    navToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  }
  if (navToggle && nav) {
    navToggle.addEventListener('click', function () {
      setNav(!document.body.classList.contains('nav-open'));
    });
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) setNav(false);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && document.body.classList.contains('nav-open')) {
        setNav(false);
        navToggle.focus();
      }
    });
    window.addEventListener('resize', function () {
      if (window.innerWidth > 760) setNav(false);
    });
  }

  /* Header background once the page scrolls */
  var header = document.querySelector('.site-header');
  function onScroll() {
    header.classList.toggle('is-scrolled', window.scrollY > 10);
  }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* Highlight the nav link for the section in view */
  var navLinks = Array.prototype.slice.call(document.querySelectorAll('.nav a[href^="#"]'));
  if ('IntersectionObserver' in window && navLinks.length) {
    var sectionObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        navLinks.forEach(function (link) {
          var active = link.getAttribute('href') === '#' + entry.target.id;
          link.classList.toggle('is-active', active);
          if (active) link.setAttribute('aria-current', 'true');
          else link.removeAttribute('aria-current');
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    document.querySelectorAll('main section[id]').forEach(function (s) { sectionObserver.observe(s); });
  }

  /* Reveal elements as they scroll into view */
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !reduceMotion) {
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    revealEls.forEach(function (el, i) {
      // Small stagger for siblings that appear together
      var siblings = el.parentElement ? el.parentElement.querySelectorAll(':scope > .reveal') : [];
      var index = Array.prototype.indexOf.call(siblings, el);
      el.style.transitionDelay = Math.min(Math.max(index, 0), 6) * 70 + 'ms';
      revealObserver.observe(el);
    });
  } else {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  }

  /* Rotating role text in the hero */
  var rotator = document.querySelector('.role-rotator');
  if (rotator && !reduceMotion) {
    var roles = [];
    try { roles = JSON.parse(rotator.dataset.roles || '[]'); } catch (e) {}
    if (roles.length > 1) {
      var roleIndex = 0, charIndex = roles[0].length, deleting = true;
      rotator.setAttribute('aria-live', 'off');
      var tick = function () {
        var word = roles[roleIndex];
        if (deleting) {
          charIndex--;
          if (charIndex <= 0) {
            deleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
          }
        } else {
          charIndex++;
        }
        word = roles[roleIndex];
        rotator.textContent = word.slice(0, charIndex) || '​';
        var delay = deleting ? 40 : 80;
        if (!deleting && charIndex >= word.length) {
          deleting = true;
          delay = 2200;
        }
        setTimeout(tick, delay);
      };
      setTimeout(tick, 2600);
    }
  }

  /* Project filters */
  var filters = document.querySelectorAll('.filter');
  var projects = document.querySelectorAll('.project');
  filters.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var value = btn.dataset.filter;
      filters.forEach(function (b) {
        var on = b === btn;
        b.classList.toggle('is-active', on);
        b.setAttribute('aria-pressed', String(on));
      });
      projects.forEach(function (card) {
        var cats = (card.dataset.category || '').split(/\s+/);
        var show = value === 'all' || cats.indexOf(value) !== -1;
        card.hidden = !show;
        if (show) card.classList.add('is-visible');
      });
    });
  });

  /* Contact form: validates, then opens the visitor's email app */
  var form = document.querySelector('.contact-form');
  if (form) {
    var status = form.querySelector('.form-status');
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var firstInvalid = null;
      Array.prototype.forEach.call(form.elements, function (field) {
        if (!field.name) return;
        var valid = field.checkValidity() && field.value.trim() !== '';
        field.setAttribute('aria-invalid', String(!valid));
        if (!valid && !firstInvalid) firstInvalid = field;
      });
      if (firstInvalid) {
        status.textContent = 'Please fill in every field with a valid email address.';
        status.classList.add('is-error');
        firstInvalid.focus();
        return;
      }
      status.classList.remove('is-error');

      var name = form.elements.name.value.trim();
      var email = form.elements.email.value.trim();
      var message = form.elements.message.value.trim();
      var subject = encodeURIComponent('Portfolio enquiry from ' + name);
      var body = encodeURIComponent(message + '\n\n— ' + name + ' (' + email + ')');
      window.location.href = 'mailto:' + form.dataset.email + '?subject=' + subject + '&body=' + body;
      status.textContent = 'Opening your email app… If nothing happens, email me directly at ' + form.dataset.email + '.';
      form.reset();
    });
  }

  /* Footer year */
  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();
