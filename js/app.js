/* ============================================================
   app.js
   Router simple basado en el hash de la URL, sin frameworks.
   Cada función render_xxx() dibuja una pantalla dentro de #app.
   ============================================================ */

const app = document.getElementById("app");
const backBtn = document.getElementById("backBtn");
const appTitle = document.getElementById("appTitle");
const crumbEl = document.getElementById("crumb");

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

function setHeader(title, crumb, showBack) {
  appTitle.textContent = title;
  crumbEl.textContent = crumb;
  backBtn.classList.toggle("show", showBack);
}

/* ---------- pantallas ---------- */

function renderHome() {
  setHeader("Vía Legal", "Inicio", false);
  app.innerHTML = `
    <span class="hero-tag">Orientación jurídica</span>
    <h1>Entiende tu proceso legal, paso a paso.</h1>
    <p class="lead">Un espacio para aprender, en lenguaje claro, cómo funcionan los procesos jurídicos de cada rama del derecho.</p>
    <a class="cta-btn" href="#/ramas"><span>Explorar ramas del derecho</span><span>›</span></a>
  `;
}

function renderRamas() {
  setHeader("Ramas del derecho", "Inicio › Ramas", true);
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

function renderTipos(ramaKey) {
  const rama = SITE_DATA.ramas[ramaKey];
  if (!rama || !rama.activa) return (location.hash = "#/ramas");
  setHeader(rama.nombre, `Inicio › Ramas › ${rama.nombre}`, true);
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
  app.innerHTML = `<div class="branch-pill">${rama.nombre} · Tipos de proceso</div><div class="photo-grid">${cards}</div>`;
}

function renderProcesosBotones(ramaKey, tipoKey) {
  const rama = SITE_DATA.ramas[ramaKey];
  const tipo = rama && rama.tipos[tipoKey];
  if (!tipo) return (location.hash = `#/ramas/${ramaKey}`);
  setHeader(tipo.nombre, `Inicio › ${rama.nombre} › ${tipo.nombre}`, true);
  const botones = tipo.procesos
    .map((p) => `<a class="proc-btn" href="#/proceso/${p.id}"><span>${p.titulo}</span><span>›</span></a>`)
    .join("");
  app.innerHTML = `<div class="branch-pill">Procesos de ${tipo.nombre.toLowerCase()}</div><div class="stack-grid">${botones}</div>`;
}

function renderProcesoDetalle(id) {
  const found = findProceso(id);
  if (!found) return (location.hash = "#/ramas");
  const { rama, tipo, proceso } = found;
  const ramaObj = SITE_DATA.ramas[rama];
  const tipoObj = ramaObj.tipos[tipo];
  setHeader(proceso.titulo, `Inicio › ${ramaObj.nombre} › ${tipoObj.nombre}`, true);

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
