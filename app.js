// ==============================
// DATA INICIAL (hardcodeada)
// ==============================

const initialProducts = [
  {
    "id": 1580,
    "productName": "Toma doble (20A) (embutir) (Jeluz Platinum)",
    "price": 4000
  },
  {
    "id": 1570,
    "productName": "1 toma 20A (embutir) (Jeluz Platinum)",
    "price": 2600
  },
  {
    "id": 1560,
    "productName": "1 toma 10A (embutir) (Jeluz Platinum)",
    "price": 2000
  },
  {
    "id": 1550,
    "productName": "2 toma + 1 punto común (embutir) (Jeluz Platinum)",
    "price": 3600
  },
  {
    "id": 1540,
    "productName": "2 puntos comunes + 1 toma (embutir) (Jeluz Platinum)",
    "price": 3600
  },
  {
    "id": 1530,
    "productName": "Punto y toma (embutir) (Jeluz Platinum)",
    "price": 2800
  },
  {
    "id": 1520,
    "productName": "Toma doble (embutir) (Jeluz Platinum)",
    "price": 2800
  },
  {
    "id": 1510,
    "productName": "Tapa blanca para bastidor mignon (Jeluz Platinum)",
    "price": 500
  },
  {
    "id": 1500,
    "productName": "Bastidor oculto mignon 5x5 (Jeluz Platinum)",
    "price": 400
  },
  {
    "id": 1490,
    "productName": "Tapa bastidor (Jeluz Mito)",
    "price": 700
  },
  {
    "id": 1480,
    "productName": "Bastidor oculto 5x10 (Jeluz Platinum)",
    "price": 400
  },
  {
    "id": 1470,
    "productName": "Tapa blanca para bastidor (Jeluz Platinum)",
    "price": 500
  },
  {
    "id": 1460,
    "productName": "Módulo TV (Jeluz Platinum",
    "price": 1500
  },
  {
    "id": 1450,
    "productName": "Módulo pulsador/timbre (Jeluz Platinum)",
    "price": 1000
  },
  {
    "id": 1440,
    "productName": "Módulo punto combinado 10A (Jeluz Platinum)",
    "price": 1000
  },
  {
    "id": 1430,
    "productName": "Módulo toma 20A (Jeluz Platinum)",
    "price": 1500
  },
  {
    "id": 1420,
    "productName": "Módulo ciego (Jeluz Platinum)",
    "price": 100
  },
  {
    "id": 1410,
    "productName": "Módulo punto común 10A (Jeluz Platinum)",
    "price": 900
  },
  {
    "id": 1400,
    "productName": "Módulo toma 10A (Jeluz Platinum)",
    "price": 900
  },
  {
    "id": 1330,
    "productName": "Cable subterráneo 2 x 6mm (metro) (LEDs GO)",
    "price": 4200
  },
  {
    "id": 1310,
    "productName": "Cable bipolar / paralelo 1,5mm (metro)",
    "price": 650
  },
  {
    "id": 1260,
    "productName": "Florón (12cm diámetro) blanco/negro",
    "price": 200
  },
  {
    "id": 1250,
    "productName": "Buscapolo inductivo - Detector de voltaje/tensión (LUXOM)",
    "price": 4700
  },
  {
    "id": 1150,
    "productName": "Disco de corte 115mm (LUSQTOFF) (OFERTA 10 o más) (sólo efectivo / transf)",
    "price": 650
  },
  {
    "id": 1120,
    "productName": "Reflector LED 50 W (Luz Fría) (LUXOM)",
    "price": 8000
  },
  {
    "id": 1050,
    "productName": "Adaptador doble",
    "price": 2500
  },
  {
    "id": 1040,
    "productName": "Portalámparas 2 partes / 2 piezas",
    "price": 500
  },
  {
    "id": 1010,
    "productName": "Pegamento instantáneo líquido 3Grs (LUXOM)",
    "price": 1000
  },
  {
    "id": 1000,
    "productName": "Disco de corte 115mm (LUSQTOFF)",
    "price": 800
  },
  {
    "id": 2,
    "productName": "Flotante Automático para Tanque - Metaplast",
    "price": 8505
  },
  {
    "id": 5,
    "productName": "Adaptador común 3 patas a 2 patas (LEDs GO)",
    "price": 1000
  },
  {
    "id": 6,
    "productName": "Adaptador triple",
    "price": 3000
  },
  {
    "id": 17,
    "productName": "Caja 10x10 embutir (CHAPA)",
    "price": 1000
  },
  {
    "id": 18,
    "productName": "Caja 10x10 embutir (PVC)",
    "price": 700
  },
  {
    "id": 19,
    "productName": "Caja cable canal para bastidor / portabastidor",
    "price": 1000
  },
  {
    "id": 20,
    "productName": "Caja de paso estanca 115x115x50 | 115x115x60",
    "price": 2500
  },
  {
    "id": 21,
    "productName": "Caja de paso estanca 115x115x80",
    "price": 3000
  },
  {
    "id": 22,
    "productName": "Caja de paso estanca 90x90x55",
    "price": 2000
  },
  {
    "id": 23,
    "productName": "Caja octogonal embutir (PVC)",
    "price": 400
  },
  {
    "id": 24,
    "productName": "Caja rectangular embutir (PVC)",
    "price": 400
  },
  {
    "id": 25,
    "productName": "Caja mignon embutir (chapa)",
    "price": 500
  },
  {
    "id": 26,
    "productName": "Caja octogonal embutir (chapa)",
    "price": 500
  },
  {
    "id": 27,
    "productName": "Caja para térmicas 12 bocas (embutir)",
    "price": 9362.6
  },
  {
    "id": 28,
    "productName": "Caja para térmicas 12 bocas (exterior)",
    "price": 7000
  },
  {
    "id": 29,
    "productName": "Caja para térmicas 2 bocas (exterior)",
    "price": 2000
  },
  {
    "id": 30,
    "productName": "Caja para térmicas 4 bocas (exterior)",
    "price": 3000
  },
  {
    "id": 31,
    "productName": "Caja para térmicas 4 bocas (pilar)",
    "price": 5500
  },
  {
    "id": 32,
    "productName": "Caja para térmicas 8 bocas (embutir)",
    "price": 7052.5
  },
  {
    "id": 33,
    "productName": "Caja para térmicas 8 bocas (exterior)",
    "price": 5000
  },
  {
    "id": 34,
    "productName": "Caja rectangular embutir (chapa)",
    "price": 500
  },
  {
    "id": 35,
    "productName": "Calefón calentador eléctrico DILUVIO (20 litros) (resistencia de acero)",
    "price": 14000
  },
  {
    "id": 39,
    "productName": "Canilla doble PVC (conexión lavarropa)",
    "price": 1900
  },
  {
    "id": 40,
    "productName": "Canilla plástica 1/2\" PVC",
    "price": 1000
  },
  {
    "id": 44,
    "productName": "Cinta pasacable 10 metros (ACERO)",
    "price": 5500
  },
  {
    "id": 61,
    "productName": "Ficha hembra calefón (negra)",
    "price": 700
  },
  {
    "id": 62,
    "productName": "Ficha hembra 10A (simil KALOP | simil RICHI)",
    "price": 1000
  },
  {
    "id": 63,
    "productName": "Ficha hembra 20A (20 ampéres) (ciocca)",
    "price": 1500
  },
  {
    "id": 66,
    "productName": "Ficha macho 10A (Amado Elec / Richi ORIGINAL)",
    "price": 1500
  },
  {
    "id": 67,
    "productName": "Ficha macho 10A (simil KALOP | simil RICHI)",
    "price": 1000
  },
  {
    "id": 68,
    "productName": "Ficha macho 20A (20 ampéres) (ciocca)",
    "price": 1500
  },
  {
    "id": 70,
    "productName": "Ficha macho velador - (blanco/negro)",
    "price": 500
  },
  {
    "id": 71,
    "productName": "Ficha/Interruptor velador (blanco/negro)",
    "price": 500
  },
  {
    "id": 72,
    "productName": "Portalámpara Florón curvo/receptáculo",
    "price": 900
  },
  {
    "id": 73,
    "productName": "Portalámpara Florón grande recto",
    "price": 1300
  },
  {
    "id": 76,
    "productName": "Fotocélula 1200w - LUXOM",
    "price": 6000
  },
  {
    "id": 78,
    "productName": "Fratacho / Filtro 20cm - Goma Espuma",
    "price": 900
  },
  {
    "id": 82,
    "productName": "Guantes de alta temperatura",
    "price": 30000
  },
  {
    "id": 83,
    "productName": "Guantes de cuero vaqueta",
    "price": 4500
  },
  {
    "id": 84,
    "productName": "Guantes moteados albañil",
    "price": 1500
  },
  {
    "id": 85,
    "productName": "Guirnaldas de luces armadas - (10 metros)",
    "price": 15000
  },
  {
    "id": 87,
    "productName": "Jabalina 1/2\" con tomacable",
    "price": 19900
  },
  {
    "id": 98,
    "productName": "Lámpara incandescente 15w (LUXOM / FRANCE) - Gota Decorativa",
    "price": 900
  },
  {
    "id": 158,
    "productName": "Portalámpara Mignon 3 piezas (E14)",
    "price": 900
  },
  {
    "id": 159,
    "productName": "Portalámparas 3 partes / 3 piezas",
    "price": 800
  },
  {
    "id": 160,
    "productName": "Portalámparas cerámico",
    "price": 1500
  },
  {
    "id": 161,
    "productName": "Precintos 100 x 2,5mm (Chico)",
    "price": 15
  },
  {
    "id": 162,
    "productName": "Precintos 150 x 3,6mm (Mediano)",
    "price": 35
  },
  {
    "id": 163,
    "productName": "Precintos 250 x 4,8mm (Grande)",
    "price": 45
  },
  {
    "id": 167,
    "productName": "Protector/tapa para tomacorriente - niños - bebe",
    "price": 300
  },
  {
    "id": 169,
    "productName": "Pulsador timbre simple (ciocca)",
    "price": 1500
  },
  {
    "id": 170,
    "productName": "Punto simple exterior (ciocca)",
    "price": 1000
  },
  {
    "id": 171,
    "productName": "Punto y toma exterior 10A (ciocca)",
    "price": 1500
  },
  {
    "id": 172,
    "productName": "Raqueta mata moscas y mosquitos USB",
    "price": 9000
  },
  {
    "id": 182,
    "productName": "Spot Dicróica (blanco / negro)",
    "price": 1900
  },
  {
    "id": 183,
    "productName": "Spot tulipa simple",
    "price": 7500
  },
  {
    "id": 184,
    "productName": "Tapa ciega chica octogonal",
    "price": 200
  },
  {
    "id": 185,
    "productName": "Tapa ciega chica rectangular",
    "price": 200
  },
  {
    "id": 186,
    "productName": "Tapa ciega grande cuadrada 10x10",
    "price": 250
  },
  {
    "id": 187,
    "productName": "Tapa ciega grande octogonal",
    "price": 250
  },
  {
    "id": 188,
    "productName": "Tapa de inspección para jabalina PVC 10x10",
    "price": 1300
  },
  {
    "id": 198,
    "productName": "Timbre zumbador 10x10 de embutir",
    "price": 22000
  },
  {
    "id": 199,
    "productName": "Timbre zumbador 10x5 de exterior",
    "price": 17250
  },
  {
    "id": 202,
    "productName": "Toma doble exterior 10A (ciocca)",
    "price": 1500
  },
  {
    "id": 203,
    "productName": "Toma exterior de 20A (ciocca)",
    "price": 2500
  },
  {
    "id": 205,
    "productName": "Toma simple exterior 10A (ciocca)",
    "price": 1000
  },
  {
    "id": 207,
    "productName": "Tornillos Drywall 8x2 Fosfatizado Negro (para tarugos/tacos del 8)",
    "price": 75
  },
  {
    "id": 208,
    "productName": "Tornillos negros (kevin)",
    "price": 25
  },
  {
    "id": 211,
    "productName": "Tortuga vidrio redonda (color blanco) (con portalámpara)",
    "price": 9500
  },
  {
    "id": 221,
    "productName": "Unión/conector PVC 20 mm",
    "price": 250
  },
  {
    "id": 222,
    "productName": "Unión/conector PVC 22 mm",
    "price": 300
  },
  {
    "id": 223,
    "productName": "Tapa ciega para Caja Mignon",
    "price": 200
  },
  {
    "id": 229,
    "productName": "Ficha macho / hembra 10a bipolar (patas redondas) (LEDs GO)",
    "price": 700
  },
  {
    "id": 231,
    "productName": "Zapatilla sin cable (chica)",
    "price": 1500
  },
  {
    "id": 233,
    "productName": "Adaptador ficha americana",
    "price": 1000
  },
  {
    "id": 234,
    "productName": "Asiento/Tapa para inodoro",
    "price": 10000
  },
  {
    "id": 235,
    "productName": "Timbre inalámbrico (LUXOM)",
    "price": 8000
  },
  {
    "id": 236,
    "productName": "Lámpara LED flash 0,15w (Interelec) Filamento Color",
    "price": 3000
  },
  {
    "id": 237,
    "productName": "Ficha macho lateral 10A",
    "price": 800
  },
  {
    "id": 241,
    "productName": "Lubricante HD440",
    "price": 4300
  },
  {
    "id": 242,
    "productName": "Canilla plástica para lavatorio PVC",
    "price": 3000
  },
  {
    "id": 244,
    "productName": "Caja para medidor monofásica lisa",
    "price": 16000
  },
  {
    "id": 248,
    "productName": "Antiparra / gafas de seguridad",
    "price": 4000
  },
  {
    "id": 252,
    "productName": "Cápsula toma / Toma capsulado 10A (MIG)",
    "price": 3800
  },
  {
    "id": 253,
    "productName": "Cinta aisladora de 10 metros (LUXOM)",
    "price": 800
  },
  {
    "id": 254,
    "productName": "Cinta aisladora de 10 metros (TACSA)",
    "price": 1000
  },
  {
    "id": 255,
    "productName": "Cinta aisladora de 20 metros (TACSA)",
    "price": 1700
  },
  {
    "id": 256,
    "productName": "Cinta aisladora de 5 metros (TACSA)",
    "price": 600
  },
  {
    "id": 257,
    "productName": "Cinta teflón 1/2\" (10 metros)",
    "price": 500
  },
  {
    "id": 259,
    "productName": "Balde de albañil",
    "price": 4000
  },
  {
    "id": 266,
    "productName": "Delantal Jean",
    "price": 0
  },
  {
    "id": 278,
    "productName": "Disyuntor diferencial bipolar 40A (Sica)",
    "price": 34000
  },
  {
    "id": 280,
    "productName": "Grampa Stark 20mm",
    "price": 150
  },
  {
    "id": 281,
    "productName": "Zócalo cerámico Gu10 (dicróica)",
    "price": 800
  },
  {
    "id": 282,
    "productName": "Zocalo con rotor G13 (para tubos)",
    "price": 1000
  },
  {
    "id": 283,
    "productName": "Zócalo flexible (para tubos LED)",
    "price": 900
  }
];

// ==============================
// LOCAL STORAGE
// ==============================
const STORAGE_KEY = "products";

function normalizeProducts(products) {
  return products.map((p) => ({
    id: p.id,
    productName: p.productName,
    oldPrice: p.price ?? p.oldPrice ?? 0,
    costPrice: p.costPrice ?? 0,
    percentage: p.percentage ?? 0,
    finalPrice: p.finalPrice ?? 0
  }));
}

function saveToStorage(products) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
}

function loadFromStorage() {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : null;
}

// ==============================
// STATE
// ==============================
const storedProducts = loadFromStorage();

let products = storedProducts
  ? normalizeProducts(storedProducts)
  : normalizeProducts(initialProducts);

saveToStorage(products);

// ==============================
// CALCULO
// ==============================
function calculateFinalPrice(costPrice, percentage) {
  return costPrice + (costPrice * percentage) / 100;
}

// ==============================
// RENDER
// ==============================
const container = document.getElementById("productsContainer");

function renderProducts() {
  container.innerHTML = "";

  products.forEach((product, index) => {
    const card = document.createElement("div");
    card.className = "bg-white rounded-xl shadow p-4 space-y-3";

    card.innerHTML = `
      <h2 class="font-semibold text-lg">
        ${product.productName}
      </h2>

      <div class="flex flex-col gap-2">
        <div class="flex gap-4 justify-between items-center">
          <label>Precio costo</label>
          <input
            type="number"
            class="border rounded px-3 py-2 w-1/2"
            value="${product.costPrice}"
            data-index="${index}"
            data-type="cost"
          />
        </div>

        <div class="flex gap-4 justify-between items-center">
          <label>% recargo</label>
          <input
            type="number"
            class="border rounded px-3 py-2 w-1/2"
            value="${product.percentage}"
            data-index="${index}"
            data-type="percentage"
          />
        </div>
      </div>

      <p class="text-sm text-gray-600">
        Precio final:
        <span class="font-semibold text-black">
          $${product.finalPrice.toFixed(2)}
        </span>
      </p>
    `;

    container.appendChild(card);
  });
}

// ==============================
// EVENTS (live update)
// ==============================
container.addEventListener("input", (e) => {
  const index = e.target.dataset.index;
  const type = e.target.dataset.type;

  if (index === undefined) return;

  const value = Number(e.target.value);

  if (type === "cost") {
    products[index].costPrice = value;
  }

  if (type === "percentage") {
    products[index].percentage = value;
  }

  const { costPrice, percentage } = products[index];
  const finalPrice = calculateFinalPrice(costPrice, percentage);

  products[index].finalPrice = finalPrice;

  const card = e.target.closest(".bg-white");
  const priceSpan = card.querySelector("span");

  priceSpan.textContent = `$${finalPrice.toFixed(2)}`;

  saveToStorage(products);
});

container.addEventListener("focusin", (e) => {
  if (e.target.tagName !== "INPUT") return;

  if (Number(e.target.value) === 0) {
    e.target.value = "";
  }
});

// ==============================
// INIT
// ==============================
renderProducts();

// ==============================
// EXPORT JSON
// ==============================
const exportBtn = document.getElementById("exportBtn");

exportBtn.addEventListener("click", () => {
  const data = localStorage.getItem(STORAGE_KEY);

  if (!data) {
    alert("No hay datos para exportar 😅");
    return;
  }

  const blob = new Blob([data], { type: "application/json" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "products.json";
  a.click();

  URL.revokeObjectURL(url);
});
