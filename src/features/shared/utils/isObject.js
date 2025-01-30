export function isObject(value) {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
