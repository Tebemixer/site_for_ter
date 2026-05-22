const repairCategories = [
  {
    id: "cosmetic",
    title: "Косметический ремонт",
    lead: "Обновление квартиры, офиса или комнаты без сложной инженерии и долгого демонтажа.",
    works: [
      "Покраска стен и потолков",
      "Поклейка обоев",
      "Укладка ламината и плинтусов",
      "Замена розеток и выключателей",
      "Локальная шпаклевка и выравнивание",
      "Подготовка квартиры к сдаче или продаже",
    ],
    tags: ["от 3 500 ₽/м²", "обычно от 7 дней", "подходит для новостроек"],
  },
  {
    id: "capital",
    title: "Капитальный ремонт",
    lead: "Комплексная подготовка и отделка помещений с заменой инженерных узлов.",
    works: [
      "Демонтаж старых покрытий",
      "Выравнивание стен и полов",
      "Электрика и сантехническая разводка",
      "Стяжка, наливной пол, гидроизоляция",
      "Плиточные работы и чистовая отделка",
      "Монтаж дверей, откосов и финишных элементов",
    ],
    tags: ["от 8 500 ₽/м²", "смета по объекту", "для вторички и домов"],
  },
  {
    id: "designer",
    title: "Дизайнерский ремонт",
    lead: "Аккуратная реализация сложной отделки, декоративных покрытий и световых решений.",
    works: [
      "Монтаж ниш, коробов и скрытой подсветки",
      "Декоративная штукатурка и акцентные стены",
      "Точная раскладка плитки и керамогранита",
      "Сложные потолочные решения",
      "Подгонка чистовых узлов и примыканий",
      "Финишная подготовка под мебель и технику",
    ],
    tags: ["от 12 500 ₽/м²", "по проекту или эскизу", "повышенная детализация"],
  },
];

const workDirections = [
  {
    title: "Ремонт санузла",
    text: "Плитка, гидроизоляция, сантехника, короба, ревизионные люки и чистовой монтаж.",
    price: "от 95 000 ₽",
  },
  {
    title: "Электрика",
    text: "Разводка линий, розетки, выключатели, освещение, подготовка под технику.",
    price: "от 900 ₽/точка",
  },
  {
    title: "Сантехника",
    text: "Разводка труб, замена узлов, подключение ванны, раковины, унитаза и смесителей.",
    price: "от 2 500 ₽/точка",
  },
  {
    title: "Стены",
    text: "Штукатурка, шпаклевка, покраска, обои, декоративные покрытия и подготовка оснований.",
    price: "от 450 ₽/м²",
  },
  {
    title: "Полы",
    text: "Стяжка, наливной пол, ламинат, кварцвинил, плитка, плинтусы и пороги.",
    price: "от 550 ₽/м²",
  },
  {
    title: "Потолки",
    text: "Выравнивание, покраска, гипсокартонные конструкции, короба и световые линии.",
    price: "от 600 ₽/м²",
  },
];

const prices = [
  {
    title: "Косметический ремонт",
    value: "от 3 500 ₽/м²",
    text: "Обои, покраска, ламинат, плинтусы, локальная подготовка поверхностей.",
  },
  {
    title: "Капитальный ремонт",
    value: "от 8 500 ₽/м²",
    text: "Демонтаж, инженерия, выравнивание, плитка, полы, стены и чистовая отделка.",
    featured: true,
  },
  {
    title: "Дизайнерский ремонт",
    value: "от 12 500 ₽/м²",
    text: "Сложные узлы, декоративные покрытия, подсветка и повышенная точность отделки.",
  },
  {
    title: "Ремонт санузла",
    value: "от 95 000 ₽",
    text: "Гидроизоляция, плитка, сантехника, короба, люки и чистовой монтаж.",
  },
  {
    title: "Электромонтаж",
    value: "от 900 ₽/точка",
    text: "Розетки, выключатели, свет, разводка и подготовка под бытовую технику.",
  },
  {
    title: "Плиточные работы",
    value: "от 1 800 ₽/м²",
    text: "Укладка плитки и керамогранита, подрезка, затирка, аккуратные примыкания.",
  },
];

const gallery = [
  {
    src: "assets/images/gallery-bathroom.webp",
    alt: "Пример ремонта санузла с плиткой и сантехникой",
    caption: "Санузел: плитка, сантехника, чистовой монтаж",
  },
  {
    src: "assets/images/gallery-cosmetic.webp",
    alt: "Пример косметического ремонта комнаты",
    caption: "Косметический ремонт: стены, пол и плинтусы",
  },
  {
    src: "assets/images/gallery-designer.webp",
    alt: "Пример дизайнерской отделки кухни-гостиной",
    caption: "Дизайнерская отделка: кухня-гостиная",
  },
];

function renderServiceTabs() {
  const tabs = document.querySelector("#service-tabs");
  const panel = document.querySelector("#service-panel");

  if (!tabs || !panel) return;

  panel.setAttribute("role", "tabpanel");

  const renderPanel = (category) => {
    panel.innerHTML = "";

    const title = document.createElement("h3");
    title.textContent = category.title;

    const lead = document.createElement("p");
    lead.textContent = category.lead;

    const workList = document.createElement("ul");
    workList.className = "work-list";

    category.works.forEach((work) => {
      const item = document.createElement("li");
      item.textContent = work;
      workList.append(item);
    });

    const meta = document.createElement("div");
    meta.className = "service-meta";

    category.tags.forEach((tag) => {
      const item = document.createElement("span");
      item.textContent = tag;
      meta.append(item);
    });

    panel.append(title, lead, workList, meta);
  };

  const setActive = (category) => {
    tabs.querySelectorAll(".tab-button").forEach((button) => {
      button.setAttribute("aria-selected", String(button.dataset.target === category.id));
    });
    renderPanel(category);
  };

  repairCategories.forEach((category, index) => {
    const button = document.createElement("button");
    button.className = "tab-button";
    button.type = "button";
    button.setAttribute("role", "tab");
    button.dataset.target = category.id;
    button.textContent = category.title;
    button.setAttribute("aria-selected", String(index === 0));
    button.addEventListener("click", () => setActive(category));
    tabs.append(button);
  });

  renderPanel(repairCategories[0]);
}

function renderDirections() {
  const grid = document.querySelector("#direction-grid");

  if (!grid) return;

  workDirections.forEach((direction) => {
    const card = document.createElement("article");
    card.className = "direction-card";

    const title = document.createElement("h3");
    title.textContent = direction.title;

    const text = document.createElement("p");
    text.textContent = direction.text;

    const price = document.createElement("strong");
    price.textContent = direction.price;

    card.append(title, text, price);
    grid.append(card);
  });
}

function renderPrices() {
  const grid = document.querySelector("#price-grid");

  if (!grid) return;

  grid.innerHTML = "";

  prices.forEach((price) => {
    const card = document.createElement("article");
    card.className = price.featured ? "price-card featured" : "price-card";

    const title = document.createElement("h3");
    title.textContent = price.title;

    const value = document.createElement("p");
    value.className = "price-value";
    value.textContent = price.value;

    const text = document.createElement("p");
    text.textContent = price.text;

    card.append(title, value, text);
    grid.append(card);
  });
}

function renderGallery() {
  const grid = document.querySelector("#gallery-grid");

  if (!grid) return;

  grid.innerHTML = "";

  gallery.forEach((item) => {
    const figure = document.createElement("figure");
    const image = document.createElement("img");
    const caption = document.createElement("figcaption");

    image.src = item.src;
    image.alt = item.alt;
    image.loading = "lazy";
    image.decoding = "async";
    caption.textContent = item.caption;

    figure.append(image, caption);
    grid.append(figure);
  });
}

renderServiceTabs();
renderDirections();
renderPrices();
renderGallery();
