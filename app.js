const search = document.getElementById('search');
const results = document.getElementById('results');
const normalize = value => value.normalize('NFD').replace(/\p{M}/gu, '').toLowerCase();
const index = documentsIndex.map(([title, url, body]) => ({title, url, text: normalize(title + ' ' + body)}));
search.addEventListener('input', () => {
  const query = normalize(search.value.trim());
  results.replaceChildren();
  results.hidden = !query;
  if (!query) return;
  const terms = query.split(/\s+/);
  const matches = index.filter(doc => terms.every(term => doc.text.includes(term)));
  for (const doc of matches) {
    const link = document.createElement('a');
    link.href = doc.url;
    link.textContent = doc.title;
    results.append(link);
  }
  if (!matches.length) {
    const empty = document.createElement('p');
    empty.textContent = 'No se encontraron documentos.';
    results.append(empty);
  }
});
search.addEventListener('keydown', event => {
  if (event.key === 'Escape') { search.value = ''; results.hidden = true; }
  if (event.key === 'ArrowDown') results.querySelector('a')?.focus();
  if (event.key === 'Enter') results.querySelector('a')?.click();
});
document.addEventListener('click', event => {
  if (!event.target.closest('.search')) results.hidden = true;
});
search.addEventListener('focus', () => { results.hidden = !search.value.trim(); });
if (matchMedia('(max-width: 760px)').matches) document.querySelector('aside details').open = false;
