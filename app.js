(function () {
  const controls = window.CONTROLS_DATA || [];

  // Estado de la aplicación
  let searchTerm = "";
  let selectedDomain = "all";
  let selectedKeyword = null;

  // Referencias DOM
  const searchInput = document.getElementById("search-input");
  const clearBtn = document.getElementById("clear-btn");
  const domainButtons = document.querySelectorAll(".domain-btn");
  const keywordsContainer = document.getElementById("keywords-container");
  const cardsContainer = document.getElementById("cards-container");
  const resultsStatus = document.getElementById("results-status");
  const resetAllBtn = document.getElementById("reset-all-btn");
  const totalControlsEl = document.getElementById("total-controls");
  const totalKeywordsEl = document.getElementById("total-keywords");

  // Extrae palabras clave únicas preservando orden de aparición (debe estar entre 15 y 50)
  const uniqueKeywords = Array.from(
    new Set(controls.flatMap((item) => item.palabras_clave))
  );

  // Normaliza texto (sin tildes, minúsculas) para búsquedas precisas en vivo
  function normalizeText(str) {
    return String(str || "")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .trim();
  }

  function escapeHtml(str) {
    return String(str || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  // Resalta el término buscado sobre texto ya escapado
  function highlightText(text, query) {
    const safeText = escapeHtml(text);
    const cleanQuery = query.trim();
    if (!cleanQuery) return safeText;

    const escapedRegex = cleanQuery.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const regex = new RegExp(`(${escapedRegex})`, "gi");
    return safeText.replace(regex, "<mark>$1</mark>");
  }

  // Renderiza el índice interactivo de palabras clave
  function renderKeywords() {
    keywordsContainer.innerHTML = "";
    uniqueKeywords.forEach((kw) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "keyword-chip" + (selectedKeyword === kw ? " active" : "");
      btn.textContent = kw;
      btn.addEventListener("click", () => {
        selectedKeyword = selectedKeyword === kw ? null : kw;
        renderKeywords();
        renderCards();
      });
      keywordsContainer.appendChild(btn);
    });
  }

  // Filtra fichas según buscador en tiempo real, dominio y palabra clave
  function getFilteredControls() {
    const normQuery = normalizeText(searchTerm);

    return controls.filter((item) => {
      // Filtro por dominio/capítulo
      if (selectedDomain !== "all" && item.dominio !== selectedDomain) {
        return false;
      }

      // Filtro por palabra clave seleccionada en el índice
      if (selectedKeyword && !item.palabras_clave.includes(selectedKeyword)) {
        return false;
      }

      // Filtro por barra de búsqueda
      if (!normQuery) return true;

      const searchableCorpus = normalizeText(
        [
          item.id,
          item.numeral,
          item.dominio,
          item.objetivo,
          item.evidencia.join(" "),
          item.prueba,
          item.riesgo,
          item.palabras_clave.join(" "),
          (item.sinonimos || []).join(" ")
        ].join(" ")
      );

      return searchableCorpus.includes(normQuery);
    });
  }

  // Renderiza las tarjetas ejecutivas de auditoría
  function renderCards() {
    const filtered = getFilteredControls();
    const hasFilters = Boolean(searchTerm.trim() || selectedDomain !== "all" || selectedKeyword);

    clearBtn.hidden = !searchTerm.trim();
    resetAllBtn.hidden = !hasFilters;

    const activeFiltersText = [];
    if (selectedDomain !== "all") activeFiltersText.push(`Dominio: ${selectedDomain}`);
    if (selectedKeyword) activeFiltersText.push(`Palabra clave: "${selectedKeyword}"`);
    if (searchTerm.trim()) activeFiltersText.push(`Búsqueda: "${searchTerm.trim()}"`);

    resultsStatus.textContent = hasFilters
      ? `Mostrando ${filtered.length} de ${controls.length} fichas (${activeFiltersText.join(" · ")})`
      : `Mostrando todas las fichas disponibles (${filtered.length})`;

    if (filtered.length === 0) {
      cardsContainer.innerHTML = `
        <div class="empty-state">
          <h3>No se encontraron fichas para tu búsqueda</h3>
          <p>Intenta con otro numeral (ej. 5.17, 8.24, 6.1), palabra clave o limpia los filtros activos.</p>
        </div>
      `;
      return;
    }

    cardsContainer.innerHTML = filtered
      .map((item) => {
        const evidenceItems = item.evidencia
          .map((ev) => `<li>${highlightText(ev, searchTerm)}</li>`)
          .join("");

        const kwPills = item.palabras_clave
          .map(
            (kw) =>
              `<button type="button" class="card-kw-pill" data-kw="${escapeHtml(kw)}">${escapeHtml(kw)}</button>`
          )
          .join("");

        return `
          <article class="audit-card">
            <div class="card-header">
              <div>
                <div class="card-meta">
                  <span class="tag-domain">${escapeHtml(item.dominio)}</span>
                  ${item.nuevo2022 ? '<span class="tag-new">Nuevo en 2022</span>' : ""}
                </div>
                <h3 class="card-title">${highlightText(item.numeral, searchTerm)}</h3>
              </div>
            </div>

            <div class="field-block">
              <span class="field-label">2. Objetivo de control</span>
              <p>${highlightText(item.objetivo, searchTerm)}</p>
            </div>

            <div class="field-block">
              <span class="field-label">3. Evidencia esperada en auditoría</span>
              <ul class="evidence-list">${evidenceItems}</ul>
            </div>

            <div class="field-block field-test">
              <span class="field-label">4. Prueba / Técnica recomendada</span>
              <p>${highlightText(item.prueba, searchTerm)}</p>
            </div>

            <div class="field-block field-risk">
              <span class="field-label">5. Riesgo asociado</span>
              <p>${highlightText(item.riesgo, searchTerm)}</p>
            </div>

            <div class="card-keywords">${kwPills}</div>
          </article>
        `;
      })
      .join("");

    // Permite hacer clic en las etiquetas de la misma tarjeta para filtrar
    cardsContainer.querySelectorAll(".card-kw-pill").forEach((pill) => {
      pill.addEventListener("click", () => {
        selectedKeyword = pill.getAttribute("data-kw");
        renderKeywords();
        renderCards();
        window.scrollTo({ top: 180, behavior: "smooth" });
      });
    });
  }

  // Eventos
  searchInput.addEventListener("input", (e) => {
    searchTerm = e.target.value;
    renderCards();
  });

  clearBtn.addEventListener("click", () => {
    searchTerm = "";
    searchInput.value = "";
    searchInput.focus();
    renderCards();
  });

  domainButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      domainButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      selectedDomain = btn.getAttribute("data-domain");
      renderCards();
    });
  });

  resetAllBtn.addEventListener("click", () => {
    searchTerm = "";
    searchInput.value = "";
    selectedDomain = "all";
    selectedKeyword = null;
    domainButtons.forEach((b) => b.classList.toggle("active", b.getAttribute("data-domain") === "all"));
    renderKeywords();
    renderCards();
  });

  // Inicialización
  totalControlsEl.textContent = controls.length;
  totalKeywordsEl.textContent = uniqueKeywords.length;
  renderKeywords();
  renderCards();
})();