// apps/desktop/src/App.tsx
//
// Минимальная проверка, что desktop ходит в backend через SDK.
// Тут можно оставить как smoke-test и потом удалить/заменить на реальный UI.

import React, { useEffect, useState } from "react";
import { appControllerHealth } from "@monorepo/api-client";
import type { HealthResponseDto } from "@monorepo/api-client";

export function App() {
  // null = ещё не загрузили
  const [health, setHealth] = useState<HealthResponseDto | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let alive = true;

    (async () => {
      try {
        // Вызов /health через SDK
        const res = await appControllerHealth();

        if (!alive) return;

        // По твоим types.gen.ts здесь должен быть HealthResponseDto.
        // Но некоторые клиенты типят data как optional, поэтому — безопасная защита.
        const data = (res as any).data as HealthResponseDto | undefined;
        setHealth(data ?? null);
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

      {error && <div style={{ color: "crimson", marginTop: 12 }}>Error: {error}</div>}

      {health && (
        <div style={{ marginTop: 12 }}>
          <div>Health OK: {health.ok ? "true" : "false"}</div>
          <pre>{JSON.stringify(health, null, 2)}</pre>
        </div>
      )}

      {!error && !health && <div style={{ marginTop: 12 }}>Loading health…</div>}
    </div>
  );
}
