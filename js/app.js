/* ============================================================
   app.js
   Router simple basado en el hash de la URL, sin frameworks.
   Cada función render_xxx() dibuja una pantalla dentro de #app.
   ============================================================ */

const app = document.getElementById("app");
const backBtn = document.getElementById("backBtn");
const crumbEl = document.getElementById("crumb");
const subbarEl = document.getElementById("subbar");
const mainNavEl = document.getElementById("mainNav");

function findProceso(id) {
  for (const ramaKey in SITE_DATA.ramas) {
    const rama = SITE_DATA.ramas[ramaKey];
    for (const tipoKey in rama.tipos) {
      const tipo = rama.tipos[tipoKey];
      const p = tipo.procesos.find((x) => x.id === id);
      if (p) return { rama: ramaKey, tipo: tipoKey, proceso: p };
    }
  }
  return null;
}

/* crumbItems: arreglo de { label, href? } — el último sin href es la
   página actual (no clicable); los anteriores navegan directo a ese
   nivel. Un arreglo vacío/omitido = sin barra secundaria, como en Inicio.
   showBack: si se muestra la flecha de volver. activeRoute: "home" |
   "ramas" para resaltar el enlace correspondiente en la nav. */
function setHeader(crumbItems, showBack, activeRoute) {
  if (crumbItems && crumbItems.length) {
    crumbEl.innerHTML = crumbItems
      .map((c) => (c.href ? `<a href="${c.href}">${c.label}</a>` : `<span>${c.label}</span>`))
      .join(' <span class="crumb-sep">›</span> ');
    subbarEl.classList.add("show");
  } else {
    subbarEl.classList.remove("show");
  }
  backBtn.classList.toggle("show", !!showBack);

  mainNavEl.querySelectorAll(".nav-link").forEach((a) => {
    a.classList.toggle("active", a.dataset.route === activeRoute);
  });
}

/* ---------- pantallas ---------- */

function renderHome() {
  setHeader([], false, "home");
  app.innerHTML = `
    <div class="hero-grid">
      <div class="hero-copy">
        <span class="hero-tag">Orientación jurídica</span>
        <h1>Entiende tu proceso legal, paso a paso.</h1>
        <p class="lead">Un espacio para aprender, en lenguaje claro, cómo funcionan los procesos jurídicos de cada rama del derecho.</p>
        <a class="cta-btn" href="#/ramas"><span>Explorar ramas del derecho</span><span>›</span></a>
      </div>
      <div class="hero-art">
        <img src="assets/images/pagina principal.jpg" alt="Ilustración de una balanza de justicia y un libro de leyes" loading="lazy">
      </div>
    </div>
  `;
}

function renderRamas() {
  setHeader([{ label: "Inicio", href: "#/" }, { label: "Ramas" }], true, "ramas");
  const cards = Object.entries(SITE_DATA.ramas)
    .map(([key, r]) => {
      if (r.activa) {
        return `
        <div class="photo-card-wrap">
          <a class="photo-card" href="#/ramas/${key}">
            <img src="${r.imagen}" alt="${r.nombre}" loading="lazy">
            <div class="band" style="background:${r.color}">${r.nombre}</div>
          </a>
          <p class="photo-caption">${r.descripcion || ""}</p>
        </div>`;
      }
      return `
        <div class="photo-card-wrap">
          <div class="photo-card soon-photo">
            <img src="${r.imagen}" alt="${r.nombre}" loading="lazy">
            <div class="band" style="background:${r.color}">${r.nombre}</div>
            <div class="soon-pill soon-pill-overlay">Próximamente</div>
          </div>
          <p class="photo-caption">${r.descripcion || ""}</p>
        </div>`;
    })
    .join("");
  app.innerHTML = `<div class="branch-pill">Rama del derecho</div><div class="photo-grid">${cards}</div>`;
}

/* Subnav con las 4 ramas: la actual queda resaltada; las que aún no están
   activas se muestran como texto inerte (no navegan a ningún lado). */
function ramaSubnav(ramaActualKey) {
  const items = Object.entries(SITE_DATA.ramas)
    .map(([key, r]) => {
      const esActual = key === ramaActualKey;
      if (r.activa) {
        return `<a class="rama-subnav-item${esActual ? " current" : ""}" href="#/ramas/${key}">${r.nombre}</a>`;
      }
      return `<span class="rama-subnav-item disabled">${r.nombre}</span>`;
    })
    .join("");
  return `<div class="rama-subnav">${items}</div>`;
}

function renderTipos(ramaKey) {
  const rama = SITE_DATA.ramas[ramaKey];
  if (!rama || !rama.activa) return (location.hash = "#/ramas");
  setHeader(
    [{ label: "Inicio", href: "#/" }, { label: "Ramas", href: "#/ramas" }, { label: rama.nombre }],
    true,
    "ramas"
  );
  const cards = Object.entries(rama.tipos)
    .map(
      ([key, t]) => `
      <div class="photo-card-wrap">
        <a class="photo-card" href="#/ramas/${ramaKey}/${key}">
          <img src="${t.imagen}" alt="${t.nombre}" loading="lazy">
          <div class="band" style="background:${t.color}">${t.nombre}</div>
        </a>
        <p class="photo-caption">${t.descripcion}</p>
      </div>`
    )
    .join("");
  app.innerHTML = `
    ${ramaSubnav(ramaKey)}
    <div class="branch-pill">${rama.nombre} · Tipos de proceso</div>
    <div class="photo-grid">${cards}</div>
  `;
}

function renderProcesosBotones(ramaKey, tipoKey) {
  const rama = SITE_DATA.ramas[ramaKey];
  const tipo = rama && rama.tipos[tipoKey];
  if (!tipo) return (location.hash = `#/ramas/${ramaKey}`);
  setHeader(
    [
      { label: "Inicio", href: "#/" },
      { label: rama.nombre, href: `#/ramas/${ramaKey}` },
      { label: tipo.nombre },
    ],
    true,
    "ramas"
  );

  /* Solo "Procesos declarativos" se ordena alfabéticamente y usa botones
     centrados; los demás tipos de proceso conservan su orden y diseño de
     siempre. */
  const esDeclarativo = tipoKey === "declarativo";
  const listaProcesos = esDeclarativo
    ? [...tipo.procesos].sort((a, b) => a.titulo.localeCompare(b.titulo, "es"))
    : tipo.procesos;

  const botones = listaProcesos
    .map((p) =>
      esDeclarativo
        ? `<a class="proc-btn proc-btn-centered" href="#/proceso/${p.id}"><span>${p.titulo}</span></a>`
        : `<a class="proc-btn" href="#/proceso/${p.id}"><span>${p.titulo}</span><span>›</span></a>`
    )
    .join("");
  const gridClass = esDeclarativo ? "stack-grid decl-grid" : "stack-grid";
  app.innerHTML = `<h2 class="section-title">Procesos de ${tipo.nombre}</h2><div class="${gridClass}">${botones}</div>`;
}

function renderProcesoDetalle(id) {
  const found = findProceso(id);
  if (!found) return (location.hash = "#/ramas");
  const { rama, tipo, proceso } = found;
  const ramaObj = SITE_DATA.ramas[rama];
  const tipoObj = ramaObj.tipos[tipo];
  const esDeclarativo = proceso.formato === "declarativoDetallado";

  /* Los procesos declarativos ya traen su propio enlace "‹ Volver a...";
     se oculta la flecha del header para no repetir el mismo control dos
     veces en la misma pantalla. */
  setHeader(
    [
      { label: "Inicio", href: "#/" },
      { label: ramaObj.nombre, href: `#/ramas/${rama}` },
      { label: tipoObj.nombre, href: `#/ramas/${rama}/${tipo}` },
      { label: proceso.titulo },
    ],
    !esDeclarativo,
    "ramas"
  );

  if (esDeclarativo) {
    return renderProcesoDeclarativo(rama, tipo, proceso);
  }

  app.innerHTML = `
    <div class="proc-wrap">
      <span class="placeholder-tag">Contenido de ejemplo</span>
      <div class="proc-card">
        <h3>${proceso.titulo}</h3>
        <div class="lbl">¿En qué consiste?</div><p>${proceso.consiste}</p>
        <div class="lbl">¿Cuándo aplica?</div><p>${proceso.aplica}</p>
        <div class="lbl">¿Qué necesitas?</div>
        <ul>${proceso.requisitos.map((r) => `<li>${r}</li>`).join("")}</ul>
        <div class="lbl">Video de audiencia</div>
        <div class="video-block">
          <div class="play-circle">▶</div>
          <small>${proceso.video.url ? proceso.video.titulo : "Video de referencia — pendiente de cargar"}</small>
        </div>
      </div>
      <hr class="divider">
      <div id="quizWrap"></div>
    </div>
  `;

  renderQuiz(proceso.quiz);
}

/* ---------- ficha de "Procesos declarativos" ---------- */

function renderProcesoDeclarativo(ramaKey, tipoKey, proceso) {
  // queEs / comoFunciona pueden venir como texto único o como arreglo de
  // párrafos (cada elemento puede llevar { subtitulo, texto }).
  const parrafos = (etiqueta, valor) => {
    if (!valor) return "";
    const items = Array.isArray(valor) ? valor : [valor];
    const cuerpo = items
      .map((it) => {
        if (typeof it === "string") return `<p>${it}</p>`;
        const sub = it.subtitulo ? `<div class="decl-subtitulo">${it.subtitulo}</div>` : "";
        return `${sub}<p>${it.texto}</p>`;
      })
      .join("");
    return `<div class="lbl">${etiqueta}</div>${cuerpo}`;
  };

  const lista = (etiqueta, items) =>
    items && items.length
      ? `<div class="lbl">${etiqueta}</div><ul>${items.map((x) => `<li>${x}</li>`).join("")}</ul>`
      : "";

  // material puede traer objetos {texto, url}; si hay url, se muestra como enlace real.
  const listaMaterial = (etiqueta, items) =>
    items && items.length
      ? `<div class="lbl">${etiqueta}</div><ul>${items
          .map((x) => {
            if (typeof x === "string") return `<li>${x}</li>`;
            return x.url
              ? `<li>${x.texto} — <a href="${x.url}" target="_blank" rel="noopener">ver fuente</a></li>`
              : `<li>${x.texto}</li>`;
          })
          .join("")}</ul>`
      : "";

  const tabla = (t) => {
    if (!t || !t.filas || !t.filas.length) return "";
    const filas = t.filas
      .map((f) => `<tr><td>${f[0]}</td><td>${f[1]}</td></tr>`)
      .join("");
    return `
      <div class="lbl">${t.titulo || "Cuadro"}</div>
      <div class="decl-table-wrap">
        <table class="decl-table">
          <thead><tr><th>${t.columnas[0]}</th><th>${t.columnas[1]}</th></tr></thead>
          <tbody>${filas}</tbody>
        </table>
      </div>`;
  };

  app.innerHTML = `
    <div class="proc-wrap decl-wrap">
      <a class="decl-back" href="#/ramas/${ramaKey}/${tipoKey}">‹ Volver a Procesos declarativos</a>
      <div class="proc-card decl-card">
        <h3>${proceso.titulo}</h3>
        ${proceso.tipoProceso ? `<span class="decl-tipo-pill">${proceso.tipoProceso}</span>` : ""}
        ${parrafos("¿Qué es?", proceso.queEs)}
        ${parrafos("¿Cómo funciona?", proceso.comoFunciona)}
        ${parrafos("¿Quién puede iniciarlo? / ¿Ante quién se presenta?", proceso.antePresenta)}
        ${parrafos("Partes que intervienen", proceso.partes)}
        ${lista("Características y aspectos relevantes", proceso.caracteristicas)}
        ${tabla(proceso.tabla)}
      </div>

      <div class="decl-tabs">
        <button class="decl-tab-btn" data-panel="etapas">ETAPAS</button>
        <button class="decl-tab-btn" data-panel="documentos">DOCUMENTOS</button>
        <button class="decl-tab-btn" data-panel="material">Material para revisar</button>
      </div>
      <div id="declPanel" class="decl-panel"></div>
    </div>
  `;

  const panelEl = document.getElementById("declPanel");
  const panelesContenido = {
    etapas: lista("Etapas del proceso", proceso.etapas),
    documentos: lista("Documentos necesarios", proceso.documentos),
    material: listaMaterial("Material para revisar", proceso.material)
  };
  const botones = Array.from(document.querySelectorAll(".decl-tab-btn"));

  function mostrarPanel(key, btn) {
    const yaActivo = btn.classList.contains("active");
    botones.forEach((b) => b.classList.remove("active"));
    if (yaActivo) {
      panelEl.innerHTML = "";
      panelEl.classList.remove("show");
      return;
    }
    btn.classList.add("active");
    panelEl.innerHTML = panelesContenido[key] || `<p>No hay información disponible en el documento fuente para esta sección.</p>`;
    panelEl.classList.add("show");
    if (typeof panelEl.scrollIntoView === "function") {
      panelEl.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }

  botones.forEach((btn) => {
    btn.addEventListener("click", () => mostrarPanel(btn.dataset.panel, btn));
  });
}

/* ---------- mini-quiz por proceso ---------- */

function renderQuiz(preguntas) {
  let index = 0;
  let score = 0;
  const wrap = document.getElementById("quizWrap");

  function draw() {
    if (index >= preguntas.length) {
      wrap.innerHTML = `
        <div class="q-score">
          <div class="q-progress">Resultado de tu quiz</div>
          <div class="big">${score}/${preguntas.length}</div>
          <button class="q-next" id="retryBtn">Volver a intentar</button>
        </div>`;
      document.getElementById("retryBtn").onclick = () => {
        index = 0;
        score = 0;
        draw();
      };
      return;
    }
    const item = preguntas[index];
    wrap.innerHTML = `
      <div class="q-progress">Pregunta ${index + 1} de ${preguntas.length}</div>
      <div class="q-text">${item.pregunta}</div>
      <div id="optsWrap">${item.opciones
        .map((o, i) => `<button class="opt-btn" data-i="${i}">${o}</button>`)
        .join("")}</div>
      <div id="qFeedback"></div>
    `;
    let answered = false;
    wrap.querySelectorAll(".opt-btn").forEach((btn) => {
      btn.onclick = () => {
        if (answered) return;
        answered = true;
        const i = Number(btn.dataset.i);
        wrap.querySelectorAll(".opt-btn").forEach((b, idx) => {
          if (idx === item.correcta) b.classList.add("correct");
          else if (idx === i) b.classList.add("wrong");
        });
        if (i === item.correcta) score++;
        document.getElementById("qFeedback").innerHTML = `
          <div class="q-feedback">${i === item.correcta ? "Correcto." : "No es la opción correcta."}</div>
          <button class="q-next" id="nextBtn">${index === preguntas.length - 1 ? "Ver resultado" : "Siguiente"}</button>
        `;
        document.getElementById("nextBtn").onclick = () => {
          index++;
          draw();
        };
      };
    });
  }
  draw();
}

/* ---------- router ---------- */

function router() {
  const hash = location.hash.replace(/^#\/?/, "");
  const parts = hash.split("/").filter(Boolean);

  if (parts.length === 0) return renderHome();
  if (parts[0] === "ramas" && parts.length === 1) return renderRamas();
  if (parts[0] === "ramas" && parts.length === 2) return renderTipos(parts[1]);
  if (parts[0] === "ramas" && parts.length === 3) return renderProcesosBotones(parts[1], parts[2]);
  if (parts[0] === "proceso" && parts.length === 2) return renderProcesoDetalle(parts[1]);

  return renderHome();
}

function goBack() {
  history.back();
}
backBtn.addEventListener("click", goBack);

window.addEventListener("hashchange", router);
window.addEventListener("DOMContentLoaded", router);
