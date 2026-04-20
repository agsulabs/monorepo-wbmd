import fs from 'fs';

const snapshotPath = 'openapi.snapshot.json';
const currentPath = 'openapi.current.json';

if (!fs.existsSync(currentPath)) {
  console.error('Missing current OpenAPI file');
  process.exit(1);
}

if (!fs.existsSync(snapshotPath)) {
  console.error('Missing snapshot OpenAPI file');
  process.exit(1);
}

const snapshot = JSON.stringify(JSON.parse(fs.readFileSync(snapshotPath, 'utf-8')));
const current = JSON.stringify(JSON.parse(fs.readFileSync(currentPath, 'utf-8')));

if (snapshot !== current) {
  console.error('OpenAPI schema changed!');
  console.error('You must regenerate api-client and update snapshot.');
  process.exit(1);
}

console.log('OpenAPI schema unchanged.');
