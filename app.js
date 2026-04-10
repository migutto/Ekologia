const AIR_STATIONS = [
  { id: "miejska", label: "miejska", defaultType: "tło" },
  { id: "podmiejska", label: "podmiejska", defaultType: "tło" },
  { id: "pozamiejska", label: "pozamiejska", defaultType: "tło" },
];

const AIR_COLORS = {
  miejska: "#2f6a48",
  podmiejska: "#3f6b85",
  pozamiejska: "#a57845",
};

const DEFAULT_LIMITS = [
  { name: "benzen", value: "5" },
  { name: "ditlenek azotu", value: "200" },
  { name: "ditlenek siarki", value: "125" },
  { name: "ozon", value: "120" },
  { name: "pył zawieszony PM10", value: "50" },
  { name: "tlenek węgla", value: "10000" },
];

const DEFAULT_TOXICITY = [
  { name: "tlenek siarki IV", value: "1.0" },
  { name: "tlenek węgla II", value: "0.5" },
  { name: "tlenki azotu", value: "2.0" },
  { name: "ozon", value: "10.3" },
  { name: "pył zawieszony", value: "2.9" },
  { name: "chrom", value: "160.0" },
  { name: "cynk", value: "16.9" },
  { name: "kadm", value: "640.0" },
  { name: "miedź", value: "106.7" },
  { name: "ołów", value: "320.0" },
  { name: "żelazo", value: "2.0" },
];

const DEFAULT_SYNONYMS = [
  { alias: "O3", displayName: "ozon", limitName: "ozon", toxicityName: "ozon", unit: "µg/m3" },
  { alias: "CO", displayName: "tlenek węgla", limitName: "tlenek węgla", toxicityName: "tlenek węgla II", unit: "µg/m3" },
  { alias: "NO2", displayName: "ditlenek azotu", limitName: "ditlenek azotu", toxicityName: "tlenki azotu", unit: "µg/m3" },
  { alias: "SO2", displayName: "ditlenek siarki", limitName: "ditlenek siarki", toxicityName: "tlenek siarki IV", unit: "µg/m3" },
  { alias: "PM10", displayName: "pył zawieszony PM10", limitName: "pył zawieszony PM10", toxicityName: "pył zawieszony", unit: "µg/m3" },
  { alias: "BENZEN", displayName: "benzen", limitName: "benzen", toxicityName: "", unit: "µg/m3" },
  { alias: "NOx", displayName: "tlenki azotu", limitName: "", toxicityName: "tlenki azotu", unit: "µg/m3" },
  { alias: "CHROM", displayName: "chrom", limitName: "", toxicityName: "chrom", unit: "µg/m3" },
  { alias: "CYNK", displayName: "cynk", limitName: "", toxicityName: "cynk", unit: "µg/m3" },
  { alias: "KADM", displayName: "kadm", limitName: "", toxicityName: "kadm", unit: "µg/m3" },
  { alias: "MIEDŹ", displayName: "miedź", limitName: "", toxicityName: "miedź", unit: "µg/m3" },
  { alias: "OŁÓW", displayName: "ołów", limitName: "", toxicityName: "ołów", unit: "µg/m3" },
  { alias: "ŻELAZO", displayName: "żelazo", limitName: "", toxicityName: "żelazo", unit: "µg/m3" },
];

const AIR_DEMO_VALUES = [
  {
    alias: "O3",
    displayName: "ozon",
    unit: "µg/m3",
    values: {
      miejska: ["65", "72", "80", "78", "74", "70", "68", "66", "64", "61"],
      podmiejska: ["58", "60", "66", "69", "67", "62", "60", "59", "56", "54"],
      pozamiejska: ["50", "53", "57", "61", "59", "56", "54", "52", "49", "47"],
    },
  },
  {
    alias: "SO2",
    displayName: "ditlenek siarki",
    unit: "µg/m3",
    values: {
      miejska: ["21", "22", "23", "24", "24", "25", "23", "22", "21", "20"],
      podmiejska: ["17", "18", "19", "20", "20", "19", "18", "18", "17", "16"],
      pozamiejska: ["13", "14", "15", "15", "16", "15", "14", "14", "13", "13"],
    },
  },
  {
    alias: "NO2",
    displayName: "ditlenek azotu",
    unit: "µg/m3",
    values: {
      miejska: ["88", "92", "96", "101", "98", "95", "90", "87", "84", "82"],
      podmiejska: ["61", "64", "67", "69", "70", "68", "65", "63", "61", "59"],
      pozamiejska: ["39", "41", "43", "45", "44", "42", "41", "39", "38", "37"],
    },
  },
  {
    alias: "PM10",
    displayName: "pył zawieszony PM10",
    unit: "µg/m3",
    values: {
      miejska: ["29", "31", "34", "36", "35", "33", "30", "28", "27", "26"],
      podmiejska: ["23", "24", "26", "27", "28", "27", "25", "24", "23", "22"],
      pozamiejska: ["18", "19", "21", "22", "21", "20", "19", "18", "17", "17"],
    },
  },
  {
    alias: "CO",
    displayName: "tlenek węgla",
    unit: "µg/m3",
    values: {
      miejska: ["1600", "1700", "1800", "1750", "1690", "1650", "1620", "1580", "1540", "1500"],
      podmiejska: ["1300", "1360", "1400", "1380", "1340", "1320", "1290", "1260", "1230", "1210"],
      pozamiejska: ["900", "940", "980", "990", "960", "940", "920", "900", "880", "860"],
    },
  },
];

const AIR_DEMO_STATIONS = [
  { id: "miejska", role: "miejska", typPunktu: "komunikacyjna", wojewodztwo: "dolnośląskie", adres: "ul. Wyb. J. Conrada-Korzeniowskiego 18, Wrocław", nazwa: "Stacja Wrocław - śródmieście" },
  { id: "podmiejska", role: "podmiejska", typPunktu: "tło", wojewodztwo: "dolnośląskie", adres: "ul. Parkowa 3, Długołęka", nazwa: "Stacja Długołęka" },
  { id: "pozamiejska", role: "pozamiejska", typPunktu: "tło", wojewodztwo: "dolnośląskie", adres: "Jeleniów 12, teren referencyjny", nazwa: "Stacja Jeleniów" },
];

const SOIL_DEMO = {
  active: { distilled1: "6.7", distilled2: "6.8", sample1: "5.6", sample2: "5.5" },
  exchange: { kcl1: "6.9", kcl2: "7.0", sample1: "4.8", sample2: "4.9" },
  hydrolytic: { vNaOH: "4.2", cNaOH: "0.1", k: "1.75" },
  hectare: { p: "10000", h: "0.20", rho: "1500" },
  baseCations: { vHCl: "25", cHCl: "0.1", v1NaOH: "7.5", c1NaOH: "0.1" },
};

let pollutantIdCounter = 1;

function nextPollutantId() {
  const id = `pollutant-${pollutantIdCounter}`;
  pollutantIdCounter += 1;
  return id;
}

function clone(data) {
  return JSON.parse(JSON.stringify(data));
}

function getDefaultStation(role) {
  const base = AIR_STATIONS.find((station) => station.id === role);
  return { id: role, role, typPunktu: base ? base.defaultType : "", wojewodztwo: "", adres: "", nazwa: "" };
}

function createEmptyPollutant(index = 1) {
  return {
    id: nextPollutantId(),
    alias: `ZAN-${index}`,
    displayName: `Zanieczyszczenie ${index}`,
    unit: "µg/m3",
    values: {
      miejska: Array.from({ length: 10 }, () => ""),
      podmiejska: Array.from({ length: 10 }, () => ""),
      pozamiejska: Array.from({ length: 10 }, () => ""),
    },
  };
}

function createPollutantsFromDemo() {
  return AIR_DEMO_VALUES.map((pollutant) => ({
    id: nextPollutantId(),
    alias: pollutant.alias,
    displayName: pollutant.displayName,
    unit: pollutant.unit,
    values: clone(pollutant.values),
  }));
}

function createBlankAirState() {
  return {
    startDate: "2026-03-01",
    hour: "08:00",
    stations: AIR_STATIONS.map((station) => getDefaultStation(station.id)),
    pollutants: [createEmptyPollutant(1), createEmptyPollutant(2), createEmptyPollutant(3)],
    mappings: {
      limits: clone(DEFAULT_LIMITS),
      toxicity: clone(DEFAULT_TOXICITY),
      synonyms: clone(DEFAULT_SYNONYMS),
    },
  };
}

function createDemoAirState() {
  return {
    startDate: "2026-03-01",
    hour: "08:00",
    stations: clone(AIR_DEMO_STATIONS),
    pollutants: createPollutantsFromDemo(),
    mappings: {
      limits: clone(DEFAULT_LIMITS),
      toxicity: clone(DEFAULT_TOXICITY),
      synonyms: clone(DEFAULT_SYNONYMS),
    },
  };
}

function createBlankSoilState() {
  return {
    active: { distilled1: "", distilled2: "", sample1: "", sample2: "" },
    exchange: { kcl1: "", kcl2: "", sample1: "", sample2: "" },
    hydrolytic: { vNaOH: "", cNaOH: "0.1", k: "1.75" },
    hectare: { p: "10000", h: "0.20", rho: "1500" },
    baseCations: { vHCl: "", cHCl: "0.1", v1NaOH: "", c1NaOH: "0.1" },
  };
}

function createDemoSoilState() {
  return clone(SOIL_DEMO);
}

const state = {
  activeTab: "powietrze",
  air: createDemoAirState(),
  soil: createDemoSoilState(),
};

const appRoot = document.getElementById("app");

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function attrsToString(attributes) {
  return Object.entries(attributes)
    .filter(([, value]) => value !== undefined && value !== null && value !== false)
    .map(([key, value]) => (value === true ? key : `${key}="${escapeHtml(value)}"`))
    .join(" ");
}

function normalizeKey(value) {
  return String(value ?? "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function parseLocaleNumber(raw) {
  const source = String(raw ?? "").trim();
  if (!source) {
    return { value: null, error: false };
  }

  const normalized = source.replace(/\s+/g, "").replace(",", ".");
  if (!/^-?(?:\d+|\d*\.\d+)$/.test(normalized)) {
    return { value: null, error: true };
  }

  const value = Number(normalized);
  if (!Number.isFinite(value)) {
    return { value: null, error: true };
  }

  return { value, error: false };
}

function formatNumber(value, decimals = 2) {
  if (value === null || value === undefined || Number.isNaN(value)) {
    return "—";
  }

  return new Intl.NumberFormat("pl-PL", {
    minimumFractionDigits: 0,
    maximumFractionDigits: decimals,
  }).format(value);
}

function parseIsoDate(value) {
  if (!value) {
    return null;
  }
  const date = new Date(`${value}T00:00:00`);
  return Number.isNaN(date.getTime()) ? null : date;
}

function formatIsoDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function addDays(value, days) {
  const date = typeof value === "string" ? parseIsoDate(value) : value;
  if (!date) {
    return null;
  }
  const next = new Date(date);
  next.setDate(next.getDate() + days);
  return next;
}

function formatShortDate(value) {
  const date = typeof value === "string" ? parseIsoDate(value) : value;
  if (!date) {
    return "—";
  }
  return new Intl.DateTimeFormat("pl-PL", { day: "2-digit", month: "2-digit" }).format(date);
}

function getAirDates(airState) {
  const dates = [];
  const startDate = parseIsoDate(airState.startDate);
  if (!startDate) {
    return dates;
  }

  for (let index = 0; index < 10; index += 1) {
    dates.push(formatIsoDate(addDays(startDate, index)));
  }
  return dates;
}

function getAirEndDate(airState) {
  const startDate = parseIsoDate(airState.startDate);
  if (!startDate) {
    return "";
  }
  const endDate = addDays(startDate, 9);
  return endDate ? formatIsoDate(endDate) : "";
}

function average(numbers) {
  if (!numbers.length) {
    return null;
  }
  return numbers.reduce((sum, number) => sum + number, 0) / numbers.length;
}

function uniqueList(items) {
  return Array.from(new Set(items.filter(Boolean)));
}

function resolvePollutantMapping(pollutant, mappings) {
  const candidateKeys = uniqueList([normalizeKey(pollutant.alias), normalizeKey(pollutant.displayName)]);
  const synonym = mappings.synonyms.find((row) => {
    const rowKeys = uniqueList([
      normalizeKey(row.alias),
      normalizeKey(row.displayName),
      normalizeKey(row.limitName),
      normalizeKey(row.toxicityName),
    ]);
    return candidateKeys.some((candidate) => rowKeys.includes(candidate));
  });

  const limitName = uniqueList([synonym?.limitName, pollutant.displayName, pollutant.alias])[0] ?? "";
  const toxicityName = uniqueList([synonym?.toxicityName, pollutant.displayName, pollutant.alias])[0] ?? "";
  const displayName = uniqueList([pollutant.displayName, synonym?.displayName, pollutant.alias])[0] ?? `Zanieczyszczenie ${pollutant.id}`;
  const unit = uniqueList([pollutant.unit, synonym?.unit, "µg/m3"])[0];

  const limitEntry = mappings.limits.find((row) => normalizeKey(row.name) === normalizeKey(limitName));
  const toxicityEntry = mappings.toxicity.find((row) => normalizeKey(row.name) === normalizeKey(toxicityName));
  const parsedLimit = parseLocaleNumber(limitEntry?.value ?? "");
  const parsedToxicity = parseLocaleNumber(toxicityEntry?.value ?? "");

  return {
    displayName,
    limitName,
    toxicityName,
    unit,
    limit: parsedLimit.error ? null : parsedLimit.value,
    toxicity: parsedToxicity.error ? null : parsedToxicity.value,
  };
}

function buildErrorMap(errors) {
  return errors.reduce((map, error) => {
    map.set(error.key, error.message);
    return map;
  }, new Map());
}

function collectAirErrors(airState) {
  const errors = [];

  airState.pollutants.forEach((pollutant, pollutantIndex) => {
    AIR_STATIONS.forEach((station) => {
      pollutant.values[station.id].forEach((rawValue, valueIndex) => {
        if (parseLocaleNumber(rawValue).error) {
          const pollutantName = pollutant.alias || pollutant.displayName || `Zanieczyszczenie ${pollutantIndex + 1}`;
          errors.push({
            key: `air-measurement-${pollutant.id}-${station.id}-${valueIndex}`,
            message: `Nieprawidłowa liczba dla ${pollutantName}, stacja ${station.label}, dzień ${valueIndex + 1}.`,
          });
        }
      });
    });
  });

  airState.mappings.limits.forEach((row, index) => {
    if (parseLocaleNumber(row.value).error) {
      errors.push({ key: `air-limit-${index}`, message: `Tabela limitów: wiersz ${index + 1} wymaga poprawnej liczby.` });
    }
  });

  airState.mappings.toxicity.forEach((row, index) => {
    if (parseLocaleNumber(row.value).error) {
      errors.push({ key: `air-toxicity-${index}`, message: `Tabela toksyczności: wiersz ${index + 1} wymaga poprawnej liczby.` });
    }
  });

  return errors;
}

function collectSoilErrors(soilState) {
  const errors = [];
  const labels = {
    "active.distilled1": "Kwasowość czynna - woda destylowana, pomiar 1",
    "active.distilled2": "Kwasowość czynna - woda destylowana, pomiar 2",
    "active.sample1": "Kwasowość czynna - badana próbka, pomiar 1",
    "active.sample2": "Kwasowość czynna - badana próbka, pomiar 2",
    "exchange.kcl1": "Kwasowość wymienna - KCl, pomiar 1",
    "exchange.kcl2": "Kwasowość wymienna - KCl, pomiar 2",
    "exchange.sample1": "Kwasowość wymienna - badana próbka, pomiar 1",
    "exchange.sample2": "Kwasowość wymienna - badana próbka, pomiar 2",
    "hydrolytic.vNaOH": "Kwasowość hydrolityczna - VNaOH",
    "hydrolytic.cNaOH": "Kwasowość hydrolityczna - c NaOH",
    "hydrolytic.k": "Kwasowość hydrolityczna - współczynnik k",
    "hectare.p": "Masa gleby dla 1 ha - p",
    "hectare.h": "Masa gleby dla 1 ha - h",
    "hectare.rho": "Masa gleby dla 1 ha - rho",
    "baseCations.vHCl": "Suma kationów zasadowych - V HCl",
    "baseCations.cHCl": "Suma kationów zasadowych - c HCl",
    "baseCations.v1NaOH": "Suma kationów zasadowych - V1 NaOH",
    "baseCations.c1NaOH": "Suma kationów zasadowych - c1 NaOH",
  };

  Object.entries(labels).forEach(([path, label]) => {
    const [section, field] = path.split(".");
    if (parseLocaleNumber(soilState[section][field]).error) {
      errors.push({ key: `soil-${section}-${field}`, message: `Pole "${label}" musi zawierać poprawną liczbę.` });
    }
  });

  return errors;
}

function computeAir(airState) {
  const dates = getAirDates(airState);
  const stationSummaries = AIR_STATIONS.reduce((summaryMap, station) => {
    summaryMap[station.id] = {
      role: station.id,
      label: station.label,
      psi: 0,
      tau: 0,
      psiComponents: 0,
      tauComponents: 0,
      ignoredPsi: 0,
      ignoredTau: 0,
      exceedAvgCount: 0,
      exceedMaxCount: 0,
      warnings: [],
    };
    return summaryMap;
  }, {});

  const warningKeys = new Set();
  const rows = [];
  const chartData = [];

  airState.pollutants.forEach((pollutant, pollutantIndex) => {
    const mapping = resolvePollutantMapping(pollutant, airState.mappings);

    AIR_STATIONS.forEach((station) => {
      const parsedValues = pollutant.values[station.id].map((entry) => parseLocaleNumber(entry));
      const numericValues = parsedValues.filter((entry) => !entry.error && entry.value !== null).map((entry) => entry.value);
      const min = numericValues.length ? Math.min(...numericValues) : null;
      const avg = average(numericValues);
      const max = numericValues.length ? Math.max(...numericValues) : null;

      const limitWarning = avg !== null && mapping.limit === null
        ? "Brak wartości dopuszczalnej w instrukcji — zanieczyszczenie pominięto w indeksie jakości."
        : "";
      const toxicityWarning = avg !== null && mapping.toxicity === null
        ? "Brak współczynnika toksyczności w instrukcji — zanieczyszczenie pominięto w indeksie toksyczności."
        : "";

      if (avg !== null && mapping.limit !== null) {
        stationSummaries[station.id].psi += avg / mapping.limit;
        stationSummaries[station.id].psiComponents += 1;
      } else if (avg !== null) {
        stationSummaries[station.id].ignoredPsi += 1;
      }

      if (avg !== null && mapping.toxicity !== null) {
        stationSummaries[station.id].tau += avg * mapping.toxicity;
        stationSummaries[station.id].tauComponents += 1;
      } else if (avg !== null) {
        stationSummaries[station.id].ignoredTau += 1;
      }

      const exceedAvg = avg !== null && mapping.limit !== null ? avg > mapping.limit : false;
      const exceedMax = max !== null && mapping.limit !== null ? max > mapping.limit : false;
      if (exceedAvg) {
        stationSummaries[station.id].exceedAvgCount += 1;
      }
      if (exceedMax) {
        stationSummaries[station.id].exceedMaxCount += 1;
      }

      [limitWarning, toxicityWarning].filter(Boolean).forEach((message) => {
        const key = `${station.id}|${pollutant.id}|${message}`;
        if (!warningKeys.has(key)) {
          warningKeys.add(key);
          stationSummaries[station.id].warnings.push(`${mapping.displayName}: ${message}`);
        }
      });

      rows.push({
        pollutantId: pollutant.id,
        pollutantIndex: pollutantIndex + 1,
        pollutantAlias: pollutant.alias || `ZAN-${pollutantIndex + 1}`,
        pollutantName: mapping.displayName,
        stationRole: station.id,
        stationLabel: station.label,
        unit: mapping.unit,
        limit: mapping.limit,
        toxicity: mapping.toxicity,
        min,
        avg,
        max,
        exceedAvg,
        exceedMax,
        limitWarning,
        toxicityWarning,
      });
    });

    chartData.push({
      pollutantId: pollutant.id,
      pollutantAlias: pollutant.alias,
      pollutantName: mapping.displayName,
      unit: mapping.unit,
      dates,
      series: AIR_STATIONS.map((station) => ({
        role: station.id,
        label: station.label,
        color: AIR_COLORS[station.id],
        values: pollutant.values[station.id].map((entry) => {
          const parsed = parseLocaleNumber(entry);
          return parsed.error ? null : parsed.value;
        }),
      })),
    });
  });

  const stationCards = AIR_STATIONS.map((station) => {
    const summary = stationSummaries[station.id];
    return {
      ...summary,
      psiValue: summary.psiComponents ? summary.psi : null,
      tauValue: summary.tauComponents ? summary.tau : null,
      psiInterpretation: summary.psiComponents
        ? (summary.psi <= 1 ? "jakość powietrza zadowalająca" : "wyższa wartość oznacza gorszą jakość powietrza")
        : "Brak danych do obliczenia indeksu jakości.",
      tauInterpretation: summary.tauComponents
        ? "Niższa wartość oznacza lepszą jakość powietrza."
        : "Brak danych do obliczenia indeksu toksyczności.",
    };
  });

  return { dates, rows, chartData, stationCards };
}

function classifyAgriculturalSoil(value) {
  if (value === null) return "Brak danych";
  if (value <= 4.0) return "bardzo kwaśne";
  if (value <= 4.5) return "kwaśne";
  if (value <= 5.0) return "średnio kwaśne";
  if (value <= 6.0) return "słabo kwaśne";
  if (value <= 6.5) return "obojętne";
  if (value <= 7.0) return "słabo alkaliczne";
  if (value <= 7.5) return "średnio alkaliczne";
  return "alkaliczne";
}

function classifyForestSoil(value) {
  if (value === null) return "Brak danych";
  if (value <= 3.5) return "bardzo silnie kwaśne";
  if (value <= 4.5) return "silnie kwaśne";
  if (value <= 5.5) return "kwaśne";
  if (value <= 6.5) return "słabo kwaśne";
  if (value <= 7.2) return "obojętne";
  if (value <= 8.0) return "słabo alkaliczne";
  return "alkaliczne";
}

function computeSoil(soilState) {
  const activeDistilled = [parseLocaleNumber(soilState.active.distilled1), parseLocaleNumber(soilState.active.distilled2)]
    .filter((entry) => !entry.error && entry.value !== null)
    .map((entry) => entry.value);
  const activeSample = [parseLocaleNumber(soilState.active.sample1), parseLocaleNumber(soilState.active.sample2)]
    .filter((entry) => !entry.error && entry.value !== null)
    .map((entry) => entry.value);
  const exchangeKcl = [parseLocaleNumber(soilState.exchange.kcl1), parseLocaleNumber(soilState.exchange.kcl2)]
    .filter((entry) => !entry.error && entry.value !== null)
    .map((entry) => entry.value);
  const exchangeSample = [parseLocaleNumber(soilState.exchange.sample1), parseLocaleNumber(soilState.exchange.sample2)]
    .filter((entry) => !entry.error && entry.value !== null)
    .map((entry) => entry.value);

  const hydrolytic = {
    vNaOH: parseLocaleNumber(soilState.hydrolytic.vNaOH).value,
    cNaOH: parseLocaleNumber(soilState.hydrolytic.cNaOH).value,
    k: parseLocaleNumber(soilState.hydrolytic.k).value,
  };
  const hectare = {
    p: parseLocaleNumber(soilState.hectare.p).value,
    h: parseLocaleNumber(soilState.hectare.h).value,
    rho: parseLocaleNumber(soilState.hectare.rho).value,
  };
  const baseCations = {
    vHCl: parseLocaleNumber(soilState.baseCations.vHCl).value,
    cHCl: parseLocaleNumber(soilState.baseCations.cHCl).value,
    v1NaOH: parseLocaleNumber(soilState.baseCations.v1NaOH).value,
    c1NaOH: parseLocaleNumber(soilState.baseCations.c1NaOH).value,
  };

  const hh = [hydrolytic.vNaOH, hydrolytic.cNaOH, hydrolytic.k].every((value) => value !== null)
    ? hydrolytic.vNaOH * hydrolytic.cNaOH * 10 * hydrolytic.k
    : null;
  const mz = [hectare.p, hectare.h, hectare.rho].every((value) => value !== null)
    ? hectare.p * hectare.h * hectare.rho
    : null;
  const hhHa = hh !== null && mz !== null ? (hh * mz) / 100 : null;
  const caO = hhHa !== null ? hhHa * 0.028 : null;
  const caCO3 = hhHa !== null ? hhHa * 0.05 : null;
  const s = [baseCations.vHCl, baseCations.cHCl, baseCations.v1NaOH, baseCations.c1NaOH].every((value) => value !== null)
    ? (baseCations.vHCl * baseCations.cHCl - baseCations.v1NaOH * baseCations.c1NaOH) * 4 * 5
    : null;
  const t = hh !== null && s !== null ? hh + s : null;
  const classificationSource = average(exchangeSample);
  const warnings = [];

  if (s !== null && s < 0) warnings.push("Suma kationów zasadowych wyszła ujemna. Sprawdź wartości miareczkowania.");
  if (hh !== null && hh < 0) warnings.push("Kwasowość hydrolityczna wyszła ujemna. Sprawdź wprowadzone dane.");

  return {
    activeDistilledAvg: average(activeDistilled),
    activeSampleAvg: average(activeSample),
    exchangeKclAvg: average(exchangeKcl),
    exchangeSampleAvg: classificationSource,
    hh,
    mz,
    hhHa,
    caO,
    caCO3,
    s,
    t,
    agriculturalClass: classifyAgriculturalSoil(classificationSource),
    forestClass: classifyForestSoil(classificationSource),
    warnings,
  };
}

function renderInputField({
  label,
  value,
  attributes,
  hint = "",
  error = "",
  type = "text",
  inputClass = "",
  spanClass = "span-3",
  placeholder = "",
  step = "",
}) {
  const classNames = ["field", spanClass].filter(Boolean).join(" ");
  const inputClasses = [inputClass, error ? "is-invalid" : ""].filter(Boolean).join(" ");
  const finalHint = error || hint;

  return `
    <div class="${classNames}">
      <label>${escapeHtml(label)}</label>
      <input
        type="${escapeHtml(type)}"
        value="${escapeHtml(value)}"
        placeholder="${escapeHtml(placeholder)}"
        class="${escapeHtml(inputClasses)}"
        ${step ? `step="${escapeHtml(step)}"` : ""}
        ${attrsToString(attributes)}
      >
      <div class="field__hint ${error ? "is-error" : ""}">${escapeHtml(finalHint)}</div>
    </div>
  `;
}

function renderSelectField({ label, value, options, attributes, hint = "", error = "", spanClass = "span-3" }) {
  const classNames = ["field", spanClass].filter(Boolean).join(" ");
  const optionMarkup = options.map((option) => `
      <option value="${escapeHtml(option.value)}" ${option.value === value ? "selected" : ""}>
        ${escapeHtml(option.label)}
      </option>
    `).join("");

  return `
    <div class="${classNames}">
      <label>${escapeHtml(label)}</label>
      <select class="${error ? "is-invalid" : ""}" ${attrsToString(attributes)}>
        ${optionMarkup}
      </select>
      <div class="field__hint ${error ? "is-error" : ""}">${escapeHtml(error || hint)}</div>
    </div>
  `;
}

function renderErrorSummary(title, errors) {
  if (!errors.length) return "";
  const list = errors.slice(0, 8).map((error) => `<li>${escapeHtml(error.message)}</li>`).join("");
  const hiddenCount = errors.length > 8 ? `<p class="muted">Pozostałe błędy: ${errors.length - 8}</p>` : "";
  return `
    <div class="alert">
      <p class="alert__title">${escapeHtml(title)}</p>
      <ul>${list}</ul>
      ${hiddenCount}
    </div>
  `;
}

function renderWarnings(title, warnings) {
  if (!warnings.length) return "";
  const list = warnings.map((warning) => `<li>${escapeHtml(warning)}</li>`).join("");
  return `
    <div class="alert alert--warning">
      <p class="alert__title">${escapeHtml(title)}</p>
      <ul>${list}</ul>
    </div>
  `;
}

const buildRenderCache = { airErrorMap: new Map() };

function renderAirStations() {
  return AIR_STATIONS.map((station) => {
    const stationState = state.air.stations.find((item) => item.id === station.id) ?? getDefaultStation(station.id);
    return `
      <article class="card card--accent">
        <div class="card__header">
          <div>
            <h3 class="card__title">Stacja ${escapeHtml(station.label)}</h3>
            <p class="muted">Metadane zgodne ze sprawozdaniem.</p>
          </div>
          <span class="pill">${escapeHtml(stationState.typPunktu || "typ punktu")}</span>
        </div>
        <div class="field-grid">
          ${renderInputField({
            label: "Typ punktu",
            value: stationState.typPunktu,
            attributes: { "data-type": "station-field", "data-station-id": station.id, "data-field": "typPunktu", "data-focus-key": `station-${station.id}-typPunktu` },
            spanClass: "span-6",
          })}
          ${renderInputField({
            label: "Województwo",
            value: stationState.wojewodztwo,
            attributes: { "data-type": "station-field", "data-station-id": station.id, "data-field": "wojewodztwo", "data-focus-key": `station-${station.id}-wojewodztwo` },
            spanClass: "span-6",
          })}
          ${renderInputField({
            label: "Adres",
            value: stationState.adres,
            attributes: { "data-type": "station-field", "data-station-id": station.id, "data-field": "adres", "data-focus-key": `station-${station.id}-adres` },
            spanClass: "span-12",
          })}
          ${renderInputField({
            label: "Nazwa stacji (opcjonalnie)",
            value: stationState.nazwa,
            attributes: { "data-type": "station-field", "data-station-id": station.id, "data-field": "nazwa", "data-focus-key": `station-${station.id}-nazwa` },
            spanClass: "span-12",
          })}
        </div>
      </article>
    `;
  }).join("");
}

function renderMappingTable({ title, description, rows, type, columns }) {
  const tableRows = rows.map((row, index) => `
    <tr>
      ${columns.map((column) => `
        <td>
          <input
            class="table-input ${(column.isNumeric && type === "air-limit" && buildRenderCache.airErrorMap.get(`air-limit-${index}`)) || (column.isNumeric && type === "air-toxicity" && buildRenderCache.airErrorMap.get(`air-toxicity-${index}`)) ? "is-invalid" : ""}"
            value="${escapeHtml(row[column.field] ?? "")}"
            ${column.width ? `style="min-width:${column.width}px"` : ""}
            ${attrsToString({
              "data-type": type,
              "data-index": index,
              "data-field": column.field,
              "data-focus-key": `${type}-${index}-${column.field}`,
            })}
          >
        </td>
      `).join("")}
      <td>
        <button class="button button--danger button--small" type="button" data-action="remove-row" data-table="${type}" data-index="${index}">
          Usuń
        </button>
      </td>
    </tr>
  `).join("");

  return `
    <article class="card">
      <div class="card__header">
        <div>
          <h3 class="card__title">${escapeHtml(title)}</h3>
          <p class="muted">${escapeHtml(description)}</p>
        </div>
        <button class="button button--secondary button--small" type="button" data-action="add-row" data-table="${escapeHtml(type)}">
          Dodaj wiersz
        </button>
      </div>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              ${columns.map((column) => `<th>${escapeHtml(column.label)}</th>`).join("")}
              <th>Akcja</th>
            </tr>
          </thead>
          <tbody>${tableRows}</tbody>
        </table>
      </div>
    </article>
  `;
}

function renderAirPollutants(errorMap, computedAir) {
  if (!state.air.pollutants.length) {
    return `
      <div class="empty-state">
        <p>Brak zdefiniowanych zanieczyszczeń.</p>
        <button class="button button--secondary" type="button" data-action="add-pollutant">Dodaj zanieczyszczenie</button>
      </div>
    `;
  }

  const dates = computedAir.dates;
  return state.air.pollutants.map((pollutant, pollutantIndex) => {
    const pollutantName = pollutant.alias || pollutant.displayName || `Zanieczyszczenie ${pollutantIndex + 1}`;
    const rows = dates.map((date, dateIndex) => `
      <tr>
        <td>${escapeHtml(formatShortDate(date))}</td>
        ${AIR_STATIONS.map((station) => {
          const error = errorMap.get(`air-measurement-${pollutant.id}-${station.id}-${dateIndex}`) ?? "";
          return `
            <td>
              <input
                class="table-input ${error ? "is-invalid" : ""}"
                value="${escapeHtml(pollutant.values[station.id][dateIndex] ?? "")}"
                ${attrsToString({
                  "data-type": "measurement",
                  "data-pollutant-id": pollutant.id,
                  "data-station-role": station.id,
                  "data-index": dateIndex,
                  "data-focus-key": `measurement-${pollutant.id}-${station.id}-${dateIndex}`,
                })}
              >
            </td>
          `;
        }).join("")}
      </tr>
    `).join("");

    return `
      <article class="card">
        <div class="card__header">
          <div>
            <h3 class="card__title">${escapeHtml(pollutantName)}</h3>
            <p class="muted">Seria 10 kolejnych dni. Godzina pomiaru: ${escapeHtml(state.air.hour || "—")}.</p>
          </div>
          <div class="toolbar">
            <span class="pill">${escapeHtml(pollutant.unit || "µg/m3")}</span>
            <button class="button button--danger button--small" type="button" data-action="remove-pollutant" data-pollutant-id="${escapeHtml(pollutant.id)}">
              Usuń
            </button>
          </div>
        </div>
        <div class="field-grid">
          ${renderInputField({
            label: "Alias / skrót",
            value: pollutant.alias,
            attributes: { "data-type": "pollutant-field", "data-pollutant-id": pollutant.id, "data-field": "alias", "data-focus-key": `pollutant-${pollutant.id}-alias` },
            spanClass: "span-4",
          })}
          ${renderInputField({
            label: "Nazwa wyświetlana",
            value: pollutant.displayName,
            attributes: { "data-type": "pollutant-field", "data-pollutant-id": pollutant.id, "data-field": "displayName", "data-focus-key": `pollutant-${pollutant.id}-displayName` },
            spanClass: "span-4",
          })}
          ${renderInputField({
            label: "Jednostka",
            value: pollutant.unit,
            attributes: { "data-type": "pollutant-field", "data-pollutant-id": pollutant.id, "data-field": "unit", "data-focus-key": `pollutant-${pollutant.id}-unit` },
            spanClass: "span-4",
          })}
        </div>
        <div class="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Data</th>
                <th>Miejska</th>
                <th>Podmiejska</th>
                <th>Pozamiejska</th>
              </tr>
            </thead>
            <tbody>${rows}</tbody>
          </table>
        </div>
      </article>
    `;
  }).join("");
}

function getStationDisplayName(role) {
  const station = state.air.stations.find((item) => item.id === role);
  return station?.nazwa || role;
}

function renderAirSummary(computedAir) {
  return computedAir.stationCards.map((station) => `
    <article class="metric">
      <p class="metric__label">Stacja ${escapeHtml(station.label)} • ${escapeHtml(getStationDisplayName(station.role))}</p>
      <p class="metric__value">Ψ ${escapeHtml(formatNumber(station.psiValue, 3))}</p>
      <p class="metric__note">${escapeHtml(station.psiInterpretation)}</p>
      <p class="metric__value">τ ${escapeHtml(formatNumber(station.tauValue, 2))}</p>
      <p class="metric__note">${escapeHtml(station.tauInterpretation)}</p>
      <div class="inline-list">
        <span class="pill ${station.exceedAvgCount ? "pill--warning" : ""}">Przekroczenia średniej: ${station.exceedAvgCount}</span>
        <span class="pill ${station.exceedMaxCount ? "pill--danger" : ""}">Przekroczenia maksymalne: ${station.exceedMaxCount}</span>
      </div>
      ${renderWarnings("Ostrzeżenia mapowania", station.warnings)}
    </article>
  `).join("");
}

function renderAirResultsTable(computedAir) {
  const rows = computedAir.rows.map((row) => {
    const stationSummary = computedAir.stationCards.find((station) => station.role === row.stationRole);
    return `
      <tr>
        <td><strong>${escapeHtml(row.stationLabel)}</strong></td>
        <td>${escapeHtml(row.pollutantAlias)}</td>
        <td>${escapeHtml(row.pollutantName)}</td>
        <td>${escapeHtml(row.unit)}</td>
        <td>${escapeHtml(formatNumber(row.min, 2))}</td>
        <td>${escapeHtml(formatNumber(row.avg, 2))}</td>
        <td>${escapeHtml(formatNumber(row.max, 2))}</td>
        <td>${escapeHtml(formatNumber(row.limit, 2))}</td>
        <td>${escapeHtml(formatNumber(row.toxicity, 2))}</td>
        <td>${row.limitWarning ? `<span class="pill pill--warning">Brak limitu</span>` : `<span class="pill ${row.exceedAvg ? "pill--warning" : ""}">${row.exceedAvg ? "TAK" : "NIE"}</span>`}</td>
        <td>${row.limitWarning ? `<span class="pill pill--warning">Brak limitu</span>` : `<span class="pill ${row.exceedMax ? "pill--danger" : ""}">${row.exceedMax ? "TAK" : "NIE"}</span>`}</td>
        <td>${escapeHtml(formatNumber(stationSummary?.psiValue, 3))}</td>
        <td>${escapeHtml(formatNumber(stationSummary?.tauValue, 2))}</td>
        <td>${escapeHtml(row.limitWarning || row.toxicityWarning || "Wskaźnik liczony dla całej stacji.")}</td>
      </tr>
    `;
  }).join("");

  return `
    <div class="table-wrap">
      <table class="results-table">
        <thead>
          <tr>
            <th>Stacja</th>
            <th>Alias</th>
            <th>Zanieczyszczenie</th>
            <th>Jednostka</th>
            <th>MIN</th>
            <th>ŚREDNIA</th>
            <th>MAX</th>
            <th>Limit D24</th>
            <th>Wsp. toksyczności</th>
            <th>Średnia &gt; limit</th>
            <th>MAX &gt; limit</th>
            <th>Ψ stacji</th>
            <th>τ stacji</th>
            <th>Uwagi</th>
          </tr>
        </thead>
        <tbody>${rows}</tbody>
      </table>
    </div>
  `;
}

function splitSeriesIntoSegments(points) {
  const segments = [];
  let current = [];
  points.forEach((point) => {
    if (point === null) {
      if (current.length) segments.push(current);
      current = [];
    } else {
      current.push(point);
    }
  });
  if (current.length) segments.push(current);
  return segments;
}

function createSmoothPath(points) {
  if (!points.length) return "";
  if (points.length === 1) return `M ${points[0].x} ${points[0].y}`;
  if (points.length === 2) return `M ${points[0].x} ${points[0].y} L ${points[1].x} ${points[1].y}`;

  let path = `M ${points[0].x} ${points[0].y}`;
  for (let index = 0; index < points.length - 1; index += 1) {
    const p0 = points[index - 1] || points[index];
    const p1 = points[index];
    const p2 = points[index + 1];
    const p3 = points[index + 2] || p2;
    const cp1x = p1.x + (p2.x - p0.x) / 6;
    const cp1y = p1.y + (p2.y - p0.y) / 6;
    const cp2x = p2.x - (p3.x - p1.x) / 6;
    const cp2y = p2.y - (p3.y - p1.y) / 6;
    path += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${p2.x} ${p2.y}`;
  }
  return path;
}

function renderAirChart(chart) {
  const width = 640;
  const height = 340;
  const padding = { top: 28, right: 28, bottom: 58, left: 58 };
  const plotWidth = width - padding.left - padding.right;
  const plotHeight = height - padding.top - padding.bottom;
  const validValues = chart.series.flatMap((series) => series.values.filter((value) => value !== null));

  if (!validValues.length) {
    return `
      <div class="chart-card">
        <h4>${escapeHtml(chart.pollutantName || chart.pollutantAlias || "Wykres")}</h4>
        <div class="chart-shell"><div class="chart-empty">Wprowadź dane, aby wygenerować wykres.</div></div>
      </div>
    `;
  }

  const minValue = Math.min(...validValues);
  const maxValue = Math.max(...validValues);
  const range = maxValue - minValue || Math.max(maxValue * 0.15, 1);
  const yMin = Math.max(0, minValue - range * 0.15);
  const yMax = maxValue + range * 0.18;
  const yStep = (yMax - yMin) / 4;
  const xStep = chart.dates.length > 1 ? plotWidth / (chart.dates.length - 1) : plotWidth;

  const gridLines = Array.from({ length: 5 }, (_, index) => {
    const value = yMax - yStep * index;
    const y = padding.top + (plotHeight / 4) * index;
    return `
      <g>
        <line x1="${padding.left}" y1="${y}" x2="${width - padding.right}" y2="${y}" stroke="rgba(152, 163, 141, 0.35)" stroke-dasharray="5 5" />
        <text x="${padding.left - 12}" y="${y + 4}" text-anchor="end" fill="#607165" font-size="12">${escapeHtml(formatNumber(value, 1))}</text>
      </g>
    `;
  }).join("");

  const xLabels = chart.dates.map((date, index) => {
    if (index % 2 === 1 && index !== chart.dates.length - 1) return "";
    const x = padding.left + xStep * index;
    return `<text x="${x}" y="${height - padding.bottom + 24}" text-anchor="middle" fill="#607165" font-size="12">${escapeHtml(formatShortDate(date))}</text>`;
  }).join("");

  const seriesMarkup = chart.series.map((series) => {
    const points = series.values.map((value, index) => {
      if (value === null) return null;
      const x = padding.left + xStep * index;
      const y = padding.top + ((yMax - value) / (yMax - yMin)) * plotHeight;
      return { x, y };
    });
    const segments = splitSeriesIntoSegments(points);
    const paths = segments.map((segment) => `<path d="${createSmoothPath(segment)}" fill="none" stroke="${series.color}" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round" />`).join("");
    const markers = points.filter(Boolean).map((point) => `<circle cx="${point.x}" cy="${point.y}" r="4.2" fill="${series.color}" stroke="#ffffff" stroke-width="2" />`).join("");
    return `${paths}${markers}`;
  }).join("");

  const legend = chart.series.map((series) => `
    <span class="legend__item">
      <span class="legend__swatch" style="background:${series.color}"></span>
      ${escapeHtml(series.label)}
    </span>
  `).join("");

  return `
    <div class="chart-card">
      <h4>${escapeHtml(chart.pollutantName || chart.pollutantAlias || "Wykres")} <span class="muted">(${escapeHtml(chart.unit)})</span></h4>
      <div class="chart-shell">
        <svg viewBox="0 0 ${width} ${height}" role="img" aria-label="Wykres zanieczyszczenia ${escapeHtml(chart.pollutantName)}">
          <rect x="${padding.left}" y="${padding.top}" width="${plotWidth}" height="${plotHeight}" fill="rgba(250, 248, 242, 0.85)" />
          ${gridLines}
          <line x1="${padding.left}" y1="${height - padding.bottom}" x2="${width - padding.right}" y2="${height - padding.bottom}" stroke="#98a38d" stroke-width="1.2" />
          <line x1="${padding.left}" y1="${padding.top}" x2="${padding.left}" y2="${height - padding.bottom}" stroke="#98a38d" stroke-width="1.2" />
          ${seriesMarkup}
          ${xLabels}
          <text x="${width / 2}" y="${height - 10}" text-anchor="middle" fill="#607165" font-size="12">Data pomiaru</text>
          <text x="18" y="${height / 2}" text-anchor="middle" fill="#607165" font-size="12" transform="rotate(-90 18 ${height / 2})">Stężenie [${escapeHtml(chart.unit)}]</text>
        </svg>
      </div>
      <div class="legend">${legend}</div>
    </div>
  `;
}

function renderSoilResults(computedSoil) {
  return `
    <div class="metrics-grid">
      <article class="metric">
        <p class="metric__label">Średnie pH próbki w wodzie</p>
        <p class="metric__value">${escapeHtml(formatNumber(computedSoil.activeSampleAvg, 2))}</p>
        <p class="metric__note">Wartość pomocnicza dla opisu kwasowości czynnej.</p>
      </article>
      <article class="metric">
        <p class="metric__label">Hh [mmol(+)/100 g]</p>
        <p class="metric__value">${escapeHtml(formatNumber(computedSoil.hh, 3))}</p>
        <p class="metric__note">Kwasowość hydrolityczna z VNaOH, cNaOH i współczynnika k.</p>
      </article>
      <article class="metric">
        <p class="metric__label">S [mmol(+)/100 g]</p>
        <p class="metric__value">${escapeHtml(formatNumber(computedSoil.s, 3))}</p>
        <p class="metric__note">Suma kationów zasadowych według wzoru z instrukcji.</p>
      </article>
      <article class="metric">
        <p class="metric__label">T [mmol(+)/100 g]</p>
        <p class="metric__value">${escapeHtml(formatNumber(computedSoil.t, 3))}</p>
        <p class="metric__note">Pojemność sorpcyjna: T = Hh + S.</p>
      </article>
      <article class="metric">
        <p class="metric__label">CaO [kg/ha]</p>
        <p class="metric__value">${escapeHtml(formatNumber(computedSoil.caO, 2))}</p>
        <p class="metric__note">Zapotrzebowanie na wapno w przeliczeniu na tlenek wapnia.</p>
      </article>
      <article class="metric">
        <p class="metric__label">CaCO3 [kg/ha]</p>
        <p class="metric__value">${escapeHtml(formatNumber(computedSoil.caCO3, 2))}</p>
        <p class="metric__note">Zapotrzebowanie na wapno w przeliczeniu na węglan wapnia.</p>
      </article>
    </div>
  `;
}

function renderSoilReportBox(computedSoil) {
  return `
    <section class="report-box">
      <div class="card__header">
        <div>
          <h3 class="report-box__title">Blok podsumowania do sprawozdania</h3>
          <p class="muted">Układ dostosowany do sekcji wynikowej ćwiczenia 2.</p>
        </div>
        <div class="inline-list">
          <span class="chip">Klasyfikacja na podstawie średniego pH badanej próbki w KCl</span>
        </div>
      </div>
      <dl class="report-box__grid">
        <div class="report-box__item"><dt>Średnie pH wody destylowanej</dt><dd>${escapeHtml(formatNumber(computedSoil.activeDistilledAvg, 2))}</dd></div>
        <div class="report-box__item"><dt>Średnie pH próbki w wodzie</dt><dd>${escapeHtml(formatNumber(computedSoil.activeSampleAvg, 2))}</dd></div>
        <div class="report-box__item"><dt>Średnie pH KCl</dt><dd>${escapeHtml(formatNumber(computedSoil.exchangeKclAvg, 2))}</dd></div>
        <div class="report-box__item"><dt>Średnie pH próbki w KCl</dt><dd>${escapeHtml(formatNumber(computedSoil.exchangeSampleAvg, 2))}</dd></div>
        <div class="report-box__item"><dt>Hh</dt><dd>${escapeHtml(formatNumber(computedSoil.hh, 3))}</dd></div>
        <div class="report-box__item"><dt>S</dt><dd>${escapeHtml(formatNumber(computedSoil.s, 3))}</dd></div>
        <div class="report-box__item"><dt>T</dt><dd>${escapeHtml(formatNumber(computedSoil.t, 3))}</dd></div>
        <div class="report-box__item"><dt>Masa gleby dla 1 ha</dt><dd>${escapeHtml(formatNumber(computedSoil.mz, 2))} kg</dd></div>
        <div class="report-box__item"><dt>Całkowita kwasowość hydrolityczna warstwy gleby</dt><dd>${escapeHtml(formatNumber(computedSoil.hhHa, 2))}</dd></div>
        <div class="report-box__item"><dt>CaO / CaCO3</dt><dd>${escapeHtml(formatNumber(computedSoil.caO, 2))} / ${escapeHtml(formatNumber(computedSoil.caCO3, 2))} kg/ha</dd></div>
        <div class="report-box__item"><dt>Gleby uprawne</dt><dd>${escapeHtml(computedSoil.agriculturalClass)}</dd></div>
        <div class="report-box__item"><dt>Gleby leśne</dt><dd>${escapeHtml(computedSoil.forestClass)}</dd></div>
      </dl>
      <div class="surface-note" style="margin-top:16px;"><strong>Interpretacja:</strong> określ kategorię gleby, odnieś średnie pH próbki w KCl do klasy gleby uprawnej i leśnej oraz skomentuj zależność między Hh, S i T.</div>
    </section>
  `;
}

function buildAirSection(computedAir, airErrors) {
  const errorMap = buildErrorMap(airErrors);
  const endDate = getAirEndDate(state.air);
  const allWarnings = computedAir.stationCards.flatMap((station) => station.warnings);

  return `
    <section class="section ${state.activeTab === "powietrze" ? "is-active" : ""}">
      <div class="stack-lg">
        <section class="card card--accent">
          <div class="card__header">
            <div>
              <h2 class="section-title">Powietrze</h2>
              <p class="muted">Wprowadź 10 kolejnych dni pomiarów z jednej godziny i oblicz statystyki, indeks jakości oraz indeks toksyczności.</p>
            </div>
            <div class="toolbar">
              <button class="button" type="button" data-action="load-air-demo">Wczytaj dane przykładowe</button>
              <button class="button button--secondary" type="button" data-action="clear-air">Wyczyść dane</button>
              <button class="button button--ghost" type="button" data-action="print-view">Drukuj widok</button>
            </div>
          </div>
          <div class="field-grid">
            ${renderInputField({ label: "Data początkowa", value: state.air.startDate, type: "date", attributes: { "data-type": "air-meta", "data-field": "startDate", "data-focus-key": "air-startDate" }, spanClass: "span-4" })}
            ${renderInputField({ label: "Data końcowa", value: endDate, type: "date", attributes: { "data-type": "air-meta", "data-field": "endDate", "data-focus-key": "air-endDate" }, hint: "Pole przelicza datę początkową tak, by zakres obejmował dokładnie 10 dni.", spanClass: "span-4" })}
            ${renderInputField({ label: "Godzina pomiaru", value: state.air.hour, type: "time", attributes: { "data-type": "air-meta", "data-field": "hour", "data-focus-key": "air-hour" }, spanClass: "span-4" })}
          </div>
          <div class="surface-note">Dane są liczone dla 10 kolejnych dni. Wszystkie wartości liczbowe akceptują przecinek lub kropkę dziesiętną.</div>
          ${renderErrorSummary("Sprawdź pola z danymi powietrza", airErrors)}
        </section>
        <section class="station-grid">${renderAirStations()}</section>
        <section class="stack">
          <div class="toolbar toolbar--split">
            <div>
              <h3 class="subsection-title">Lista zanieczyszczeń i serie pomiarowe</h3>
              <p class="muted">Możesz dodawać własne pozycje i rozszerzać zestaw o dodatkowe substancje.</p>
            </div>
            <button class="button button--secondary" type="button" data-action="add-pollutant">Dodaj zanieczyszczenie</button>
          </div>
          ${renderAirPollutants(errorMap, computedAir)}
        </section>
        <section class="mapping-grid">
          ${renderMappingTable({ title: "Mapowanie limitów", description: "Edytowalna tabela dopuszczalnych stężeń średniodobowych D24.", rows: state.air.mappings.limits, type: "air-limit", columns: [{ label: "Nazwa substancji", field: "name", width: 210 }, { label: "Limit D24", field: "value", width: 120, isNumeric: true }] })}
          ${renderMappingTable({ title: "Mapowanie toksyczności", description: "Współczynniki toksyczności używane wyłącznie wtedy, gdy występują w instrukcji.", rows: state.air.mappings.toxicity, type: "air-toxicity", columns: [{ label: "Nazwa zanieczyszczenia", field: "name", width: 210 }, { label: "Współczynnik", field: "value", width: 120, isNumeric: true }] })}
          ${renderMappingTable({ title: "Mapowanie synonimów", description: "Osobne nazwy dla limitu i toksyczności pozwalają połączyć skróty z tabelami z instrukcji.", rows: state.air.mappings.synonyms, type: "air-synonym", columns: [{ label: "Alias", field: "alias", width: 120 }, { label: "Nazwa wyświetlana", field: "displayName", width: 180 }, { label: "Nazwa do limitu", field: "limitName", width: 180 }, { label: "Nazwa do toksyczności", field: "toxicityName", width: 190 }, { label: "Jednostka", field: "unit", width: 110 }] })}
        </section>
        <section class="stack">
          <div class="card">
            <div class="card__header">
              <div>
                <h3 class="card__title">Podsumowanie stacji</h3>
                <p class="muted">Oddzielone od statystyk dla poszczególnych zanieczyszczeń, zgodnie z wymaganiami zadania.</p>
              </div>
              <div class="toolbar">
                <button class="button button--secondary" type="button" data-action="download-air-raw">Eksport CSV danych</button>
                <button class="button button--secondary" type="button" data-action="download-air-summary">Eksport CSV wyników</button>
              </div>
            </div>
            ${renderWarnings("Ostrzeżenia o brakujących mapowaniach", allWarnings)}
            <div class="summary-grid">${renderAirSummary(computedAir)}</div>
          </div>
          <div class="card">
            <div class="card__header">
              <div>
                <h3 class="card__title">Statystyki zanieczyszczeń</h3>
                <p class="muted">MIN, ŚREDNIA i MAX dla każdej stacji oraz flagi przekroczeń.</p>
              </div>
            </div>
            ${renderAirResultsTable(computedAir)}
          </div>
        </section>
        <section class="card">
          <div class="card__header">
            <div>
              <h3 class="card__title">Wykresy zmian stężeń</h3>
              <p class="muted">Osobny wykres dla każdego zanieczyszczenia, trzy serie pomiarowe i wspólna oś czasu.</p>
            </div>
            <span class="chip">Wygładzane linie SVG + znaczniki</span>
          </div>
          <div class="chart-grid">${computedAir.chartData.map((chart) => renderAirChart(chart)).join("")}</div>
        </section>
      </div>
    </section>
  `;
}

function buildSoilSection(computedSoil, soilErrors) {
  const errorMap = buildErrorMap(soilErrors);
  const kOptions = [
    { value: "1.5", label: "1,5 - ziemia lekka (piaszczysta)" },
    { value: "1.75", label: "1,75 - ziemia o średniej granulacji" },
    { value: "2.0", label: "2,0 - ziemia ciężka (ilasta, gliniasta)" },
  ];

  return `
    <section class="section ${state.activeTab === "gleba" ? "is-active" : ""}">
      <div class="stack-lg">
        <section class="card card--earth">
          <div class="card__header">
            <div>
              <h2 class="section-title">Gleba</h2>
              <p class="muted">Sekcja obejmuje kwasowość czynną i wymienną, kwasowość hydrolityczną, sumę kationów zasadowych oraz pojemność sorpcyjną.</p>
            </div>
            <div class="toolbar">
              <button class="button" type="button" data-action="load-soil-demo">Wczytaj dane przykładowe</button>
              <button class="button button--secondary" type="button" data-action="clear-soil">Wyczyść dane</button>
              <button class="button button--ghost" type="button" data-action="download-soil-summary">Eksport CSV wyników</button>
            </div>
          </div>
          ${renderErrorSummary("Sprawdź pola z danymi gleby", soilErrors)}
          ${renderWarnings("Uwagi do wyników gleby", computedSoil.warnings)}
        </section>
        <section class="card">
          <div class="card__header"><div><h3 class="card__title">Kwasowość czynna</h3><p class="muted">Pomiary w wodzie destylowanej oraz dla badanej próbki gleby.</p></div></div>
          <div class="field-grid">
            ${renderInputField({ label: "pH wody destylowanej - pomiar 1", value: state.soil.active.distilled1, attributes: { "data-type": "soil-field", "data-section": "active", "data-field": "distilled1", "data-focus-key": "soil-active-distilled1" }, error: errorMap.get("soil-active-distilled1") ?? "", spanClass: "span-3" })}
            ${renderInputField({ label: "pH wody destylowanej - pomiar 2", value: state.soil.active.distilled2, attributes: { "data-type": "soil-field", "data-section": "active", "data-field": "distilled2", "data-focus-key": "soil-active-distilled2" }, error: errorMap.get("soil-active-distilled2") ?? "", spanClass: "span-3" })}
            ${renderInputField({ label: "pH badanej próbki - pomiar 1", value: state.soil.active.sample1, attributes: { "data-type": "soil-field", "data-section": "active", "data-field": "sample1", "data-focus-key": "soil-active-sample1" }, error: errorMap.get("soil-active-sample1") ?? "", spanClass: "span-3" })}
            ${renderInputField({ label: "pH badanej próbki - pomiar 2", value: state.soil.active.sample2, attributes: { "data-type": "soil-field", "data-section": "active", "data-field": "sample2", "data-focus-key": "soil-active-sample2" }, error: errorMap.get("soil-active-sample2") ?? "", spanClass: "span-3" })}
          </div>
        </section>
        <section class="card">
          <div class="card__header"><div><h3 class="card__title">Kwasowość wymienna</h3><p class="muted">Pomiary roztworu KCl oraz badanej próbki gleby. Klasyfikacja używa średniego pH badanej próbki w KCl.</p></div></div>
          <div class="field-grid">
            ${renderInputField({ label: "pH KCl - pomiar 1", value: state.soil.exchange.kcl1, attributes: { "data-type": "soil-field", "data-section": "exchange", "data-field": "kcl1", "data-focus-key": "soil-exchange-kcl1" }, error: errorMap.get("soil-exchange-kcl1") ?? "", spanClass: "span-3" })}
            ${renderInputField({ label: "pH KCl - pomiar 2", value: state.soil.exchange.kcl2, attributes: { "data-type": "soil-field", "data-section": "exchange", "data-field": "kcl2", "data-focus-key": "soil-exchange-kcl2" }, error: errorMap.get("soil-exchange-kcl2") ?? "", spanClass: "span-3" })}
            ${renderInputField({ label: "pH badanej próbki - pomiar 1", value: state.soil.exchange.sample1, attributes: { "data-type": "soil-field", "data-section": "exchange", "data-field": "sample1", "data-focus-key": "soil-exchange-sample1" }, error: errorMap.get("soil-exchange-sample1") ?? "", spanClass: "span-3" })}
            ${renderInputField({ label: "pH badanej próbki - pomiar 2", value: state.soil.exchange.sample2, attributes: { "data-type": "soil-field", "data-section": "exchange", "data-field": "sample2", "data-focus-key": "soil-exchange-sample2" }, error: errorMap.get("soil-exchange-sample2") ?? "", spanClass: "span-3" })}
          </div>
        </section>
        <section class="card">
          <div class="card__header"><div><h3 class="card__title">Kwasowość hydrolityczna i masa gleby dla 1 ha</h3><p class="muted">Formuły są zgodne z instrukcją: Hh = V · c · 10 · k oraz Mz = p · h · rho.</p></div></div>
          <div class="field-grid">
            ${renderInputField({ label: "VNaOH [cm3]", value: state.soil.hydrolytic.vNaOH, attributes: { "data-type": "soil-field", "data-section": "hydrolytic", "data-field": "vNaOH", "data-focus-key": "soil-hydrolytic-vNaOH" }, error: errorMap.get("soil-hydrolytic-vNaOH") ?? "", spanClass: "span-3" })}
            ${renderInputField({ label: "c NaOH [mol/dm3]", value: state.soil.hydrolytic.cNaOH, attributes: { "data-type": "soil-field", "data-section": "hydrolytic", "data-field": "cNaOH", "data-focus-key": "soil-hydrolytic-cNaOH" }, error: errorMap.get("soil-hydrolytic-cNaOH") ?? "", spanClass: "span-3" })}
            ${renderSelectField({ label: "Współczynnik k", value: state.soil.hydrolytic.k, options: kOptions, attributes: { "data-type": "soil-field", "data-section": "hydrolytic", "data-field": "k", "data-focus-key": "soil-hydrolytic-k" }, error: errorMap.get("soil-hydrolytic-k") ?? "", spanClass: "span-6" })}
            ${renderInputField({ label: "p [m2]", value: state.soil.hectare.p, attributes: { "data-type": "soil-field", "data-section": "hectare", "data-field": "p", "data-focus-key": "soil-hectare-p" }, error: errorMap.get("soil-hectare-p") ?? "", spanClass: "span-4" })}
            ${renderInputField({ label: "h [m]", value: state.soil.hectare.h, attributes: { "data-type": "soil-field", "data-section": "hectare", "data-field": "h", "data-focus-key": "soil-hectare-h" }, error: errorMap.get("soil-hectare-h") ?? "", spanClass: "span-4" })}
            ${renderInputField({ label: "rho [kg/m3]", value: state.soil.hectare.rho, attributes: { "data-type": "soil-field", "data-section": "hectare", "data-field": "rho", "data-focus-key": "soil-hectare-rho" }, error: errorMap.get("soil-hectare-rho") ?? "", spanClass: "span-4" })}
          </div>
        </section>
        <section class="card">
          <div class="card__header"><div><h3 class="card__title">Suma kationów zasadowych i pojemność sorpcyjna</h3><p class="muted">Formuły: S = (V · c - V1 · c1) · 4 · 5 oraz T = Hh + S.</p></div></div>
          <div class="field-grid">
            ${renderInputField({ label: "V HCl [cm3]", value: state.soil.baseCations.vHCl, attributes: { "data-type": "soil-field", "data-section": "baseCations", "data-field": "vHCl", "data-focus-key": "soil-baseCations-vHCl" }, error: errorMap.get("soil-baseCations-vHCl") ?? "", spanClass: "span-3" })}
            ${renderInputField({ label: "c HCl [mol/dm3]", value: state.soil.baseCations.cHCl, attributes: { "data-type": "soil-field", "data-section": "baseCations", "data-field": "cHCl", "data-focus-key": "soil-baseCations-cHCl" }, error: errorMap.get("soil-baseCations-cHCl") ?? "", spanClass: "span-3" })}
            ${renderInputField({ label: "V1 NaOH [cm3]", value: state.soil.baseCations.v1NaOH, attributes: { "data-type": "soil-field", "data-section": "baseCations", "data-field": "v1NaOH", "data-focus-key": "soil-baseCations-v1NaOH" }, error: errorMap.get("soil-baseCations-v1NaOH") ?? "", spanClass: "span-3" })}
            ${renderInputField({ label: "c1 NaOH [mol/dm3]", value: state.soil.baseCations.c1NaOH, attributes: { "data-type": "soil-field", "data-section": "baseCations", "data-field": "c1NaOH", "data-focus-key": "soil-baseCations-c1NaOH" }, error: errorMap.get("soil-baseCations-c1NaOH") ?? "", spanClass: "span-3" })}
          </div>
        </section>
        <section class="card">
          <div class="card__header"><div><h3 class="card__title">Wyniki końcowe</h3><p class="muted">W centrum pozostają Hh, S i T, a poniżej od razu gotowy blok do sprawozdania.</p></div></div>
          ${renderSoilResults(computedSoil)}
          ${renderSoilReportBox(computedSoil)}
        </section>
      </div>
    </section>
  `;
}

function renderApp(preserveFocus) {
  const airErrors = collectAirErrors(state.air);
  const soilErrors = collectSoilErrors(state.soil);
  buildRenderCache.airErrorMap = buildErrorMap(airErrors);
  const computedAir = computeAir(state.air);
  const computedSoil = computeSoil(state.soil);
  appRoot.innerHTML = `${buildAirSection(computedAir, airErrors)}${buildSoilSection(computedSoil, soilErrors)}`;

  document.querySelectorAll(".tab-button").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.tab === state.activeTab);
  });

  restoreFocus(preserveFocus);
}

function captureFocusState(element) {
  const focusKey = element.dataset.focusKey;
  if (!focusKey) return null;
  return {
    key: focusKey,
    start: typeof element.selectionStart === "number" ? element.selectionStart : null,
    end: typeof element.selectionEnd === "number" ? element.selectionEnd : null,
  };
}

function restoreFocus(focusState) {
  if (!focusState?.key) return;
  const selector = `[data-focus-key="${CSS.escape(focusState.key)}"]`;
  const element = document.querySelector(selector);
  if (!element) return;
  element.focus({ preventScroll: true });
  if (typeof focusState.start === "number" && typeof element.setSelectionRange === "function") {
    try {
      element.setSelectionRange(focusState.start, focusState.end ?? focusState.start);
    } catch (error) {
      // Ignore unsupported selection restoration.
    }
  }
}

function updateAirMeta(field, value) {
  if (field === "startDate") {
    state.air.startDate = value;
  } else if (field === "endDate") {
    const endDate = parseIsoDate(value);
    const startDate = endDate ? addDays(endDate, -9) : null;
    if (startDate) state.air.startDate = formatIsoDate(startDate);
  } else if (field === "hour") {
    state.air.hour = value;
  }
}

function findPollutantById(pollutantId) {
  return state.air.pollutants.find((pollutant) => pollutant.id === pollutantId);
}

function updateInputValue(target) {
  const { type } = target.dataset;
  const { value } = target;

  if (type === "air-meta") {
    updateAirMeta(target.dataset.field, value);
    return;
  }
  if (type === "station-field") {
    const station = state.air.stations.find((item) => item.id === target.dataset.stationId);
    if (station) station[target.dataset.field] = value;
    return;
  }
  if (type === "pollutant-field") {
    const pollutant = findPollutantById(target.dataset.pollutantId);
    if (pollutant) pollutant[target.dataset.field] = value;
    return;
  }
  if (type === "measurement") {
    const pollutant = findPollutantById(target.dataset.pollutantId);
    if (pollutant) pollutant.values[target.dataset.stationRole][Number(target.dataset.index)] = value;
    return;
  }
  if (type === "air-limit") {
    const row = state.air.mappings.limits[Number(target.dataset.index)];
    if (row) row[target.dataset.field] = value;
    return;
  }
  if (type === "air-toxicity") {
    const row = state.air.mappings.toxicity[Number(target.dataset.index)];
    if (row) row[target.dataset.field] = value;
    return;
  }
  if (type === "air-synonym") {
    const row = state.air.mappings.synonyms[Number(target.dataset.index)];
    if (row) row[target.dataset.field] = value;
    return;
  }
  if (type === "soil-field") {
    const section = state.soil[target.dataset.section];
    if (section) section[target.dataset.field] = value;
  }
}

function addRow(table) {
  if (table === "air-limit") state.air.mappings.limits.push({ name: "", value: "" });
  if (table === "air-toxicity") state.air.mappings.toxicity.push({ name: "", value: "" });
  if (table === "air-synonym") {
    state.air.mappings.synonyms.push({ alias: "", displayName: "", limitName: "", toxicityName: "", unit: "µg/m3" });
  }
}

function removeRow(table, index) {
  const numericIndex = Number(index);
  if (table === "air-limit") state.air.mappings.limits.splice(numericIndex, 1);
  if (table === "air-toxicity") state.air.mappings.toxicity.splice(numericIndex, 1);
  if (table === "air-synonym") state.air.mappings.synonyms.splice(numericIndex, 1);
}

function downloadText(filename, content, mimeType = "text/plain;charset=utf-8") {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.append(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function toCsvCell(value) {
  const text = String(value ?? "");
  return /[;"\n]/.test(text) ? `"${text.replaceAll('"', '""')}"` : text;
}

function buildAirRawCsv() {
  const dates = getAirDates(state.air);
  const rows = [["Data", "Godzina", "Alias", "Zanieczyszczenie", "Jednostka", "Stacja", "Wartość"]];
  state.air.pollutants.forEach((pollutant) => {
    AIR_STATIONS.forEach((station) => {
      dates.forEach((date, index) => {
        rows.push([date, state.air.hour, pollutant.alias, pollutant.displayName, pollutant.unit, station.label, pollutant.values[station.id][index] ?? ""]);
      });
    });
  });
  return rows.map((row) => row.map(toCsvCell).join(";")).join("\n");
}

function buildAirSummaryCsv() {
  const computedAir = computeAir(state.air);
  const rows = [["Podsumowanie stacji"], ["Stacja", "Psi", "Tau", "Przekroczenia średniej", "Przekroczenia maksymalne", "Uwagi"]];
  computedAir.stationCards.forEach((station) => {
    rows.push([station.label, formatNumber(station.psiValue, 3), formatNumber(station.tauValue, 2), station.exceedAvgCount, station.exceedMaxCount, station.warnings.join(" | ")]);
  });
  rows.push([], ["Statystyki zanieczyszczeń"], ["Stacja", "Alias", "Nazwa", "MIN", "ŚREDNIA", "MAX", "Limit", "Toksyczność", "Średnia > limit", "MAX > limit", "Uwagi"]);
  computedAir.rows.forEach((row) => {
    rows.push([row.stationLabel, row.pollutantAlias, row.pollutantName, formatNumber(row.min, 2), formatNumber(row.avg, 2), formatNumber(row.max, 2), formatNumber(row.limit, 2), formatNumber(row.toxicity, 2), row.limitWarning ? "Brak limitu" : (row.exceedAvg ? "TAK" : "NIE"), row.limitWarning ? "Brak limitu" : (row.exceedMax ? "TAK" : "NIE"), row.limitWarning || row.toxicityWarning || "Wskaźnik liczony dla całej stacji"]);
  });
  return rows.map((row) => row.map(toCsvCell).join(";")).join("\n");
}

function buildSoilSummaryCsv() {
  const computedSoil = computeSoil(state.soil);
  const rows = [
    ["Wynik", "Wartość", "Uwagi"],
    ["Średnie pH wody destylowanej", formatNumber(computedSoil.activeDistilledAvg, 2), "wartość pomocnicza"],
    ["Średnie pH próbki w wodzie", formatNumber(computedSoil.activeSampleAvg, 2), "kwasowość czynna"],
    ["Średnie pH KCl", formatNumber(computedSoil.exchangeKclAvg, 2), "wartość pomocnicza"],
    ["Średnie pH próbki w KCl", formatNumber(computedSoil.exchangeSampleAvg, 2), "podstawa klasyfikacji"],
    ["Hh", formatNumber(computedSoil.hh, 3), "kwasowość hydrolityczna"],
    ["Mz", formatNumber(computedSoil.mz, 2), "masa gleby dla 1 ha"],
    ["Hh_ha", formatNumber(computedSoil.hhHa, 2), "całkowita kwasowość hydrolityczna"],
    ["CaO", formatNumber(computedSoil.caO, 2), "kg/ha"],
    ["CaCO3", formatNumber(computedSoil.caCO3, 2), "kg/ha"],
    ["S", formatNumber(computedSoil.s, 3), "suma kationów zasadowych"],
    ["T", formatNumber(computedSoil.t, 3), "pojemność sorpcyjna"],
    ["Klasa gleby uprawnej", computedSoil.agriculturalClass, ""],
    ["Klasa gleby leśnej", computedSoil.forestClass, ""],
  ];
  return rows.map((row) => row.map(toCsvCell).join(";")).join("\n");
}

function handleAction(button) {
  const action = button.dataset.action;
  if (action === "set-tab") state.activeTab = button.dataset.tab;
  else if (action === "load-air-demo") state.air = createDemoAirState();
  else if (action === "clear-air") state.air = createBlankAirState();
  else if (action === "load-soil-demo") state.soil = createDemoSoilState();
  else if (action === "clear-soil") state.soil = createBlankSoilState();
  else if (action === "add-pollutant") state.air.pollutants.push(createEmptyPollutant(state.air.pollutants.length + 1));
  else if (action === "remove-pollutant") state.air.pollutants = state.air.pollutants.filter((pollutant) => pollutant.id !== button.dataset.pollutantId);
  else if (action === "add-row") addRow(button.dataset.table);
  else if (action === "remove-row") removeRow(button.dataset.table, button.dataset.index);
  else if (action === "download-air-raw") { downloadText("powietrze_dane.csv", buildAirRawCsv(), "text/csv;charset=utf-8"); return; }
  else if (action === "download-air-summary") { downloadText("powietrze_wyniki.csv", buildAirSummaryCsv(), "text/csv;charset=utf-8"); return; }
  else if (action === "download-soil-summary") { downloadText("gleba_wyniki.csv", buildSoilSummaryCsv(), "text/csv;charset=utf-8"); return; }
  else if (action === "print-view") { window.print(); return; }
  renderApp();
}

document.addEventListener("click", (event) => {
  const button = event.target.closest("[data-action]");
  if (button) handleAction(button);
});

function handleFormUpdate(event) {
  const target = event.target;
  if (!(target instanceof HTMLInputElement || target instanceof HTMLSelectElement || target instanceof HTMLTextAreaElement)) return;
  if (!target.dataset.type) return;
  const focusState = captureFocusState(target);
  updateInputValue(target);
  renderApp(focusState);
}

document.addEventListener("input", handleFormUpdate);
document.addEventListener("change", handleFormUpdate);

renderApp();
