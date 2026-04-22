import { appControllerHealth } from '@monorepo/api-client';
import type { HealthResponseDto } from '@monorepo/api-client';
import React, { useEffect, useState } from 'react';

export function App() {
  const [health, setHealth] = useState<HealthResponseDto | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let alive = true;

    (async () => {
      try {
        const res = await appControllerHealth();

        if (!alive) return;

        const data: unknown = res.data;

        if (
          data &&
          typeof data === 'object' &&
          'ok' in data &&
          typeof (data as Record<string, unknown>).ok === 'boolean'
        ) {
          setHealth(data as HealthResponseDto);
        } else {
          setHealth(null);
          setError('Health response has unexpected shape');
        }
      } catch (e) {
        if (!alive) return;
        setError(e instanceof Error ? e.message : String(e));
      }
    })();

    return () => {
      alive = false;
    };
  }, []);

  return (
    <div style={{ padding: 24 }}>
      <div>App is running</div>

      {error && <div style={{ color: 'crimson' }}>Error: {error}</div>}

      {health && (
        <div>
          <div>Health OK: {health.ok ? 'true' : 'false'}</div>
          <pre>{JSON.stringify(health, null, 2)}</pre>
        </div>
      )}

      {!error && !health && <div>Loading health...</div>}
    </div>
  );
}
