export function getEasterDate(year) {
  const a = year % 19;
  const b = Math.floor(year / 100);
  const c = year % 100;
  const d = Math.floor(b / 4);
  const e = b % 4;
  const f = Math.floor((b + 8) / 25);
  const g = Math.floor((b - f + 1) / 3);
  const h = (19 * a + b - d - g + 15) % 30;
  const i = Math.floor(c / 4);
  const k = c % 4;
  const l = (32 + 2 * e + 2 * i - h - k) % 7;
  const m = Math.floor((a + 11 * h + 22 * l) / 451);
  const month = Math.floor((h + l - 7 * m + 114) / 31);
  const day = ((h + l - 7 * m + 114) % 31) + 1;

  return new Date(year, month - 1, day);
}

export function getGoodFriday(year) {
  const easterDate = getEasterDate(year);
  easterDate.setDate(easterDate.getDate() - 2); // Odjęcie 2 dni od daty Wielkanocy
  return easterDate;
}

export function getAscensionDay(year) {
  const easterDate = getEasterDate(year);
  easterDate.setDate(easterDate.getDate() + 39); // Dodanie 39 dni do Niedzieli Wielkanocnej
  return easterDate;
}

export function getWhitMonday(year) {
  const easterDate = getEasterDate(year);
  easterDate.setDate(easterDate.getDate() + 50); // Dodanie 50 dni do Niedzieli Wielkanocnej
  return easterDate;
}
