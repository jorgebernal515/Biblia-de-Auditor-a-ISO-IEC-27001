(function () {
  const controls = window.CONTROLS_DATA || [];

  // Estado
  let searchTerm = "";
  let selectedDomain = "all";
  let selectedStatus = "all";
  let selectedKeyword = null;
  let currentView = "cards"; // "cards" | "matrix"

  // Referencias DOM
  const searchInput = document.getElementById("search-input");
  const clearBtn = document.getElementById("clear-btn");
  const domainButtons = document.querySelectorAll(".domain-btn");
  const statusButtons = document.querySelectorAll(".status-btn");
  const keywordsContainer = document.getElementById("keywords-container");
  const cardsContainer = document.getElementById("cards-container");
  const matrixContainer = document.getElementById("matrix-container");
  const resultsStatus = document.getElementById("results-status");
  const resetAllBtn = document.getElementById("reset-all-btn");
  const totalControlsEl = document.getElementById("total-controls");
  const totalKeywordsEl = document.getElementById("total-keywords");
  const totalNewEl = document.getElementById("total-new");
  const toggleSummaryBtn = document.getElementById("toggle-summary-btn");
  const summaryBody = document.getElementById("transition-summary-body");
  const viewCardsBtn = document.getElementById("view-cards-btn");
  const viewMatrixBtn = document.getElementById("view-matrix-btn");

  const uniqueKeywords = Array.from(
    new Set(controls.flatMap((item) => item.palabras_clave))
  );

  const STATUS_LABELS = {
    nuevo: "Nuevo en 2022",
    fusionado: "Fusionado / Actualizado",
    mantenido: "Mantenido / Renumerado"
  };

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

  function highlightText(text, query) {
    const safeText = escapeHtml(text);
    const cleanQuery = query.trim();
    if (!cleanQuery) return safeText;
    const escapedRegex = cleanQuery.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const regex = new RegExp(`(${escapedRegex})`, "gi");
    return safeText.replace(regex, "<mark>$1</mark>");
  }

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
        renderResults();
      });
      keywordsContainer.appendChild(btn);
    });
  }

  function getFilteredControls() {
    const normQuery = normalizeText(searchTerm);

    return controls.filter((item) => {
      if (selectedDomain !== "all" && item.dominio !== selectedDomain) return false;
      if (selectedStatus !== "all" && item.estado_transicion !== selectedStatus) return false;
      if (selectedKeyword && !item.palabras_clave.includes(selectedKeyword)) return false;

      if (!normQuery) return true;

      const searchableCorpus = normalizeText(
        [
          item.id,
          item.numeral,
          item.dominio,
          item.equivalencia_2013,
          item.detalle_cambio,
          STATUS_LABELS[item.estado_transicion] || "",
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

  function renderResults() {
    const filtered = getFilteredControls();
    const hasFilters = Boolean(
      searchTerm.trim() || selectedDomain !== "all" || selectedStatus !== "all" || selectedKeyword
    );

    clearBtn.hidden = !searchTerm.trim();
    resetAllBtn.hidden = !hasFilters;

    const activeFiltersText = [];
    if (selectedDomain !== "all") activeFiltersText.push(`Dominio: ${selectedDomain}`);
    if (selectedStatus !== "all") activeFiltersText.push(`Estado: ${STATUS_LABELS[selectedStatus]}`);
    if (selectedKeyword) activeFiltersText.push(`Palabra clave: "${selectedKeyword}"`);
    if (searchTerm.trim()) activeFiltersText.push(`Búsqueda: "${searchTerm.trim()}"`);

    resultsStatus.textContent = hasFilters
      ? `Mostrando ${filtered.length} de ${controls.length} elementos (${activeFiltersText.join(" · ")})`
      : `Mostrando todos los elementos disponibles (${filtered.length})`;

    if (currentView === "cards") {
      cardsContainer.hidden = false;
      matrixContainer.hidden = true;
      renderCards(filtered);
    } else {
      cardsContainer.hidden = true;
      matrixContainer.hidden = false;
      renderMatrix(filtered);
    }
  }

  function renderCards(filtered) {
    if (filtered.length === 0) {
      cardsContainer.innerHTML = `
        <div class="empty-state">
          <h3>No se encontraron fichas para tu búsqueda</h3>
          <p>Intenta con un numeral 2022 (ej. 5.17, 8.28), un numeral 2013 (ej. A.9.4.3, A.12.3.1) o limpia los filtros.</p>
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

        const statusLabel = STATUS_LABELS[item.estado_transicion] || "Actualizado";

        return `
          <article class="audit-card">
            <div>
              <div class="card-meta">
                <span class="tag-domain">${escapeHtml(item.dominio)}</span>
                <span class="tag-status tag-${escapeHtml(item.estado_transicion)}">${escapeHtml(statusLabel)}</span>
              </div>
              <h3 class="card-title">${highlightText(item.numeral, searchTerm)}</h3>
            </div>

            <div class="transition-strip">
              <div><strong>Equivalencia 2013:</strong> ${highlightText(item.equivalencia_2013, searchTerm)}</div>
              <div><strong>Qué cambió en 2022:</strong> ${highlightText(item.detalle_cambio, searchTerm)}</div>
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

    cardsContainer.querySelectorAll(".card-kw-pill").forEach((pill) => {
      pill.addEventListener("click", () => {
        selectedKeyword = pill.getAttribute("data-kw");
        renderKeywords();
        renderResults();
        window.scrollTo({ top: 200, behavior: "smooth" });
      });
    });
  }

  function renderMatrix(filtered) {
    if (filtered.length === 0) {
      matrixContainer.innerHTML = `
        <div class="empty-state">
          <h3>No hay equivalencias que coincidan con tu filtro</h3>
          <p>Limpia los filtros o intenta buscar otro código 2013 / 2022.</p>
        </div>
      `;
      return;
    }

    const rows = filtered
      .map((item) => {
        const statusLabel = STATUS_LABELS[item.estado_transicion] || "Actualizado";
        return `
          <tr>
            <td><strong>${highlightText(item.equivalencia_2013, searchTerm)}</strong></td>
            <td><span class="tag-status tag-${escapeHtml(item.estado_transicion)}">${escapeHtml(statusLabel)}</span></td>
            <td><strong>${highlightText(item.numeral, searchTerm)}</strong></td>
            <td>${highlightText(item.detalle_cambio, searchTerm)}</td>
            <td>
              <button type="button" class="matrix-action-btn" data-id="${escapeHtml(item.id)}">
                Ver ficha completa
              </button>
            </td>
          </tr>
        `;
      })
      .join("");

    matrixContainer.innerHTML = `
      <table class="matrix-table">
        <thead>
          <tr>
            <th>Referencia ISO 2013</th>
            <th>Estado</th>
            <th>Equivalente ISO 2022</th>
            <th>Resumen de Actualización (Qué cambió / Qué se mantiene)</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>${rows}</tbody>
      </table>
    `;

    matrixContainer.querySelectorAll(".matrix-action-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-id");
        searchTerm = id;
        searchInput.value = id;
        currentView = "cards";
        viewCardsBtn.classList.add("active");
        viewMatrixBtn.classList.remove("active");
        renderResults();
      });
    });
  }

  // Eventos
  toggleSummaryBtn.addEventListener("click", () => {
    const isHidden = summaryBody.hidden;
    summaryBody.hidden = !isHidden;
    toggleSummaryBtn.setAttribute("aria-expanded", String(isHidden));
    toggleSummaryBtn.textContent = isHidden ? "Ocultar comparativa" : "Ver comparativa estructural";
  });

  viewCardsBtn.addEventListener("click", () => {
    currentView = "cards";
    viewCardsBtn.classList.add("active");
    viewMatrixBtn.classList.remove("active");
    renderResults();
  });

  viewMatrixBtn.addEventListener("click", () => {
    currentView = "matrix";
    viewMatrixBtn.classList.add("active");
    viewCardsBtn.classList.remove("active");
    renderResults();
  });

  searchInput.addEventListener("input", (e) => {
    searchTerm = e.target.value;
    renderResults();
  });

  clearBtn.addEventListener("click", () => {
    searchTerm = "";
    searchInput.value = "";
    searchInput.focus();
    renderResults();
  });

  domainButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      domainButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      selectedDomain = btn.getAttribute("data-domain");
      renderResults();
    });
  });

  statusButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      statusButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      selectedStatus = btn.getAttribute("data-status");
      renderResults();
    });
  });

  resetAllBtn.addEventListener("click", () => {
    searchTerm = "";
    searchInput.value = "";
    selectedDomain = "all";
    selectedStatus = "all";
    selectedKeyword = null;
    domainButtons.forEach((b) => b.classList.toggle("active", b.getAttribute("data-domain") === "all"));
    statusButtons.forEach((b) => b.classList.toggle("active", b.getAttribute("data-status") === "all"));
    renderKeywords();
    renderResults();
  });

  // Inicialización
  totalControlsEl.textContent = controls.length;
  totalKeywordsEl.textContent = uniqueKeywords.length;
  totalNewEl.textContent = controls.filter((c) => c.estado_transicion === "nuevo").length;
  renderKeywords();
  renderResults();
})();
