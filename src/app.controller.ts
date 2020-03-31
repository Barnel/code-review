import { Controller, Get } from '@nestjs/common';
import { HealthCheckResponse } from './app.controller.helper';

@Controller()
export class AppController {
  @Get('/ping')
  ping(): HealthCheckResponse {
    return new HealthCheckResponse(true);
  }
}
