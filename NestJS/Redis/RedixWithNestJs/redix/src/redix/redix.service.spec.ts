import { Test, TestingModule } from '@nestjs/testing';
import { RedixService } from './redix.service';

describe('RedixService', () => {
  let service: RedixService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RedixService],
    }).compile();

    service = module.get<RedixService>(RedixService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
