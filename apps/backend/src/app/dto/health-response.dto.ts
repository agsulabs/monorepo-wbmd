/**
 * apps/backend/src/app/dto/health-response.dto.ts
 *
 * DTO (Data Transfer Object) описывает форму ответа для Swagger и типизации.
 * Важно:
 * - ApiProperty даёт Swagger точную схему
 * - генератор OpenAPI увидит { ok: boolean }
 */

import { ApiProperty } from "@nestjs/swagger";

export class HealthResponseDto {
  @ApiProperty({
    example: true,
    description: "Backend is alive and responding",
  })
  ok!: boolean;
}
