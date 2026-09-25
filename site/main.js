// Small progressive enhancements. The page is fully usable without this file.
(function () {
  document.documentElement.classList.add('js');

  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Staggered fade-in as elements scroll into view.
  var reveals = document.querySelectorAll('.reveal');
  reveals.forEach(function (el, i) { el.style.setProperty('--i', i % 6); });
  if ('IntersectionObserver' in window && !reduceMotion) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.1 });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('in'); });
  }

  // A handful of leaves drifting down across the sky.
  var box = document.querySelector('.leaves');
  if (!box || reduceMotion) return;
  var colors = ['#b8562b', '#d9822b', '#e0a42f', '#8c3b1f', '#c9a227'];
  for (var i = 0; i < 14; i++) {
    var leaf = document.createElement('span');
    leaf.className = 'leaf';
    leaf.style.left = Math.random() * 100 + '%';
    leaf.style.background = colors[i % colors.length];
    leaf.style.animationDuration = 9 + Math.random() * 9 + 's';
    leaf.style.animationDelay = -Math.random() * 18 + 's';
    var s = 10 + Math.random() * 10;
    leaf.style.width = s + 'px';
    leaf.style.height = s + 'px';
    box.appendChild(leaf);
  }
})();
