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

  try {
    localStorage.setItem("site_lang", lang);
  } catch (_) {
    // Ignore storage restriction errors
  }
}

document.querySelectorAll(".lang-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    setLanguage(btn.getAttribute("data-lang"));
  });
});

// Siempre inicia en español salvo que el usuario lo cambie explícitamente en la sesión;
// respetamos español por defecto al cargar.
setLanguage("es");
