/**
 * TS2345: Argument of type 'null' is not assignable to parameter of type
 * 'boolean | (() => boolean | undefined) | undefined'.
 *
 * Почему так произошло:
 * - TypeScript сейчас выводит тип `res.data` (из SDK) НЕ как `HealthResponseDto | null`,
 *   а как `boolean | undefined` (или похожий вариант).
 * - Поэтому useState ожидает boolean/undefined и ругается на initial `null`.
 *
 * Как решаем “наверняка” и правильно:
 * - Мы НЕ пытаемся угадать тип через ReturnType.
 * - Мы напрямую берём DTO-тип, который уже точно сгенерен: `HealthResponseDto`.
 *   (Ты сам показал, что HealthResponseDto есть в types.gen.ts)
 *
 * Итог:
 * - state: HealthResponseDto | null
 * - setHealth: только объект, никакого unknown/boolean
 */

import React, { useEffect, useState } from 'react';
import { appControllerHealth } from '@monorepo/api-client';

/**
 * Импортируем ТИП DTO напрямую из api-client.
 * Он генерится из OpenAPI и у тебя уже существует (grep это подтвердил).
 *
 * Важно: это type-only импорт, он не влияет на runtime.
 */
import type { HealthResponseDto } from '@monorepo/api-client';

export function App() {
  /**
   * health:
   * - null = ещё не получили ответ
   * - HealthResponseDto = получили { ok: boolean }
   */
  const [health, setHealth] = useState<HealthResponseDto | null>(null);

  /**
   * error:
   * - null = ошибок нет
   * - string = текст ошибки
   */
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    /**
     * alive — защита от setState после размонтирования компонента.
     */
    let alive = true;

    (async () => {
      try {
        /**
         * Вызываем /health через SDK.
         */
        const res = await appControllerHealth();

        /**
         * Если компонент уже размонтирован — ничего не делаем.
         */
        if (!alive) return;

        /**
         * В идеальном мире (и по твоему OpenAPI) res.data должен быть { ok: boolean }.
         * Но типы SDK могут описывать data как optional/undefined.
         *
         * Поэтому:
         * - проверяем, что data есть
         * - проверяем, что это объект с boolean ok
         * - только тогда кладём в state (строго HealthResponseDto)
         *
         * Это даёт “наверняка” поведение и в рантайме, и в типах.
         */
        const data = res.data;

        if (
          data &&
          typeof data === 'object' &&
          'ok' in data &&
          typeof (data as any).ok === 'boolean'
        ) {
          setHealth(data as HealthResponseDto);
        } else {
          /**
           * Если вдруг data не того вида — фиксируем ошибку,
           * чтобы сразу увидеть проблему контракта/генерации.
           */
          setError('Health response has unexpected shape');
          setHealth(null);
        }

        /**
         * Полный ответ в консоль для дебага.
         */
        console.log('health response:', res);
      } catch (e) {
        if (!alive) return;

        const msg = e instanceof Error ? e.message : String(e);
        setError(msg);
        console.error('health error:', e);
      }
    })();

    return () => {
      alive = false;
    };
  }, []);

  return (
    <div style={{ padding: 24 }}>
      <div>App is running</div>

      <div style={{ marginTop: 12 }}>
        {/* Ошибка */}
        {error && <div style={{ color: 'crimson' }}>Error: {error}</div>}

        {/* Успех: health.ok типобезопасно, потому что health = HealthResponseDto */}
        {health && (
          <div>
            <div>Health OK: {health.ok ? 'true' : 'false'}</div>
            <pre>{JSON.stringify(health, null, 2)}</pre>
          </div>
        )}

        {/* Загрузка */}
        {!error && !health && <div>Loading health...</div>}
      </div>
    </div>
  );
}
