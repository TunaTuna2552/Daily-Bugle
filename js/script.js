document.addEventListener('DOMContentLoaded', () => {
  // Verificación de estado de inicio de sesión
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  const userEmail = localStorage.getItem('userEmail') || 'usuario@dailybugle.com';

  // Selección de datos según el estado del usuario
  const articlesList = isLoggedIn ? SPIDERMAN_ARTICLES : NORMAL_ARTICLES;
  const popularData = isLoggedIn ? SPIDERMAN_POPULAR : NORMAL_POPULAR;

  // Elementos del DOM
  const secondaryList = document.getElementById('secondaryList');
  const articlesGrid = document.getElementById('articlesGrid');
  const popularList = document.getElementById('popularList');
  const categoryFilters = document.getElementById('categoryFilters');
  const navContainer = document.getElementById('navContainer');
  const menuToggle = document.getElementById('menuToggle');
  const navbar = document.getElementById('navbar');
  const searchInput = document.getElementById('searchInput');
  const newsletterForm = document.getElementById('newsletterForm');
  const exclusiveBanner = document.getElementById('exclusiveBanner');
  const userStatus = document.getElementById('userStatus');
  const loginHeaderBtn = document.getElementById('loginHeaderBtn');
  const breakingText = document.getElementById('breakingText');

  // Elementos de la tarjeta principal (Hero Card)
  const heroImg = document.getElementById('heroImg');
  const heroCategory = document.getElementById('heroCategory');
  const heroTitle = document.getElementById('heroTitle');
  const heroSummary = document.getElementById('heroSummary');
  const heroMeta = document.getElementById('heroMeta');

  let activeCategory = 'Todas';

  // Inicializar estado de usuario y banderas exclusivas
  function initUserInterface() {
    if (isLoggedIn) {
      if (exclusiveBanner) {
        exclusiveBanner.classList.remove('hidden');
      }

      if (userStatus) {
        userStatus.innerHTML = `
          <span class="user-badge">⭐ Suscriptor VIP (${userEmail})</span>
          <button class="btn-logout" id="logoutBtn">Cerrar sesión</button>
        `;

        document.getElementById('logoutBtn').addEventListener('click', () => {
          localStorage.removeItem('isLoggedIn');
          localStorage.removeItem('userEmail');
          window.location.reload();
        });
      }

      if (loginHeaderBtn) {
        loginHeaderBtn.textContent = 'Mi Cuenta (VIP)';
        loginHeaderBtn.href = '#';
      }

      if (breakingText) {
        breakingText.textContent = '¡ÚLTIMA HORA! Spider-Man es avistado en la Quinta Avenida · Oscorp reporta intrusión sospechosa · J. Jonah Jameson ofrece recompensa por fotos del Trepamuros';
      }
    } else {
      if (exclusiveBanner) {
        exclusiveBanner.classList.add('hidden');
      }

      if (userStatus) {
        userStatus.innerHTML = `<span>Bienvenido lector</span>`;
      }
    }
  }

  // Generar insignias de categoría
  function getBadgeHTML(category, isSmall = false) {
    const color = CAT_COLORS[category] || 'var(--red)';
    return `<span class="category-badge ${isSmall ? 'sm' : ''}" style="background-color: ${color}">${category}</span>`;
  }

  // Renderizar la noticia principal (Hero Card)
  function renderHero() {
    const heroArticle = articlesList[0];
    if (!heroArticle) return;

    heroImg.src = heroArticle.img;
    heroImg.alt = heroArticle.imgAlt;
    heroCategory.textContent = heroArticle.category.toUpperCase();
    heroCategory.style.backgroundColor = CAT_COLORS[heroArticle.category] || 'var(--red)';
    heroTitle.textContent = heroArticle.title;
    heroSummary.textContent = heroArticle.summary;
    heroMeta.textContent = `${heroArticle.time} · ${heroArticle.date}`;
  }

  // Renderizar noticias secundarias destacadas (posiciones 1 a 3)
  function renderSecondary() {
    const items = articlesList.slice(1, 4);
    secondaryList.innerHTML = items.map(item => `
      <div class="secondary-card" data-id="${item.id}">
        <img src="${item.img}" alt="${item.imgAlt}">
        <div class="secondary-card-content">
          ${getBadgeHTML(item.category, true)}
          <h3>${item.title.length > 70 ? item.title.slice(0, 68) + '…' : item.title}</h3>
          <span class="meta-date">${item.date}</span>
        </div>
      </div>
    `).join('');
  }

  // Renderizar rejilla de noticias con filtros y búsqueda
  function renderArticles(filter = 'Todas', query = '') {
    let filtered = articlesList.slice(1);

    if (filter !== 'Todas') {
      filtered = filtered.filter(a => a.category === filter);
    }

    if (query.trim() !== '') {
      const q = query.toLowerCase();
      filtered = filtered.filter(a => 
        a.title.toLowerCase().includes(q) || 
        a.summary.toLowerCase().includes(q)
      );
    }

    if (filtered.length === 0) {
      articlesGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 40px 0; color: var(--gray-500);">
          No se encontraron noticias que coincidan con la búsqueda.
        </div>
      `;
      return;
    }

    articlesGrid.innerHTML = filtered.map(item => `
      <article class="article-card" data-id="${item.id}">
        <img src="${item.img}" alt="${item.imgAlt}">
        <div class="article-body">
          <div>${getBadgeHTML(item.category, true)}</div>
          <h3>${item.title}</h3>
          <p>${item.summary}</p>
          <div class="article-footer">
            <span class="meta-date">${item.time} · ${item.date}</span>
            <button class="btn-read-more">Leer más</button>
          </div>
        </div>
      </article>
    `).join('');
  }

  // Renderizar la lista de "Lo más leído" en la barra lateral
  function renderPopular() {
    popularList.innerHTML = popularData.map((item, index) => `
      <div class="popular-item">
        <span class="popular-rank">${index + 1}</span>
        <div>
          <div class="popular-title">${item.title}</div>
          <div class="popular-meta">
            ${getBadgeHTML(item.category, true)}
            <span class="meta-date">${item.date}</span>
          </div>
        </div>
      </div>
    `).join('');
  }

  // Cambiar categoría activa
  function setCategory(category) {
    activeCategory = category;

    const allButtons = [
      ...navContainer.querySelectorAll('.nav-item'),
      ...categoryFilters.querySelectorAll('.filter-btn')
    ];

    allButtons.forEach(btn => {
      if (btn.dataset.category === category) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    renderArticles(activeCategory, searchInput ? searchInput.value : '');
  }

  // Event Listeners
  categoryFilters.addEventListener('click', (e) => {
    if (e.target.classList.contains('filter-btn')) {
      setCategory(e.target.dataset.category);
    }
  });

  navContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('nav-item')) {
      setCategory(e.target.dataset.category);
      navbar.classList.remove('open');
    }
  });

  menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('open');
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      renderArticles(activeCategory, e.target.value);
    });
  }

  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('newsletterEmail').value;
      alert(`¡Gracias por suscribirte con ${email}! Te hemos enviado un correo de confirmación.`);
      newsletterForm.reset();
    });
  }

  // Inicialización general
  initUserInterface();
  renderHero();
  renderSecondary();
  renderArticles();
  renderPopular();
});
