import { Injectable } from '@nestjs/common';

@Injectable()
export class SchoolService {
  getHello(): string {
    return process.cwd() + '/apps/school/src/users/entities/user.entity.ts';
  }
}
