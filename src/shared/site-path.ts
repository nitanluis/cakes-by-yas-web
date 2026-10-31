// Root hosting and GitHub project Pages share the same internal URL policy.
export function sitePath(path = '') {
  const base = import.meta.env.BASE_URL.replace(/\/+$/, '');
  return `${base}/${path.replace(/^\/+/, '')}`;
}
