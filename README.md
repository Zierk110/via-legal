# Vía Legal — Portal de orientación jurídica

MVP del sitio informativo. HTML + CSS + JavaScript plano, sin frameworks ni pasos de compilación.

## Estructura del proyecto

```
via-legal/
├── index.html          → estructura base + header con logo
├── css/
│   └── styles.css      → todo el sistema de diseño (colores, tipografía, componentes)
├── js/
│   ├── data.js         → TODO el contenido: ramas, tipos de proceso, procesos, quizzes
│   └── app.js          → router (por hash) + funciones que dibujan cada pantalla
└── assets/
    └── icons/          → (vacío por ahora, para íconos/imágenes futuras)
```

## Cómo correrlo en local

No necesita instalar nada de Node ni build tools. Basta con abrir `index.html` en el navegador,
o, mejor, servirlo con un servidor local simple para que las rutas (#/...) funcionen bien:

- **VS Code:** instala la extensión "Live Server" y dale clic derecho a `index.html` → "Open with Live Server".
- **Alternativa por terminal (si tienes Python instalado):** `python -m http.server`, y abres `http://localhost:8000`.

## Cómo agregar contenido nuevo

Todo el contenido vive en `js/data.js`. Por ejemplo, para agregar un proceso nuevo dentro de
"Familia → Ejecutivo", solo agregas un objeto más al arreglo `procesos` de ese tipo, con esta forma:

```js
{
  id: "nombre-unico-del-proceso",
  titulo: "Nombre del proceso",
  consiste: "Explicación de en qué consiste...",
  aplica: "Explicación de cuándo aplica...",
  requisitos: ["Requisito 1", "Requisito 2"],
  video: { titulo: "Nombre del video", url: "" },
  quiz: [
    { pregunta: "¿...?", opciones: ["A", "B", "C"], correcta: 1 }
  ]
}
```

No hay que tocar `app.js` ni `styles.css` para esto — el sitio se arma solo con los datos.

Para activar una rama nueva (ej. Civil) más adelante: en `data.js`, cambia `activa: false` a
`activa: true` y llena su bloque `tipos` igual que el de Familia.

## Publicarlo (repositorio + hosting gratis)

1. Sube esta carpeta a un repositorio de GitHub (con GitKraken: Stage → Commit → Push).
2. Conecta el repositorio a Netlify (netlify.com → "Import an existing project").
3. No hace falta configurar ningún comando de build; la carpeta a publicar es la raíz del proyecto.
4. Netlify te da una URL pública gratis (tipo `via-legal.netlify.app`), que se actualiza sola
   cada vez que hagas push.

Guía completa de este paso en el documento del proyecto.
