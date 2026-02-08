import { execSync } from 'node:child_process';
import { mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const pkgRoot = path.resolve(__dirname, '..');

const OPENAPI_URL = process.env.OPENAPI_URL ?? 'http://localhost:3001/api-json';

mkdirSync(path.join(pkgRoot, 'src', 'gen'), { recursive: true });

execSync(`pnpm exec openapi-ts -i ${OPENAPI_URL} -o ./src/gen -c @hey-api/client-fetch`, {
  stdio: 'inherit',
  cwd: pkgRoot,
});
