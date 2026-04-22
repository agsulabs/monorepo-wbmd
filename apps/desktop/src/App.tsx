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
      <div>Desktop app is running</div>

      {error && <div style={{ color: 'crimson', marginTop: 12 }}>Error: {error}</div>}

      {health && (
        <div style={{ marginTop: 12 }}>
          <div>Health OK: {health.ok ? 'true' : 'false'}</div>
          <pre>{JSON.stringify(health, null, 2)}</pre>
        </div>
      )}

      {!error && !health && <div style={{ marginTop: 12 }}>Loading health…</div>}
    </div>
  );
}
