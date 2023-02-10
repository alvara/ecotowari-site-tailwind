export function slugify(str: string) {
  if (typeof str !== 'string' || !str) return str;

  return encodeURI(str);
}

export function unSlugify(str: string) {
  if (typeof str !== 'string' || !str) return str;

  return decodeURI(str);
}

export function slugPrettiyfy(str: string) {
  if (typeof str !== 'string' || !str) return str;

  return str.replace(/-/g, ' ');
}
