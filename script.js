const translations = {
  es: {
    page_title: "Arié Goldzweig Pérez — Ingeniero de Preventa · Científico de Datos",
    aria_lang: "Selector de idioma",
    aria_links: "Enlaces principales",
    aria_footer: "Enlaces del pie de página",
    location: "Ciudad de México",
    role: "Ingeniero de Preventa · Científico de Datos",
    bio: "Estudiante de Matemáticas Aplicadas y Ciencia de Datos en el ITAM e Ingeniero de Preventa y Científico de Datos Junior en SYCOD. Diseño arquitecturas de IA generativa, pipelines de datos y prototipos funcionales que conectan requisitos de negocio con soluciones técnicas reproducibles.",
    cv_link: "CV (PDF)",
    sec_exp: "Experiencia Profesional",
    sycod_full: "(Sistemas y Computadores Digitales S.A. de C.V.)",
    sycod_role: "Ingeniero Preventa & Científico de Datos Junior",
    sycod_date: "ene 2025 – Presente",
    sycod_b1: "Diseño y presento soluciones técnicas de preventa de IA generativa y plataformas de datos (IBM watsonx, AWS, Redis) a clientes potenciales, traduciendo requisitos de negocio en arquitecturas viables.",
    sycod_b2: "Desarrollo prototipos y demos funcionales (POCs) de casos de uso de GenAI y analítica, acelerando el ciclo de venta y la validación técnica.",
    sycod_b3: "Administro bases de datos relacionales y NoSQL (Redis, SQL) y despliego servicios con Docker y GitHub, garantizando entornos reproducibles.",
    sec_edu: "Educación",
    itam_name: "Instituto Tecnológico Autónomo de México (ITAM)",
    itam_degree: "Licenciatura en Matemáticas Aplicadas y Ciencia de Datos",
    itam_date: "En curso · egreso dic 2029",
    sec_proj: "Proyectos Destacados",
    view_repo: "Repositorio →",
    p1_title: 'Modelo de Pitcheo "Stuff+" Ajustado por Altitud',
    p1_b1: "Modelo de XGBoost para calificar la calidad de cada pitcheo en la Liga Mexicana de Béisbol, ajustando el efecto Magnus por la altitud de la CDMX (2,240 m).",
    p1_b2: "Arquitectura modular con APIs en FastAPI y web app para visualizar perfiles de pitchers, implementando flujos profesionales de Git (Pull Requests, ramas protegidas y revisión de código).",
    p2_title: "NERV: Agent Harness desde Cero",
    p2_sub: "Python Stdlib · Docker Sandbox · Multiagente",
    p2_b1: "Harness de agentes de IA codificadores construido únicamente con la librería estándar de Python, integrando un sandbox seguro con Docker (límites estrictos de CPU, memoria, sin red y usuario no-root).",
    p2_b2: "Especializado en operaciones de datos empresariales: validación de acceso SQL, recuperación de documentos y pipelines multiagente.",
    p3_title: 'Detección de Señales de "Ballenas" en Bitcoin',
    p3_b1: "Pipeline de datos para rastrear y analizar transacciones cripto de alto volumen, utilizando bases de datos NoSQL para el almacenamiento y consulta eficiente de flujos de mercado.",
    sec_skills: "Habilidades",
    sk1_k: "Ciencia de datos",
    sk1_v: "Python, SQL, modelado estadístico y machine learning, visualización de datos",
    sk2_k: "Bases de datos",
    sk2_v: "Gestión de SQL y NoSQL (Redis, PostgreSQL, MongoDB)",
    sk3_v: "Dominio de Docker, GitHub/Git, CI/CD",
    sk4_k: "Nube e IA",
    sk4_v: "AWS, Azure Managed Redis, IBM watsonx (GenAI), Fortinet (ciberseguridad)",
    sk5_k: "Preventa técnica",
    sk5_v: "Demos, POCs, traducción de necesidades de negocio a soluciones técnicas",
    sec_certs: "Certificaciones e Idiomas",
    public_sector: "(Sector Público)",
    lang_es_k: "Español",
    lang_es_v: "Nativo",
    lang_en_k: "Inglés",
    lang_en_v: "Nativo",
    lang_de_k: "Alemán",
    lang_de_v: "A2 (certificado); actualmente cursando B1"
  },
  en: {
    page_title: "Arié Goldzweig Pérez — Pre-Sales Engineer · Data Scientist",
    aria_lang: "Language selector",
    aria_links: "Primary links",
    aria_footer: "Footer links",
    location: "Mexico City",
    role: "Pre-Sales Engineer · Data Scientist",
    bio: "Applied Mathematics and Data Science undergraduate at ITAM and Junior Pre-Sales Engineer & Data Scientist at SYCOD. I design generative AI architectures, data pipelines, and working prototypes that bridge business requirements with reproducible technical solutions.",
    cv_link: "CV (PDF)",
    sec_exp: "Professional Experience",
    sycod_full: "(Sistemas y Computadores Digitales S.A. de C.V.)",
    sycod_role: "Junior Pre-Sales Engineer & Data Scientist",
    sycod_date: "Jan 2025 – Present",
    sycod_b1: "Design and present technical pre-sales solutions for generative AI and data platforms (IBM watsonx, AWS, Redis) to prospective clients, translating business needs into viable architectures.",
    sycod_b2: "Build prototypes and functional demos (POCs) for GenAI and analytics use cases, accelerating sales cycles and technical validation.",
    sycod_b3: "Administer relational and NoSQL databases (Redis, SQL) and deploy services with Docker and GitHub, ensuring reproducible environments.",
    sec_edu: "Education",
    itam_name: "Instituto Tecnológico Autónomo de México (ITAM)",
    itam_degree: "B.S. in Applied Mathematics and Data Science",
    itam_date: "In progress · expected Dec 2029",
    sec_proj: "Selected Projects",
    view_repo: "Repository →",
    p1_title: 'Altitude-Adjusted "Stuff+" Pitching Model',
    p1_b1: "XGBoost model grading pitch quality in the Mexican Baseball League, adjusting the Magnus effect for Mexico City's altitude (2,240 m).",
    p1_b2: "Modular FastAPI backend and web app to visualize pitcher profiles, developed with professional Git workflows (Pull Requests, protected branches, and code review).",
    p2_title: "NERV: Agent Harness from Scratch",
    p2_sub: "Python Stdlib · Docker Sandbox · Multi-Agent",
    p2_b1: "Coding AI agent harness built exclusively with the Python standard library, integrating a hardened Docker sandbox (strict CPU and memory limits, no network, non-root user).",
    p2_b2: "Focused on enterprise data operations: SQL access validation, document retrieval, and multi-agent pipelines.",
    p3_title: "Bitcoin Whale Signal Detection",
    p3_b1: "Data pipeline to track and analyze high-volume cryptocurrency transactions, leveraging NoSQL databases for efficient storage and querying of market streams.",
    sec_skills: "Skills",
    sk1_k: "Data Science",
    sk1_v: "Python, SQL, statistical modeling and machine learning, data visualization",
    sk2_k: "Databases",
    sk2_v: "SQL and NoSQL administration (Redis, PostgreSQL, MongoDB)",
    sk3_v: "Docker, GitHub/Git, CI/CD workflows",
    sk4_k: "Cloud & AI",
    sk4_v: "AWS, Azure Managed Redis, IBM watsonx (GenAI), Fortinet (cybersecurity)",
    sk5_k: "Technical Pre-Sales",
    sk5_v: "Demos, POCs, translating business needs into technical architectures",
    sec_certs: "Certifications & Languages",
    public_sector: "(Public Sector)",
    lang_es_k: "Spanish",
    lang_es_v: "Native",
    lang_en_k: "English",
    lang_en_v: "Native",
    lang_de_k: "German",
    lang_de_v: "A2 (certified); currently studying B1"
  }
};

function setLanguage(lang) {
  const dict = translations[lang] || translations.es;
  document.documentElement.lang = lang;
  document.title = dict.page_title;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
    const key = el.getAttribute("data-i18n-aria");
    if (dict[key]) {
      el.setAttribute("aria-label", dict[key]);
    }
  });

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    const active = btn.getAttribute("data-lang") === lang;
    btn.classList.toggle("is-active", active);
    btn.setAttribute("aria-pressed", String(active));
  });
}

document.querySelectorAll(".lang-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    setLanguage(btn.getAttribute("data-lang"));
  });
});

/* Composición pictórica inspirada en "Say Goodbye, Catullus, to the Shores of Asia Minor"
   (movimiento cromático de derecha a izquierda con la paleta exacta del cuadro) */
function renderCatullusArtwork() {
  const canvas = document.getElementById("catullus-canvas");
  if (!canvas) return;
  const rect = canvas.getBoundingClientRect();
  if (!rect.width || !rect.height) return;

  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  canvas.width = Math.round(rect.width * dpr);
  canvas.height = Math.round(rect.height * dpr);

  const ctx = canvas.getContext("2d");
  ctx.scale(dpr, dpr);

  const W = rect.width;
  const H = rect.height;

  // PRNG determinista para mantener una composición consistente
  let seed = 1994;
  const rand = () => {
    seed = (seed * 16807) % 2147483647;
    return (seed - 1) / 2147483646;
  };

  const palette = {
    alabaster: "#eeeee4",
    cream: "#f0e7d2",
    blush: "#ddcbc6",
    yellow: "#f3d146",
    ochre: "#dcaa61",
    rose: "#e1a8a0",
    slate: "#9ca0af",
    charcoal: "#42383c",
    umber: "#8a605d",
    vermilion: "#e16657"
  };

  // Fondo uniforme base
  ctx.fillStyle = "#f3f4ec";
  ctx.fillRect(0, 0, W, H);

  // Veladuras suaves de transición (de izquierda clara hacia derecha densa)
  const washes = [
    { x: 0.14, y: 0.55, rx: 0.16, ry: 0.42, c: palette.alabaster, a: 0.75 },
    { x: 0.34, y: 0.50, rx: 0.22, ry: 0.45, c: palette.cream, a: 0.65 },
    { x: 0.52, y: 0.52, rx: 0.22, ry: 0.48, c: palette.blush, a: 0.45 },
    { x: 0.68, y: 0.45, rx: 0.20, ry: 0.44, c: palette.rose, a: 0.45 },
    { x: 0.78, y: 0.58, rx: 0.18, ry: 0.42, c: palette.slate, a: 0.42 },
    { x: 0.87, y: 0.46, rx: 0.16, ry: 0.46, c: palette.ochre, a: 0.50 },
    { x: 0.92, y: 0.36, rx: 0.12, ry: 0.36, c: palette.yellow, a: 0.55 },
    { x: 0.95, y: 0.62, rx: 0.12, ry: 0.36, c: palette.vermilion, a: 0.52 }
  ];

  washes.forEach((w) => {
    ctx.save();
    ctx.globalAlpha = w.a;
    ctx.fillStyle = w.c;
    ctx.beginPath();
    ctx.ellipse(w.x * W, w.y * H, w.rx * W, w.ry * H, (rand() - 0.5) * 0.3, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  });

  // Pinceladas y manchas orgánicas cargadas hacia el centro-derecha
  const strokeColors = [
    palette.vermilion,
    palette.yellow,
    palette.ochre,
    palette.rose,
    palette.slate,
    palette.umber,
    palette.charcoal,
    palette.blush,
    palette.cream
  ];

  for (let i = 0; i < 95; i++) {
    // Sesgo hacia la derecha (estilo tríptico Catullus)
    const t = Math.pow(rand(), 0.58);
    const x = W * (0.18 + 0.81 * t);
    const y = H * (0.12 + 0.76 * rand());
    const len = 14 + rand() * 44 * (0.35 + t);
    const angle = (rand() - 0.5) * 1.4;
    const width = 2.5 + rand() * 11 * (0.4 + t);

    ctx.save();
    ctx.globalAlpha = 0.18 + rand() * 0.45;
    ctx.strokeStyle = strokeColors[Math.floor(rand() * strokeColors.length)];
    ctx.lineWidth = width;
    ctx.lineCap = "round";
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.quadraticCurveTo(
      x + Math.cos(angle) * len * 0.5 + (rand() - 0.5) * 10,
      y + Math.sin(angle) * len * 0.5 + (rand() - 0.5) * 10,
      x + Math.cos(angle) * len,
      y + Math.sin(angle) * len
    );
    ctx.stroke();
    ctx.restore();
  }

  // Escurrimientos verticales característicos de pintura líquida
  const dripColors = [palette.vermilion, palette.ochre, palette.umber, palette.slate, palette.charcoal, palette.yellow];
  for (let i = 0; i < 28; i++) {
    const t = Math.pow(rand(), 0.5);
    const x = W * (0.32 + 0.66 * t);
    const yStart = H * (0.15 + 0.45 * rand());
    const yEnd = Math.min(H - 4, yStart + 18 + rand() * (H * 0.55));

    ctx.save();
    ctx.globalAlpha = 0.25 + rand() * 0.45;
    ctx.strokeStyle = dripColors[Math.floor(rand() * dripColors.length)];
    ctx.lineWidth = 0.9 + rand() * 2.4;
    ctx.lineCap = "round";
    ctx.beginPath();
    ctx.moveTo(x, yStart);
    ctx.lineTo(x + (rand() - 0.5) * 2.5, yEnd);
    ctx.stroke();
    ctx.restore();
  }

  // Trazos gestuales expresivos en carbón (#42383c) y bermellón (#e16657)
  for (let i = 0; i < 14; i++) {
    const t = Math.pow(rand(), 0.62);
    const cx = W * (0.25 + 0.72 * t);
    const cy = H * (0.22 + 0.56 * rand());
    const rx = 8 + rand() * 26;
    const ry = 5 + rand() * 16;

    ctx.save();
    ctx.globalAlpha = 0.35 + rand() * 0.42;
    ctx.strokeStyle = i % 3 === 0 ? palette.vermilion : palette.charcoal;
    ctx.lineWidth = 1.1 + rand() * 1.6;
    ctx.lineCap = "round";
    ctx.beginPath();
    for (let s = 0; s <= 18; s++) {
      const a = (s / 18) * Math.PI * (1.4 + rand() * 1.6);
      const px = cx + Math.cos(a) * rx + (rand() - 0.5) * 2.5;
      const py = cy + Math.sin(a) * ry + (rand() - 0.5) * 2.5;
      if (s === 0) ctx.moveTo(px, py);
      else ctx.lineTo(px, py);
    }
    ctx.stroke();
    ctx.restore();
  }

  // Disolución suave hacia los bordes sobre #f3f4ec
  const fadeLeft = ctx.createLinearGradient(0, 0, W * 0.16, 0);
  fadeLeft.addColorStop(0, "#f3f4ec");
  fadeLeft.addColorStop(1, "rgba(243, 244, 236, 0)");
  ctx.fillStyle = fadeLeft;
  ctx.fillRect(0, 0, W * 0.16, H);

  const fadeBottom = ctx.createLinearGradient(0, H * 0.78, 0, H);
  fadeBottom.addColorStop(0, "rgba(243, 244, 236, 0)");
  fadeBottom.addColorStop(1, "#f3f4ec");
  ctx.fillStyle = fadeBottom;
  ctx.fillRect(0, H * 0.78, W, H * 0.22);
}

setLanguage("es");
renderCatullusArtwork();
window.addEventListener("resize", renderCatullusArtwork);
