/**
 * apps/backend/src/app.controller.ts
 *
 * Здесь мы:
 * - возвращаем HealthResponseDto
 * - явно говорим Swagger: 200 OK -> тип HealthResponseDto
 */

import { Controller, Get } from "@nestjs/common";
import { ApiOkResponse, ApiTags } from "@nestjs/swagger";
import { HealthResponseDto } from "./app/dto/health-response.dto";

@ApiTags("app")
@Controller()
export class AppController {
  @Get("health")
  @ApiOkResponse({
    description: "Health check",
    type: HealthResponseDto,
  })
  health(): HealthResponseDto {
    return { ok: true };
  }
}
