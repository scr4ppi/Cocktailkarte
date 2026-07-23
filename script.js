const TIMEZONE = "Europe/Berlin";
const ROTATION_START = "2026-07-11";

// --- 6-WOCHEN WOCHENEND-SPECIAL (FREITAG & SAMSTAG GLEICH) ---
const WEEKEND_SPECIAL_ACTIVE = true;       // Hauptschalter für das 6-Wochen-Event
const WEEKEND_SPECIAL_START = "2026-07-18"; // Startdatum (der erste Freitag der Aktion)
const WEEKEND_SPECIAL_WEEKS = 6;            // Laufzeit in Wochen

const FORCE_SPECIAL_BUTTON = false; // Setze auf false, um es wieder zu deaktivieren

// --- DEINE SCHALTER FÜR HEUTE ---

// SCHALTER 1: 30% Rabatt (20-21 Uhr) und 10% Rabatt (21-22 Uhr)
const PERCENTAGE_DISCOUNT_ACTIVE = false; 

// SCHALTER 2: Normale Happy Hour & Cocktail des Abends
// true = Läuft ganz normal ab 10 Uhr
// false = KOMPLETT ABGESAGT (Button verschwindet, normale Preise)
const REGULAR_HAPPY_HOUR_ACTIVE = true; 

// --------------------------------

const FOUR_WEEK_SPECIALS = [
      {
        "happyHourAlcoholic": ["pina-colada", "cuba-libre", "bahama-mama"],
        "happyHourVirgin": "virgin-colada",
        "cocktailOfTheEvening": "blue-lagoon"
      },
      {
        "happyHourAlcoholic": ["gin-fizz", "sex-on-the-beach", "frozen-daiquiri"],
        "happyHourVirgin": "maracuja-mule",
        "cocktailOfTheEvening": "pisco-sour"
      },
      {
        "happyHourAlcoholic": ["espresso-martini", "melon-sour", "gin-fizz"],
        "happyHourVirgin": "virgin-colada",
        "cocktailOfTheEvening": "solero"
      },
      {
        "happyHourAlcoholic": ["touchdown", "pina-colada", "frozen-aperol"],
        "happyHourVirgin": "maracuja-mule",
        "cocktailOfTheEvening": "frozen-aperol"
      }
    ];

const MANUAL_EVENT_ACTIVE = false;
const MANUAL_EVENT_PRICE = "0,00€";

const MANUAL_EVENT_COCKTAILS = [
  "espresso-martini",
  "solero",
  "tequila-sunrise",
  "cuba-libre"
];

const cocktailProfiles = [
  { id: "whiskey-sour", name: "Whiskey Sour", note: "Kräftig, sauer und klassisch.", fruity: 1, alcohol: 4, sweet: 2, sour: 5, bitter: 1, creamy: 3 },
  { id: "pisco-sour", name: "Pisco Sour", note: "Sauer, frisch und cremig.", fruity: 2, alcohol: 4, sweet: 2, sour: 5, bitter: 1, creamy: 4 },
  { id: "melon-sour", name: "Melon Sour", note: "Fruchtig, süß-sauer und auffällig.", fruity: 5, alcohol: 3, sweet: 4, sour: 4, bitter: 0, creamy: 2 },
  { id: "gin-fizz", name: "Gin Fizz", note: "Frisch, leicht sauer und spritzig.", fruity: 2, alcohol: 3, sweet: 2, sour: 4, bitter: 1, creamy: 1 },
  { id: "mai-tai", name: "Mai Tai", note: "Tropisch, kräftig und rumlastig.", fruity: 4, alcohol: 5, sweet: 3, sour: 3, bitter: 1, creamy: 0 },
  { id: "zombie", name: "Zombie", note: "Sehr stark, tropisch und fruchtig.", fruity: 5, alcohol: 5, sweet: 4, sour: 3, bitter: 1, creamy: 0 },
  { id: "negroni", name: "Negroni", note: "Bitter, stark und spirit-forward.", fruity: 0, alcohol: 5, sweet: 2, sour: 0, bitter: 5, creamy: 0 },
  { id: "martini", name: "Martini", note: "Trocken, stark und sehr klassisch.", fruity: 0, alcohol: 5, sweet: 0, sour: 0, bitter: 2, creamy: 0 },
  { id: "espresso-martini", name: "Espresso Martini", note: "Kräftig, süßlich und koffeinhaltig.", fruity: 0, alcohol: 4, sweet: 3, sour: 0, bitter: 3, creamy: 2 },
  { id: "pina-colada", name: "Piña Colada", note: "Cremig, süß und tropisch.", fruity: 5, alcohol: 3, sweet: 5, sour: 1, bitter: 0, creamy: 5 },
  { id: "sex-on-the-beach", name: "Sex on the Beach", note: "Fruchtig, süß und leicht trinkbar.", fruity: 5, alcohol: 3, sweet: 4, sour: 2, bitter: 0, creamy: 0 },
  { id: "tequila-sunrise", name: "Tequila Sunrise", note: "Fruchtig, süß und orangebetont.", fruity: 5, alcohol: 3, sweet: 4, sour: 1, bitter: 0, creamy: 0 },
  { id: "moscow-mule", name: "Moscow Mule", note: "Frisch, würzig und leicht sauer.", fruity: 2, alcohol: 3, sweet: 2, sour: 3, bitter: 1, creamy: 0 },
  { id: "paloma", name: "Paloma", note: "Herb-fruchtig, frisch und tequila-basiert.", fruity: 3, alcohol: 4, sweet: 2, sour: 3, bitter: 3, creamy: 0 },
  { id: "mojito", name: "Mojito", note: "Frisch, minzig und limettig.", fruity: 2, alcohol: 3, sweet: 3, sour: 4, bitter: 0, creamy: 0 },
  { id: "caipirinha", name: "Caipirinha", note: "Limettig, kräftig und süß-sauer.", fruity: 2, alcohol: 4, sweet: 3, sour: 5, bitter: 0, creamy: 0 },
  { id: "blue-lagoon", name: "Blue Lagoon", note: "Süß-sauer, frisch und auffällig.", fruity: 3, alcohol: 3, sweet: 4, sour: 3, bitter: 0, creamy: 0 },
  { id: "pornstar-martini", name: "Pornstar Martini", note: "Maracuja, Vanille und kräftiger Vodka.", fruity: 5, alcohol: 4, sweet: 4, sour: 2, bitter: 0, creamy: 1 },
  { id: "margarita", name: "Margarita", note: "Tequila, Limette und kräftige Säure.", fruity: 2, alcohol: 4, sweet: 2, sour: 5, bitter: 1, creamy: 0 },
  { id: "solero", name: "Solero", note: "Vanillig, fruchtig und cremig-süß.", fruity: 5, alcohol: 3, sweet: 5, sour: 2, bitter: 0, creamy: 3 },
  { id: "cuba-libre", name: "Cuba Libre", note: "Rum, Cola und Limette. Süß, frisch und unkompliziert.", fruity: 2, alcohol: 3, sweet: 3, sour: 2, bitter: 1, creamy: 0 },
  { id: "bahama-mama", name: "Bahama Mama", note: "Tropisch, fruchtig und rumlastig.", fruity: 5, alcohol: 4, sweet: 4, sour: 2, bitter: 0, creamy: 1 },
 
  { 
  id: "frozen-aperol", 
  name: "Frozen Aperol", 
  note: "Erfrischend, fruchtig und leicht bitter – perfekt als Slush.", 
  fruity: 4, 
  alcohol: 3, 
  sweet: 4, 
  sour: 2, 
  bitter: 2, 
  creamy: 0 
},
  { id: "touchdown", name: "Touchdown", note: "Fruchtig, süß-sauer und partygeeignet.", fruity: 5, alcohol: 3, sweet: 4, sour: 3, bitter: 0, creamy: 0 }
];

const tasteLabels = [
  { key: "fruity", label: "Fruchtig" },
  { key: "alcohol", label: "Alkohol" },
  { key: "sweet", label: "Süß" },
  { key: "sour", label: "Sauer" },
  { key: "bitter", label: "Bitter" },
  { key: "creamy", label: "Cremig" }
];

function getBerlinDateParts(date = new Date()) {
  const formatter = new Intl.DateTimeFormat("de-DE", {
    timeZone: TIMEZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hourCycle: "h23"
  });

  const parts = formatter.formatToParts(date);
  const map = {};

  parts.forEach((part) => {
    if (part.type !== "literal") {
      map[part.type] = part.value;
    }
  });

  const exactDate = new Date(Number(map.year), Number(map.month) - 1, Number(map.day));

  return {
    year: Number(map.year),
    month: Number(map.month),
    day: Number(map.day),
    hour: Number(map.hour),
    minute: Number(map.minute),
    second: Number(map.second),
    weekday: exactDate.getDay() 
  };
}

function getBerlinDateOnly(date = new Date()) {
  const parts = getBerlinDateParts(date);
  return new Date(Date.UTC(parts.year, parts.month - 1, parts.day));
}

function getRotationPlanForDate(dateObj) {
  const startDate = new Date(`${ROTATION_START}T00:00:00Z`);
  const diffMs = dateObj - startDate;
  const diffDays = Math.round(diffMs / 86400000); 
  const diffWeeks = Math.floor(diffDays / 7);

  if (diffWeeks < 0) return FOUR_WEEK_SPECIALS[0];

  return FOUR_WEEK_SPECIALS[diffWeeks % 4];
}

// Prüft, ob das 6-Wochen-Event gerade aktiv ist und es ein Freitag oder Samstag ist
function isWeekendSpecialActiveNow() {
  if (!WEEKEND_SPECIAL_ACTIVE) return false;

  const now = getBerlinDateParts();
  
  // Gilt nur freitags (5) und samstags (6)
  if (now.weekday !== 5 && now.weekday !== 6) return false;

  const nowDate = getBerlinDateOnly();
  const startDate = new Date(`${WEEKEND_SPECIAL_START}T00:00:00Z`);

  const diffMs = nowDate - startDate;
  const diffDays = Math.round(diffMs / 86400000);
  const diffWeeks = Math.floor(diffDays / 7);

  // Ist die Aktion schon gestartet und noch innerhalb der 6 Wochen?
  return diffDays >= 0 && diffWeeks < WEEKEND_SPECIAL_WEEKS;
}

// Holt den aktuellen Rotationsplan
function getCurrentWeekPlan() {
  const now = getBerlinDateParts();
  const nowDate = getBerlinDateOnly();
  
  // Wenn das Special aktiv ist und heute FREITAG ist, tun wir für die 
  // Wochenberechnung so, als wäre es bereits Samstag (+1 Tag).
  // Dadurch wird freitags und samstags exakt derselbe Wochenplan geladen!
  if (isWeekendSpecialActiveNow() && now.weekday === 5) {
    const fakeSaturdayDate = new Date(nowDate.getTime() + 86400000);
    return getRotationPlanForDate(fakeSaturdayDate);
  }
  
  return getRotationPlanForDate(nowDate);
}

function getGlobalDiscountRate() {
  if (!PERCENTAGE_DISCOUNT_ACTIVE) return 0;

  const now = getBerlinDateParts();
  
  if (now.weekday === 6) { 
    if (now.hour === 20) return 0.30; 
    if (now.hour === 21) return 0.10; 
  }
  return 0;
}

function areSpecialsVisible() {
  const now = getBerlinDateParts();
  
  // Sichtbar am Freitag ab 10 Uhr, den gesamten Samstag oder Sonntag bis 10 Uhr morgens
  const isRegularTime = 
    (now.weekday === 5 && now.hour >= 10) || 
    (now.weekday === 6) || 
    (now.weekday === 0 && now.hour < 10);
  
  return (REGULAR_HAPPY_HOUR_ACTIVE && isRegularTime) || getGlobalDiscountRate() > 0 || isWeekendSpecialActiveNow();
}

function isHappyHourActive() {
  if (!REGULAR_HAPPY_HOUR_ACTIVE) return false;
  
  const now = getBerlinDateParts();
  
  return (
    (now.weekday === 5 && now.hour >= 10) || // Freitag ab 10 Uhr
    (now.weekday === 6) ||                   // Der komplette Samstag (deckt Freitagnacht ab!)
    (now.weekday === 0 && now.hour < 10)     // Sonntag bis 10 Uhr morgens (deckt Samstagnacht ab)
  );
}

function isCocktailOfTheEveningActive() {
  if (!REGULAR_HAPPY_HOUR_ACTIVE) return false;

  const now = getBerlinDateParts();
  
  // Freitags NICHT aktiv! 
  // Gilt nur am Samstag ab 10 Uhr bis Sonntagmorgen 10 Uhr.
  return (
    (now.weekday === 6 && now.hour >= 10) || 
    (now.weekday === 0 && now.hour < 10)
  );
}

function updateSpecialButtonVisibility() {
  const button = document.getElementById("special-button");
  if (!button) return;

  // Der Button leuchtet auf der Karte auf, wenn Specials aktiv sind
  const shouldShow = areSpecialsVisible() || FORCE_SPECIAL_BUTTON;
  button.style.display = shouldShow ? "inline-block" : "none";
}

function restoreOriginalPrices(cards) {
  cards.forEach((card) => {
    const priceEl = card.querySelector(".price");
    if (!priceEl) return;

    if (!priceEl.dataset.originalPrice) {
      priceEl.dataset.originalPrice = priceEl.textContent.trim();
    }

    priceEl.textContent = priceEl.dataset.originalPrice;
  });
}

function clearDynamicSpecials(cards) {
  cards.forEach((card) => {
    card.classList.remove("happy-hour", "cocktail-abend", "manual-event", "global-discount");
  });
}

function applyManualEventSpecials(cards) {
  if (!MANUAL_EVENT_ACTIVE) return;

  const now = getBerlinDateParts();
  const currentHour = now.hour;

  let currentPrice = parseFloat(MANUAL_EVENT_PRICE.replace("€", "").replace(",", "."));

  if (currentHour >= 0 && currentHour <= 7) {
    currentPrice += ((currentHour + 1) * 0.5); 
  }

  const formattedPrice = currentPrice.toFixed(2).replace(".", ",") + "€";

  cards.forEach((card) => {
    const drinkId = card.dataset.drinkId;
    if (!drinkId) return;

    if (MANUAL_EVENT_COCKTAILS.includes(drinkId)) {
      card.classList.add("manual-event");
      const priceEl = card.querySelector(".price");
      if (priceEl) {
        priceEl.textContent = formattedPrice;
      }
    }
  });
}

function applyWeeklySpecials(cards) {
  restoreOriginalPrices(cards);
  clearDynamicSpecials(cards);

  const globalDiscount = getGlobalDiscountRate();

  // Rabatte (20-22 Uhr)
  if (globalDiscount > 0) {
    cards.forEach((card) => {
      const priceEl = card.querySelector(".price");
      if (!priceEl) return;

      const basePrice = parseFloat(priceEl.dataset.originalPrice.replace("€", "").replace(",", "."));
      
      if (!isNaN(basePrice)) {
        const discountedPrice = basePrice * (1 - globalDiscount);
        const formattedPrice = discountedPrice.toFixed(2).replace(".", ",");
        const discountPercent = globalDiscount === 0.30 ? "-30%" : "-10%";

        priceEl.innerHTML = `${formattedPrice}€ <span class="discount-badge" style="color: #ff3333; font-weight: bold; margin-left: 5px;">(${discountPercent})</span>`;
        card.classList.add("global-discount");
      }
    });
    return;
  }

  // Normale Specials
  const plan = getCurrentWeekPlan();

  if (plan) {
    const happyHourActive = isHappyHourActive();
    const cocktailOfEveningActive = isCocktailOfTheEveningActive();

    cards.forEach((card) => {
      const drinkId = card.dataset.drinkId;
      if (!drinkId) return;

      const isAlcoholicHappyHour = plan.happyHourAlcoholic.includes(drinkId);
      const isVirginHappyHour = plan.happyHourVirgin === drinkId;
      const isCocktailOfTheEvening = plan.cocktailOfTheEvening === drinkId;

      if (happyHourActive && (isAlcoholicHappyHour || isVirginHappyHour)) {
        card.classList.add("happy-hour");
      }

      if (cocktailOfEveningActive && isCocktailOfTheEvening) {
        card.classList.add("cocktail-abend");
        const priceEl = card.querySelector(".price");
        if (priceEl) {
          priceEl.textContent = "6,00€";
        }
      }
    });
  }

  applyManualEventSpecials(cards);
}

function cardMatchesFilter(card, selectedCategory) {
  const baseCategory = card.dataset.category;

  if (selectedCategory === "all") return true;

  if (selectedCategory === "specials") {
    return (
      card.classList.contains("happy-hour") ||
      card.classList.contains("cocktail-abend") ||
      card.classList.contains("manual-event") ||
      card.classList.contains("global-discount")
    );
  }

  if (selectedCategory === "Seasonal") {
    return card.classList.contains("seasonal");
  }

  return baseCategory === selectedCategory;
}

function applyCurrentFilter(cards) {
  const activeBtn = document.querySelector(".category-btn.active");
  const selectedCategory = activeBtn ? activeBtn.dataset.category : "all";

  cards.forEach((card) => {
    if (cardMatchesFilter(card, selectedCategory)) {
      card.classList.add("active-display");
    } else {
      card.classList.remove("active-display");
      card.classList.remove("open");
    }
  });
}

function getWantedProfile(tasteInputs) {
  const profile = {};
  tasteInputs.forEach((input) => {
    profile[input.dataset.taste] = Number(input.value);
  });
  return profile;
}

function calculateMatch(wanted, cocktail) {
  let difference = 0;
  tasteLabels.forEach((item) => {
    difference += Math.abs(wanted[item.key] - cocktail[item.key]);
  });

  const maxDifference = tasteLabels.length * 5;
  const match = Math.round((1 - difference / maxDifference) * 100);

  return Math.max(0, match);
}

function getSortedMatches(tasteInputs) {
  const wanted = getWantedProfile(tasteInputs);

  return cocktailProfiles
    .map((cocktail) => ({
      ...cocktail,
      match: calculateMatch(wanted, cocktail)
    }))
    .sort((a, b) => b.match - a.match)
    .slice(0, 5);
}

function getAngle(index, total) {
  return -Math.PI / 2 + index * ((Math.PI * 2) / total);
}

function drawPolygon(ctx, centerX, centerY, radius, sides, fill) {
  ctx.beginPath();
  for (let i = 0; i < sides; i++) {
    const angle = getAngle(i, sides);
    const x = centerX + Math.cos(angle) * radius;
    const y = centerY + Math.sin(angle) * radius;

    if (i === 0) {
      ctx.moveTo(x, y);
    } else {
      ctx.lineTo(x, y);
    }
  }
  ctx.closePath();

  if (fill) {
    ctx.fill();
  } else {
    ctx.stroke();
  }
}

function drawRadar(radarCanvas, tasteInputs) {
  if (!radarCanvas) return;

  const ctx = radarCanvas.getContext("2d");
  const wanted = getWantedProfile(tasteInputs);

  const width = radarCanvas.width;
  const height = radarCanvas.height;
  const centerX = width / 2;
  const centerY = height / 2;
  const maxRadius = 95;

  ctx.clearRect(0, 0, width, height);

  ctx.lineWidth = 1;
  ctx.strokeStyle = "rgba(255, 255, 255, 0.16)";
  ctx.fillStyle = "rgba(255, 255, 255, 0.62)";
  ctx.font = "11px Arial";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";

  for (let level = 1; level <= 5; level++) {
    const radius = (maxRadius / 5) * level;
    drawPolygon(ctx, centerX, centerY, radius, tasteLabels.length, false);
  }

  tasteLabels.forEach((item, index) => {
    const angle = getAngle(index, tasteLabels.length);
    const x = centerX + Math.cos(angle) * (maxRadius + 24);
    const y = centerY + Math.sin(angle) * (maxRadius + 24);

    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(centerX + Math.cos(angle) * maxRadius, centerY + Math.sin(angle) * maxRadius);
    ctx.stroke();

    ctx.fillText(item.label, x, y);
  });

  ctx.beginPath();
  tasteLabels.forEach((item, index) => {
    const value = wanted[item.key];
    const radius = (maxRadius / 5) * value;
    const angle = getAngle(index, tasteLabels.length);
    const x = centerX + Math.cos(angle) * radius;
    const y = centerY + Math.sin(angle) * radius;

    if (index === 0) {
      ctx.moveTo(x, y);
    } else {
      ctx.lineTo(x, y);
    }
  });
  ctx.closePath();
  ctx.fillStyle = "rgba(255, 51, 51, 0.32)";
  ctx.fill();

  ctx.lineWidth = 3;
  ctx.strokeStyle = "rgba(255, 51, 51, 0.95)";
  ctx.stroke();
}

document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");
  const categoryBtns = document.querySelectorAll(".category-btn");

  const openDrinkFinderBtn = document.getElementById("openDrinkFinder");
  const closeDrinkFinderBtn = document.getElementById("closeDrinkFinder");
  const drinkFinderModal = document.getElementById("drinkFinderModal");
  const tasteInputs = document.querySelectorAll("[data-taste]");
  const finderResults = document.getElementById("finderResults");
  const radarCanvas = document.getElementById("tasteRadar");

  function closeDrinkFinder() {
    if (!drinkFinderModal) return;
    drinkFinderModal.classList.remove("show");
    drinkFinderModal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  function renderFinderResults() {
    if (!finderResults) return;

    const matches = getSortedMatches(tasteInputs);

    finderResults.innerHTML = matches
      .map((drink) => `
        <button class="finder-result" type="button" data-target-drink="${drink.id}">
          <strong>${drink.name} <span class="finder-match">${drink.match}%</span></strong>
          <span>${drink.note}</span>
        </button>
      `)
      .join("");

    document.querySelectorAll("[data-target-drink]").forEach((button) => {
      button.addEventListener("click", () => {
        const drinkId = button.dataset.targetDrink;
        const card = document.querySelector(`[data-drink-id="${drinkId}"]`);

        if (!card) {
          alert("Dieser Cocktail ist aktuell nicht als Karte auf der Seite vorhanden.");
          return;
        }

        closeDrinkFinder();
        cards.forEach((c) => c.classList.remove("open"));

        setTimeout(() => {
          card.scrollIntoView({ behavior: "smooth", block: "center" });
          card.classList.add("open");
          const toggle = card.querySelector(".card-toggle");
          if (toggle) {
            toggle.setAttribute("aria-expanded", "true");
          }
        }, 120);
      });
    });
  }

  function updateDrinkFinder() {
    drawRadar(radarCanvas, tasteInputs);
    renderFinderResults();
  }

  function openDrinkFinder() {
    if (!drinkFinderModal) return;
    drinkFinderModal.classList.add("show");
    drinkFinderModal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    updateDrinkFinder();
  }

  document.querySelectorAll(".card-image").forEach((img) => {
    if (img.complete) {
      img.classList.add("loaded");
    } else {
      img.addEventListener("load", () => {
        img.classList.add("loaded");
      });
    }
  });

  applyWeeklySpecials(cards);
  updateSpecialButtonVisibility();
  applyCurrentFilter(cards);

  cards.forEach((card) => {
    const button = card.querySelector(".card-toggle");
    if (!button) return;

    button.addEventListener("click", () => {
      const wasOpen = card.classList.contains("open");
      const drinkTitle = card.querySelector(".card-title")?.innerText || "Unbekannt";

      cards.forEach((c) => c.classList.remove("open"));

      if (!wasOpen) {
        card.classList.add("open");
        if (typeof gtag === "function") {
          gtag("event", "view_drink_details", { drink_name: drinkTitle });
        }
      }
    });
  });

  categoryBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const categoryName = btn.innerText || btn.dataset.category;
      categoryBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      applyCurrentFilter(cards);

      if (typeof gtag === "function") {
        gtag("event", "select_category", { category_id: categoryName.trim() });
      }
    });
  });

  if (openDrinkFinderBtn) openDrinkFinderBtn.addEventListener("click", openDrinkFinder);
  if (closeDrinkFinderBtn) closeDrinkFinderBtn.addEventListener("click", closeDrinkFinder);

  if (drinkFinderModal) {
    drinkFinderModal.addEventListener("click", (event) => {
      if (event.target === drinkFinderModal) closeDrinkFinder();
    });
  }

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeDrinkFinder();
  });

  tasteInputs.forEach((input) => {
    input.addEventListener("input", updateDrinkFinder);
  });

  updateDrinkFinder();

  setInterval(() => {
    applyWeeklySpecials(cards);
    updateSpecialButtonVisibility();
    applyCurrentFilter(cards);
  }, 60000);
});
