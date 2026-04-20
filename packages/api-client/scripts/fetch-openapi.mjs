import fs from 'fs';

const res = await fetch('http://localhost:3001/api-json');

if (!res.ok) {
  console.error('Failed to fetch OpenAPI schema');
  process.exit(1);
}

const json = await res.text();

fs.writeFileSync('openapi.current.json', json);

console.log('Fetched current OpenAPI schema');
