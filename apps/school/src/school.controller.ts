import { Controller, Get } from '@nestjs/common';
import { SchoolService } from './school.service';

@Controller()
export class SchoolController {
  constructor(private readonly schoolService: SchoolService) {}

  @Get()
  getHello(): string {
    return this.schoolService.getHello();
  }
}
