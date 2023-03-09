import { Test, TestingModule } from '@nestjs/testing';
import { SchoolController } from './school.controller';
import { SchoolService } from './school.service';

describe('SchoolController', () => {
  let schoolController: SchoolController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [SchoolController],
      providers: [SchoolService],
    }).compile();

    schoolController = app.get<SchoolController>(SchoolController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(schoolController.getHello()).toBe('Hello World!');
    });
  });
});
