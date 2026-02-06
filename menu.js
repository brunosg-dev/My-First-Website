const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");
const navbar = document.querySelector("nav");

toggle.addEventListener("click", () => {
  nav.classList.toggle("show");
});

const updateNavTransparency = () => {
  if (!navbar) return;
  if (window.scrollY > 5) {
    navbar.classList.add("nav-scrolled");
  } else {
    navbar.classList.remove("nav-scrolled");
  }
};

window.addEventListener("scroll", updateNavTransparency, { passive: true });
window.addEventListener("load", updateNavTransparency);

const translations = {
  "en-GB": {
    "nav.home": "Home",
    "nav.plans": "Plans",
    "nav.about": "About Us",
    "nav.gallery": "Gallery",
    "nav.contact": "Contact Us",
    "home.hero.title": "Welcome to NexurTrade",
    "home.hero.subtitle": "Automate your trading. Master the strategy. Multiply your results.",
    "home.hero.ctaPrimary": "Get Started",
    "home.hero.ctaSecondary": "View Plans",
    "home.discovery.title": "Discover NexurTrade Script",
    "home.discovery.body": "Sail through your sessions with NexurTrade Script’s clean, early candle triggers, automatic hour checkpoints, and smart GALE tracking. Each alert is curated for clarity, helping you act with confidence and stay disciplined. Enjoy a smooth, transparent view of performance that keeps your focus on execution.",
    "about.title": "About NexurTrade Script",
    "about.p1": "NexurTrade Script is the brainchild of Bruno Silva Gomes, a seasoned trader with over a decade of experience in binary options trading. Frustrated by the lack of reliable tools in the market, Bruno set out to create a solution that would empower traders to make informed decisions with confidence.",
    "about.p2": "Since its inception, NexurTrade Script has evolved into a comprehensive trading system that combines advanced indicators, user-friendly interfaces, and robust support. Our mission is to help traders of all levels achieve consistent success in the fast-paced world of binary options.",
    "about.p3": "At NexurTrade Script, we believe that trading is not just about luck; it's about strategy, discipline, and the right tools. Join us on this journey to elevate your trading experience and unlock your full potential.",
    "about.cta.title": "Ready to start your trading journey with NexurTrade Script?",
    "about.cta.button": "Get Started",
    "contact.note": "Not sure which plan fits your needs?",
    "contact.compareLink": "Compare NexurTrade Script Plans",
    "contact.title": "Request Access to NexurTrade Script",
    "contact.firstName": "First Name",
    "contact.firstName.placeholder": "David",
    "contact.surname": "Surname",
    "contact.surname.placeholder": "Smith",
    "contact.email": "Email",
    "contact.email.placeholder": "david.smith@example.com",
    "contact.plan": "Select Your Option",
    "contact.plan.basic": "Basic License - $49.99",
    "contact.plan.pro": "Pro License - $99.99",
    "contact.plan.lifetime": "Lifetime Access - $299.99",
    "contact.message": "Additional Message",
    "contact.message.placeholder": "Write any specific requests or questions here...",
    "contact.submit": "Submit",
    "gallery.title": "NexurTrade Pictures Gallery",
    "gallery.item1.title": "EUR/USD Analysis — Identifying Key Reversal Points",
    "gallery.item1.caption": "EUR/USD trend reversal with NexurTrade Script.",
    "gallery.item2.title": "EUR/JPY Setup — Trend Continuation Example",
    "gallery.item2.caption": "EUR/JPY trend continuation setup.",
    "gallery.item3.title": "GBP/JPY Entry Timing — Precision Candle Reading",
    "gallery.item3.caption": "GBP/JPY entry timing using NexurTrade Script.",
    "gallery.item4.title": "GBP/JPY Signal Confirmation — Multi-Indicator Strategy",
    "gallery.item4.caption": "GBP/JPY multi-indicator signal confirmation.",
    "plans.hero.title": "Choose Your Plan",
    "plans.hero.subtitle.line1": "choose the plan that best fits your trading needs and",
    "plans.hero.subtitle.line2": "start your journey with NexurTrade Script today!",
    "plans.basic.title": "Basic License",
    "plans.pro.title": "Pro License",
    "plans.pro.badge": "Best Value",
    "plans.cta": "GET STARTED",
    "plans.features.supertrend": "Supertrend Indicator",
    "plans.features.adx": "ADX Indicator",
    "plans.features.updates": "Future Updates",
    "plans.features.priority": "Priority Email Support",
    "plans.why.title": "Why Choose NexurTrade Script?",
    "plans.why.alerts.title": "Early Alerts",
    "plans.why.alerts.body": "Receive timely notifications before market shifts, allowing you to act with confidence and precision.",
    "plans.why.automation.title": "Automation",
    "plans.why.automation.body": "Let the system handle repetitive tasks automatically, saving you time and effort.",
    "plans.why.tracking.title": "Precise Tracking",
    "plans.why.tracking.body": "Monitor your trades and performance with detailed analytics and real-time updates.",
    "plans.testimonial.hearFrom": "HEAR FROM",
    "plans.testimonial.ourUsers": "OUR USERS",
    "plans.testimonial.body1": "NexurTrade Script has transformed my trading experience.",
    "plans.testimonial.body2": "The early alerts and automation features have saved me time and increased my profits significantly.",
    "plans.testimonial.body3": "Highly recommended!",
    "plans.testimonial.role": "Active Trader",
    "table.title": "Comparison of NexurTrade Script Plans",
    "table.header.feature": "Feature",
    "table.header.basic": "Basic License",
    "table.header.pro": "Pro License",
    "table.row.price": "Price",
    "table.row.supertrend": "Access to Supertrend Indicator",
    "table.row.adx": "Access to ADX Indicator",
    "table.row.priority": "Priority Email Support",
    "table.row.updates": "Access to Future Updates",
    "table.value.included": "Included",
    "table.value.yes": "Yes",
    "table.value.no": "No",
    "table.cta": "Get Started",
    "footer.copyright": "© 2025 NexurTrade. All rights reserved",
  },
  "es-ES": {
    "nav.home": "Inicio",
    "nav.plans": "Planes",
    "nav.about": "Sobre Nosotros",
    "nav.gallery": "Galería",
    "nav.contact": "Contáctanos",
    "home.hero.title": "Bienvenido a NexurTrade",
    "home.hero.subtitle": "Automatiza tu trading. Domina la estrategia. Multiplica tus resultados.",
    "home.hero.ctaPrimary": "Comenzar",
    "home.hero.ctaSecondary": "Ver Planes",
    "home.discovery.title": "Descubre NexurTrade Script",
    "home.discovery.body": "Navega tus sesiones con los disparos tempranos de velas de NexurTrade Script, puntos de control por hora automáticos y seguimiento GALE inteligente. Cada alerta está diseñada para la claridad, ayudándote a actuar con confianza y disciplina. Disfruta de una vista fluida y transparente del rendimiento que mantiene tu enfoque en la ejecución.",
    "about.title": "Acerca de NexurTrade Script",
    "about.p1": "NexurTrade Script es la creación de Bruno Silva Gomes, un trader experimentado con más de una década de experiencia en trading de opciones binarias. Frustrado por la falta de herramientas fiables en el mercado, Bruno se propuso crear una solución que permitiera a los traders tomar decisiones informadas con confianza.",
    "about.p2": "Desde sus inicios, NexurTrade Script ha evolucionado hasta convertirse en un sistema de trading integral que combina indicadores avanzados, interfaces fáciles de usar y un soporte sólido. Nuestra misión es ayudar a traders de todos los niveles a alcanzar un éxito constante en el vertiginoso mundo de las opciones binarias.",
    "about.p3": "En NexurTrade Script, creemos que el trading no se trata solo de suerte; se trata de estrategia, disciplina y las herramientas adecuadas. Únete a nosotros para elevar tu experiencia de trading y liberar todo tu potencial.",
    "about.cta.title": "¿Listo para comenzar tu viaje de trading con NexurTrade Script?",
    "about.cta.button": "Comenzar",
    "contact.note": "¿No estás seguro de qué plan se adapta a tus necesidades?",
    "contact.compareLink": "Comparar Planes de NexurTrade Script",
    "contact.title": "Solicitar Acceso a NexurTrade Script",
    "contact.firstName": "Nombre",
    "contact.firstName.placeholder": "David",
    "contact.surname": "Apellido",
    "contact.surname.placeholder": "García",
    "contact.email": "Correo electrónico",
    "contact.email.placeholder": "david.garcia@ejemplo.com",
    "contact.plan": "Selecciona tu opción",
    "contact.plan.basic": "Licencia Básica - $49.99",
    "contact.plan.pro": "Licencia Pro - $99.99",
    "contact.plan.lifetime": "Acceso de por vida - $299.99",
    "contact.message": "Mensaje adicional",
    "contact.message.placeholder": "Escribe aquí cualquier solicitud o pregunta específica...",
    "contact.submit": "Enviar",
    "gallery.title": "Galería de Imágenes de NexurTrade",
    "gallery.item1.title": "Análisis EUR/USD — Identificación de puntos clave de reversión",
    "gallery.item1.caption": "Reversión de tendencia EUR/USD con NexurTrade Script.",
    "gallery.item2.title": "Configuración EUR/JPY — Ejemplo de continuación de tendencia",
    "gallery.item2.caption": "Configuración de continuación de tendencia EUR/JPY.",
    "gallery.item3.title": "Timing de entrada GBP/JPY — Lectura precisa de velas",
    "gallery.item3.caption": "Timing de entrada GBP/JPY usando NexurTrade Script.",
    "gallery.item4.title": "Confirmación de señal GBP/JPY — Estrategia multiindicador",
    "gallery.item4.caption": "Confirmación de señal multiindicador GBP/JPY.",
    "plans.hero.title": "Elige tu plan",
    "plans.hero.subtitle.line1": "elige el plan que mejor se adapte a tus necesidades de trading y",
    "plans.hero.subtitle.line2": "comienza tu viaje con NexurTrade Script hoy mismo.",
    "plans.basic.title": "Licencia Básica",
    "plans.pro.title": "Licencia Pro",
    "plans.pro.badge": "Mejor opción",
    "plans.cta": "COMENZAR",
    "plans.features.supertrend": "Indicador Supertrend",
    "plans.features.adx": "Indicador ADX",
    "plans.features.updates": "Actualizaciones futuras",
    "plans.features.priority": "Soporte prioritario por email",
    "plans.why.title": "¿Por qué elegir NexurTrade Script?",
    "plans.why.alerts.title": "Alertas tempranas",
    "plans.why.alerts.body": "Recibe notificaciones a tiempo antes de los cambios del mercado, lo que te permite actuar con confianza y precisión.",
    "plans.why.automation.title": "Automatización",
    "plans.why.automation.body": "Deja que el sistema maneje tareas repetitivas automáticamente, ahorrándote tiempo y esfuerzo.",
    "plans.why.tracking.title": "Seguimiento preciso",
    "plans.why.tracking.body": "Monitorea tus operaciones y rendimiento con analíticas detalladas y actualizaciones en tiempo real.",
    "plans.testimonial.hearFrom": "OPINIONES",
    "plans.testimonial.ourUsers": "DE NUESTROS USUARIOS",
    "plans.testimonial.body1": "NexurTrade Script ha transformado mi experiencia de trading.",
    "plans.testimonial.body2": "Las alertas tempranas y la automatización me han ahorrado tiempo y han incrementado mis ganancias de forma significativa.",
    "plans.testimonial.body3": "¡Totalmente recomendado!",
    "plans.testimonial.role": "Trader activo",
    "table.title": "Comparación de planes de NexurTrade Script",
    "table.header.feature": "Característica",
    "table.header.basic": "Licencia Básica",
    "table.header.pro": "Licencia Pro",
    "table.row.price": "Precio",
    "table.row.supertrend": "Acceso al indicador Supertrend",
    "table.row.adx": "Acceso al indicador ADX",
    "table.row.priority": "Soporte prioritario por email",
    "table.row.updates": "Acceso a actualizaciones futuras",
    "table.value.included": "Incluido",
    "table.value.yes": "Sí",
    "table.value.no": "No",
    "table.cta": "Comenzar",
    "footer.copyright": "© 2025 NexurTrade. Todos los derechos reservados",
  },
  "pt-BR": {
    "nav.home": "Início",
    "nav.plans": "Planos",
    "nav.about": "Sobre Nós",
    "nav.gallery": "Galeria",
    "nav.contact": "Contato",
    "home.hero.title": "Bem-vindo à NexurTrade",
    "home.hero.subtitle": "Automatize seu trading. Domine a estratégia. Multiplique seus resultados.",
    "home.hero.ctaPrimary": "Começar",
    "home.hero.ctaSecondary": "Ver Planos",
    "home.discovery.title": "Descubra o NexurTrade Script",
    "home.discovery.body": "Navegue suas sessões com os disparos antecipados de velas do NexurTrade Script, checkpoints automáticos por hora e acompanhamento GALE inteligente. Cada alerta é pensado para clareza, ajudando você a agir com confiança e disciplina. Aproveite uma visão fluida e transparente do desempenho que mantém seu foco na execução.",
    "about.title": "Sobre o NexurTrade Script",
    "about.p1": "NexurTrade Script é a criação de Bruno Silva Gomes, um trader experiente com mais de uma década de atuação em opções binárias. Frustrado com a falta de ferramentas confiáveis no mercado, Bruno decidiu criar uma solução que permitisse aos traders tomar decisões informadas com confiança.",
    "about.p2": "Desde o início, o NexurTrade Script evoluiu para um sistema de trading completo que combina indicadores avançados, interfaces fáceis de usar e suporte robusto. Nossa missão é ajudar traders de todos os níveis a alcançar sucesso consistente no mundo acelerado das opções binárias.",
    "about.p3": "No NexurTrade Script, acreditamos que trading não é apenas sorte; é estratégia, disciplina e as ferramentas certas. Junte-se a nós nesta jornada para elevar sua experiência de trading e desbloquear todo o seu potencial.",
    "about.cta.title": "Pronto para começar sua jornada de trading com o NexurTrade Script?",
    "about.cta.button": "Começar",
    "contact.note": "Não tem certeza de qual plano atende às suas necessidades?",
    "contact.compareLink": "Comparar Planos do NexurTrade Script",
    "contact.title": "Solicitar Acesso ao NexurTrade Script",
    "contact.firstName": "Nome",
    "contact.firstName.placeholder": "Bruno",
    "contact.surname": "Sobrenome",
    "contact.surname.placeholder": "Silva",
    "contact.email": "E-mail",
    "contact.email.placeholder": "bruno.silva@exemplo.com",
    "contact.plan": "Selecione sua opção",
    "contact.plan.basic": "Licença Básica - $49.99",
    "contact.plan.pro": "Licença Pro - $99.99",
    "contact.plan.lifetime": "Acesso vitalício - $299.99",
    "contact.message": "Mensagem adicional",
    "contact.message.placeholder": "Escreva aqui solicitações ou perguntas específicas...",
    "contact.submit": "Enviar",
    "gallery.title": "Galeria de Imagens NexurTrade",
    "gallery.item1.title": "Análise EUR/USD — Identificação de pontos-chave de reversão",
    "gallery.item1.caption": "Reversão de tendência EUR/USD com o NexurTrade Script.",
    "gallery.item2.title": "Configuração EUR/JPY — Exemplo de continuação de tendência",
    "gallery.item2.caption": "Configuração de continuação de tendência EUR/JPY.",
    "gallery.item3.title": "Timing de entrada GBP/JPY — Leitura precisa de velas",
    "gallery.item3.caption": "Timing de entrada GBP/JPY usando o NexurTrade Script.",
    "gallery.item4.title": "Confirmação de sinal GBP/JPY — Estratégia multiindicadores",
    "gallery.item4.caption": "Confirmação de sinal multiindicadores GBP/JPY.",
    "plans.hero.title": "Escolha seu plano",
    "plans.hero.subtitle.line1": "escolha o plano que melhor se adapta às suas necessidades de trading e",
    "plans.hero.subtitle.line2": "comece sua jornada com o NexurTrade Script hoje mesmo.",
    "plans.basic.title": "Licença Básica",
    "plans.pro.title": "Licença Pro",
    "plans.pro.badge": "Melhor custo-benefício",
    "plans.cta": "COMEÇAR",
    "plans.features.supertrend": "Indicador Supertrend",
    "plans.features.adx": "Indicador ADX",
    "plans.features.updates": "Atualizações futuras",
    "plans.features.priority": "Suporte prioritário por e-mail",
    "plans.why.title": "Por que escolher o NexurTrade Script?",
    "plans.why.alerts.title": "Alertas antecipados",
    "plans.why.alerts.body": "Receba notificações no momento certo antes das mudanças do mercado, permitindo agir com confiança e precisão.",
    "plans.why.automation.title": "Automação",
    "plans.why.automation.body": "Deixe o sistema cuidar de tarefas repetitivas automaticamente, economizando tempo e esforço.",
    "plans.why.tracking.title": "Rastreamento preciso",
    "plans.why.tracking.body": "Acompanhe suas operações e desempenho com análises detalhadas e atualizações em tempo real.",
    "plans.testimonial.hearFrom": "OPINIÕES",
    "plans.testimonial.ourUsers": "DOS NOSSOS USUÁRIOS",
    "plans.testimonial.body1": "O NexurTrade Script transformou minha experiência de trading.",
    "plans.testimonial.body2": "Os alertas antecipados e a automação me economizaram tempo e aumentaram meus lucros de forma significativa.",
    "plans.testimonial.body3": "Altamente recomendado!",
    "plans.testimonial.role": "Trader ativo",
    "table.title": "Comparação dos planos do NexurTrade Script",
    "table.header.feature": "Recurso",
    "table.header.basic": "Licença Básica",
    "table.header.pro": "Licença Pro",
    "table.row.price": "Preço",
    "table.row.supertrend": "Acesso ao indicador Supertrend",
    "table.row.adx": "Acesso ao indicador ADX",
    "table.row.priority": "Suporte prioritário por e-mail",
    "table.row.updates": "Acesso a atualizações futuras",
    "table.value.included": "Incluído",
    "table.value.yes": "Sim",
    "table.value.no": "Não",
    "table.cta": "Começar",
    "footer.copyright": "© 2025 NexurTrade. Todos os direitos reservados",
  },
};

const langSelect = document.querySelector("#lang-select");

const applyLanguage = (lang) => {
  document.documentElement.lang = lang;
  const dict = translations[lang];
  if (!dict) return;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (dict[key]) {
      el.setAttribute("placeholder", dict[key]);
    }
  });

  document.querySelectorAll("[data-i18n-value]").forEach((el) => {
    const key = el.getAttribute("data-i18n-value");
    if (dict[key]) {
      el.setAttribute("value", dict[key]);
    }
  });

  document.querySelectorAll("[data-i18n-title]").forEach((el) => {
    const key = el.getAttribute("data-i18n-title");
    if (dict[key]) {
      el.setAttribute("title", dict[key]);
      el.setAttribute("data-title", dict[key]);
    }
  });

  localStorage.setItem("site-lang", lang);
};

if (langSelect) {
  const saved = localStorage.getItem("site-lang") || "en-GB";
  langSelect.value = saved;
  applyLanguage(saved);

  langSelect.addEventListener("change", (e) => {
    applyLanguage(e.target.value);
  });
}
